import { useState, useEffect } from "react";
import { getBuses, getBusById } from "../services/BusServices";
import BusCard from "../components/BusCard";
import BusDetail from "./BusDetail";

function BusList() {
    const [buses, setBuses] = useState([]);
    const [page, setPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const [busSeleccionado, setBusSeleccionado] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const [buscarId, setBuscarId] = useState("");
    const [errorBusqueda, setErrorBusqueda] = useState(null);

    useEffect(() => {
        const cargarBuses = async () => {
            setLoading(true);
            try {
                const data = await getBuses(page, 5);
                setBuses(data.content);
                setTotalPages(data.totalPages);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        cargarBuses();
    }, [page]);

    const buscarPorId = async () => {
        if (!buscarId) return;
        setErrorBusqueda(null);
        try {
            const data = await getBusById(buscarId);
            setBusSeleccionado(data);
        } catch (err) {
            setBusSeleccionado(null);
            setErrorBusqueda("Bus no encontrado");
        }
    };

    const cerrarDetalle = () => {
        setBusSeleccionado(null);
        setErrorBusqueda(null);
        setBuscarId("");
    };

    if (loading) return <p>Cargando buses...</p>;
    if (error)   return <p>Error: {error}</p>;

    return (
        <div style={{ padding: "20px" }}>
            <h1>🚌 Lista de Buses</h1>

            {/* BUSCADOR */}
            <div style={{ marginBottom: "20px", display: "flex", gap: "10px" }}>
                <input
                    type="number"
                    placeholder="Buscar por ID..."
                    value={buscarId}
                    onChange={(e) => setBuscarId(e.target.value)}
                    style={{ padding: "8px", width: "200px" }}
                />
                <button onClick={buscarPorId}>
                    🔍 Buscar
                </button>
            </div>

            {/* ERROR BÚSQUEDA */}
            {errorBusqueda && (
                <p style={{ color: "red" }}>❌ {errorBusqueda}</p>
            )}

            {/* TABLA */}
            <table border="1" cellPadding="8"
                style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead style={{ backgroundColor: "#f0f0f0" }}>
                    <tr>
                        <th>ID</th>
                        <th>Número</th>
                        <th>Placa</th>
                        <th>Marca</th>
                        <th>Activo</th>
                    </tr>
                </thead>
                <tbody>
                    {buses.map((bus) => (
                        <BusCard key={bus.id} bus={bus} />
                    ))}
                </tbody>
            </table>

            {/* PAGINACIÓN */}
            <div style={{ marginTop: "15px", display: "flex", gap: "10px" }}>
                <button
                    onClick={() => setPage((p) => p - 1)}
                    disabled={page === 0}>
                    ← Anterior
                </button>
                <span>Página {page + 1} de {totalPages}</span>
                <button
                    onClick={() => setPage((p) => p + 1)}
                    disabled={page + 1 === totalPages}>
                    Siguiente →
                </button>
            </div>

            {/* MODAL */}
            {busSeleccionado && (
                <BusDetail bus={busSeleccionado} onCerrar={cerrarDetalle} />
            )}
        </div>
    );
}

export default BusList;