import { useState } from 'react'
import './App.css'
import Tablero from './components/Tablero'
import Header from './components/Header'
import ModalNuevaTarea from './components/ModalNuevaTarea'
import {tareasPrueba} from './data/tareasPrueba'

function App() {

  const [tareas,setTareas] = useState(tareasPrueba);
  const [modalNuevaAbierto,setModalNuevaAbierto] = useState(false);
  const [estadoParaNuevaTarea,setEstadoParaNuevaTarea] = useState('PENDIENTE');
  const [tareaSeleccionada,setTareaSeleccionada] = useState(null);

  function abrirModalNueva(){
    setEstadoParaNuevaTarea('PENDIENTE');
    setEstadoParaNuevaTarea(true);
  }

  function agregarTarea(nuevaTarea){
    setTarea(prev => [...prev,nuevaTarea]);
  }

  function moverTarea(idTarea,nuevoEstado){
    setTareas(prev =>
        prev.map(tarea =>
          tarea.id_tarea === idTarea
          ? {...tarea, estado:nuevoEstado}
          :tarea
        )
    );
  }
 
  return (
    <div className="app">
      <Header
        onNuevaTarea={abrirModalNueva}
      />
      <Tablero 
        tareas = {tareas}
        onVerTarea = {verTarea}
        onSoltarTarea ={moverTarea}
        />

      {modalNuevaAbierto && (
        <ModalNuevaTarea
          estadoInicial={estadoParaNuevaTarea}
          onCrear={agregarTarea}
          onCerrar={()=>setModalNuevaAbierto(false)}
        />
      )}
    </div>
  );
}

export default App
