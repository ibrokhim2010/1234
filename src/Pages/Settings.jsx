import React from 'react';

const Settings = () => {
  return (
    <div className="flex flex-col items-center justify-center  p-20 ">
      <h1 className="font-bold  mb-4 text-yellow-600 text-3xl">Sozlamalar</h1>
      
      <div className="w-full max-w-md bg-blue-950 shadow-md rounded-lg p-5">
        <label className="block mb-2 text-sm font-medium text-black">
          Foydalanuvchi ismi
        </label>
        <input
          type="text"
          className="border border-black rounded-lg w-full p-2 mb-4 bg-white"
          placeholder="Ismingizni kiriting"
        />

        <label className="block mb-2 text-sm font-medium text-black">
          Email
        </label>
        <input
          type="email"
          className="border border-black rounded-lg w-full p-2 mb-4 bg-white"
          placeholder="Email manzilingizni kiriting"
        />

        <button className="bg-blue-950 text-blue-600 px-4 py-2 border-2 rounded-lg hover:bg-blue-900">
          Saqlash
        </button>
      </div>
    </div>
  );
};

export default Settings;
