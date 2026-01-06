import React, { useState } from 'react'
// import  useTodo  from '../../ToDoContext/ToDoContext';

import { useTodo } from '../ToDoContext'

function TodoForm() {
    
    const [ToDoS, setToDoS] = useState('')
    const {addToDo} = useTodo()

    // const addLists = (e) => {
    //     e.preventDefault()
    //     // if (!ToDoS) {
    //     //     return

    //     addToDo({ToDoS:ToDoS, completed: false})
    //     setToDoS("")
    // }
    const addLists = (e) => {
        e.preventDefault()
        if (!ToDoS) {
            return;  // Prevent adding empty todos
        }
        addToDo({toDoMessage: ToDoS, completed: false})  // Fix the object key
        setToDoS("")
    }

    return (
        <form  
            className="flex"
            onSubmit={addLists}
        >
            <input
                type="text"
                value={ToDoS}
                onChange={(e) => setToDoS(e.target.value)}
                
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
            />
            <button 
                type="submit" 
                className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"

            >
                Add
            </button>
        </form>
    );


}


export default TodoForm;