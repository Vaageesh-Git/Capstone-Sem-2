import React, { useState } from 'react'
import "./editer.css"
function Edit({index, taskList, setTaskList, setEdit,val}) {
    const [text, setText] = useState(val);
    const handleChange = (e) => {
        setText(e.target.value)
    }
    const handleClick = () => {
        if (text !== ""){
            taskList[index] = text
            setTaskList(taskList)
        }
        setText("")
        setEdit(false)
    }
    return (
        <div className='card'>
            <div className='edit-box'>
                <input autoFocus value= {text} onChange={handleChange} id="edit-input"/>
            </div>
            <button onClick={handleClick} id='edit-com-button'>Done</button>
        </div>)
}

export default Edit