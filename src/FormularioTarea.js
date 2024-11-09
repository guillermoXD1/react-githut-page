import React, { useState, useRef } from 'react';

function FormularioTarea({ agregarTarea }) {
    const [texto, setTexto] = useState('');
    const inputRef = useRef(null);

    const manejarSubmit = (e) => {
        e.preventDefault();
        if(texto.trim()) {
            agregarTarea(texto);
            setTexto('');
            inputRef.current.focus();
        }
    };

    return (
        <form onSubmit={manejarSubmit}>
            <input
                type='text'
                ref={inputRef}
                placeholder='Escribe una tarea'
                value={texto}
                onChange={(e) => setTexto(e.target.value)}
            />
            <button type='submit'>Agregar Tarea</button>
        </form>
    )
}

export default FormularioTarea;     