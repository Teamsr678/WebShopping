import Home from './asset/components/Home';
import Login from './asset/components/Login';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Register from './asset/components/Register';
import Test from './asset/components/Test'
import RegisterSuccess from './asset/components/RegisterSuccess';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/logout' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/register_success' element={<RegisterSuccess/>}/>
        <Route path='/test' element={<Test/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
