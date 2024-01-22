'use client'
import React, { useState, useEffect } from 'react';

function ManageLead() {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedLead, setSelectedLead] = useState(null);
 
  useEffect(() => {
    fetchLeads();
  }, []);

  const fetchLeads = async () => {
    try {
      const response = await fetch('http://localhost:3000/getleads');
      if (!response.ok) {
        throw new Error(`Failed to fetch leads: ${response.status}`);
      }
      const data = await response.json();
      setLeads(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching leads:', error);
      setLoading(false);
    }
  };

  const handleLeadNameClick = (lead) => {
    setSelectedLead(lead);
  };

  const toggleAssignment = async (lead) => {
    try {
      const response = await fetch(`http://localhost:3000/toggleassignment/${lead.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`Failed to toggle assignment: ${response.status}`);
      }

      // Update the leads state after successful assignment toggle
      const updatedLeads = leads.map((l) =>
        l.id === lead.id ? { ...l, isAssigned: !l.isAssigned } : l
      );
      setLeads(updatedLeads);
    } catch (error) {
      console.error('Error toggling assignment:', error);
    }
  };

  const deleteLead = async (leadId) => {
    try {
      const response = await fetch(`http://localhost:3000/delete-lead/${leadId}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error(`Failed to delete lead: ${response.status}`);
      }

      // Update the leads state after successful deletion
      const updatedLeads = leads.filter((lead) => lead.id !== leadId);
      setLeads(updatedLeads);
      setSelectedLead(null); // Clear selected lead after deletion
    } catch (error) {
      console.error('Error deleting lead:', error);
    }
  };

  const updateLead = async (leadId, updatedLeadData) => {
    try {
      const response = await fetch(`http://localhost:3000/update-lead/${leadId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedLeadData),
      });

      if (!response.ok) {
        throw new Error(`Failed to update lead: ${response.status}`);
      }

      // Update the leads state after successful update
      const updatedLeads = leads.map((lead) =>
        lead.id === leadId ? { ...lead, ...updatedLeadData } : lead
      );
      setLeads(updatedLeads);
      setSelectedLead(null); // Clear selected lead after update
    } catch (error) {
      console.error('Error updating lead:', error);
    }
  };

  const clearSelectedLead = () => {
    setSelectedLead(null);
  };

  return (
    <div className="container mx-auto xl:pl-20 lg:py-20 md:py-20 sm:py-20 max-sm:py-20 lg:pl-4 md:pl-20 sm:pl-4">
      <h1 className="text-3xl font-semibold text-gray-800 mb-4">Manage Leads</h1>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow rounded-lg overflow-hidden">
            {/* ... (table header) */}
            <tbody className="divide-y divide-gray-200">
              {leads.map((lead) => (
                <tr key={lead.id}>
                  {/* ... (table rows) */}
                  <td className="py-2 px-3 whitespace-nowrap">
                    <button
                      className={`py-1 px-2 rounded-full text-xs font-semibold ${
                        lead.isAssigned ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
                      }`}
                      onClick={() => toggleAssignment(lead)}
                    >
                      {lead.isAssigned ? 'Assigned' : 'Not Assigned'}
                    </button>
                  </td>
                  <td className="py-2 px-3 whitespace-nowrap">
                    <button
                      className="bg-blue-500 hover-bg-blue-600 text-white py-1 px-2 rounded-full text-xs font-semibold"
                      onClick={() => handleLeadNameClick(lead)}
                    >
                      Edit
                    </button>
                  </td>
                  <td className="py-2 px-3 whitespace-nowrap">
                    <button
                      className="bg-red-500 hover-bg-red-600 text-white py-1 px-2 rounded-full text-xs font-semibold"
                      onClick={() => deleteLead(lead.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {selectedLead && (
        <div className="mt-4">
          <h2 className="text-2xl font-semibold text-gray-800">Lead Details</h2>
          <p>Name: {selectedLead.name}</p>
          <p>Contact Info: {selectedLead.contactInfo}</p>
          <p>Vehicle Details: {selectedLead.vehicleDetails}</p>
          <p>Lead Source: {selectedLead.leadSource}</p>
          <p>Qualification Status: {selectedLead.qualificationStatus}</p>
          <button
            className="bg-blue-500 hover-bg-blue-600 text-white py-1 px-2 rounded-full text-xs font-semibold mt-2"
            onClick={clearSelectedLead}
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
}

export default ManageLead;
