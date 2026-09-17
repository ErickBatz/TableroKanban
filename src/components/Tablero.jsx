import ColumnaKanba from "./ColumnaKanba";

export default function Tablero(tareas,onVerTarea,onSoltarTarea){
    
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
                    onNuevaTarjeta={abridModal}
                    onSoltarTarea={moverTarea}
                    onVerTarea={onVerTarea}
                    />


                <ColumnaKanba 
                    titulo="En proceso" 
                    estado="EN_PROCESO" 
                    color="#f59e0b" 
                    tareas={enProceso}
                    onNuevaTarjeta={abridModal}
                    onSoltarTarea={moverTarea}
                    onVerTarea={onVerTarea}


                />
                 

                <ColumnaKanba 
                    titulo="Completadas" 
                    estado="COMPLETADA" 
                    color="#16a34a" 
                    tareas={completado}
                    onNuevaTarjeta={abridModal}
                    onSoltarTarea={moverTarea}
                    onVerTarea={onVerTarea}

                    />

        </div>
    );
}