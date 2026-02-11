
export const SelectTravelesList = [
  {
    id: 1,
    title: 'Just Me',
    desc: 'A sole travels in exploration',
    icon: '✈️',
    people: '1'
  },
  {
    id: 2,
    title: 'A Couple',
    desc: 'Two travels in tandem',
    icon: '🥂',
    people: '2 People'
  },
  {
    id: 3,
    title: 'Family',
    desc: 'A group of fun loving adv',
    icon: '🏡',
    people: '3 to 5 People'
  },
  {
    id: 4,
    title: 'Friends',
    desc: 'A bunch of thrill-seekes',
    icon: '👯',
    people: '5 to 10 People'
  }
];


const GroupSizeUi = ({onSelectedOption}:any) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 items-center mt-1">
      {SelectTravelesList.map((item, index)=>(
        <div key={index} className='p-3 border rounded-2xl bg-white 
        hover:border-[#444ce7] cursor-pointer'
        onClick={()=>onSelectedOption(item.title+":"+item.people)}>
            <div className={`text-3xl p-3 rounded-full `}>{item.icon}</div>
            <h2 className="text-lg font-semibold mt-2">{item.title}</h2>
            <p className="text-sm text-gray-500">{item.desc}</p>
        </div>
      ))}
    </div>
  )
}

export default GroupSizeUi
