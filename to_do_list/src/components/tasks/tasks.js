import React, { useState } from 'react'
import "./task.css"
import Edit from '../editable/edit';
function Tasks({taskList , setTaskList,currNumber}) {
    const [edit, setEdit] = useState(false);
    const [editInd, setEditInd] = useState(null);
    const handleEditClick = (index) => {
        const finalList = taskList.filter((task,ind)=>{
            if (ind !== index){
                return task
            } else{
                setEdit(true)
                setEditInd(index)
                return task
            }
        })
        setTaskList(finalList)
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
                taskList.slice(currNumber,currNumber+5).map((tsk,index)=>{
                    const actualInd = currNumber + index
                    return (
                        <li key={actualInd} style={{listStyle: "none" , margin: 0, padding: 0}}>
                            { edit && editInd == actualInd ? 
                            <Edit val={tsk} index= {actualInd} setTaskList={setTaskList} taskList={taskList} setEdit={setEdit}/>
                            :(
                            <div className='card'>
                                <div id='li'>
                                    {tsk}
                                </div>
                                <div className='card-buttons'>
                                    <button onClick={() => handleEditClick(actualInd)} style={{color: "rgb(12, 126, 196)"}}>Edit..</button>
                                    <button onClick={() => handleDelClick(actualInd)} style={{color: "red"}}>Delete</button>
                                </div>
                            </div>)
                            }
                        </li>
                    )
                })
            }
            </ul>
        </div>
    )
}
export default Tasks