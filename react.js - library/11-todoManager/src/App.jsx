import { useEffect, useState } from "react";
import "./App.css";
import { ToDoProvider } from "./ToDoContext";
import TodoForm from "./Components/ToDoForm";
import TodoItem from "./Components/ToDoItem";

function App() {

  const [ToDoS, setToDoS] = useState([])

  const addToDo = (toDoMessage) => {
    setToDoS( (prev) => [{id : Date.now(), ...toDoMessage},...prev])
  }

  const updateToDo = (id, toDoMessage) => {
    setToDoS( (prev) => prev.map((prevToDo) => (prevToDo.id === id ? toDoMessage : prevToDo) ) )
  }

  const deleteToDo = (id) => {
    setToDoS( (prev) => prev.filter( (toDoMessage) => toDoMessage.id != id))
  }

  const toggleComplete = (id) => {
    setToDoS( (prev) => prev.map((prevToDo) => prevToDo.id === id ? {...prevToDo, completed: !prevToDo.completed} : prevToDo))
  } 


  // Local Storage {} allows to save key\value pairs in the browser

  // using local storage to store the alloted tasks


  // setting todos
  useEffect( () => {
    localStorage.setItem('ToDoS', JSON.stringify(ToDoS))
  },[ToDoS])

  // getting todos
  useEffect( () => {
    let ToDoS = JSON.parse(localStorage.getItem('ToDoS'))

    if (ToDoS && ToDoS.length > 0) {
      setToDoS(ToDoS)
    }
  }, [])


  return (
    <ToDoProvider value={{ToDoS, addToDo, updateToDo, deleteToDo, toggleComplete}}>

      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">

          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>

          <div className="mb-4"><TodoForm /></div>

          <div className="flex flex-wrap gap-y-3">
            {
              ToDoS.map( (toDoMessage) => (
                <div 
                  key={toDoMessage.id}
                  className="w-full"
                >
                  <TodoItem toDoMessage = {toDoMessage}/>
                </div>
              ))
            }
          </div> 

        </div>
      </div>

    </ToDoProvider>
  );
}

export default App;
