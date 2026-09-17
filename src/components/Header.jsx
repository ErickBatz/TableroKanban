import TarjetaTarea from "./TarjetaTarea";

export default function Header(onNuevaTarea){
    return (
        <header className="app-header">
            <div className="logo">Gestion de Trabajo</div>
            <input 
            type="text"
            className="buscador"
            placeholder="Buscar tu Tarea......"
            />

            <div className="header-derecho">
                <button
                    className="btn-nueva-tarea-header"
                    onClick={onNuevaTarea}
                >Nueva Tarea</button>
            </div>

            <div className="usuario-actual">
                <span className="avatar">EB</span>
                Erick Batz
            </div>
        </header>
       
        
    );
}