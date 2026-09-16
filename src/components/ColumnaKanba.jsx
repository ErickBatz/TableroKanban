import TarjetaTarea from "./TarjetaTarea";


export default function ColumnaKanba({titulo,estado, color, tareas, onNuevaTarjeta}){
    return(
        <div className="columna-kanban">
            <div className="columna-header" style={{borderTop:`4px solid ${color}`}}>
                <h3>{titulo}</h3>
                <span className="contador">{tareas.length}</span>
            </div>

            <div className="columna-body">
                {tareas.length===0 ? (
                    <p>sin tareas todavia</p>
                ):(
                    tareas.map(tarea=>(
                        <TarjetaTarea key={tarea.id_tarea} tarea={tarea}/>
                    ))
                )}
            </div>

            <button className="btn-nueva-tarjeta" onClick={()=>onNuevaTarjeta(estado)}>Nueva Tarjeta</button>
        </div>
    
    );
}