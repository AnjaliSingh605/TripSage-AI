import { mutation } from "./_generated/server";
import { v } from "convex/values";
import { query } from "./_generated/server";

export const CreateTripDetail = mutation({
  args: {
    tripId: v.string(),
    uid: v.id('userTable'),      
    tripDetail: v.any(),
  },

  handler: async (ctx, args) => {
    return await ctx.db.insert('TripDetailTable', {
      tripId: args.tripId,
      uid: args.uid,          
      tripDetail: args.tripDetail,
    });
  },
});


export const GetUserTrips=query({
  args:{
    uid:v.id('userTable')
  },
  handler:async(ctx, args)=>{
    const result = await ctx.db.query('TripDetailTable')
    .filter(q => q.eq(q.field('uid'), args.uid))
    .order('desc')
    .collect();

    return result;
  }
})

export const GetTripById=query({
  args:{
    uid:v.id('userTable'),
    tripid:v.string()
  },
  handler:async(ctx, args)=>{
    const result = await ctx.db.query('TripDetailTable')
    .filter(q => q.and( 
      q.eq(q.field('uid'), args.uid),
      q.eq(q.field('tripId'),args?.tripid)
    ))
    .collect();

    return result[0];
  }
})