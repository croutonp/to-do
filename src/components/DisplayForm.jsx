import React, {useState} from 'react'



const DisplayForm = (props) => {
const deleteNewTask = (Idx) =>{
    props.deleteTask(Idx)
}
    
const makeComplete = (Idx, isChecked) => {
    props.updateTask(Idx, isChecked)
}

    return(
        <div style={{display: 'inline-flex', flexDirection: 'column', flexWrap: 'wrap', alignContent: 'center', justifyContent: 'center'}}>
            {props.nextToDo.map((eachTask, Idx) =>{

            
            return(
                <div style ={{display: 'flex'  , justifyContent: 'center',height:50, width:50, margin: 25, alignItems: 'center'}}>

                    {eachTask.isCompleted?<p style={{textDecoration: 'line-through'}}>{eachTask.toDo}</p>:<p>{eachTask.toDo}</p>}
                    
                    <input type="checkbox" checked={eachTask.isCompleted} onChange={(e)=>makeComplete(Idx,e.target.checked)} />
                    <button onClick = {() => deleteNewTask(Idx)}>Delete</button>
                </div>
             )
            }
           )
          }
          
        </div>
    )
}





export default DisplayForm