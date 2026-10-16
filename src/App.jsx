import { useEffect, useState } from 'react'
import './App.css'
import Tablero from './components/Tablero'
import Header from './components/Header'
import ModalNuevaTarea from './components/ModalNuevaTarea'
import './styles/variables.css'
import { tareaApi } from './service/api'

function App() {

  const [tareas,setTareas] = useState([]);
  const [modalNuevaAbierto,setModalNuevaAbierto] = useState(false);
  const [estadoParaNuevaTarea,setEstadoParaNuevaTarea] = useState('PENDIENTE');
  const [tareaSeleccionada,setTareaSeleccionada] = useState(null);

  useEffect(()=>{
    const obtenerTareasDeApi =  async  () =>{
      try{
        const datos =  await tareaApi.listar();
        setTareas(datos);
      }
      catch(error){
        console.error('Error al conectar con la API', error);
      }
    };
    
    obtenerTareasDeApi();
  },[]);

  async function eliminarTarea(id){
    try{
      await tareaApi.eliminar(id);
      setTareas(prev=>prev.filter(t =>String(t.id_tarea) !== String(id)));
    }
    catch(error){
      console.error('No se pudo borrar ', error);
    }
  }

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

  async function moverTarea(idTarea,nuevoEstado){
    try{
      await tareaApi.actualizar(idTarea, {estado: nuevoEstado});
      setTareas(prev =>
        prev.map(t =>
          String(t.id_tarea) ===  String(idTarea)
          ? { ...t, estado: nuevoEstado}
          : t
        )
      );
    } catch(error){
      console.error('No se pudo mover la tarea', error);
    }
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
        onEliminarTarea={eliminarTarea}
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
