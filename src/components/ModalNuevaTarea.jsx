import { useState, useEffect } from "react";
import { tareaApi, usuarioApi } from "../service/api";

export default function ModalNuevaTarea({ estadoInicial, onCrear, onCerrar }) {
  const [titulo, setTitulo] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [categoria, setCategoria] = useState('Desarrollo');
  const [prioridad, setPrioridad] = useState('MEDIA');
  const [usuarios, setUsuarios] = useState([]);
  const [idUsuario, setIdUsuario] = useState('');

  useEffect(() => {
    usuarioApi.listar()
      .then(datos => {
        setUsuarios(datos);
        if (datos.length) setIdUsuario(datos[0].id_usuario);
      })
      .catch(error => console.error('No se pudieron cargar los usuarios', error));
  }, []);

  async function manejarSubmit(evento) {
    evento.preventDefault();
    if (!titulo.trim()) return;

    const nuevaTarea = {
      titulo,
      descripcion,
      categoria,
      prioridad,
      estado: estadoInicial,
      id_usuario: idUsuario
    };

    try {
      const resultado = await tareaApi.crear(nuevaTarea);
      onCrear(resultado.data);
      onCerrar();
    } catch (error) {
      console.error('No se pudo crear la tarea', error);
    }
  }

  return (
    <div className="modal-overlay" onClick={onCerrar}>
      <div className="modal-contenido" onClick={(e) => e.stopPropagation()}>
        <h3>Nueva Tarea</h3>
        <form onSubmit={manejarSubmit}>
          <label>Titulo</label>
          <input value={titulo} onChange={(e) => setTitulo(e.target.value)} autoFocus />

          <label>Descripcion</label>
          <input value={descripcion} onChange={(e) => setDescripcion(e.target.value)} />

          <label>Categoria</label>
          <select value={categoria} onChange={(e) => setCategoria(e.target.value)}>
            <option>Diseño</option>
            <option>Desarrollo</option>
            <option>QA</option>
          </select>

          <label>Prioridad</label>
          <select value={prioridad} onChange={(e) => setPrioridad(e.target.value)}>
            <option value="ALTA">Alta</option>
            <option value="MEDIA">Media</option>
            <option value="BAJA">Baja</option>
          </select>

          <label>Responsable</label>
          <select value={idUsuario} onChange={(e) => setIdUsuario(e.target.value)}>
            {usuarios.map(u => (
              <option key={u.id_usuario} value={u.id_usuario}>{u.nombre}</option>
            ))}
          </select>

          <div className="modal-acciones">
            <button type="button" className="btn-secundario" onClick={onCerrar}>Cancelar</button>
            <button type="submit" className="btn-primario">Crear Tarea</button>
          </div>
        </form>
      </div>
    </div>
  );
}