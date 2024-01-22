'use client'
import React, { useState, useEffect } from 'react';

const Mytasks = () => {
  const [taskStatus, setTaskStatus] = useState('in_progress');
  const [comments, setComments] = useState('');
  const [taskDetails, setTaskDetails] = useState({
    leadName: '',
    taskDescription: '',
    scheduledDateTime: '',
  });

  useEffect(() => {
  
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/getall-mytask');
        const data = await response.json();

        // Update state with fetched data
        setTaskDetails(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData(); 
  }, []); 

  const handleStatusChange = (e) => {
    setTaskStatus(e.target.value);
  };

  const handleCommentsChange = (e) => {
    setComments(e.target.value);
  };

  const handleSubmit = () => {
    console.log('Task Status:', taskStatus);
    console.log('Comments:', comments);
  };

  return (
    <div className='lg:p-20 md:p-16 max-sm:pt-20'>
      <div className="p-6 bg-gray-800 text-white shadow-lg rounded-lg">
        <h1 className="text-2xl font-semibold mb-4">Driver Task Status</h1>

        <div className="mb-4">
          <h2 className="text-lg font-semibold">Task Information</h2>
          <p>Lead's Name: {taskDetails.leadName}</p>
          <p>Task Details: {taskDetails.taskDescription}</p>
          <p>Scheduled Date and Time: {taskDetails.scheduledDateTime}</p>
        </div>

        <div className="mb-4">
          <h2 className="text-lg font-semibold">Task Status Selection</h2>
          <div className="mt-2">
            <label htmlFor="taskStatus">Select Task Status:</label>
            <select
              id="taskStatus"
              value={taskStatus}
              onChange={handleStatusChange}
              className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-500 bg-gray-700 text-white"
            >
              <option value="in_progress">In Progress</option>
              <option value="completed">Completed</option>
              <option value="cancelled">Cancelled</option>
            </select>
          </div>
        </div>

        <div className="mb-4">
          <h2 className="text-lg font-semibold">Comments and Notes</h2>
          <textarea
            value={comments}
            onChange={handleCommentsChange}
            className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-500 bg-gray-700 text-white"
            rows="4"
            placeholder="Add comments or notes about the task..."
          ></textarea>
        </div>

        <div className="mt-4">
          <button
            onClick={handleSubmit}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:ring focus:ring-blue-500"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Mytasks;
