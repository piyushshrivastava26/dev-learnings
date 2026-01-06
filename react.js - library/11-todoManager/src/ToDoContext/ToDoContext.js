import {useContext, createContext} from 'react'


export const TodoContext = createContext({
    ToDoS : [
        {
            id : 3421,
            toDoMessage : "write your conent",
            completed : false
        }
    ],
    addToDo : (toDoMessage) => {},
    updateToDo : (id, toDoMessage) => {},
    deleteToDo : (id) => {},
    toggleComplete : (id) => {}
})


export const ToDoProvider = TodoContext.Provider


export const useTodo = () => {
    return useContext(TodoContext)
}