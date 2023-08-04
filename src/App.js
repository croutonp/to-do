import logo from './logo.svg';
import './App.css';
import DisplayForm from './components/DisplayForm';
import ToDoForm from './components/ToDoForm';
import React, {useState} from 'react'

function App() {

  const[nextToDo, setNextTodo] = useState([])
  const addToList = (task) => {
    setNextTodo([...nextToDo,task])
  }
  const deleteCurrentTask = (deleteIdx) => {
    const remove = nextToDo.filter((eachTask, Idx) => Idx !== deleteIdx)
    setNextTodo(remove)
  }

  const updateTask = (updateIdx, isChecked) => {
    const newTasks = nextToDo.map((eachTask, Idx) =>{
      if(updateIdx === Idx){
        return {...eachTask, isCompleted:isChecked}
      }
      else{
      
       return eachTask
      }  
    })
    setNextTodo(newTasks)
  }

  return (
    <div className='App'>
      <ToDoForm newToDo={addToList}></ToDoForm>
      <DisplayForm nextToDo={nextToDo} deleteTask = {deleteCurrentTask} updateTask = {updateTask}></DisplayForm>
    </div>
    
  )
}

export default App;
