"use client"
import { useState, useEffect, useRef } from 'react'
import { Send, Loader } from 'lucide-react'
import { Textarea } from '@/components/ui/textarea'
import axios from 'axios'
import EmptyBoxState from './EmptyBoxState'
import GroupSizeUi from './GroupSizeUi'
import BudgetUi from './BudgetUi'
import FinalUi from './FinalUi'
import { useMutation } from 'convex/react'
import { useTripDetail, useUserDetail } from '@/app/provider'
import { api } from "@/convex/_generated/api";
import { v4 as uuidv4 } from 'uuid';


type Message = {
  role: string,
  content: string,
  ui?: string,
}

export type TripInfo = {
  source: string,
  budget: string,
  destination: string,
  duration: string,
  group_size: string,
  hotels: Hotel[],
  itinerary: Itinerary[]
}

export type Hotel = {
  hotel_name: string;
  hotel_address: string;
  price_per_night: string;
  hotel_image_url: string;
  geo_coordinates: {
    latitude: number;
    longitude: number;
  };
  rating: number;
  description: string;
};

export type Activity = {
  place_name: string;
  place_details: string;
  place_image_url: string;
  geo_coordinates: {
    latitude: number;
    longitude: number;
  };
  place_address: string;
  ticket_pricing: string;
  time_travel_each_location: string;
  best_time_to_visit: string;
};

type Itinerary = {
  day: number;
  day_plan: string;
  best_time_to_visit_day: string;
  activities: Activity[];
}

const ChatBox = () => {

  const [messages, setMessages] = useState<Message[]>([]);
  const [userInput, setUserInput] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [isfinal, setIsfinal] = useState(false);
  const [tripDetail, setTripDetail] = useState<TripInfo>();
  const SaveTripDetail = useMutation(api.tripDetail.CreateTripDetail);
  const { userDetail, setUserDetail } = useUserDetail();
  //@ts-ignore
  const { tripDetailInfo, setTripDetailInfo } = useTripDetail();
  const messageContainerRef = useRef<HTMLDivElement>(null);


  const onSend = async () => {
    if (!userInput?.trim()) return;

    setLoading(true);
    setUserInput('');

    const newMsg: Message = {
      role: 'user',
      content: userInput
    }

    setMessages((prev: Message[]) => [...prev, newMsg]);

    const result = await axios.post('/api/aimodel', {
      messages: [...messages, newMsg],
      isfinal: isfinal
    });

    console.log("Trip", result.data);

    !isfinal && setMessages((prev: Message[]) => [...prev, {
      role: 'assistant',
      content: result?.data?.resp,
      ui: result?.data?.ui
    }]);

    if (isfinal) {
      if (!userDetail || !userDetail._id) {
        console.log("User not ready yet, skipping save");
        return;
      }

      setTripDetail(result?.data?.trip_plan);
      setTripDetailInfo(result?.data?.trip_plan);
      const tripId = uuidv4();

      await SaveTripDetail({
        tripDetail: result.data.trip_plan,
        tripId,
        uid: userDetail._id, // now GUARANTEED
      });
    }


    setLoading(false);
  }

  const RenderGenerativeUi = (ui: string) => {
    if (ui == 'budget') {
      // Buget Ui Compomente;
      return <BudgetUi onSelectedOption={(v: string) => { setUserInput(v); onSend() }} />

    } else if (ui == 'groupSize') {
      // Group Size UI component
      return <GroupSizeUi onSelectedOption={(v: string) => { setUserInput(v); onSend() }} />
    } // else if(ui == 'tripDuration'){
    //   return <SelectDays onSelectedOption={(v:string)=>{setUserInput(v); onSend()}}/>
    // }
    else if (ui == 'final') {
      return <FinalUi viewTrip={(v: string) => { setUserInput(v); onSend() }}
        disable={!tripDetail}
      />
    }
    return null;
  }

  useEffect(() => {
    const lastMsg = messages[messages.length - 1];
    if (lastMsg?.ui == 'final') {
      setIsfinal(true);
      setUserInput("Ok, Great!")
    }
  }, [messages])


  useEffect(() => {
    if (isfinal && userInput) {
      onSend();
    }
  }, [isfinal]);

  useEffect(() => {
  if (messageContainerRef.current) {
    messageContainerRef.current.scrollTop =
      messageContainerRef.current.scrollHeight;
  }
}, [messages, loading]);



  return (
    <div className='h-[85vh] flex flex-col border shadow rounded-2xl p-5' >
      {messages?.length == 0 &&
        <EmptyBoxState onSelectOption={(v: string) => { setUserInput(v); onSend() }} />
      }
      {/* Display msgs */}
      <section className='flex-1 overflow-y-auto p-4' ref={messageContainerRef}>
        {messages.map((msg: Message, index) => (
          msg.role == 'user' ?
            <div className='flex justify-end mt-2' key={index}>
              <div className='max-w-lg bg-[#444ce7] text-white px-4 py-2 rounded-lg'>
                {msg.content}
              </div>
            </div> :
            <div className='flex justify-start mt-2' key={index} >
              <div className='max-w-lg bg-gray-100 text-black px-4 py-2 rounded-lg'>
                {msg.content}
                {RenderGenerativeUi(msg.ui ?? '')}
              </div>
            </div>
        ))}

        {loading && <div className='flex justify-start mt-2'>
          <div className='max-w-lg bg-gray-100 text-black px-4 py-2 rounded-lg'>
            <Loader className='animate-spin' />
          </div>
        </div>
        }
      </section>
      {/* User Input */}
     <section>
    <div className="relative bg-slate-900 border rounded-2xl shadow-sm p-4">

    <Textarea
      placeholder="Start typing here..."
      className="w-full h-28 resize-none bg-transparent text-sm text-white
                 outline-none placeholder:text-gray-400"
      onChange={(e) => setUserInput(e.target.value)}
      value={userInput}
    />

    <button
      className="absolute bottom-4 right-4 flex items-center justify-center
                 h-10 w-10 rounded-lg bg-[#444ce7] hover:bg-[#3730d6] transition"
      onClick={onSend}
    >
      <Send className="h-4 w-4 text-white" />
    </button>

  </div>
</section>

    </div>
  )
}

export default ChatBox
