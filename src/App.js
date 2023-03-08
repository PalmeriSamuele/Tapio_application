
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Actions from './components/Actions';
import ToDoItem from './components/ToDoItem';



function App() {
  const [searchInput, setSearchInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [eventCounter, setEventCounter] = useState(0);


  useEffect(() => {
    const fetchData = async () => {
      try {
          const res = await axios.get('http://localhost:3000/todos');
          const data = res.data.map(row => ({
              key: row.id,
              id: row.id, 
              title: row.title, 
              completed: row.completed, 

          }));        
          
          setTodos(data);
      } catch (err) {
          console.error(err);
      } finally {
          setLoading(false);
      }
    };
  
    fetchData();
}, [eventCounter]);
  return (
    loading ? (
      'Loading'
    ) : (
    <section id='tapio-app'>
        <header>
            <div className='header-title'>
              <h1 id='title-app'>Tapio</h1>
              <img id='logo' src="https://tapioview.s3.amazonaws.com/static/img/logo-tapio-blue.png?AWSAccessKeyId=AKIAXL23VGMDKSIWWZ5W&Signature=oEB5WUMxzGzACmNGXVzHSh%2FwFLQ%3D&Expires=1993637960" alt="" />
            </div>
            <Actions  />
        </header>



        <div id='todos-section'>
          {todos.map((todo)=>{
            return (
              <ToDoItem eventCounter={eventCounter} setEventCounter={setEventCounter} todo={todo}/>
            )
          })}
        </div>
    </section>
  ));
}

export default App;

