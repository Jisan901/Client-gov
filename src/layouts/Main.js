import {Outlet} from 'react-router-dom';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Swaper from '../components/Swaper'
function Main() {
  return (
    <div>
        <Swaper/>
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
    </div>
  );
}

export default Main;