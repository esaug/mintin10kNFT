import logo from './logo.svg';
import './App.css';
import CompleteApp from './completeApp';
import Whitepapper from './components/whitepapper'
import MyNFT from './components/myNFT'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import store from '../src/redux/store'
import {useSelector} from 'react-redux'

function App(props) {
    
  
  return (
      

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CompleteApp/>}/>
          <Route path='/whipapper' element={<Whitepapper/>}/>
          <Route path='/mynft' element={<MyNFT/>}/>
        </Routes>
      </BrowserRouter>
  
  );
}

export default App;
