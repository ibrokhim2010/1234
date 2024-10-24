import React from 'react';
import { Link } from 'react-router-dom';

const Pages = () => {
  return (
    <div className="p-5 h-full w-full">
      <h1 className="font-bold text-2xl mb-5 text-blue-900">Sahifalar</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="bg-white shadow-md p-5 rounded-lg">
          <h2 className="font-semibold text-lg">Dashboard</h2>
          <p>Admin Dashboard bo'limiga o'tish.</p>
          <Link to="/" className="text-blue-500">Dashboard</Link>
        </div>
        <div className="bg-white shadow-md p-5 rounded-lg">
          <h2 className="font-semibold text-lg">Sozlamalar (Settings)</h2>
          <p>Admin Sozlamalar bo'limiga o'tish.</p>
          <Link to="/settings" className="text-blue-500">Settings</Link>
        </div>
        <div className="bg-white shadow-md p-5 rounded-lg">
          <h2 className="font-semibold text-lg">Kalendar</h2>
          <p>Kalendar funksiyasiga o'tish.</p>
          <Link to="/calendar" className="text-blue-500">Kalendar</Link>
        </div>
        <div className="bg-white shadow-md p-5 rounded-lg">
          <h2 className="font-semibold text-lg">Tranzaktsiyalar</h2>
          <p>Tranzaktsiyalar ro'yxatini ko'rish.</p>
          <Link to="/transactions" className="text-blue-500">Tranzaktsiyalar</Link>
        </div>
        <div className="bg-white shadow-md p-5 rounded-lg">
          <h2 className="font-semibold text-lg">Leads</h2>
          <p>Leads (potensial mijozlar) sahifasiga o'tish.</p>
          <Link to="/leads" className="text-blue-500">Leads</Link>
        </div>
        <div className="bg-white shadow-md p-5 rounded-lg">
          <h2 className="font-semibold text-lg">Integratsiyalar</h2>
          <p>Xizmatlar bilan integratsiya bo'limi.</p>
          <Link to="/integration" className="text-blue-500">Integratsiyalar</Link>
        </div>
      </div>
    </div>
  );
};

export default Pages;
