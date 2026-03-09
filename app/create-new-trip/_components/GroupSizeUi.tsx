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

const GroupSizeUi = ({ onSelectedOption }: any) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-2">
      {SelectTravelesList.map((item, index) => (
        <div
          key={index}
          className="p-3 border rounded-2xl bg-white hover:border-[#444ce7] cursor-pointer transition-all duration-200 hover:scale-[1.02] text-center"
          onClick={() => onSelectedOption(item.title + ":" + item.people)}
        >
          <div className="text-3xl mb-2">{item.icon}</div>

          <h2 className="text-sm md:text-base font-semibold">
            {item.title}
          </h2>

          <p className="text-xs md:text-sm text-gray-500 leading-tight">
            {item.desc}
          </p>
        </div>
      ))}
    </div>
  );
};

export default GroupSizeUi;