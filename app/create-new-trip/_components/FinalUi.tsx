import { Globe2 } from "lucide-react"
import { Button } from "@/components/ui/button"

const FinalUi = ({viewTrip, disable} : any) => {
  return (
    <div className="flex flex-col items-center justify-center mt-6 p-6 bg-white rounded">
        <Globe2 className="text-[#444ce7] text-4xl animate-bounce"/>
        <h2 className="mt-3 text-lg front-semibold text-[#444ce7]">
         ✈️ Planning your dream trip...
        </h2>
        <p className='text-gray-500 text-sm text-center mt-1'>
            Gathering best destination, activities and travel details for you.
        </p>
        <Button disabled={disable} onClick={viewTrip} className='mt-2 w-full bg-[#444ce7]'>View Trip</Button>
        {

        }
    </div>
  )
}

export default FinalUi
