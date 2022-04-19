
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Blogs from './Components/Blogs/Blogs';
import Chekout from './Components/Chekout/Chekout';
import Header from './Components/Header/Header';
import Login from './Components/Login/Login';
import Main from './Components/Main/Main';
import NotFound from './Components/NotFound/NotFound';
import RequireAuth from './Components/RequerAuth/RequierAuth';
import ResetPassword from './Components/ResetPassword/ResetPassword';
import Singup from './Components/Singup/Singup';
import Wellcome from './Components/Wellcome/Wellcome';

function App() {
  return (
    <div className="App">
     <Header></Header>
     <Routes>
       <Route path='/' element={<Main></Main>}></Route>
       <Route path='/aboutme' element={<About></About>}> </Route>
       <Route path='/blogs' element={<Blogs></Blogs>}></Route>
       <Route path='/login' element={<Login></Login>} />
       <Route path='/Singup' element={<Singup></Singup>}></Route>
       <Route path='/chekout' element={
       
       <RequireAuth> <Chekout></Chekout></RequireAuth>
       }>
       </Route>
       <Route path='/wellcome' element={<Wellcome></Wellcome>}></Route>
       <Route path='/reset' element={<ResetPassword></ResetPassword>}></Route>
       <Route path='*' element={<NotFound></NotFound>}></Route>
     </Routes>
     
    </div>
  );
}

export default App;
