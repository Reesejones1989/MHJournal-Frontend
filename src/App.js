import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Journals from './pages/Journals';
import Edit from './pages/Edit';
import './App.css';

function App() {

  return (
    <div className="App">
          
    <Router>
        <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About/>} />
        <Route path='/journals' element={<Journals/>} />
        <Route path='/journals/:id' element={<Edit />}/>
        {/* <Route path='/:id/edit' element={<EditJournal />}/> */}
        </Routes>
        
      </Router>
      </div>
  )  }

export default App;
