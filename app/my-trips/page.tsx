"use client"
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useUserDetail } from '../provider';
import { useConvex } from 'convex/react';
import { api } from '@/convex/_generated/api';
import { TripInfo } from '../create-new-trip/_components/ChatBox';
import MyTripCarditem from './_components/MyTripCarditem';
import { theme } from '../theme';

export type Trip = {
  tripId: any,
  tripDetail: TripInfo,
  _id: string
}

const page = () => {
  const [myTrips, setMyTrips] = useState<Trip[]>([]);
  const { userDetail, setUserDetail } = useUserDetail();
  const convex = useConvex();

  useEffect(() => {
    userDetail && GetUserTrips();
  }, [userDetail]);

  const GetUserTrips = async () => {
    const result = await convex.query(api.tripDetail.GetUserTrips, {
      uid: userDetail?._id
    });
    setMyTrips(result);
    console.log(result);
  }

  return (
    // Desktop padding kept as original (px-10 md:px-24 lg:px-48)
    // Only change: px-4 on mobile instead of px-10 to prevent overflow
    <div
      className='px-4 md:px-24 lg:px-48 p-10'
      style={{
        backgroundColor: theme.bgMain,
        color: theme.textPrimary
      }}
    >
      <h2 className='font-bold text-3xl'>My Trips</h2>

      {myTrips?.length == 0 &&
        <div className='p-10 border rounded-2xl flex flex-col items-center justify-center gap-5 mt-6'>
          <h2>You don't have any trip plan created!</h2>
          <Link href={'/create-new-trip'}>
            <Button className='bg-[#444ce7] text-white'>Create New Trip</Button>
          </Link>
        </div>
      }

      {/* Desktop: 3 cols (original). Tablet: 2 cols. Mobile: 1 col */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-6'>
        {myTrips?.map((trip, index) => (
          <MyTripCarditem trip={trip} key={index} />
        ))}
      </div>
    </div>
  )
}

export default page
