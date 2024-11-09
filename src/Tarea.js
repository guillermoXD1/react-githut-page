import React from 'react';

function Tarea({ tarea, eliminarTarea, toggleCompletarTarea }) {
    return (
        <li style={{ textDecoration: tarea.completada ? 'line-through' : 'none' }}>
            <span onClick={() => toggleCompletarTarea(tarea.id)}>
                {tarea.texto}
            </span>
            <button onClick={() => eliminarTarea(tarea.id)}>Eliminar</button>

        </li>
    );
}

export default Tarea;