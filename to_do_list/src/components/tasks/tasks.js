import React, { useState } from 'react'
import "./task.css"
function Tasks() {
    const [taskList, setTaskList] = useState(["Task 1","Task 2","Task 3", "Task 4","Task 5"])
  return (
    <div>
        <ul style={{margin: 0, padding: 0}}>
        {
            taskList.map((tsk)=>
                <li style={{listStyle: "none" , margin: 0, padding: 0}}>
                    <div className='card'>
                        <div id='li'>
                            {tsk}
                        </div>
                        <div className='card-buttons'>
                            <button style={{color: "rgb(12, 126, 196)"}}>Edit..</button>
                            <button style={{color: "red"}}>Delete</button>
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