import React from 'react';
import { Link } from 'react-router';
import { FaCalendarAlt, FaPlusCircle, FaUsers } from 'react-icons/fa';

const ShortcutCards = () => {
  const cards = [
    {
      title: "Manage Events",
      link: "/events/manage",
      icon: <FaCalendarAlt className="text-3xl text-primary" />,
      bg: "bg-primary"
    },
    {
      title: "Create An Event",
      link: "/events/create",
      icon: <FaPlusCircle className="text-3xl text-secondary" />,
      bg: "bg-secondary"
    },
    {
      title: "Your Joined Events",
      link: "/events/joined",
      icon: <FaUsers className="text-3xl text-accent" />,
      bg: "bg-accent"
    }
  ];

  return (
    <div className="my-20 max-w-5xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {cards.map((card, idx) => (
        <Link
          to={card.link}
          key={idx}
          className={`${card.bg} rounded-xl shadow-lg p-6 flex flex-col items-center justify-center gap-3 hover:scale-105 transform transition duration-300`}
        >
          <div className="p-4 bg-white rounded-full">{card.icon}</div>
          <h3 className="text-white text-lg font-bold text-center">{card.title}</h3>
        </Link>
      ))}
    </div>
  );
};

export default ShortcutCards;
