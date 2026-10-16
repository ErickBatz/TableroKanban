import { useEffect, useState } from 'react'
import './App.css'
import Tablero from './components/Tablero'
import Header from './components/Header'
import ModalNuevaTarea from './components/ModalNuevaTarea'
import './styles/variables.css'

function App() {

  const [tareas,setTareas] = useState([]);
  const [modalNuevaAbierto,setModalNuevaAbierto] = useState(false);
  const [estadoParaNuevaTarea,setEstadoParaNuevaTarea] = useState('PENDIENTE');
  const [tareaSeleccionada,setTareaSeleccionada] = useState(null);

  useEffect(()=>{
    const obtenerTareasDeApi =  async  () =>{
      try{
        const respuesta = await fetch('http://localhost/fs2026/ci4-tableroKanban/public/api/tareas');
        const datos = await respuesta.json();
        
        setTareas(datos);
      }
      catch(error){
        console.error('Error al conectar con la API', error);
      }
    }
    obtenerTareasDeApi();
  },[]);



  function abrirModalNueva(){
    setEstadoParaNuevaTarea('PENDIENTE');
    setModalNuevaAbierto(true);
  }

  function verTarea(tarea){
    setTareaSeleccionada(tarea);
  }

  function agregarTarea(nuevaTarea){
    setTareas(prev => [...prev,nuevaTarea]);
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
