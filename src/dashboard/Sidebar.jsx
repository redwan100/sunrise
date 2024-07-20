import React, { useState } from 'react';
import { BiChevronDown } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

const sidebarItems = [
  {
    id: uuidv4(),
    title: 'News',
    path: 'dashboard',
    icon: <BiChevronDown />,
    children: [
      {
        id: uuidv4(),
        title: 'Create',
        path: 'create-news'
      },
      {
        id: uuidv4(),
        title: 'All News',
        path: 'all-news'
      }
    ]
  },
  {
    id: uuidv4(),
    title: 'Program',
    path: 'program',
    icon: <BiChevronDown />,
    children: [
      {
        id: uuidv4(),
        title: 'Create',
        path: 'create-program'
      },
      {
        id: uuidv4(),
        title: 'All Program',
        path: 'all-program'
      }
    ]
  },
  {
    id: uuidv4(),
    title: 'Recent Event',
    path: 'recent-event',
    icon: <BiChevronDown />,
    children: [
      {
        id: uuidv4(),
        title: 'Create',
        path: 'create-recent-event'
      },
      {
        id: uuidv4(),
        title: 'All Event',
        path: 'all-recent-event'
      }
    ]
  },
  {
    id: uuidv4(),
    title: 'Home Slider',
    path: 'home-slider',
    icon: <BiChevronDown />,
    children: [
      {
        id: uuidv4(),
        title: 'Create',
        path: 'create-homeslider'
      },
      {
        id: uuidv4(),
        title: 'All Slider',
        path: 'all-homeslider'
      }
    ]
  },
  {
    id: uuidv4(),
    title: 'Help People',
    path: 'poor-people',
    icon: <BiChevronDown />,
    children: [
      {
        id: uuidv4(),
        title: 'Create',
        path: 'create-poor-people'
      },
      {
        id: uuidv4(),
        title: 'All People',
        path: 'all-poor-people'
      }
    ]
  },
  {
    id: uuidv4(),
    title: 'Moment',
    path: 'moment',
    icon: <BiChevronDown />,
    children: [
      {
        id: uuidv4(),
        title: 'Create',
        path: 'create-moment'
      },
      {
        id: uuidv4(),
        title: 'All Moment',
        path: 'all-moment'
      }
    ]
  }
];
const Sidebar = () => {
  const [openItems, setOpenItems] = useState([]);

  const toggleItem = (itemId) => {
    setOpenItems((prevOpenItems) =>
      prevOpenItems.includes(itemId)
        ? prevOpenItems.filter((id) => id !== itemId)
        : [...prevOpenItems, itemId]
    );
  };

  const renderItems = (items) => {
    return items.map((item) => (
      <div key={item.id} className="mb-4">
        {item.children ? (
          <button
            onClick={() => toggleItem(item.id)}
            className="flex items-center justify-between border-b w-full border-neutral-600  text-neutral-400 hover:text-neutral-300 transition-all duration-300 focus:outline-none hover:border-b-neutral-500">
            <span className="ml-2">{item.title}</span>
            <span className="text-xl">{item.icon}</span>
          </button>
        ) : (
          <Link
            to={item.path}
            className="flex items-center gap-1 text-neutral-400 hover:text-neutral-300 transition duration-300">
            <span className="ml-2">{item.title}</span>
            <span>{item.icon}</span>
          </Link>
        )}
        {item.children && openItems.includes(item.id) && (
          <div className="bg-neutral-700 rounded-md">
            {renderItems(item.children)} {/* Recursive call */}
          </div>
        )}
      </div>
    ));
  };
  return <div>{renderItems(sidebarItems)}</div>;
};

export default Sidebar;
