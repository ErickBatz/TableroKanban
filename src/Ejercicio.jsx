function tarea(){

    const tarea=[
    {id:1, titulo: "Diseño de mackups"},
    {id:2, titulo:"Configurar BD"}
];


    return( 
        <ul>
            {tarea.map(tarea=> (
                <li key={tarea.id}>{tarea.titulo}</li>
            ))}
        </ul>
    );
}