import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import PropTypes from 'prop-types';
import { color } from 'chart.js/helpers';

// Registrar los componentes de Chart.js que necesitas
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function BarChart ({ labels, datos, title, color = 'rgba(75, 192, 192, 0.6)' , label = 'Servicios al mes' }) {
  const data = {
    labels: labels,
    datasets: [
      {
        label: label,
        data: datos,
        backgroundColor: color,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: title,
        font: {
          size: 20,
          weight: 'bold',
        }
      },
    },
  };

  return <Bar data={data} options={options} />;
};

BarChart.propTypes = {
  labels: PropTypes.arrayOf(PropTypes.string).isRequired,
  datos: PropTypes.arrayOf(PropTypes.number).isRequired,
  title: PropTypes.string.isRequired,
  color: PropTypes.string,
  label: PropTypes.string
};

export default BarChart;
