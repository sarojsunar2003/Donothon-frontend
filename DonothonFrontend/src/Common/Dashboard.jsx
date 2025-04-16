import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';
import axios from 'axios';
import CountUp from 'react-countup';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const DonationBarChart = () => {
  const now = new Date();
  const monthlyCounts = Array(10).fill(0);
  const monthLabels = [];
  const [donations, setdonation] = useState([]);

  const getAllData = async () => {
    const res = await axios.get("/history/get/" + localStorage.getItem('id'));
    setdonation(res.data.data);
  };

  useEffect(() => {
    getAllData();
  }, []);

  for (let i = 9; i >= 0; i--) {
    const date = new Date(now.getFullYear(), now.getMonth() - i, 1);
    monthLabels.push(date.toLocaleString('default', { month: 'short', year: 'numeric' }));
  }

  donations.forEach(donation => {
    const createdDate = new Date(donation?.createdAt);
    for (let i = 0; i < 10; i++) {
      const monthStart = new Date(now.getFullYear(), now.getMonth() - (9 - i), 1);
      const monthEnd = new Date(now.getFullYear(), now.getMonth() - (9 - i) + 1, 1);
      if (createdDate >= monthStart && createdDate < monthEnd) {
        monthlyCounts[i]++;
        break;
      }
    }
  });

  const totalDonations = donations.length;

  const data = {
    labels: monthLabels,
    datasets: [
      {
        label: 'Donations',
        data: monthlyCounts,
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderRadius: 6,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
      tooltip: { enabled: true },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 1
        }
      }
    },
  };

  return (
    <div className='d-flex justify-content-center' style={{ width: '100vw', flexDirection: 'column' }}>
      <div className='d-flex justify-content-center mb-4' style={{width:'100vw'}}>
        <div className='mt-5 card p-3' style={{ width: 'fit-content',height:'fit-content' }}>
          <h2 className="text-xl font-semibold mb-4 text-center">Total Donations</h2>
          <div className="text-3xl font-bold text-center text-green-600 mb-2">
            <CountUp end={totalDonations} duration={2.5} />
          </div>
        </div>
      </div>
      <div className="w-full max-w-4xl mx-auto p-4 bg-white shadow-lg rounded-xl" style={{ width: '80vw' }}>
        <h2 className="text-xl font-semibold mb-4 text-center">Donations Over Last 10 Months</h2>
        <Bar data={data} options={options} />
      </div>
      
    </div>
  );
};

export default DonationBarChart;
