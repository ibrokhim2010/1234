import React from 'react';
import { Line, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Chart.js komponentlarini ro'yxatdan o'tkazish
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend);

// Statistik ma'lumotlar va grafikalar
const lineData = {
  labels: ['Yanvar', 'Fevral', 'Mart', 'Aprel', 'May', 'Iyun'],
  datasets: [
    {
      label: 'Foyda ($)',
      data: [1200, 1900, 3000, 5000, 2000, 3000],
      borderColor: 'rgba(75,192,192,1)',
      backgroundColor: 'rgba(75,192,192,0.2)',
      fill: true,
    },
  ],
};

const barData = {
  labels: ['Yanvar', 'Fevral', 'Mart', 'Aprel', 'May', 'Iyun'],
  datasets: [
    {
      label: 'Savdo hajmi',
      data: [50, 60, 70, 180, 120, 90],
      backgroundColor: 'rgba(153,102,255,0.6)',
    },
  ],
};

const Analytics = () => {
  return (
    <div className="p-5 h-full w-full">
      <h1 className="font-bold text-2xl mb-5 text-blue-900">Analitika</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Line chart */}
        <div className="bg-white shadow-md p-5 rounded-lg">
          <h2 className="font-semibold text-lg mb-3">Oylik Foyda</h2>
          <Line data={lineData} />
        </div>

        {/* Bar chart */}
        <div className="bg-white shadow-md p-5 rounded-lg">
          <h2 className="font-semibold text-lg mb-3">Savdo Hajmi</h2>
          <Bar data={barData} />
        </div>
      </div>

      <div className="mt-8 bg-white shadow-md p-5 rounded-lg">
        <h2 className="font-semibold text-lg mb-3">Umumiy Statistika</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 text-center">
          <div className="bg-gray-100 p-5 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold">$12,000</h3>
            <p className="text-gray-600">Umumiy Foyda</p>
          </div>
          <div className="bg-gray-100 p-5 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold">540</h3>
            <p className="text-gray-600">Tranzaktsiyalar</p>
          </div>
          <div className="bg-gray-100 p-5 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold">350</h3>
            <p className="text-gray-600">Mijozlar</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
