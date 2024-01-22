'use client'

import { useState } from 'react';
import Link from 'next/link';

const Submenu = ({ submenus }) => (
  <div className="hidden group-hover:block absolute z-10 mt-2 space-y-2 p-2 bg-gray-800 rounded shadow-lg">
    {submenus.map((submenu, subIndex) => (
      <Link key={subIndex} href={submenu.route}>
        <div className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 rounded cursor-pointer">
          {submenu.label}
        </div>
      </Link>
    ))}
  </div>
);

const NavbarLink = ({ item }) => (
  <div className="group inline-block text-left relative">
    <Link href={item.route}>
      <div className="text-gray-300 hover:text-white">{item.label}</div>
    </Link>
    {item.submenus && <Submenu submenus={item.submenus} />}
  </div>
);

const MobileMenu = ({ items, isOpen, toggleMenu }) => (
  <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
    <div className="flex flex-col items-center space-y-4 mt-4">
      {items.map((item, index) => (
        <NavbarLink key={index} item={item} />
      ))}
    </div>
  </div>
);

const SimpleNavWithSubmenus = ({ items }) => (
  <div className="hidden md:flex space-x-4">
    {items.map((item, index) => (
      <NavbarLink key={index} item={item} />
    ))}
  </div>
);

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const links = [
    { route: '/dashboard', label: 'Dashboard' },
    {
      route: '/services',
      label: 'Lead',
      submenus: [
        { route: '/addlead', label: 'Add Lead' },
        { route: '/addlead/managelead', label: 'Manage Lead' },
      ],
    },
    {
      route: '/services',
      label: 'Tasks',
      submenus: [
        { route: '/tasks', label: 'Assign Tasks' },
        { route: '/tasks/viewassignedtasks', label: 'View Assigned tasks' },
        { route: '/tasks/mytasks', label: 'My Tasks' },
        { route: '/tasks/taskhistory', label: 'Task History' },
      ],
    },
    {
      route: '/services',
      label: 'Drivers',
      submenus: [
        { route: '/drivers', label: 'Driver List' },
        { route: '/drivers/driverpayment', label: 'Driver Payment' },
      ],
    },
    { route: '/contact', label: 'Reports' },
    { route: '/helpcenter', label: 'Help & Support' },
  ];

  return (
    <nav className="bg-gradient-to-r from-gray-800 to-black p-4 w-full fixed top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/dashboard">
          <div className="text-white text-lg font-bold cursor-pointer">CRM</div>
        </Link>
        <SimpleNavWithSubmenus items={links} />
        {/* Responsive Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white focus:outline-none"
          >
            Menu
          </button>
          <MobileMenu items={links} isOpen={isMobileMenuOpen} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
