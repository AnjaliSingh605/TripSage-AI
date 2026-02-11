import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ExternalLink, Clock, Ticket } from 'lucide-react'
import { Activity } from '../create-new-trip/_components/ChatBox'

type Props = {
    activity:Activity
}
const PlaceCardItem = ({activity}:Props) => {
    return (
        <div >
            <Image src='/img.jpeg' width={300} height={150} alt={activity.place_name}
                className='object-cover rounded-xl' />
            <h2 className='font-semibold text-lg'>{activity?.place_name}</h2>
            <p className='text-gray-500 line-clamp-2'>{activity?.place_details}</p>
            <h2 className='flex gap-2 text-blue-500 line-clamp-1'> <Ticket /> {activity?.ticket_pricing}</h2>
            <p className='flex text-orange-400 gap-2 line-clamp-1'> <Clock />{activity?.time_travel_each_location}</p>
            <Link
                href={"https://www.google.com/maps/search/?api=1&query=" + activity?.place_name}
                target="_blank"
            >
                <Button size="sm" variant="outline"  className="w-full mt-2 text-black border-black hover:bg-black hover:text-white">
                    View <ExternalLink />
                </Button>
            </Link>
        </div>
    )
}

export default PlaceCardItem
