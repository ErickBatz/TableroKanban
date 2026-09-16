export default function Header(){
    return (
        <header className="app-header">
            <div className="logo">Gestion de Trabajo</div>
            <input 
            type="text"
            className="buscador"
            placeholder="Buscar tu Tarea......"
            />
            <div className="usuario-actual">
                <span className="avatar">EB</span>
                Erick Batz
            </div>
        </header>
    );
}