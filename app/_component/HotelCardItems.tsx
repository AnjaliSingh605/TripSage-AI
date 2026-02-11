import Image from 'next/image'
import { Hotel } from '../create-new-trip/_components/ChatBox'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ExternalLink } from 'lucide-react'
import { Wallet, Star } from 'lucide-react'

type Props = {
    hotel: Hotel
}

const HotelCardItems = ({ hotel }: Props) => {
    return (
        <div className='flex flex-col gap-1'>
            <Image src='/img.jpeg' alt='place-image' width={300} height={150}
                className='rounded-2xl shadow object-cover mb-2' />
            <h2 className='font-semibold text-lg'>{hotel?.hotel_name}</h2>
            <h2 className='text-gray-500'>{hotel.hotel_address}</h2>
            <div className='flex justify-between items-center'>
                <p className='flex gap-2 text-green-600'><Wallet />{hotel.price_per_night}</p>
                <p className='text-yellow-500 flex gap-2'><Star /> {hotel.rating}</p>
            </div>
            <Link
                href={"https://www.google.com/maps/search/?api=1&query=" + hotel?.hotel_name}
                target="_blank"
            >
                <Button size="sm" variant="outline" className="w-full mt-2 text-black border-black hover:bg-black hover:text-white">
                    View <ExternalLink />
                </Button>
            </Link>
            {/* <p className='lime-clamp-2 text-gray-500'>{hotel?.description}</p> */}
        </div>
    )
}

export default HotelCardItems
