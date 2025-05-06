import './App.css';
import SearchBox from './components/searchbar/searchBox';
import Tasks from './components/tasks/tasks';
import Footer from './components/footer/footer';
import { useState } from 'react';
function App() {
  const [taskList, setTaskList] = useState(["Task 1","Task 2","Task 3", "Task 4","Task 5"])
  const [currNumber, setCurrNumber] = useState(0);
  const [pageList,setPageList] = useState(taskList.slice(currNumber,currNumber+5));
  
  return (
    <div className="main">
      <div className="heading">
        <h1 style={{color: "white"}}>To Do List</h1>
      </div>
      <div className='content'>
        <SearchBox taskList= {taskList} setTaskList={setTaskList}/>
        <Tasks taskList={taskList} currNumber={currNumber} setTaskList={setTaskList} pageList={pageList} setPageList={setPageList}/>
      </div>
      <p style={{color:"white"}}>* List Ends Here *</p>
      <Footer taskList={taskList} setTaskList={setTaskList} currNumber={currNumber} setCurrNumber={setCurrNumber} pageList={pageList} setPageList={setPageList}/>
    </div>

  );
}

export default App;