import React from 'react';
import Tarea from './Tarea';

function ListaTareas({ tareas, eliminarTarea, toggleCompletarTarea }) {
    return (
        <ul>
            {tareas.map(tarea => (
                <Tarea
                    key={tarea.id}
                    tarea={tarea}
                    eliminarTarea={eliminarTarea}
                    toggleCompletarTarea={toggleCompletarTarea}
                />
            ))}
        </ul>
    )
}

export default ListaTareas;