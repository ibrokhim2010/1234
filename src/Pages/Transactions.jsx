import React from 'react';

const transactionsData = [
  { id: 1, name: 'Xarid', amount: 150, date: '2024-10-20', status: 'Bajarildi' },
  { id: 2, name: 'To‘lov', amount: 200, date: '2024-10-18', status: 'Kutilmoqda' },
  { id: 3, name: 'Xarid', amount: 300, date: '2024-10-15', status: 'Bajarildi' },
  { id: 4, name: 'To‘lov', amount: 100, date: '2024-10-12', status: 'Bekor qilindi' },
];

const Transactions = () => {
  return (
    <div className="p-5 h-full w-full">
      <h1 className="font-bold text-2xl mb-5 text-blue-900 ">Tranzaktsiyalar</h1>
      <div className="overflow-x-auto rounded-lg">
        <table className="table-auto w-full bg-white shadow-md rounded-lg">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2">ID</th>
              <th className="px-4 py-2">Nomi</th>
              <th className="px-4 py-2">Miqdori</th>
              <th className="px-4 py-2">Sana</th>
              <th className="px-4 py-2">Holati</th>
            </tr>
          </thead>
          <tbody>
            {transactionsData.map((transaction) => (
              <tr key={transaction.id} className="border-t">
                <td className="border px-4 py-2">{transaction.id}</td>
                <td className="border px-4 py-2">{transaction.name}</td>
                <td className="border px-4 py-2">${transaction.amount}</td>
                <td className="border px-4 py-2">{transaction.date}</td>
                <td
                  className={`border px-4 py-2 ${
                    transaction.status === 'Bajarildi' ? 'text-green-500' : 
                    transaction.status === 'Kutilmoqda' ? 'text-yellow-500' : 'text-red-500'
                  }`}
                >
                  {transaction.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Transactions;
