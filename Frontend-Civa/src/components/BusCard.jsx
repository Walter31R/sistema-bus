function BusCard({ bus, onVerDetalle }) {
    return (
        <tr>
            <td>{bus.id}</td>
            <td>{bus.numeroBus}</td>
            <td>{bus.placa}</td>
            <td>{bus.marca?.nombre}</td>
            <td>{bus.activo ? "✅ Sí" : "❌ No"}</td>
           
        </tr>
    );
}

export default BusCard;