import React from 'react';
/* import { Counter } from './features/counter/Counter'; */
import './App.css';
import logo from '../assets/argentBankLogo.png'
import { Outlet, useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate()

  return (
    <>
      <nav className="main-nav">
        <div className="main-nav-logo" onClick={() => navigate('/')}>
          <img
            className="main-nav-logo-image"
            src={logo}
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </div>
        <div>
          <div className="main-nav-item" onClick={() => navigate('/signIn')}>
            <i className="fa fa-user-circle"></i>
            Sign In
          </div>
        </div>
      </nav>
      <main>
        <Outlet />
      </main>
      <footer className="footer">
        <p className="footer-text">Copyright 2020 Argent Bank</p>
      </footer>
    </>
  )
}

export default App;
