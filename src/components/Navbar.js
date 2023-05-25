import image from "../assets/logo.png"
import useAuth from "../utilities/hooks/useAuth"
import useServerUser from "../utilities/hooks/useServerUser"
import {Link} from "react-router-dom";
function Navbar({open}) {
    const {user,logOut} = useAuth();
    const {user:user2} = useServerUser();
    const menu = <>
        <li><Link to="/dashboard">ড্যাশবোর্ড</Link></li>
        {user2?.role==="admin"?<li><Link to="/admin">অ্যাডমিন</Link></li>:<></>}
    </>
    
    return (
<div className="navbar bg-glass-300">
  <div className="navbar-start">
    <div className="dropdown">
      {open?
          <label htmlFor={open} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
        :
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
        }
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            {menu}
      </ul>
    </div>
    <Link to="/" className="btn btn-ghost normal-case text-xl">
    <img src={image} className="mr-1" height="36" width="36" alt="logo" />
    <span>
        সমাজ কল্যান মন্ত্রণালয়
    </span>
    </Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {menu}
    </ul>
  </div>
  <div className="navbar-end">
    {user?.uid?
    <button onClick={logOut} className="btn btn-primary btn-sm text-white">লগআউট</button>
    :
    
    <Link to="/login" className="btn btn-primary btn-sm text-white">লগইন</Link>
    }
  </div>
</div>
    )
}

export default Navbar;