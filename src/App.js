import { Routes,Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Pages/Home';
import Company from './components/Pages/Company';
import Team from './components/Pages/Team';
import Contact from './components/Pages/Contact';

function App() {
  return (
    <div className="App">
    <Header/>
    <Routes>
      <Route path='/' element = {<Home/>} />
      <Route path='/company' element = {<Company/>}/>
      <Route path='/team' element = {<Team/>}/>
      <Route path='/Contact' element = {<Contact/>}/>
      

    </Routes>
    </div>
  );
}

export default App;
