import { suggestions } from '@/app/_component/Hero'

const EmptyBoxState = ({onSelectOption}:any) => {
  return (
    <div className='mt-7'>
      <h2 className='font-bold text-3xl text-center'>Start Planning new <strong className='text-[#444ce7]'>trip</strong> using AI</h2>
      <p className='text-center text-gray-400 mt-2'>Discover personalized travel itineraries tailored to your preferences. Let our smart assistant take care of the planning, so you can focus on enjoying every moment of your journey!</p>
      
        <div className='flex flex-col gap-2 w-fit mt-7'>
              {suggestions.map((suggestion, index)=>(
                  <div key={index}
                  onClick={()=>onSelectOption(suggestion.title)}
                   className='flex items-center gap-2 
                  border rounded-xl px-3 py-1 cursor-pointer hover:border-[#444ce7] hover:text-[#444ce7] '>
                      {suggestion.icon}
                      <h2 className='text-lg'>{suggestion.title}</h2>
                  </div>
              ))}
        </div>

    </div>
  )
}

export default EmptyBoxState
