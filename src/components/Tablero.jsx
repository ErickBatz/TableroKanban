import { useState } from "react";
import ColumnaKanba from "./ColumnaKanba";
import ModalNuevaTarea from "./ModalNuevaTarea";
import {tareasPrueba} from "../data/tareasPrueba";

export default function Tablero(){
    const[tareas,setTareas] = useState(tareasPrueba);
    const[modalAbierto,setModalAbierto] = useState(false);
    const[estadoParaNuevaTarea,setEstadoParaNuevaTarea] = useState('PENDIENTE');

    function abridModal(estado){
        setEstadoParaNuevaTarea(estado);
        setModalAbierto(true);
    }

    function agregarTarea(nuevaTarea){
        setTareas(prev => [...prev,nuevaTarea]);
    }
    
    
    const pendientes = tareasPrueba.filter(t=> t.estado==='PENDIENTE');
    const enProceso = tareasPrueba.filter(t=> t.estado ==='EN_PROCESO');
    const completado = tareasPrueba.filter(t=> t.estado ==='COMPLETADA');
    return(
        <div className="tablero">
                <ColumnaKanba 
                    titulo="Pendiente" 
                    estado="PENDIENTE"
                    color="#2563eb" 
                    tareas={pendientes}
                    onNuevaTarjeta={abridModal}
                    />


                <ColumnaKanba 
                    titulo="En proceso" 
                    estado="EN_PROCESO" 
                    color="#f59e0b" 
                    tareas={enProceso}
                    onNuevaTarjeta={abridModal}
                    />
                
                <ColumnaKanba 
                    titulo="Completadas" 
                    estado="COMPLETADA" 
                    color="#16a34a" 
                    tareas={completado}
                    onNuevaTarjeta={abridModal}
                    />

                {modalAbierto && (
                    <ModalNuevaTarea
                        estadoInicial={estadoParaNuevaTarea}
                        onCrear={agregarTarea}
                        onCerrar={()=>setModalAbierto(false)}
                    />
                )}
        </div>
    );
}