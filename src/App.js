import React,{useState, useEffect} from 'react';
import './App.css';
import FormTareas from './components/FormTareas.component';
import Header from './components/Header.component';
import ListaTareas from './components/ListaTareas.component';

const  App = () => {

  const tareasGuardadas = localStorage.getItem('tareas') ? JSON.parse(localStorage.getItem('tareas')) : [];
  const [tareas, cambiarTareas] = useState(tareasGuardadas);

  useEffect(()=>{
    localStorage.setItem('tareas', JSON.stringify(tareas));
  }, [tareas]);

  const mostrarCompletadasGuardadas = JSON.parse(localStorage.getItem('mostrarCompletadas'));
  const [mostrarCompletadas, cambiarMostrarCompletadas]=useState(mostrarCompletadasGuardadas);
  
  useEffect(()=>{
    localStorage.setItem('mostrarCompletadas', JSON.stringify(mostrarCompletadas));
  });

  return (
    <div className="contenedor">
      <Header mostrarCompletadas={mostrarCompletadas} cambiarMostrarCompletadas={cambiarMostrarCompletadas}/>
      <FormTareas tareas={tareas} cambiarTareas={cambiarTareas}/>
      <ListaTareas tareas={tareas} cambiarTareas={cambiarTareas} mostrarCompletadas={mostrarCompletadas} />
    </div>
  );
}

export default App;
