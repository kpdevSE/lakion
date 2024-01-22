'use client'

import React, { useState, useEffect } from 'react';

const Viewassignedtasks = () => {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/get-tasks'); 
        const data = await response.json();
        setTasks(data); // Assuming the data is an array of tasks
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); 

  const startEditing = task => {
    setEditingTask({ ...task });
  };

  const cancelEditing = () => {
    setEditingTask(null);
  };

  const saveChanges = async () => {
    try {
      await fetch(`http://localhost:3000/update-task/${editingTask.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editingTask),
      });

      const updatedTasks = tasks.map(task =>
        task.id === editingTask.id ? { ...task, ...editingTask } : task
      );
      setTasks(updatedTasks);
      cancelEditing();
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };

  const startDeleting = async task => {
    try {
      // Send a request to delete the task on the backend
      await fetch(`http://localhost:3000/delete-task/${task.id}`, {
        method: 'DELETE',
      });

      // Update the local state if the request is successful
      const updatedTasks = tasks.filter(t => t.id !== task.id);
      setTasks(updatedTasks);
      cancelEditing();
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  return (
    <div className='flex-1  w-full '>
    <div className="min-h-screen bg-gray-900 text-white font-sans xl:px-20 px-10 ">
      <div className="container mx-auto lg:py-20 md:py-20 sm:py-20 max-sm:py-20">
        <h1 className="text-3xl font-bold mb-6">Assigned Tasks</h1>
        <table className="min-w-full table-fixed bg-white shadow-lg rounded-xl">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="w-1/4 py-3">Lead's Name</th>
              <th className="w-1/4 py-3">Driver's Name</th>
              <th className="w-1/4 py-3">Task Status</th>
              <th className="w-1/4 py-3">Scheduled Date and Time</th>
              <th className="w-1/4 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map(task => (
              <tr key={task.id} className="hover:bg-gray-100 transition duration-300">
                <td className="w-1/4 px-4 py-2">
                  {editingTask && editingTask.id === task.id ? (
                    <input
                      className="w-full border rounded py-1 px-2 focus:outline-none focus:border-blue-500"
                      type="text"
                      value={editingTask.leadName}
                      onChange={e => setEditingTask({ ...editingTask, leadName: e.target.value })}
                    />
                  ) : (
                    task.leadName
                  )}
                </td>
                <td className="w-1/4 px-4 py-2">
                  {editingTask && editingTask.id === task.id ? (
                    <input
                      className="w-full border rounded py-1 px-2 focus:outline-none focus:border-blue-500"
                      type="text"
                      value={editingTask.driverName}
                      onChange={e => setEditingTask({ ...editingTask, driverName: e.target.value })}
                    />
                  ) : (
                    task.driverName
                  )}
                </td>
                <td className="w-1/4 px-4 py-2">
                  {editingTask && editingTask.id === task.id ? (
                    <input
                      className="w-full border rounded py-1 px-2 focus:outline-none focus:border-blue-500"
                      type="text"
                      value={editingTask.taskStatus}
                      onChange={e => setEditingTask({ ...editingTask, taskStatus: e.target.value })}
                    />
                  ) : (
                    task.taskStatus
                  )}
                </td>
                <td className="w-1/4 px-4 py-2">
                  {editingTask && editingTask.id === task.id ? (
                    <input
                      className="w-full border rounded py-1 px-2 focus:outline-none focus:border-blue-500"
                      type="text"
                      value={editingTask.scheduledDateTime}
                      onChange={e =>
                        setEditingTask({ ...editingTask, scheduledDateTime: e.target.value })
                      }
                    />
                  ) : (
                    task.scheduledDateTime
                  )}
                </td>
                <td className="w-1/4 px-4 py-2 space-x-2">
                  {editingTask && editingTask.id === task.id ? (
                    <>
                      <button
                        className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded"
                        onClick={saveChanges}
                      >
                        Save
                      </button>
                      <button
                        className="bg-gray-500 hover:bg-gray-600 text-white px-3 py-1 rounded"
                        onClick={cancelEditing}
                      >
                        Cancel
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded"
                        onClick={() => startEditing(task)}
                      >
                        Edit
                      </button>
                      <button
                        className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                        onClick={() => startDeleting(task)}
                      >
                        Delete
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </div>
  );
};

export default Viewassignedtasks;
