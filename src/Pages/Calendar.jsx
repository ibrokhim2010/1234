import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Kalendar uchun uslublar

const MyCalendar = () => {
  const [date, setDate] = useState(new Date()); // Hozirgi sanani o'rnating

  const handleDateChange = (newDate) => {
    setDate(newDate); // Sanani yangilash
    console.log('Tanlangan sana:', newDate); // Tanlangan sanani konsolga chiqarish
  };

  return (
    <div className="flex flex-col items-center justify-center p-5  ">
      <h1 className="font-bold text-2xl mb-4 text-red-600">Kalendar</h1>
      <Calendar 
        onChange={handleDateChange} // Sana o'zgarganda chaqiriladigan funksiya
        value={date} // Hozirgi sana
      />
      <p className="mt-4 font-bold text-2xl">
        <span className='text-blue-500'>Tanlangan sana:</span>
       <span className='text-yellow-300'> {date.toDateString()}</span>
        </p>
    </div>
  );
};

export default MyCalendar;
