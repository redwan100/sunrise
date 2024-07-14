import React, { useState } from 'react';
import { BiPlus } from 'react-icons/bi';
import { HiBookmark } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

const sidebarItems = [
  {
    id: uuidv4(),
    title: 'News',
    path: 'dashboard',
    icon: <HiBookmark />,
    children: [
      {
        id: uuidv4(),
        title: 'Create',
        path: 'create-news',
        icon: <BiPlus />
      },
      {
        id: uuidv4(),
        title: 'All News',
        path: 'all-news',
        icon: <HiBookmark />
      }
    ]
  },
  {
    id: uuidv4(),
    title: 'Program',
    path: 'program',
    icon: <HiBookmark />,
    children: [
      {
        id: uuidv4(),
        title: 'Create',
        path: 'create-program',
        icon: <HiBookmark />
      },
      {
        id: uuidv4(),
        title: 'All Program',
        path: 'all-program',
        icon: <HiBookmark />
      }
    ]
  },
  {
    id: uuidv4(),
    title: 'Recent Event',
    path: 'recent-event',
    icon: <HiBookmark />,
    children: [
      {
        id: uuidv4(),
        title: 'Create',
        path: 'create-recent-event',
        icon: <HiBookmark />
      },
      {
        id: uuidv4(),
        title: 'All Event',
        path: 'all-recent-event',
        icon: <HiBookmark />
      }
    ]
  },
  {
    id: uuidv4(),
    title: 'Home Slider',
    path: 'home-slider',
    icon: <HiBookmark />,
    children: [
      {
        id: uuidv4(),
        title: 'Create',
        path: 'create-homeslider',
        icon: <HiBookmark />
      },
      {
        id: uuidv4(),
        title: 'All Slider',
        path: 'all-homeslider',
        icon: <HiBookmark />
      }
    ]
  },
  {
    id: uuidv4(),
    title: 'Help People',
    path: 'poor-people',
    icon: <HiBookmark />,
    children: [
      {
        id: uuidv4(),
        title: 'Create',
        path: 'create-poor-people',
        icon: <HiBookmark />
      },
      {
        id: uuidv4(),
        title: 'All People',
        path: 'all-poor-people',
        icon: <HiBookmark />
      }
    ]
  },
  {
    id: uuidv4(),
    title: 'Login',
    path: '/dasboard/contact',
    icon: <HiBookmark />
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
      <div key={item.id} className="mb-2">
        {item.children ? (
          <button
            onClick={() => toggleItem(item.id)}
            className="flex items-center text-gray-600 hover:text-gray-800 transition duration-300 focus:outline-none">
            {item.icon}
            <span className="ml-2">{item.title}</span>
          </button>
        ) : (
          <Link
            to={item.path}
            className="flex items-center text-gray-600 hover:text-gray-800 transition duration-300">
            {item.icon}
            <span className="ml-2">{item.title}</span>
          </Link>
        )}
        {item.children && openItems.includes(item.id) && (
          <div className="ml-4">
            {renderItems(item.children)} {/* Recursive call */}
          </div>
        )}
      </div>
    ));
  };
  return <div>{renderItems(sidebarItems)}</div>;
};

export default Sidebar;
