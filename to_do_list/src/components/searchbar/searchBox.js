import React, { useState , useRef} from 'react'
import "./searchBox.css"
export default function SearchBox({setTaskList,taskList}) {
  const [task, setTask] = useState(""); 
  const val = useRef("");

  const handleChange = (e) => {
    setTask(e.target.value)
  }
  const handleClick = () => {
    if (task !== "" && !(taskList.includes(task))){
      setTaskList([...taskList,task])
    } else if (task == ""){
      alert("Write Something In the Task Box")
    } else if ((taskList.includes(task))) {
      alert("Task Already exists")
    }
    setTask("")
    val.current.value = ""
  }
  return (
    <div className="searchbar">
        <input ref={val} onChange={handleChange} placeholder='Add New Task....' required/>
        <button onClick={handleClick}>Add</button>
    </div>
  )
}
