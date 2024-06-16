import React from 'react';
import {TruckIcon, ArrowTrendingUpIcon,MagnifyingGlassIcon,HeartIcon} from "@heroicons/react/20/solid"
const WhyUsCards = () => {
  const cards = [
    { title: 'Quality', description: 'We ensure high-quality products',icon:ArrowTrendingUpIcon },
    { title: 'Easy Browsing', description: 'Search what you need easily',icon:MagnifyingGlassIcon },
    { title: 'Free shipping', description: 'Your items will be shipped with great care',icon:TruckIcon, },
    { title: 'Return Policy', description: 'Great return policy on defected products.',icon:HeartIcon, },
  ];

  return (
    <div data-theme='mytheme' className="flex flex-wrap justify-center items-center gap-4 p-4 ">
      <div className="divider divider-primary w-full"><h2 className=" w-full text-center text-2xl font-bold mb-4">Why Us?</h2></div>
      <h2 className="w-full text-center text-xl mb-5 -mt-5 ml-2">Why you should shop here?</h2>
      {cards.map((card, index) => (
        <div key={index} className="max-w-sm rounded overflow-hidden shadow-lg p-4 flex flex-col">
          <card.icon className="h-10 w-10 text-secondary mx-auto"/>
          <h3 className="font-bold text-xl mb-2 mx-auto">{card.title}</h3>
          <p>{card.description}</p>
        </div>
      ))}
    </div>
  );
};

export default WhyUsCards;