'use client';

import { Calendar } from 'lucide-react';

const NewsItem = ({ text, date, isLast }) => (
  <div className={`${!isLast ? 'border-b border-grey-100' : ''} pb-2`}>
    <p className="text-sm text-gray-800 leading-8">{text}</p>
    <div className="flex items-center text-xs text-gray-500 mt-1 w-full justify-end gap-1">
      <Calendar className="w-4 h-4 relative" strokeWidth={1} />
      {date}
    </div>
  </div>
);

const CategoryBox = ({ category, items }) => (
  <div className="flex-1 bg-white  rounded-md overflow-hidden border border-grey-100">
    <div className="bg-[#0CC0BA] text-white text-center py-6 font-semibold text-lg">{category}</div>
    <div className="p-4 space-y-4">
      {items.map((item, index) => (
        <NewsItem
          key={index}
          text={item.text}
          date={item.date}
          isLast={index === items.length - 1}
        />
      ))}
    </div>
  </div>
);

export default function ThreeHorizontalBoxComponent({ data }) {
  return (
    <div
      className={`flex flex-col lg:flex-row justify-between lg:gap-10 gap-4 px-4 lg:px-20 ${data.className}`}
    >
      {data.items.map(item => (
        <CategoryBox key={Math.random()} category={item.title} items={item.items} />
      ))}
    </div>
  );
}
