// components/LineChartComponent.tsx
'use client';

import React from 'react';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

// Register required components
ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip);

// Chart data and config
const data = {
  labels: ['2020', '2021', '2022', '2023', '2024', '2025', '2020', '2021', '2022', '2023', '2024', '2025'],
  datasets: [
    {
      label: 'Value',
      data: [10, 45, 60, 65, 70, 72, 35, 45, 60, 65, 70, 72],
      borderColor: '#444',
      backgroundColor: 'rgba(0, 0, 0, 0.1)',
      tension: 0.4, // smooth curve
      pointRadius: 0, // no dots
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: { display: false },
    tooltip: { enabled: true },
    title: {
        display: true,
        text: 'Chart.js Line Chart'
      }
  },
  scales: {
    x: {
      grid: { display: false },
      ticks: { color: '#555' },
    },
    y: {
      display: false,
    },
    
  },
};

const LineChartComponent: React.FC = () => {
    return (
      <div className=""> {/* Full width, fixed height */}
        <Line data={data} options={options} />
      </div>
    );
  };

export default LineChartComponent;
