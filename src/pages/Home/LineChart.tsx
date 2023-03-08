import { Line } from 'react-chartjs-2';
import { randomNum } from 'common/utils';
import { useTheme } from 'providers/ThemeProvider';

export const options: any = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    y: {
      display: false
    },
    x: {
      grid: { color: '#777777' },
      title: { fontColor: 'red' },
      ticks: {
        color: "var(--white-color)",
        font: { size: 12 },
      }
    }
  },
  plugins: {
    legend: {
      display: false
    },
    title: {
      display: false,
    },
  },
};

const labels = ['6月', '7月', '8月', '9月', '9月', '10月', '11月', '12月', '1月', '2月', '3月', '4月', '5月'];

export default function LineChart() {
  const { theme } = useTheme();

  const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: labels.map(() => randomNum(1, 10)),
        borderColor: theme.secondaryColor,
        backgroundColor: theme.secondaryColor,
      },
      {
        label: 'Dataset 2',
        data: labels.map(() => randomNum(1, 10)),
        borderColor: '#8FE9D0',
        backgroundColor: '#8FE9D0',
      },
    ],
  };

  return (
    <Line
      style={{ height: '100%', backgroundColor: 'var(--secondary-dark-color)' }}
      options={options}
      data={data}
    />
  )
}
