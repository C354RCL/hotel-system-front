import BarChart from '../components/BarChart.jsx';

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

function App() {
  const cantidadHoras = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120];
  const cantidadNoches = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120];
  try {

  } catch (err) {
    console.error("Error: ", err);
  }
  return (
    <div className='flex flex-col items-center justify-center h-full p-10'>
      <h1>Gráfico de Ventas</h1>
      <div className='w-1/2 h-1/2 rounded-lg flex justify-center'>
        <BarChart labels={meses} datos={cantidadHoras} title='Servicos por horas' />
      </div>
      <div className='w-1/2 h-1/2 rounded-lg flex justify-center'>
        <BarChart labels={meses} datos={cantidadNoches} title='Servicios por noches' color='rgba(188, 226, 229, 1)'/>
      </div>
    </div>
  );
}

export default App;
