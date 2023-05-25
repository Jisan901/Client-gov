import Navbar from "../components/Navbar";
import {Outlet,Link} from 'react-router-dom';
import useAuth from '../utilities/hooks/useAuth'

function AdminLayout() {
    const {logOut} = useAuth();
    return (
        <div>
            <Navbar open="my-drawer-2"/>
            <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
            <Outlet/>
          </div> 
          <div className="drawer-side">
            <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
            <ul className="menu p-4 w-80 bg-base-100 text-base-content">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/admin">Users</Link></li>
              <li><Link to="/admin/applications/pending">Pending</Link></li>
              <li><Link to="/admin/applications/rejected">Rejected</Link></li>
              <li><Link to="/admin/applications/successful">successful</Link></li>
              <li><button onClick={logOut}>Log out</button></li>
            </ul>
          
          </div>
        </div>
        </div>
    )
}

export default AdminLayout;