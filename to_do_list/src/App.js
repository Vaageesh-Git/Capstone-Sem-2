import './App.css';
import SearchBox from './components/searchbar/searchBox';
import Tasks from './components/tasks/tasks';
import Footer from './components/footer/footer';
import { useState, useEffect } from 'react';
import Navbar from './components/navbar/navbar';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from "./components/Pages/login";
import Register from "./components/Pages/register";

function App() {
  const [taskList, setTaskList] = useState(["Task 1", "Task 2"]);
  const [currNumber, setCurrNumber] = useState(0);

  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );

  useEffect(() => {
    const handleStorageChange = () => {
      const status = localStorage.getItem("isLoggedIn") === "true";
      setIsLoggedIn(status);
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  return (
    <BrowserRouter>
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Routes>
        <Route path="/" element={<Navigate to={isLoggedIn ? "/home" : "/login"} replace />} />
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/Home" element={
          isLoggedIn ? (
            <div className='parent'>
              <div className='wrapper'>
                <div className="main">
                  <div className="heading">
                    <h1 style={{ color: "white" }}>To Do List</h1>
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
          ) : (
            <Navigate to="/login" replace />
          )
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
