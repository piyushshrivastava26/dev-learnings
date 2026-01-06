import React, { useState } from "react";
import { useTodo } from "../ToDoContext";


function TodoItem({ toDoMessage }) {

    const {updateToDo, deleteToDo, toggleComplete} = useTodo()

    const [isTodoEditable, setIsTodoEditable] = useState(false)
    const [todoMsg, setTodoMsg] = useState(toDoMessage.toDoMessage)

    const editTodo = () => {
        updateToDo(toDoMessage.id, {...toDoMessage, toDoMessage:todoMsg})
        setIsTodoEditable(false)  // Fix typo here
    }

    const toggleCompleted = () => {
        toggleComplete(toDoMessage.id)
    }

    return (
      <div
        className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300 text-black ${
          toDoMessage.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
        }`}
      >
        <input
          type="checkbox"
          className="cursor-pointer"
          checked={toDoMessage.completed}
          onChange={toggleCompleted}  // Correct function reference
        />
        <input
          type="text"
          className={`border outline-none w-full bg-transparent rounded-lg ${
            isTodoEditable ? "border-black/10 px-2" : "border-transparent"
          } ${toDoMessage.completed ? "line-through" : ""}`}
          value={todoMsg}
          onChange={(e) => setTodoMsg(e.target.value)}
          readOnly={!isTodoEditable}
        />
        {/* Edit, Save Button */}
        <button
          className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
          onClick={() => {
            if (toDoMessage.completed) return;

            if (isTodoEditable) {
              editTodo();
            } else setIsTodoEditable((prev) => !prev);
          }}
          disabled={toDoMessage.completed}
        >
          {isTodoEditable ? "📁" : "✏️"}
        </button>
        {/* Delete Todo Button */}
        <button
          className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
          onClick={() => deleteToDo(toDoMessage.id)}
        >
          ❌
        </button>
      </div>
    );
}



export default TodoItem