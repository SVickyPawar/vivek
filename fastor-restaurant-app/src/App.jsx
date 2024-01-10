import {Routes,Route} from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Otp from './components/Otp';
import Homepage from './components/Homepage';
import ResDetail from './components/ResDetail';

function App() {
  return (
    <div className="App">
      
      <div className='mainContainer'>
      <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/otpinput' element={<Otp/>}/>
      <Route path='/restaurants' element={<Homepage/>}/>
      <Route path='/restaurants/:id' element={<ResDetail />} />
    </Routes>
      </div>
   
    </div>
  
  );
}

export default App;
