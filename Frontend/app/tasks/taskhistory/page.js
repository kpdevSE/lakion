'use client'
import React, { useState, useEffect } from 'react';

const Taskhistory = () => {
  const [tasks, setTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [filters, setFilters] = useState({
    startDate: '',
    endDate: '',
    driver: '',
    status: '',
    keyword: '',
  });

  useEffect(() => {
    // Fetch tasks from your backend or API
    const fetchData = async () => {
      try {
        const response = await fetch('BACKEND_API_ENDPOINT');
        const data = await response.json();
        setTasks(data);
        applyFilters(data);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };

    fetchData();
  }, []); 

  useEffect(() => {
    applyFilters(tasks);
  }, [filters, tasks]);

  const applyFilters = (data) => {
    const filtered = data.filter((task) => {
      const startDateCondition =
        !filters.startDate || task.scheduledDate >= filters.startDate;
      const endDateCondition =
        !filters.endDate || task.scheduledDate <= filters.endDate;
      const driverCondition =
        !filters.driver || task.driverName === filters.driver;
      const statusCondition =
        !filters.status || task.taskStatus === filters.status;
      const keywordCondition =
        !filters.keyword ||
        task.leadName.toLowerCase().includes(filters.keyword.toLowerCase()) ||
        task.driverName.toLowerCase().includes(filters.keyword.toLowerCase());

      return (
        startDateCondition &&
        endDateCondition &&
        driverCondition &&
        statusCondition &&
        keywordCondition
      );
    });

    setFilteredTasks(filtered);
  };

  return (
    <div className="min-h-screen bg-gray-900 p-6 rounded-lg shadow-lg text-white lg:p-28 md:p-20 max-sm:pt-20 sm:pt-20 w-full">
      <h1 className="text-3xl font-bold mb-4">Task History</h1>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-5">
        {/* {filter inputs) */}
      </div>
      <table className="mt-8 w-full">
        <thead>
          <tr className="bg-gray-800">
            <th className="text-left py-2 px-4">Lead Name</th>
            <th className="text-left py-2 px-4">Driver Name</th>
            <th className="text-left py-2 px-4">Task Status</th>
            <th className="text-left py-2 px-4">Scheduled Date</th>
          </tr>
        </thead>
        <tbody>
          {filteredTasks.map((task) => (
            <tr key={task.id} className="hover:bg-gray-700">
              <td className="py-2 px-4">{task.leadName}</td>
              <td className="py-2 px-4">{task.driverName}</td>
              <td className="py-2 px-4">{task.taskStatus}</td>
              <td className="py-2 px-4">{task.scheduledDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Taskhistory;
