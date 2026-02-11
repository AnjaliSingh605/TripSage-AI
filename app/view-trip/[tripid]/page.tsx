"use client"
import { useParams } from 'next/navigation';
import { useEffect, useState} from 'react';
import { useUserDetail } from '@/app/provider';
import { useConvex } from 'convex/react';
import { api } from '@/convex/_generated/api';
import { Trip } from '@/app/my-trips/page';
import Itinerary from '@/app/create-new-trip/_components/Itinerary';
import { useTripDetail } from '@/app/provider';

const ViewTrip = () => {

    const {tripid} = useParams();
    const {userDetail, setUserDetail} = useUserDetail();
    const convex = useConvex();

    const [tripData , setTripData] = useState<Trip>();
    //@ts-ignore
    const {tripDetailInfo , setTripDetailInfo} = useTripDetail();
    

    useEffect(()=>{
       userDetail&&GetTrip();
    }, [userDetail]);
    const GetTrip = async()=>{
       const result = await convex.query(api.tripDetail.GetTripById , {
        uid : userDetail?._id,
        tripid : tripid+''
       });
       console.log(result);
       setTripData(result);
       setTripDetailInfo(result?.tripDetail);
    }

  return (
    <div className="col-span-2">
      <Itinerary />
    </div>
  )
}

export default ViewTrip;
