import BarChart from './BarChart.jsx';

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
const cantidadPorHoras = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120];
const cantidadPorNoches = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120];

function App() {
  return (
    <div className='flex flex-col items-center justify-center h-screen p-10'>
      <h1>Gráfico de Ventas</h1>
      <div className='w-full h-1/2 rounded-lg flex justify-center'>
        <BarChart labels={meses} datos={cantidadPorHoras} title='Servicos por horas' />
      </div>
      <div className='w-full h-1/2 rounded-lg flex justify-center'>
        <BarChart labels={meses} datos={cantidadPorNoches} title='Servicios por noches' color='rgba(188, 226, 229, 1)'/>
      </div>
    </div>
  );
}

export default App;
