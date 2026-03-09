"use client"

import { useState } from "react"

const TripDurationUi = ({ onSelectedOption }: any) => {

  const [days, setDays] = useState(2)

  return (
    <div className="mt-2 flex justify-center">
      <div className="bg-white p-6 rounded-2xl shadow-md w-full max-w-md text-center">

        <h2 className="text-lg font-semibold mb-4">
          How many days are you planning for this trip?
        </h2>

        {/* Slider */}
        <input
          type="range"
          min={1}
          max={15}
          value={days}
          onChange={(e) => setDays(Number(e.target.value))}
          className="w-full accent-[#444ce7] cursor-pointer"
        />

        {/* Selected Days */}
        <div className="text-2xl font-bold mt-3">
          {days} days
        </div>

        {/* Confirm Button */}
        <button
          onClick={() => onSelectedOption(days + " days")}
          className="mt-4 bg-[#444ce7] hover:bg-[#3730d6] text-white px-6 py-2 rounded-lg"
        >
          Confirm
        </button>

      </div>
    </div>
  )
}

export default TripDurationUi