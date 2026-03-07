"use client"
import Image from 'next/image'
import Link from 'next/link'
import { SignInButton, useUser } from "@clerk/nextjs";
import { Button } from "@/components/ui/button"
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const menuOption = [
  { name: "Home", path: '/' },
  { name: "Features", path: "#features" },
  { name: "Destinations", path: "/destinations" }
]

const Header = () => {
  const { user } = useUser();
  const path = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const ActionButton = () => {
    if (!user) return (
      <SignInButton mode='modal'>
        <Button className="bg-[#444ce7] hover:bg-[#3730d6] text-white w-full md:w-auto">
          Get Started
        </Button>
      </SignInButton>
    );
    if (path === '/create-new-trip') return (
      <Link href="/my-trips" className="w-full md:w-auto">
        <Button className="bg-[#444ce7] hover:bg-[#3730d6] text-white w-full md:w-auto">
          My Trips
        </Button>
      </Link>
    );
    return (
      <Link href="/create-new-trip" className="w-full md:w-auto">
        <Button className="bg-[#444ce7] hover:bg-[#3730d6] text-white w-full md:w-auto">
          Create new Trip
        </Button>
      </Link>
    );
  };

  return (
    <header className='w-full bg-white text-black'>
      {/* Main bar — full width, no horizontal overflow */}
      <div className='flex justify-between items-center px-4 py-3 w-full'>

        {/* Logo */}
        <div className='flex gap-2 items-center'>
          <Image src={'/logo.svg'} alt='logo' width={30} height={30} />
          <h2 className='font-bold text-2xl'>TripSage AI</h2>
        </div>

        {/* Desktop Menu */}
        <nav className='hidden md:flex gap-8 items-center'>
          {menuOption.map((menu, index) =>
            menu.path.startsWith("#") ? (
              <a key={index} href={menu.path}
                className="text-lg hover:scale-105 transition-all hover:text-[#444ce7]">
                {menu.name}
              </a>
            ) : (
              <Link key={index} href={menu.path}
                className="text-lg hover:scale-105 transition-all hover:text-[#444ce7]">
                {menu.name}
              </Link>
            )
          )}
        </nav>

        {/* Desktop CTA */}
        <div className='hidden md:block'>
          <ActionButton />
        </div>

        {/* Mobile Hamburger */}
        <button
          className='md:hidden p-2'
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Dropdown — full width */}
      {mobileOpen && (
        <div className='md:hidden flex flex-col w-full bg-white border-t border-gray-100 px-4 pb-4 gap-3'>
          {menuOption.map((menu, index) =>
            menu.path.startsWith("#") ? (
              <a key={index} href={menu.path}
                onClick={() => setMobileOpen(false)}
                className="text-lg py-2 hover:text-[#444ce7] transition-all border-b border-gray-50">
                {menu.name}
              </a>
            ) : (
              <Link key={index} href={menu.path}
                onClick={() => setMobileOpen(false)}
                className="text-lg py-2 hover:text-[#444ce7] transition-all border-b border-gray-50">
                {menu.name}
              </Link>
            )
          )}
          <div className="pt-2">
            <ActionButton />
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
