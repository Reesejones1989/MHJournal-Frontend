import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Journals from './pages/Journals';

import './App.css';

function App() {
  return (
    <div className="App">
          
    <Router>
        <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About/>} />
        {/* <Route path='/:id' element={<Todo />}/> */}
        <Route path='/journals' element={<Journals/>} />
        {/* <Route path='/:id/edit' element={<EditTodo />}/> */}
        </Routes>
        
      </Router>
      </div>
  )  }

export default App;
