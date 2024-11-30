import React, { useEffect, useState } from 'react'
import InfoCard from '../components/InfoCard.jsx'
import InfoDinero from '../components/InfoDinero.jsx'

const InicioAdmin = () => {
  const [serviciosData, setServiciosData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('http://localhost:9292/findAll/salesMonth', {
          method : 'POST',
          headers : {'Content-Type' : 'application/json'}
        });

        const data = await res.json();
        setServiciosData(data)
      } catch (err) {
        console.error('Error al obtener los datos:', err.message);
      }
    }
    fetchData();
  }, []);
  return (
    <div className="p-10 w-full h-full place-content-center">
      <div className="w-5/6 m-auto">
        <h1 className="text-4xl">Estadísticas de este mes</h1>
        {serviciosData.length > 0 && (
          <>
            <div className="flex justify-between p-10 my-5">
              <h1 className="text-2xl my-auto">Horas</h1>
              <InfoCard
                num={serviciosData[0].numberServiceHours}
                title="Servicios realizados por horas"
              />
              <InfoDinero
                num={serviciosData[0].saleHours}
                title="Generados por horas"
              />
            </div>
            <div className="flex justify-between p-10 my-5">
              <h1 className="text-2xl my-auto">Noches</h1>
              <InfoCard
                num={serviciosData[0].numberServiceNights}
                title="Servicios realizados por noche"
              />
              <InfoDinero
                num={serviciosData[0].saleNights}
                title="Generados por noche"
              />
            </div>
          </>
        )}
        {serviciosData.length === 0 && <p>Cargando datos...</p>}
      </div>
    </div>
  );
  
}

export default InicioAdmin