import './App.css';
import SearchBox from './components/searchbar/searchBox';
import Tasks from './components/tasks/tasks';
import Footer from './components/footer/footer';
function App() {
  return (

    <div className="main">
      <div className="heading">
        <h1 style={{color: "white"}}>To Do List</h1>
      </div>
      <div className='content'>
        <SearchBox />
        <Tasks/>
      </div>
      <p style={{color:"white"}}>* List Ends Here *</p>
      <Footer />
    </div>

  );
}

export default App;