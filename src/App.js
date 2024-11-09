import React, { useState, useEffect } from 'react';
import FormularioTarea from './FormularioTarea';
import ListaTareas from './ListaTareas';
import './App.css';

function App() {
  const [tareas, setTareas] = useState([]);

  // Cargar tareas guardadas en localStorage al inicio
  useEffect(() => {
    const tareasGuardadas = JSON.parse(localStorage.getItem('tareas')) || [];
    setTareas(tareasGuardadas);
  }, []);

  // Guardar tareas en localStorage cada vez que cambian
  useEffect(() => {
    localStorage.setItem('tareas', JSON.stringify(tareas));
  }, [tareas]);
  
  const agregarTarea = (texto) => {
    const nuevaTarea = { id: Date.now(), texto, completada: false};
    setTareas([nuevaTarea, ...tareas]);
  };

  const eliminarTarea = (id) => {
    setTareas(tareas.filter(tarea => tarea.id !== id));
  };

  const toggleCompletarTarea = (id) => {
    setTareas(
      tareas.map(tarea =>
        tarea.id === id ? {...tarea, completada: !tarea.completada } : tarea
      )
    );
  };

  return (
    <div>
      <h1>Lista de Tareas</h1>
      <FormularioTarea agregarTarea={agregarTarea} />
      <ListaTareas
        tareas={tareas}
        eliminarTarea={eliminarTarea}
        toggleCompletarTarea={toggleCompletarTarea}
      />
    </div>
  );
}

export default App;
