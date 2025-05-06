import React, { useState } from 'react'
import "./foot.css"
function Footer({taskList,currNumber, setTaskList, setCurrNumber, pageList, setPageList}) {
  const [count, setCount] = useState(1);

  const handleNextClick = () => {
    const newcurr = currNumber+5
    const newPage = taskList.slice(newcurr,newcurr+5)
    if (newPage.length > 0){
      setCurrNumber(currNumber+5)
      setPageList(newPage)
      setCount(count+1)
    } else{
      alert("You have reached end of the list.")
    }
  }

  const handlePrevClick = () => {
    if (currNumber >= 5){
      const newcurr = currNumber-5
      const newPage = taskList.slice(newcurr,newcurr+5)
      setCurrNumber(newcurr)
      setPageList(newPage)
      setCount(count-1)
    }
  }
  return (
    <div className='footer'>
        <button onClick={handlePrevClick} style={{color: "white"}}>Previous</button>
        <h3>{count}</h3>
        <button onClick={handleNextClick} style={{color: "white"}}>Next</button>
    </div>
  )
}

export default Footer