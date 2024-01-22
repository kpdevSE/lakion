'use client'
import React, { useState } from 'react';

const AddLead = () => {
  const [formData, setFormData] = useState({
    name: '',
    contactNumber: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    vehicleModel: '',
    year: '',
    condition: '',
    additionalDetails: '',
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError(null);

    try {
      const response = await fetch('http://localhost:3000/save-lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Lead added successfully');
        setFormData({
          name: '',
          contactNumber: '',
          address: '',
          city: '',
          state: '',
          zipCode: '',
          vehicleModel: '',
          year: '',
          condition: '',
          additionalDetails: '',
        });
      } else {
        const errorMessage = await response.text();
        setError(errorMessage || 'Failed to add lead');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setError('An unexpected error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='bg-gray-800 h-full w-full'>
      <div className="flex items-center justify-center lg:pt-16">
        <form
          onSubmit={handleSubmit}
          className="max-w-md mx-auto p-6 bg-white shadow-md rounded-md "
        >
          <div className="mb-5">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="block w-full py-2.5 px-4 text-sm text-gray-900 bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-blue-600"
              placeholder="Your Name"
              required
            />
          </div>

          <div className="mb-5">
            <label htmlFor="contactNumber" className="block text-sm font-medium text-gray-700">
              Contact Number
            </label>
            <input
              type="tel"
              id="contactNumber"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleChange}
              className="block w-full py-2.5 px-4 text-sm text-gray-900 bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-blue-600"
              placeholder="Your Contact Number"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="mb-5">
              <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                Address
              </label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="block w-full py-2.5 px-4 text-sm text-gray-900 bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-blue-600"
                placeholder="Your Address"
                required
              />
            </div>
            <div className="mb-5">
              <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                City
              </label>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="block w-full py-2.5 px-4 text-sm text-gray-900 bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-blue-600"
                placeholder="Your City"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="mb-5">
              <label htmlFor="state" className="block text-sm font-medium text-gray-700">
                State/Province
              </label>
              <input
                type="text"
                id="state"
                name="state"
                value={formData.state}
                onChange={handleChange}
                className="block w-full py-2.5 px-4 text-sm text-gray-900 bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-blue-600"
                placeholder="Your State/Province"
                required
              />
            </div>
            <div className="mb-5">
              <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700">
                Zip Code
              </label>
              <input
                type="text"
                id="zipCode"
                name="zipCode"
                value={formData.zipCode}
                onChange={handleChange}
                className="block w-full py-2.5 px-4 text-sm text-gray-900 bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-blue-600"
                placeholder="Your Zip Code"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="mb-5">
              <label htmlFor="vehicleModel" className="block text-sm font-medium text-gray-700">
                Vehicle Model
              </label>
              <input
                type="text"
                id="vehicleModel"
                name="vehicleModel"
                value={formData.vehicleModel}
                onChange={handleChange}
                className="block w-full py-2.5 px-4 text-sm text-gray-900 bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-blue-600"
                placeholder="Your Vehicle Model"
                required
              />
            </div>
            <div className="mb-5">
              <label htmlFor="year" className="block text-sm font-medium text-gray-700">
                Year
              </label>
              <input
                type="text"
                id="year"
                name="year"
                value={formData.year}
                onChange={handleChange}
                className="block w-full py-2.5 px-4 text-sm text-gray-900 bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-blue-600"
                placeholder="Your Vehicle Year"
                required
              />
            </div>
          </div>

          <div className="mb-5">
            <label htmlFor="condition" className="block text-sm font-medium text-gray-700">
              Condition
            </label>
            <textarea
              id="condition"
              name="condition"
              value={formData.condition}
              onChange={handleChange}
              rows="3"
              className="block w-full py-2.5 px-4 text-sm text-gray-900 bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-blue-600"
              placeholder="Additional Details about Condition"
              required
            ></textarea>
          </div>

          <div className="mb-5">
            <label htmlFor="additionalDetails" className="block text-sm font-medium text-gray-700">
              Additional Details
            </label>
            <textarea
              id="additionalDetails"
              name="additionalDetails"
              value={formData.additionalDetails}
              onChange={handleChange}
              rows="3"
              className="block w-full py-2.5 px-4 text-sm text-gray-900 bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-blue-600"
              placeholder="Any Additional Details"
              required
            ></textarea>
          </div>

          {loading && <p>Loading...</p>}
          {error && <p className="text-red-500">{error}</p>}

          <button
            type="submit"
            className="w-full bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 text-white font-medium rounded-lg text-sm py-2.5"
            disabled={loading}
          >
            {loading ? 'Submitting...' : 'Submit'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddLead;
