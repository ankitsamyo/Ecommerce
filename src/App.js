
import {Route,Routes } from 'react-router-dom';
// import TaskHome from './Task/TaskHome';
import Home from './Componets/Home';
import Cart from './Componets/Cart';
// import TaskCart from './Task/TaskCart';

export default function App() {
                            

  return (
    <>
   <div>
   
    <Routes>
    <Route path='/Cart' element={<Cart/>}/>
    <Route path='/' element={ <Home/>}/>
    </Routes>
   </div>
    </>
  )
}
