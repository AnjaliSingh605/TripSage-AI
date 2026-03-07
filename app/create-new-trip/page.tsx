import ChatBox from "./_components/ChatBox"
import Itinerary from './_components/Itinerary'
import { theme } from '@/app/theme'

const CreateNewTrip = () => {
  return (
    <div
      className="grid grid-cols-1 lg:grid-cols-3 gap-5 px-0 py-6 min-h-screen"
      style={{
        backgroundColor: theme.bgMain,
        color: theme.textPrimary,
      }}
    >
      {/* Chat Panel — full width on mobile/tablet, 1/3 on desktop */}
      <div
        className="px-4 lg:px-6"
        style={{
          backgroundColor: theme.bgPanel,
          borderRight: `1px solid ${theme.border}`,
        }}
      >
        <ChatBox />
      </div>

      {/* Itinerary Panel — full width on mobile/tablet, 2/3 on desktop */}
      <div className="col-span-1 lg:col-span-2 px-4 lg:px-6">
        <Itinerary />
      </div>
    </div>
  )
}

export default CreateNewTrip
