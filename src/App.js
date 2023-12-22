import { Route, Routes } from 'react-router-dom';
import './App.css';
import ListMovie from './Components/ListMovie';
import NavMovie from './Components/NavMovie';
import Home from './Components/Home';

function App() {
  
  return (
    <div>
      <NavMovie/>

      <Routes>
        <Route path='/' element = {<Home/>} />
        <Route path='/ListMovie' element={<ListMovie/>}/>
      </Routes>
      

    </div>
  );
}

export default App;
