import React from 'react';

// Mijozlar haqidagi ma'lumotlar
const leadsData = [
  { id: 1, name: 'John Doe', email: 'john.doe@example.com', status: 'Aktiv' },
  { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', status: 'Kutilmoqda' },
  { id: 3, name: 'Michael Brown', email: 'michael.brown@example.com', status: 'Aktiv' },
  { id: 4, name: 'Sarah Wilson', email: 'sarah.wilson@example.com', status: 'Yopiq' },
];

const Leads = () => {
  return (
    <div className="p-5 h-full w-full">
      <h1 className="font-bold text-2xl mb-5 text-blue-900">Leads (Potentsial mijozlar)</h1>
      <div className="overflow-x-auto">
        <table className="table-auto w-full bg-white shadow-md rounded-lg">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2">ID</th>
              <th className="px-4 py-2">Ismi</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Status</th>
            </tr>
          </thead>  
          <tbody>
            {leadsData.map((lead) => (
              <tr key={lead.id} className="border-t">
                <td className="border px-4 py-2">{lead.id}</td>
                <td className="border px-4 py-2">{lead.name}</td>
                <td className="border px-4 py-2">{lead.email}</td>
                <td
                  className={`border px-4 py-2 ${
                    lead.status === 'Aktiv' ? 'text-green-500' : 
                    lead.status === 'Kutilmoqda' ? 'text-yellow-500' : 'text-red-500'
                  }`}
                >
                  {lead.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Leads;
