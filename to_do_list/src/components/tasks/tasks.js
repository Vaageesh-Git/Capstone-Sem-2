import React, { useState } from 'react'
import "./task.css"
function Tasks({taskList , setTaskList}) {
    const handleEditClick = () => {

    }
    const handleDelClick = (index) => {
        const finalList = taskList.filter((task,ind)=>{
            if (ind !== index){
                return task
            }
        })
        setTaskList(finalList)
    }
    return (
        <div>
            <ul style={{margin: 0, padding: 0}}>
            {
                taskList.map((tsk,index)=>
                    <li key={index} style={{listStyle: "none" , margin: 0, padding: 0}}>
                        <div className='card'>
                            <div id='li'>
                                {tsk}
                            </div>
                            <div className='card-buttons'>
                                <button onClick={() => handleEditClick(index)} style={{color: "rgb(12, 126, 196)"}}>Edit..</button>
                                <button onClick={() => handleDelClick(index)} style={{color: "red"}}>Delete</button>
                            </div>
                        </div>
                    </li>
                )
            }
            </ul>
        </div>
    )
}
export default Tasks