"use client"
import { Timeline } from "@/components/ui/timeline";
import HotelCardItems from '@/app/_component/HotelCardItems';
import PlaceCardItem from '@/app/_component/PlaceCardItem';
import { useTripDetail } from '@/app/provider';
import { useState, useEffect } from 'react';
import { TripInfo } from './ChatBox';
import Image from 'next/image';


const Itinerary = () => {
    //@ts-ignore
    const {tripDetailInfo , setTripDetailInfo} = useTripDetail();
    const [tripData, setTripData] = useState<TripInfo|null>(null);

    useEffect(()=>{
        tripDetailInfo&&setTripData(tripDetailInfo)
    },[tripDetailInfo])

    const data = tripData?[
        {
            title: "Recommended Hotels",
            content: (
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    {tripData?.hotels.map((hotel, index) => (
                       <HotelCardItems key={index} hotel={hotel} />
                    ))}
                </div>
            ),
        },
        ...tripData.itinerary.map((dayData) => ({
            title: `Day ${dayData.day}`,
            content: (
                <div>
                    <p>
                        Best Time: {dayData.best_time_to_visit_day}
                    </p>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                        {dayData.activities.map((activity, idx) => (
                            <PlaceCardItem key={idx} activity={activity}/>
                        ))}
                    </div>
                </div>
            ),
        }))


    ]:[];
    return (
        <div className="relative w-full h-[83vh] overflow-auto text-gray-400">
            {tripData ? <Timeline data={data} trip_data={tripData} /> 
            : 
            <Image src='/travel.jpg' alt='no img' width={'800'} height={'800'}
             className='w-full h-full object-cover rounded-3xl items-center left-0'/> 
            }
        </div>
    );
}


export default Itinerary
