import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import UserLists from './components/UserLists'
import CounterRedux from './components/CounterRedux'
import Employees from './components/Employees';
import EmployeesRedux from './components/EmployeesRedux';

function App (){
 return (
  <React.Fragment >
    <NavBar/>
    <Routes>
      <Route path={'/'} element={<Home/>}/>
      <Route path={'/counter'} element={<CounterRedux/>}/>
      <Route path={'/employees'} element={<EmployeesRedux/>}/>
      {/* <Route path={'/employees'} element={<Employees/>}/> */}
      <Route path={'/users'} element={<UserLists/>}/>
    </Routes>
  </React.Fragment>
 );
}

export default App;
