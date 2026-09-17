const COLORES_PRIORIDAD={
    ALTA:'#EF4444',
    MEDIA: '#F59E0B',
    BAJA:'#16A34A'

};

function obtenerIniciales(nombreCompleto){
    return nombreCompleto
    .split(' ')
    .map(palabra=>palabra[0])
    .join('')
    .toUpperCase();
}

export default function TarjetaTarea({tarea,onVerTarea}){
    function manejarDragStart(evento){
        evento.dataTransfer.setData('text/plain',tarea.id_tarea);
    }

    return (
        <div className="tarjeta-tarea"
            draggable 
            onDragStart={manejarDragStart}
            onClick={()=> onVerTarea(tarea)}
        >
            <div className="tarjeta-header">
                <h4>{tarea.titulo}</h4>
            </div>
            <p className="tarjeta-descripcion">{tarea.descripcion}</p>
            <div className="tarjeta-footer">
                <span className="badge-prioridad"
                    style={{backgroundColor:COLORES_PRIORIDAD[tarea.prioridad]}}
                >
                    {tarea.prioridad === 'ALTA' && ''}
                    {tarea.prioridad == 'MEDIA' && ''}
                    {tarea.prioridad == 'BAJA' && ''}
                    {''}{tarea.prioridad}
                </span>
                <span className="avatar-pequeno">{obtenerIniciales(tarea.usuario)}</span>
            </div>
           
        </div>
    );
}