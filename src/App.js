import './App.css';
import { BrowserRouter } from "react-router-dom";
import {Routes,Route} from 'react-router-dom';
import Main from "./layouts/Main";
import AdminLayout from "./layouts/AdminLayout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Applications from "./pages/Applications";
import ApplyAsPrl from "./pages/ApplyAsPrl";
import ForgetPass from "./pages/ForgetPass";
import ApplyAsNormal from "./pages/ApplyAsNormal";
import {Toaster} from "react-hot-toast"
import PrivateRoute from './components/PrivateRoute'
import PrlOnly from './components/PrlOnly'
import NormalOnly from './components/NormalOnly'
import AdminOnly from './components/AdminOnly'

function App() {
  return (
      <>
      <Toaster/>
<BrowserRouter>
        <Routes>
            <Route path="/" element={<Main/>}>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/login" element={<Login/>}></Route>
                <Route path="/signup" element={<Signup/>}></Route>
                <Route path="/forget" element={<ForgetPass/>}></Route>
                <Route path="/dashboard" element={<PrivateRoute><Dashboard/></PrivateRoute>}></Route>
                
                <Route path="/apply_prl" element={
                    <PrivateRoute>
                    <PrlOnly>
                        <ApplyAsPrl/>
                    </PrlOnly>
                    </PrivateRoute>
                }></Route>
                
                <Route path="/apply_normal" element={
                    <PrivateRoute>
                    <NormalOnly>
                        <ApplyAsNormal/>
                    </NormalOnly>
                    </PrivateRoute>
                }></Route>
            </Route>
            <Route path="/admin" element={
            <PrivateRoute>
            <AdminOnly><AdminLayout/></AdminOnly>
            </PrivateRoute>
                
            }>
                <Route path="/admin" element={<Users/>}></Route>
                <Route path="/admin/applications/:status" element={<Applications/>}></Route>
            </Route>
        </Routes>
</BrowserRouter>
</>
  );
}

export default App;
