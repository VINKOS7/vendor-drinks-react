import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router';
import { DrinksSeller } from './pages/drinks-seller/DrinksSeller';
import { DrinksAdmin } from './pages/drinks-admin/DrinksAdmin';
import { BrowserRouter } from 'react-router-dom';
import { HelloPage } from './pages/HelloPage/HelloPage';
import LoginRedirect from './pages/LoginRedirect/LoginRedirect';

function App() {
  return (
    <div className="App">  
      <BrowserRouter> 
        <Routes>
            <Route path="/"  element={<HelloPage />}/>   
            <Route path='/signed_in' element={<LoginRedirect/>}/>
            <Route path="/admin"  element={<DrinksAdmin />}/>
            <Route path="/drinks"  element={<DrinksSeller />}/>         
        </Routes>
      </BrowserRouter> 
    </div>
  );
}

export default App;
