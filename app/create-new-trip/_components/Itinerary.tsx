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
    const { tripDetailInfo } = useTripDetail();

    const [tripData, setTripData] = useState<TripInfo | null>(null);

    useEffect(() => {
        if (tripDetailInfo) {
            setTripData(tripDetailInfo);
        }
    }, [tripDetailInfo]);

    const data = tripData
        ? [
            {
                title: "Recommended Hotels",
                content: (
                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 gap-4 w-full">
                        {tripData?.hotels.map((hotel, index) => (
                            <HotelCardItems key={index} hotel={hotel} />
                        ))}
                    </div>
                ),
            },

            ...tripData.itinerary.map((dayData) => ({
                title: `Day ${dayData.day}`,
                content: (
                    <div className="space-y-3">

                        <p className="text-sm text-gray-400">
                            Best Time: {dayData.best_time_to_visit_day}
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 gap-4 w-full">
                            {dayData.activities.map((activity, idx) => (
                                <PlaceCardItem key={idx} activity={activity} />
                            ))}
                        </div>

                    </div>
                ),
            }))
        ]
        : [];

    return (
        <div className="relative w-full h-full max-h-[85vh] overflow-y-auto overflow-x-hidden px-2">

            {tripData ? (

                <Timeline data={data} trip_data={tripData} />

            ) : (

                <div className="w-full h-full flex items-center justify-center">

                    <Image
                        src="/travel.jpg"
                        alt="no img"
                        width={900}
                        height={600}
                        className="w-full max-w-4xl h-auto object-cover rounded-3xl"
                    />

                </div>

            )}

        </div>
    );
};

export default Itinerary;