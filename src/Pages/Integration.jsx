import React, { useState } from 'react';

// Integratsiya qilinadigan xizmatlar ma'lumotlari
const services = [
  { id: 1, name: 'Google Analytics', status: 'Ulangan' },
  { id: 2, name: 'Slack', status: 'Ulanmagan' },
  { id: 3, name: 'GitHub', status: 'Ulangan' },
  { id: 4, name: 'Zapier', status: 'Ulanmagan' },
];

const Integration = () => {
  const [serviceStatus, setServiceStatus] = useState(services);

  // Xizmatni ulash funksiyasi (statusni o'zgartirish)
  const toggleService = (id) => {
    setServiceStatus(prevStatus =>
      prevStatus.map(service =>
        service.id === id
          ? { ...service, status: service.status === 'Ulangan' ? 'Ulanmagan' : 'Ulangan' }
          : service
      )
    );
  };

  return (
    <div className="p-5 h-full w-full">
      <h1 className="font-bold text-2xl mb-5 text-blue-900">Integratsiya Xizmatlari</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {serviceStatus.map((service) => (
          <div key={service.id} className="bg-white shadow-md p-5 rounded-lg flex justify-between items-center">
            <div>
              <h2 className="font-semibold text-lg">{service.name}</h2>
              <p
                className={`text-sm mt-1 ${
                  service.status === 'Ulangan' ? 'text-green-500' : 'text-red-500'
                }`}
              >
                {service.status}
              </p>
            </div>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
              onClick={() => toggleService(service.id)}
            >
              {service.status === 'Ulangan' ? 'O‘chirish' : 'Ulash'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Integration;
