import ChatBox from "./_components/ChatBox"
import Itinerary from './_components/Itinerary'
import { theme } from '@/app/theme'

const CreateNewTrip = () => {
  return (
    <div className = 'grid grid-cols-1 md:grid-cols-3 gap-5 p-10'
    style={{ 
          backgroundColor: theme.bgMain, 
          color: theme.textPrimary,
        }}>
      <div style={{ 
              backgroundColor: theme.bgPanel, 
              borderRight: `1px solid ${theme.border}`,
            }}>
        <ChatBox/>
      </div>
      <div className='col-span-2'>
        <Itinerary />
      </div>
    </div>
  )
}

export default CreateNewTrip
