import React from 'react';

const Tasks = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 lg:pt-20 md:pt-28 max-sm:pt-20">
      <div className="w-full max-w-md p-5 bg-gray-800 rounded-md ">
        <h1 className="text-3xl font-semibold text-white mb-6">Task Assignment Form</h1>

        <form className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="lead" className="text-xl text-white">Select a Qualified Lead:</label>
            <select id="lead" name="lead" required className="w-full py-2 px-3 bg-gray-700 text-white rounded">
              <option value="lead1">Lead 1</option>
              <option value="lead2">Lead 2</option>
              <option value="lead3">Lead 3</option>
              <option value="lead4">Lead 4</option>
              {/* Add more lead options as needed */}
            </select>
          </div>

          <div className="space-y-2">
            <label htmlFor="driver" className="text-xl text-white">Select a Driver:</label>
            <select id="driver" name="driver" required className="w-full py-2 px-3 bg-gray-700 text-white rounded">
              <option value="driver1">Driver 1</option>
              <option value="driver2">Driver 2</option>
              {/* Add more driver options as needed */}
            </select>
          </div>

          <div className="space-y-2">
            <label htmlFor="schedule" className="text-xl text-white">Task Schedule (Optional):</label>
            <input type="datetime-local" id="schedule" name="schedule" className="w-full py-2 px-3 bg-gray-700 text-white rounded" />
          </div>

          <div className="space-y-2">
            <label htmlFor="instructions" className="text-xl text-white">Instructions or Notes:</label>
            <textarea id="instructions" name="instructions" rows="4" cols="50" placeholder="Add specific instructions or notes" className="w-full py-2 px-3 bg-gray-700 text-white rounded"></textarea>
          </div>

          <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Tasks;
