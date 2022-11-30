import './App.css';
import { BrowserRouter as Routers, Routes, Route } from "react-router-dom";
import Home from './pages/home/Home.jsx'
import Hotel from './pages/hotel/Hotel.jsx'
import List from './pages/list/List.jsx'
import Login from './pages/login/Login.jsx'
import Register from './pages/register/Register';
// import Dashboard from '../../../../admin/Dashboard';


const App = () => {
  return (
    <div className="">
      <Routers>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/hotals' element={<Hotel />} />
          <Route path='/hotals/:id' element={<List />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          {/* <Route path='/admin' element={<Dashboard />} /> */}
        </Routes>
      </Routers>
    </div>
  );
}

export default App;
