import logo from "./logo.svg";

import { Routes , Route } from "react-router";
import {Link} from "react-router-dom"
import { Arrival } from "./components/New-Arrivals/Arrival";
import { Cart } from "./components/cart/cart";
import { SideBar } from "./components/sidebar/sidebar";
import { Footer } from "./components/footer/footer";
import { Navbar } from "./components/Navbar/Navbar";
import { Flash } from "./components/Flash/flash";
import { Coupon } from "./components/coupons/coupon";
import { Social } from "./components/socialsaving/social";
import { Home } from "./components/home/home";
import { Login } from "./components/login/login";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="" element={<Home></Home>}></Route>
        <Route path="/arrival" element={ <Arrival></Arrival>}> </Route>
        <Route path="/cart" element={ <Cart></Cart>}> </Route>
        <Route path="/flashdeals" element={ <Flash></Flash>}> </Route>
        <Route path="/coupon" element={<Coupon></Coupon>}/>
        <Route path="/social" element={<Social></Social>}/>
        <Route path="/login" element={<Login></Login>}></Route>
      </Routes>
      <Footer></Footer>
      
    </div>
  );
}

export default App;
