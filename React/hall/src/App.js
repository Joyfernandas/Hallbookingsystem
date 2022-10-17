import './App.css';
import { BrowserRouter, Routes, Route, Outlet, Navigate } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect, useLayoutEffect } from 'react';
import Home from './Components/Home';
import Nav from './Assets/Nav';
import Login from './Components/Login';
import Booking from './Components/Booking';
import Hall_details_view from './Components/Hall_details_view';
import Billing from './Components/Billing';
import Employe_crud from './Components/Cruds/Employe_crud';
import Customer_crud from './Components/Cruds/Customer_crud';
import Employe_detail_upload from './Components/Add/Employe_detail_upload';
import Hall_details_upload from './Components/Add/Hall_details_upload';
import Hall_crud from './Components/Cruds/Hall_crud';
import Hall_edit from './Components/Edit/Hall_edit';
import Custom_edit from './Components/Edit/Custom_edit';
import Customer_setail_upload from './Components/Customer_setail_upload';
import Bill from './Components/Cruds/Bill';
import Dashboard from './Components/Dashboard';
import Employeedit from './Components/Edit/Employedit';
import Invoice from './Components/Invoice';


function App() {

  const [auth, setAuth] = useState(false);
  const [loading, setLoading] = useState(true);

  const PrivateRoute = () => {
    return (
      auth ? <Outlet /> : <Navigate to='/login' />
    )
  }


  useLayoutEffect(() => {
    let local = localStorage.getItem('access')
    console.log('locak', local)
    if (local !== null) {
      axios.defaults.headers['Authorization'] = 'JWT ' + local;
      setAuth(true);
    }
    else { setAuth(false) }
  }, [])


  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/customer_setail_upload' element={<Customer_setail_upload />} />
          <Route path='/login' element={<Login test={setAuth} />} />
          <Route element={<PrivateRoute />}>
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/hall_details_view' element={<Hall_details_view />} />
            <Route path='/nav' element={<Nav />} />
            <Route path='/booking/:id' element={<Booking />} />
            <Route path='/billing/:id' element={<Billing />} />
            <Route path='/employe_detail_upload' element={<Employe_detail_upload />} />
            <Route path='/employe_crud' element={<Employe_crud />} />
            <Route path='/customer_crud' element={<Customer_crud />} />
            <Route path='/hall_details_upload' element={<Hall_details_upload />} />
            <Route path='/hall_crud' element={<Hall_crud />} />
            <Route path='/hall_edit/:id' element={<Hall_edit />} />
            <Route path='/custom_edit/:id' element={<Custom_edit />} />
            <Route path='/bill' element={<Bill />} />
            <Route path='/employeedit/:id' element={<Employeedit />} />
            <Route path='/invoice/:id' element={<Invoice />} />
          </Route>
        </Routes>
      </BrowserRouter >
    </>
  );
}
export default App;
