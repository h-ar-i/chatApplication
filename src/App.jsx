import { useDispatch } from 'react-redux';
import './App.css'
import { Route, Routes } from 'react-router-dom';
import Join from './Components/Join';
import Chat from './Components/Chat';

function App() {

  return (
    <div>
       <Routes>
        <Route path='/' element={<Join/>}></Route>
        <Route path='/chat' element={<Chat/>}></Route>
      </Routes>
    </div>
  );
}

export default App
