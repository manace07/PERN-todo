import React, { Fragment, useEffect, useState } from 'react'
import EditTodo from './EditTodo';

const ListTodo = () => {
    const [todos, setTodos] = useState([]);

    // DELETE FUNCTION
    const deleteTodo = async(id) => {
        try {
            const deleteTodo = await fetch(`http://localhost:5000/todos/${id}`, {
                method: "DELETE"
            });
            setTodos(todos.filter(todo => todo.todo_id !== id));
        } catch (error) {
            console.error(error.message)
        }
    }

    // GET FUNCTION
    const getTodos = async() => {
        try {
            const response = await fetch("http://localhost:5000/todos")
            const jsonData = await response.json();
            setTodos(jsonData);
        } catch (error) {
            console.error(error.message);
        }
    }

    useEffect(() => {
        getTodos();
    }, []);

  return (
    <Fragment >
<table className="table-fixed flex justify-center m-5">
  <thead>
    <tr>
      <th>Song</th>
      <th>Artist</th>
      <th>Year</th>
      <th>dgfdgdfgf</th>
      <th>gdfgdfffffffffffffffff</th>
    </tr>
  </thead>
  <tbody>
    {todos.map(todo => (
        <tr key={todo.todo_id}>
            <td>{todo.todo_id}</td>
            <td>{todo.description}</td>
            <td><EditTodo todo = {todo} /></td>
            <td><button className='btn bg-red-600 p-4' onClick={() => deleteTodo(todo.todo_id)}>Delete</button></td>
        </tr>
        
    ))}

  </tbody>
</table>
    </Fragment>
  )
}

export default ListTodo
