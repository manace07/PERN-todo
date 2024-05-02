import React, {Fragment, useState} from 'react'

const InputTodo = () => {
  const [description, setDescription] = useState("")
  const onSubmitForm = async(e) => {
    e.preventDefault();
    try {
      const body = { description };
      const response = await fetch("http://localhost:5000/todos",
      {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(body)
      });
      window.location = "/";
      console.log(response);
    } catch (error) {
      console.error(error.message);
    }
  }

  return (
    <Fragment>
      <h1 className= 'flex justify-center mt-5'>Todo List</h1>
      <form action="" className='flex justify-center' onSubmit={onSubmitForm}>
        <input type="text" name="input" id="input" placeholder='Type' value={description} onChange={e => setDescription(e.target.value)} className='flex bg-black text-white p-2 m-5'/>
        <button className=' flex bg-slate-900 text-white p-2 m-5'>submit</button>
      </form>
    </Fragment>
  )
}

export default InputTodo
