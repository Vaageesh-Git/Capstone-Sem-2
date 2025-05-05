import './App.css';
import SearchBox from './components/searchbar/searchBox';
import Tasks from './components/tasks/tasks';
import Footer from './components/footer/footer';
import { useState } from 'react';
function App() {
  const [taskList, setTaskList] = useState(["Task 1","Task 2","Task 3", "Task 4","Task 5"])
  return (
    <div className="main">
      <div className="heading">
        <h1 style={{color: "white"}}>To Do List</h1>
      </div>
      <div className='content'>
        <SearchBox taskList= {taskList} setTaskList={setTaskList}/>
        <Tasks taskList={taskList} setTaskList={setTaskList}/>
      </div>
      <p style={{color:"white"}}>* List Ends Here *</p>
      <Footer />
    </div>

  );
}

export default App;