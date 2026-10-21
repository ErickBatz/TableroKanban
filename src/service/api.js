const BASE_URL = 'http://localhost/fs2026/ci4-tableroKanban/public/index.php/api';

async function peticion(ruta, {metodo= 'GET', datos} = {}){
    const respuesta = await fetch(`${BASE_URL}/${ruta}`,{
        method: metodo,
        headers:{'Content-Type':'application/json', Accept: 'application/json'},
        body: datos ? JSON.stringify(datos) : undefined,
    });
    const contenido = await respuesta.json().catch(()=>null);

    if(!respuesta.ok){
        const mensaje = contenido?.messages
        ? Object.values(contenido.message).join('')
        : respuesta.statusText;
        throw new Error(mensaje); 
    }
    return contenido;
}

export const tareaApi = {
    listar: () => peticion('tareas'),
    crear: (datos) => peticion('tareas',{metodo: 'POST',  datos}),
    actualizar: (id, datos) => peticion(`tareas/${id}`,{metodo: 'PUT', datos}),
    eliminar: (id) => peticion(`tareas/${id}`,{metodo: 'DELETE'}), 
};
export const usuarioApi ={
    listar: () => peticion('usuarios'),
};