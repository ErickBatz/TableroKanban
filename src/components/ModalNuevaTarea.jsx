import { useState } from "react";

export default function ModalNuevaTarea({estadoInicial,onCrear,onCerrar}){
    const [titulo,setTitulo]= useState('');
    const [descripcion,setDescripcion]=useState('');
    const [categoria,setCategoria] =useState('Desarrollo');
    const[prioridad,setPrioridad]=useState('MEDIA');

    function manejarSubmit(evento){
        evento.preventDefault();

        if(!titulo.trim()) return;
        const nuevaTarea={
            id_tarea: Date.now,
            titulo,
            descripcion,
            categoria,
            prioridad,
            estado:estadoInicial,
            usuario: 'sin agregar'
        };
        onCrear(nuevaTarea);
        onCerrar();
    }

    return (

        <div className="modal-overlay" onClick={onCerrar} >
            <div className="modal-contenido" onClick={(e)=>e.stopPropagation()}>
                <h3>Nueva Tarea</h3>
                <form onSubmit={manejarSubmit}>
                    <label>Titulo</label>
                    <input value={titulo} onChange={(e) =>setTitulo(e.target.value)} autoFocus />

                     <label>Descripcion</label>
                    <input value={descripcion} onChange={(e) =>setDescripcion(e.target.value)}/>

                    <label>Categoria</label>
                    <select value={categoria} onChange={(e)=>setCategoria(e.target.value)}>
                        <option>Diseño</option>
                        <option>Desarrollo</option>
                        <option>QA</option>
                    </select>

                    <label>Prioridad</label>
                    <select value={prioridad} onChange={(e)=>setPrioridad(e.target.value)}>
                        <option value="ALTA">Alta</option>
                        <option value="MEDIA">Media</option>
                        <option value="BAJA">Baja</option>
                    </select>

                    <div className="modal-acciones">
                        <button type="button" onClick={onCerrar}>Cancelar</button>
                        <button type="submit" className="btn-primario" >Crear Tarea</button>
                    </div>
               
               </form>

            </div>

        </div>
        
    );

}