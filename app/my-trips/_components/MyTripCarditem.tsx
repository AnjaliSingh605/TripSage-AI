import { Trip } from '../page';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowBigRightIcon } from 'lucide-react';

type Props = {
    trip : Trip
}

const MyTripCarditem = ({trip}: Props) => { 
  return (
     <Link  href={'/view-trip/'+trip?.tripId} className='p-3 shadow rounded-2xl'>
                <Image src='/final-trip.jpeg' alt={trip.tripId} width={400} height={400}
                className='rounded-xl object-cover w-full h-[200px]'/>
                <h2 className='flex gap-2 font-semibold text-xl'>{trip?.tripDetail?.source} <ArrowBigRightIcon/> {trip?.tripDetail?.destination}</h2>
                <h2 className='mt-2 text-gray-500' style={{ color: '#94a3b8'}}>{trip?.tripDetail?.destination} Trip with {trip?.tripDetail.budget} Budget</h2>
      </Link>
  )
}

export default MyTripCarditem
