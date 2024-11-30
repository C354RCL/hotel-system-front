import TablaClientesReserva from "./components/TablaClientesReserva.jsx";
import { useState, useEffect } from "react";

const HistorialReservas = () => {
  const [reservacionesClientesData, setReservacionesClientesData] = useState(
    []
  );
  const [filteredData, setFilteredData] = useState([]);
  const [filters, setFilters] = useState({
    nombre: "",
    fecha: "",
    tipo: "",
  });

  useEffect(() => {
    // Creamos una funcion asincrona
    const fetchData = async () => {
      try {
        // Peticion a la API
        const res = await fetch(
          "http://localhost:9292/findALL/reservationNights",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
          }
        );

        // Convertimos la respuesta en formato JSON
        const data = await res.json();
        setReservacionesClientesData(data);
        setFilteredData(data);
      } catch (err) {
        console.error("Error: ", err);
      }
    };
    fetchData();
  }, []);

  // Manejar cambios en los filtros
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  // Aplicar los filtros
  const handleFilterSubmit = (e) => {
    e.preventDefault();
    const filtered = reservacionesClientesData.filter((reserva) => {
      const matchesNombre = filters.nombre
        ? reserva.customerName.toLowerCase().includes(filters.nombre.toLowerCase())
        : true;
      const matchesFecha = filters.fecha
        ? reserva.arriveDay === filters.fecha
        : true;
      const matchesTipo = filters.tipo
        ? reserva.roomType === filters.tipo
        : true;
      return matchesNombre && matchesFecha && matchesTipo;
    });

    setFilteredData(filtered);
  };

  const handleResetFilters = e => {
    e.preventDefault();
    setFilters({
      nombre: "",
      fecha: "",
      tipo: "",
    });
    setFilteredData(reservacionesClientesData); // Restablece los datos filtrados a los originales
  }

  return (
    <div className="p-10 w-full place-content-center">
      <h1 className="text-3xl">Historial de reservas</h1>
      <div>
        <form className="p-5" onSubmit={handleFilterSubmit}>
          <label htmlFor="nombre" className="p-5">
            Nombre Cliente
          </label>
          <input
            type="text"
            name="nombre"
            id="nombre"
            value={filters.nombre}
            onChange={handleFilterChange}
            className="m-5 p-2 bg-inherit border-b border-fuchsia-950 dark:border-teal-50"
          />
          <label htmlFor="fecha" className="p-5">
            Fecha
          </label>
          <input
            type="date"
            name="fecha"
            id="fecha"
            value={filters.fecha}
            onChange={handleFilterChange}
            className="m-5 p-2 dark:bg-teal-700 border border-fuchsia-950 dark:border-teal-50 focus:outline-none"
          />
          <label htmlFor="tipo" className="p-5">
            Tipo de habitacion
          </label>
          <select
            name="tipo"
            id="tipo"
            value={filters.tipo}
            onChange={handleFilterChange}
            className="m-5 p-2 bg-inherit border border-fuchsia-950 dark:border-teal-50 focus:outline-none"
          >
            <option value="" className="dark:bg-teal-700">
              Cualquier
            </option>
            <option value="Matrimonial" className="dark:bg-teal-700">
              Matrimonial
            </option>
            <option value="King Size" className="dark:bg-teal-700">
              King Size
            </option>
            <option value="Doble" className="dark:bg-teal-700">
              Doble
            </option>
          </select>
          <button type="submit" className="p-2 bg-teal-700 text-white">
            Buscar
          </button>

          <button
            type="button"
            className="bg-red-600 hover:bg-red-800 text-white font-bold py-2 px-4 m-6 "
            onClick={handleResetFilters}
          >
            Borrar filtros
          </button>
        </form>
      </div>
      <TablaClientesReserva reservaciones={filteredData} />
    </div>
  );
};

export default HistorialReservas;
