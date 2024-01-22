'use client'
import React, { useState, useEffect } from 'react';

const Drivers = () => {
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/drivers');
        const result = await response.json();
        setDrivers(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const drivers = [
    // ...driver data
  ];

  const filteredDrivers = drivers.filter((driver) =>
    driver.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-900 text-white p-9 lg:pt-16 md:pt-28 sm:pt-28 max-sm:pt-28 xl:px-20">
      <div className='text-white font-semibold text-3xl'>Driver List</div>
      <br/>  
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by name"
          className="border rounded-lg px-3 py-2 w-full bg-gray-800 text-white"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <table className="w-full whitespace-nowrap">
        <thead>
          <tr className="bg-gray-800 text-white">
            <th className="px-6 py-3 text-left text-sm font-semibold">Name</th>
            <th className="px-6 py-3 text-left text-sm font-semibold">Contact</th>
            <th className="px-6 py-3 text-left text-sm font-semibold">Availability</th>
            <th className="px-6 py-3 text-left text-sm font-semibold">Assigned Tasks</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-700">
          {filteredDrivers.map((driver) => (
            <tr key={driver.id}>
              <td className="px-6 py-4 whitespace-nowrap">{driver.name}</td>
              <td className="px-6 py-4">{driver.contact}</td>
              <td className="px-6 py-4">
                <span
                  className={`${
                    driver.availability === 'Available'
                      ? 'bg-green-200 text-green-700'
                      : 'bg-red-200 text-red-700'
                  } px-2 py-1 rounded-full text-xs`}
                >
                  {driver.availability}
                </span>
              </td>
              <td className="px-6 py-4">
                <ul>
                  {driver.tasks.map((task, index) => (
                    <li key={index} className="list-disc list-inside">
                      {task}
                    </li>
                  ))}
                </ul>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Drivers;
