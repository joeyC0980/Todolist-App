import React,{useEffect} from 'react'
import{v4 as uuidv4} from "uuid";

const Form = ({input, setInput, todos, setTodos,editTodo,setEditTodo}) =>{



const updateTodo = (title,id,completed) =>{
    const newTodo = todos.map((todo) =>{
        return todo.id === id ? {title,id,completed} : todo
    });
    setTodos(newTodo);
    setEditTodo("");
}

useEffect(()=>{
    if(editTodo){
        setInput(editTodo.title);
    }else{
        setInput("")
    }
},[setInput,editTodo]);


    const oninputChange =(event) =>{
        setInput(event.target.value);
    }

    const onFormSubmit = (event) =>{
        event.preventDefault();
        if(!editTodo){
            setTodos([...todos,{id: uuidv4(),title: input, completed: false}]);
            setInput("");

        }else {
            updateTodo(input,editTodo.id,editTodo.completed)
        }
       

    }
    return(
       <form onSubmit={onFormSubmit}>
        <input type="text"
         placeholder='Enter 😁..' 
         className='task-input' 
         value={input} required
         onChange={oninputChange}
         
         
         />
        <button className='button-add' type="submit">
            {editTodo ? "ok ? press enter" : "Add"}
            </button>
       </form>
    )
}

export default Form;