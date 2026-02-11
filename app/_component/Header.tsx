"use client"
import Image from 'next/image'
import Link from 'next/link'
import { SignInButton, useUser } from "@clerk/nextjs";
import {Button} from "@/components/ui/button"
import { usePathname } from 'next/navigation';

const menuOption=[
    {
        name : "Home",
        path : '/'
    },
    {
        name : "Features",
        path: "#features",
    },
   {
        name: "Destinations",
        path: "/destinations",
    }
]

const Header = () => {

  const {user} = useUser(); 
  const path = usePathname();
  console.log(path);

  return (
    <div className='flex justify-between items-center p-4 w-full bg-white text-black'>
      {/* Logo */}
      <div className='flex gap-2 items-center'>
      <Image src={'/logo.svg'}  alt='logo' width={30} height={30}></Image>
      <h2 className='font-bold text-2xl'>TripSage AI</h2>
      </div>
      {/* Menu */}
      <div className='flex gap-8 items-center'>
        {menuOption.map((menu, index) =>
  menu.path.startsWith("#") ? (
    // Same-page scroll
    <a
      key={index}
      href={menu.path}
      className="text-lg hover:scale-105 transition-all hover:text-[#444ce7]"
    >
      {menu.name}
    </a>
  ) : (
    // Page navigation
    <Link
      key={index}
      href={menu.path}
      className="text-lg hover:scale-105 transition-all hover:text-[#444ce7]"
    >
      {menu.name}
    </Link>
  )
)}

      </div>
      {/* Get started button */}
     {!user ? 
      <SignInButton mode='modal'>
      <Button  className="bg-[#444ce7] hover:bg-[#3730d6] text-white">Get Started</Button>
      </SignInButton> :
     path=='/create-new-trip' ?
      <Link href="/my-trips">
       <Button
        asChild
        className="bg-[#444ce7] hover:bg-[#3730d6] text-white"
       >
        <span >My Trips</span>
      </Button>
    </Link>
      :<Link href="/create-new-trip">
       <Button
        asChild
        className="bg-[#444ce7] hover:bg-[#3730d6] text-white"
       >
        <span >Create new Trip</span>
      </Button>
    </Link>
       }
    </div>
  )
}

export default Header
