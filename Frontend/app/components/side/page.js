'use client'

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faUser, faClipboardList, faTasks, faTruck, faChartBar, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';

const Side = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="fixed top-0  left-0 z-40 w-64 lg:w-72  max-sm:w-8 h-screen bg-gradient-to-r from-gray-600 to-gray-900 text-white shadow-lg shadow-white overflow-y-auto">
     

      {/* Sidebar Content */}
      <aside
        id="sidebar-multi-level-sidebar"
        className={`fixed top-0 left-0 z-40 w-64  h-screen transition-transform ${
          isDropdownOpen ? 'translate-x-0' : '-translate-x-full'
        } sm:translate-x-0 bg-gra`}
        aria-label="Sidebar"
      >
        <div className="h-full px-4 py-6">
          {/* Sidebar Menu Items */}
          <ul className="space-y-4 font-semibold">
            <li>
              <a href="/dashboard" className="flex items-center p-3 rounded-lg hover:bg-gray-800">
                <FontAwesomeIcon icon={faTachometerAlt} className="w-5 h-5 mr-2" />
                <span>Dashboard</span>
              </a>
            </li>
            <li>
             
              <ul className={`py-2 space-y-2 ${isDropdownOpen ? 'block' : 'hidden'}`}>
                <li>
                  <a href="/lead/products" className="flex items-center p-2 pl-8 hover:bg-gray-800">
                    <FontAwesomeIcon icon={faClipboardList} className="w-4 h-4 mr-2" />
                    <span>Products</span>
                  </a>
                </li>
                <li>
                  <a href="/lead/billing" className="flex items-center p-2 pl-8 hover:bg-gray-800">
                    <FontAwesomeIcon icon={faTasks} className="w-4 h-4 mr-2" />
                    <span>Billing</span>
                  </a>
                </li>
                <li>
                  <a href="/lead/invoice" className="flex items-center p-2 pl-8 hover:bg-gray-800">
                    <FontAwesomeIcon icon={faTasks} className="w-4 h-4 mr-2" />
                    <span>Invoice</span>
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="/addlead" className="flex items-center p-3 rounded-lg hover:bg-gray-800">
                <FontAwesomeIcon icon={faUser} className="w-5 h-5 mr-2" />
                <span>Add Lead</span>
              </a>
            </li>
            <li>
              <a href="/addlead/managelead" className="flex items-center p-3 rounded-lg hover:bg-gray-800">
                <FontAwesomeIcon icon={faTasks} className="w-5 h-5 mr-2" />
                <span>Manage Lead</span>
              </a>
            </li>
            <li>
              <a href="/tasks" className="flex items-center p-3 rounded-lg hover:bg-gray-800">
                <FontAwesomeIcon icon={faTasks} className="w-5 h-5 mr-2" />
                <span>Assign Tasks</span>
              </a>
            </li>
            <li>
              <a href="/tasks/viewassignedtasks" className="flex items-center p-3 rounded-lg hover:bg-gray-800">
                <FontAwesomeIcon icon={faTasks} className="w-5 h-5 mr-2" />
                <span>View Assigned Tasks</span>
              </a>
            </li>
            <li>
              <a href="/tasks/mytasks" className="flex items-center p-3 rounded-lg hover:bg-gray-800">
                <FontAwesomeIcon icon={faTasks} className="w-5 h-5 mr-2" />
                <span>My Tasks</span>
              </a>
            </li>
            <li>
              <a href="/tasks/taskhistory" className="flex items-center p-3 rounded-lg hover:bg-gray-800">
                <FontAwesomeIcon icon={faTasks} className="w-5 h-5 mr-2" />
                <span>Task History</span>
              </a>
            </li>
            <li>
              <a href="/drivers" className="flex items-center p-3 rounded-lg hover:bg-gray-800">
                <FontAwesomeIcon icon={faTruck} className="w-5 h-5 mr-2" />
                <span>Driver List</span>
              </a>
            </li>
            <li>
              <a href="/drivers/driverpayment" className="flex items-center p-3 rounded-lg hover:bg-gray-800">
                <FontAwesomeIcon icon={faTruck} className="w-5 h-5 mr-2" />
                <span>Driver Payment</span>
              </a>
            </li>
            <li>
              <a href="/reports" className="flex items-center p-3 rounded-lg hover:bg-gray-800">
                <FontAwesomeIcon icon={faChartBar} className="w-5 h-5 mr-2" />
                <span>Reports</span>
              </a>
            </li>
            <li>
              <a href="/helpcenter" className="flex items-center p-3 rounded-lg hover:bg-gray-800">
                <FontAwesomeIcon icon={faQuestionCircle} className="w-5 h-5 mr-2" />
                <span>Help & Support</span>
              </a>
            </li>
            {/* Add other menu items similarly */}
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default Side;
