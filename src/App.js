import './App.css';
import New from './components/New';
import Update from './components/Update';
import Dashboard from './components/Dashboard';
import MovieCart from './components/MovieCart';
import Movie from './components/Movie';

import {Routes, Route, Link} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <div className='App2'>
        <h1 className="pageTitle">Cubesmasher Video</h1>
        <Link className="navLink" to='/'>Dashboard</Link>
        <Link className="navLink" to='/new'>Add a Movie</Link>
      </div>
      








      <Routes>
        <Route path="/" element={<Dashboard/>}></Route>
        <Route path="/new" element={<New/>}></Route>
        <Route path="/update/:id" element={<Update/>}></Route>
        <Route path="/movie/:id" element={<Movie/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
