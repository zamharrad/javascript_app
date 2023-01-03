import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import UserLists from './components/UserLists'
import Counter from './components/Counter'
import Employees from './components/Employees';

function App (){
 return (
  <React.Fragment >
    <NavBar/>
    <Routes>
      <Route path={'/'} element={<Home/>}/>
      <Route path={'/counter'} element={<Counter/>}/>
      <Route path={'/employees'} element={<Employees/>}/>
      <Route path={'/users'} element={<UserLists/>}/>
    </Routes>
  </React.Fragment>
 );
}

export default App;
