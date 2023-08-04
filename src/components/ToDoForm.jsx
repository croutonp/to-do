import React, {useState} from 'react'

const ToDoForm = (props) => {
  const [toDo, setToDo] = useState()

  const handleSubmit = (e) => {
    e.preventDefault()
    const tasks = {toDo, isCompleted: false}
    props.newToDo(tasks)
    setToDo("")



  }
  const updateToDo = (e) => {
    setToDo(e.target.value)
  }
  return (
    <div>
      <form action="">
        <label htmlFor="todo">To Do</label>
        <input type="text" name='todo' onChange={updateToDo} value={toDo} />
        <button onClick={handleSubmit}>Add</button>
      </form>
    </div>
  )
}

export default ToDoForm