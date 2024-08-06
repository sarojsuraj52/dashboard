import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import useMediaQuery from '@mui/material/useMediaQuery';

const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490,2000, 2780, 1890, 2390, 3490, 4200];
const pData = [2400, 1398, 9800, 3908, 4800, 3800,9800, 3908, 4800, 3800, 4300, 8200];
const xLabels = [
  '5',
  '9',
  '10',
  '11',
  '13',
  '15',
  '17',
  '19',
  '21',
  '23',
  '25',
  '26',
];

export default function Chart() {
    const isSmallScreen = useMediaQuery('(max-width:768px)'); // Example breakpoint
    const isMediumScreen = useMediaQuery('(max-width:950px)'); // Example breakpoint

  return (
    <BarChart
      width={isSmallScreen? 450: isMediumScreen? 500: 900}
      height={300}
      series={[
        { data: pData, label: 'pv', id: 'pvId' },
        { data: uData, label: 'uv', id: 'uvId' },
      ]}
      xAxis={[{ data: xLabels, scaleType: 'band' }]}
      
    />
  );
}
