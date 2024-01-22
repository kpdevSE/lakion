'use client'
import React, { useState, useEffect } from 'react';
import { Users, Award, Zap } from 'react-feather';

const Dashboard = () => {
  const [leadData, setLeadData] = useState({
    totalLeads: 0,
    newLeads: 0,
    qualifiedLeads: 0,
    unqualifiedLeads: 0,
    tasksCompleted: 0,
    tasksInProgress: 0,
    tasksAssigned: 0,
  });

  const [topDrivers, setTopDrivers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('api-endpoint');
        const data = await response.json();

        setLeadData(data.leadData);
        setTopDrivers(data.topDrivers);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); 

  return (
    <div className='flex-1  w-full'>
    <div class="flex bg-gray-800 h-full xl:pl-5 lg:pt-4 md:pt-16 sm:pt-16 max-sm:pt-20">
  
    <div class="flex-grow text-white">
      
      <main class="p-6 sm:p-10 space-y-6">
        <div class="flex flex-col space-y-6 md:space-y-0 md:flex-row justify-between">
          <div class="mr-6">
            <h1 class="text-4xl font-semibold mb-2">Dashboard</h1>
            <h2 class="text-white ml-0.5">Customer relationship management system</h2>
          </div>
          
        </div>
        <section class="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          <div class="flex items-center p-8 bg-white shadow rounded-lg">
            <div class="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-purple-600 bg-purple-100 rounded-full mr-6">
              <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <div>
              <span class="block text-2xl font-bold text-black">62</span>
              <span class="block text-gray-500">Total of leads</span>
            </div>
          </div>
          <div class="flex items-center p-8 bg-white shadow rounded-lg">
            <div class="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-green-600 bg-green-100 rounded-full mr-6">
              <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <div>
              <span class="block text-2xl font-bold text-black">10</span>
              <span class="block text-gray-500">New leads</span>
            </div>
          </div>
          <div class="flex items-center p-8 bg-white shadow rounded-lg">
            <div class="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-blue-600 bg-blue-100 rounded-full mr-6">
            <Users size={24} />
  
            </div>
            <div>
              <span class="inline-block text-2xl font-bold text-black">9</span>
              <span class="block text-gray-500">Qualified leads</span>
            </div>
          </div>
          <div class="flex items-center p-8 bg-white shadow rounded-lg">
            <div class="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-red-600 bg-red-100 rounded-full mr-6">
            <Users size={24} />
  
            </div>
            <div>
              <span class="block text-2xl font-bold text-black">5</span>
              <span class="block text-gray-500">Unqualified leads</span>
            </div>
          </div>
          <div class="flex items-center p-8 bg-white shadow rounded-lg">
            <div class="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-blue-600 bg-blue-100 rounded-full mr-6">
            <Award size={24} />
  
            </div>
            <div>
              <span class="block text-2xl font-bold text-black">20</span>
              <span class="block text-gray-500">Number of tasks completed</span>
            </div>
          </div>
          <div class="flex items-center p-8 bg-white shadow rounded-lg">
            <div class="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-blue-600 bg-blue-100 rounded-full mr-6">
            <Zap size={24} />
  
            </div>
            <div>
              <span class="block text-2xl font-bold text-black">5</span>
              <span class="block text-gray-500">Tasks in progress</span>
            </div>
          </div>
          <div class="flex items-center p-8 bg-white shadow rounded-lg">
            <div class="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-blue-600 bg-blue-100 rounded-full mr-6">
  
            </div>
            <div>
              <span class="block text-2xl font-bold text-black">5</span>
              <span class="block text-gray-500">Number of tasks assigned to drivers</span>
            </div>
          </div>
        </section>
        <section class="grid md:grid-cols-2 xl:grid-cols-4 xl:grid-rows-3 xl:grid-flow-col gap-6">
          <div class="flex flex-col md:col-span-2 md:row-span-2 bg-white shadow rounded-lg">  
            <div class="px-6 py-5 font-semibold border-b border-gray-100">The number of applied and left students per month</div>
            <div class="p-4 flex-grow">
              <div class="flex items-center justify-center h-full px-4 py-16 text-gray-400 text-3xl font-semibold bg-gray-100 border-2 border-gray-200 border-dashed rounded-md">Chart</div>
            </div>
          </div>
          <div class="flex items-center p-8 bg-white shadow rounded-lg">
            <div class="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-yellow-600 bg-yellow-100 rounded-full mr-6">
              <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6">
                <path fill="#fff" d="M12 14l9-5-9-5-9 5 9 5z" />
                <path fill="#fff" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
              </svg>
            </div>
            <div>
              <span class="block text-2xl font-bold text-black">0</span>
              <span class="block text-gray-500">Accidents</span>
            </div>
          </div>
          <div class="flex items-center p-8 bg-white shadow rounded-lg">
            <div class="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-teal-600 bg-teal-100 rounded-full mr-6">
              <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <span class="block text-2xl font-bold text-black">139</span>
              <span class="block text-gray-500">Hours</span>
            </div>
          </div>
          <div class="row-span-3 bg-white shadow rounded-lg">
            <div class="flex items-center justify-between px-6 py-5 font-semibold border-b border-gray-100">
              <span className='text-black'>Top drivers</span>
              <button type="button" class="inline-flex justify-center rounded-md px-1 -mr-1 bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-600" id="options-menu" aria-haspopup="true" aria-expanded="true">
                Descending
                <svg class="-mr-1 ml-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
              </button>
  
            </div>
            <div class="overflow-y-auto" style={{ maxHeight: '24rem' }}>
              <ul class="p-6 space-y-6">
                <li class="flex items-center">
                  <div class="h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden">
                    <img src="https://randomuser.me/api/portraits/women/82.jpg" alt="Annette Watson profile picture"/>
                  </div>
                  <span class="text-gray-600">Annette Watson</span>
                  <span class="ml-auto font-semibold">9.3</span>
                </li>
                <li class="flex items-center">
                  <div class="h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden">
                    <img src="https://randomuser.me/api/portraits/men/81.jpg" alt="Calvin Steward profile picture"/>
                  </div>
                  <span class="text-gray-600">Calvin Steward</span>
                  <span class="ml-auto font-semibold">8.9</span>
                </li>
                <li class="flex items-center">
                  <div class="h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden">
                    <img src="https://randomuser.me/api/portraits/men/80.jpg" alt="Ralph Richards profile picture"/>
                  </div>
                  <span class="text-gray-600">Ralph Richards</span>
                  <span class="ml-auto font-semibold">8.7</span>
                </li>
                <li class="flex items-center">
                  <div class="h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden">
                    <img src="https://randomuser.me/api/portraits/men/79.jpg" alt="Bernard Murphy profile picture"/>
                  </div>
                  <span class="text-gray-600">Bernard Murphy</span>
                  <span class="ml-auto font-semibold">8.2</span>
                </li>
                <li class="flex items-center">
                  <div class="h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden">
                    <img src="https://randomuser.me/api/portraits/women/78.jpg" alt="Arlene Robertson profile picture"/>
                  </div>
                  <span class="text-gray-600">Arlene Robertson</span>
                  <span class="ml-auto font-semibold">8.2</span>
                </li>
                <li class="flex items-center">
                  <div class="h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden">
                    <img src="https://randomuser.me/api/portraits/women/77.jpg" alt="Jane Lane profile picture"/>
                  </div>
                  <span class="text-gray-600">Jane Lane</span>
                  <span class="ml-auto font-semibold">8.1</span>
                </li>
                <li class="flex items-center">
                  <div class="h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden">
                    <img src="https://randomuser.me/api/portraits/men/76.jpg" alt="Pat Mckinney profile picture"/>
                  </div>
                  <span class="text-gray-600">Pat Mckinney</span>
                  <span class="ml-auto font-semibold">7.9</span>
                </li>
                <li class="flex items-center">
                  <div class="h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden">
                    <img src="https://randomuser.me/api/portraits/men/75.jpg" alt="Norman Walters profile picture"/>
                  </div>
                  <span class="text-gray-600">Norman Walters</span>
                  <span class="ml-auto font-semibold">7.7</span>
                </li>
              </ul>
            </div>
          </div>
          <div class="flex flex-col row-span-3 bg-white shadow rounded-lg">
            <div class="px-6 py-5 font-semibold border-b border-gray-10 text-black">Recent activity</div>
            <div class="p-4 flex-grow">
            <div class="flex items-center justify-center h-full px-4 py-16 text-gray-400 text-3xl font-semibold bg-gray-100 border-2 border-gray-200 border-dashed rounded-md" style={{ border: '2px dashed gray', backgroundColor: 'gray', color: 'gray', fontSize: '3xl' }}>Chart</div>
            </div>
          </div>
        </section>
        <section class="text-right font-semibold text-gray-500">
          <a href="#" class="text-purple-600 hover:underline">Developed </a>by Lakion.
        </section>
      </main>
    </div>
  </div>
  </div>
  );
};

export default Dashboard;
