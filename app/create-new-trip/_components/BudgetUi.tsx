export const SelectBudgetOptions = [
  {
    id: 1,
    title: 'Cheap',
    desc: 'Stay conscious of costs',
    icon: '💰',
    color: 'bg-green-100 text-green-600'
  },
  {
    id: 2,
    title: 'Moderate',
    desc: 'Keep cost on the average side',
    icon: '🪙',
    color: 'bg-yellow-100 text-yellow-600'
  },
  {
    id: 3,
    title: 'Luxury',
    desc: "Don't worry about cost",
    icon: '💎',
    color: 'bg-purple-100 text-purple-600'
  }
];

const BudgetUi = ({ onSelectedOption }: any) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-2">
      {SelectBudgetOptions.map((item, index) => (
        <div
          key={index}
          className="p-3 border rounded-2xl bg-white hover:border-[#444ce7] cursor-pointer 
          transition-all duration-200 hover:scale-[1.02] flex flex-col items-center text-center"
          onClick={() => onSelectedOption(item.title + ":" + item.desc)}
        >
          <div className={`text-3xl p-3 rounded-full mb-2 ${item.color}`}>
            {item.icon}
          </div>

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

export default BudgetUi;