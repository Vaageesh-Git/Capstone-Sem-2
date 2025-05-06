import React, { useState } from 'react'
import "./editer.css"
function Edit() {
    const [initVal, setInitVal] = useState("");
    return (
        <div className='card'>
            <input id="edit-input"/>
            <button id='edit-com-button'>Done</button>
        </div>)

}

export default Edit