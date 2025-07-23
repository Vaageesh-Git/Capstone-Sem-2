import './App.css';
import SearchBox from './components/searchbar/searchBox';
import Tasks from './components/tasks/tasks';
import Footer from './components/footer/footer';
import Navbar from './components/navbar/navbar';
import Login from './components/Pages/login';
import Register from './components/Pages/register';
import { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

function App() {
  const [taskList, setTaskList] = useState(["Task 1", "Task 2"]);
  const [currNumber, setCurrNumber] = useState(0);

  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        {/* Redirect root to login */}
        <Route path="/" element={<Navigate to="/login" />} />

        {/* Login and Register Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Home Route for To-Do List App */}
        <Route path="/home" element={
          <div className='parent'>
            <div className='wrapper'>
              <div className="main">
                <div className="heading">
                  <h1 style={{ color: "#3498db" }}>To Do List</h1>
                </div>
                <div className='content'>
                  <SearchBox 
                    taskList={taskList} 
                    setTaskList={setTaskList} 
                    currNumber={currNumber} 
                    setCurrNumber={setCurrNumber} 
                  />
                  <Tasks 
                    taskList={taskList} 
                    currNumber={currNumber} 
                    setTaskList={setTaskList} 
                    setCurrNumber={setCurrNumber} 
                  />
                </div>
                <Footer 
                  taskList={taskList} 
                  setTaskList={setTaskList} 
                  currNumber={currNumber} 
                  setCurrNumber={setCurrNumber} 
                />
              </div>
            </div>
          </div>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
