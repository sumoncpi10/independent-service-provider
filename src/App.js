import logo from './logo.svg';
import './App.css';
import Header from './Pages/Shared/Header/Header';
import Slider from './Pages/Home/Slider/Slider';
import Home from './Pages/Home/Home';
import { Route, Routes } from 'react-router-dom';
import About from './Pages/About/About';
import NotFound from './Pages/NotFound/NotFound';
import Photos from './Pages/Photos/Photos';
import Footer from './Pages/Shared/Footer/Footer';
import Services from './Pages/Services/Services';
import Topbanar from './Pages/Shared/TopBanar/Topbanar';
import Contact from './Pages/Contact/Contact';
import Blog from './Pages/Blog/Blog';
import LogIn from './Pages/LogIn/LogIn';
import SignUp from './Pages/SignUp/SignUp';
import RequireAuth from './Pages/RequireAuth/RequireAuth';
import Inventory from './Pages/Inventory/Inventory';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        {/* <Route path='/home' element={<></Home>}></Route> */}
        <Route path='/services' element={<Services></Services>}></Route>
        <Route path='/inventory' element={
          <RequireAuth>
            <Inventory />
          </RequireAuth>}>
        </Route>
        <Route path='/photos' element={<Photos></Photos>}></Route>
        <Route path='/photos/:weeding' element={<Photos></Photos>}></Route>
        <Route path='/photos/:tour' element={<Photos></Photos>}></Route>
        <Route path='/photos/:fashion' element={<Photos></Photos>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/login' element={<LogIn />}></Route>
        <Route path='/signup' element={<SignUp />}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
