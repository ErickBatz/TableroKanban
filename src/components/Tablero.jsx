import ColumnaKanba from "./ColumnaKanba";

export default function Tablero({tareas,onVerTarea,onSoltarTarea,onEliminarTarea}){
    
    const pendientes = tareas.filter(t=> t.estado==='PENDIENTE');
    const enProceso = tareas.filter(t=> t.estado ==='EN_PROCESO');
    const completado = tareas.filter(t=> t.estado ==='COMPLETADA');
    
    return(
        <div className="tablero">
            
                <ColumnaKanba 
                    titulo="Pendiente" 
                    estado="PENDIENTE"
                    color="#2563eb" 
                    tareas={pendientes}
                    onSoltarTarea={onSoltarTarea}
                    onVerTarea={onVerTarea}
                    onEliminarTarea={onEliminarTarea}
                    />


                <ColumnaKanba 
                    titulo="En proceso" 
                    estado="EN_PROCESO" 
                    color="#f59e0b" 
                    tareas={enProceso}
                    onSoltarTarea={onSoltarTarea}
                    onVerTarea={onVerTarea}
                    onEliminarTarea={onEliminarTarea}


                />
                 

                <ColumnaKanba 
                    titulo="Completadas" 
                    estado="COMPLETADA" 
                    color="#16a34a" 
                    tareas={completado}
                    onSoltarTarea={onSoltarTarea}
                    onVerTarea={onVerTarea}
                    onEliminarTarea={onEliminarTarea}

                    />

        </div>
    );
}
