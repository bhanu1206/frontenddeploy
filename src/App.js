import './App.css';
import { Route, Routes} from 'react-router-dom';
import Login from './component/Login';
import Home from './component/Home';
import History from './component/History';
import Cart from './component/Cart';
import Account from './component/Account';
import Adminaccount from './component/Adminaccount';
import Adminhistory from './component/Adminhistory';
import Adminhome from './component/Adminhome';
import Adminmenu from './component/Adminmenu';
import Register from './component/Register';
import Welcome from './component/Welcome';
import Feedback from './component/Feedback';
import Adminlogin from './component/Adminlogin';
import MenuItem from './component/MenuItems';
import Checkout from './component/Checkout';
import Addmenu from './component/AddMenu';
import Learnmore from "./component/Learnmore";
import Deletemenu from './component/DeleteMenu';
import AddFeedback from './component/AddFeedback';
import RestaurantRegister from './component/RestaurantRegister';
import RestaurantLogin from './component/RestaurantLogin';
function App() {
  return (
    <>
    
    <Routes>
        <Route path='/' element={<Welcome />} />
        <Route path='/learnmore' element={<Learnmore />} />
        <Route path='/login' element={<Login />} />
        <Route path='/menudetails/:restaurantId' element={<MenuItem/>}/>
        <Route path='/checkout/:itemId' element={<Checkout/>}/>
        <Route path='/register' element={<Register/>} />
        <Route path='/adminlogin' element={<Adminlogin/>} />
        <Route path='/user/home' element={<Home/>} />
        <Route path='/history' element={<History />} />
        <Route path='/cart/:itemId' element={<Cart/>} />
        <Route path='/logout' element={<Welcome/>} />
        <Route path='/adminlogout' element={<Welcome/>} />
        <Route path='/adminhistory' element={<Adminhistory />} />
        <Route path='/adminhome' element={<Adminhome />} />
        <Route path='/adminmenu' element={<Adminmenu />} />
        <Route path='/feedback' element={<Feedback />} />
        <Route path='/addmenu' element={<Addmenu />} />
        <Route path='/deletemenu' element={<Deletemenu/>} />
        <Route path='/addfeedback' element={<AddFeedback />}/>
        <Route path='/restaurantregister' element={<RestaurantRegister/>}/>
        <Route path='/restaurantlogin' element={<RestaurantLogin/>}/>
        

    </Routes>
    
    </>
  );
}

export default App;
