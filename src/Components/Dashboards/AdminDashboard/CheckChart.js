import { ArcElement, Chart as ChartJS, Legend, Tooltip } from 'chart.js';

import { Doughnut } from 'react-chartjs-2';
import React from 'react';
import {useSelector} from "react-redux"
ChartJS.register(ArcElement, Tooltip, Legend);

const user = useSelector((state)=> state.user)
export const data = {
  labels: ['Female', 'Male'],
  datasets: [
    {
      label: '# of Votes',
      data: [user.female.length, user.male.length],
      backgroundColor: [
        'rgba(234,81,97)',
        'rgba(52,156,247)'
      ],
      borderColor: [
        'rgba(234,81,97)',
        'rgba(52,156,247)'
      ],
      borderWidth: 1
    
    },
  ],
};

export function Charttest() {
  return <Doughnut data={data} />;
}
