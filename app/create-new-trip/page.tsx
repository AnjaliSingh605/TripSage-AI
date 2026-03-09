import ChatBox from "./_components/ChatBox"
import Itinerary from './_components/Itinerary'
import { theme } from '@/app/theme'

const CreateNewTrip = () => {
  return (
    <div
      className="grid grid-cols-1 xl:grid-cols-[420px_1fr] gap-5 px-0 py-6 min-h-screen"
      style={{
        backgroundColor: theme.bgMain,
        color: theme.textPrimary,
      }}
    >

      {/* Chat Panel */}
      <div
        className="px-4 xl:px-6"
        style={{
          backgroundColor: theme.bgPanel,
          borderRight: `1px solid ${theme.border}`,
        }}
      >
        <ChatBox />
      </div>

      {/* Itinerary Panel */}
      <div className="px-4 xl:px-6">
        <Itinerary />
      </div>

    </div>
  )
}

export default CreateNewTrip