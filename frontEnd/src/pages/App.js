import React from 'react'
/* import { Counter } from './features/counter/Counter'; */
import './App.css'
import logo from '../assets/argentBankLogo.png'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { store } from '../store/store'
import { useDispatch } from 'react-redux'

function App() {
  const navigate = useNavigate()
  const location = useLocation()
  const dispatch = useDispatch()

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
          {store.getState().token ? (
            <>
              <span className="main-nav-item" onClick={() => navigate('/user')}>
                <i className="fa fa-user-circle"></i>
                {` ${store.getState().users.userName} `}
              </span>
              <span
                className="main-nav-item"
                onClick={() => {
                  dispatch({ type: 'updateToken', payload: false })
                  dispatch({type: 'deleteUser'})
                  localStorage.removeItem('users')
                  localStorage.removeItem('token')
                  navigate('/')
                }}
              >
                <i className="fa fa-sign-out"></i>
                {" Sign Out "}
              </span>
            </>
          ) : (
            <span className="main-nav-item" onClick={() => navigate('/signIn')}>
              <i className="fa fa-user-circle"></i>
              {" Sign In "}
            </span>
          )}
        </div>
      </nav>
      <main className={location.pathname !== '/' ? "main bg-dark" : ''}>
        <Outlet />
      </main>
      <footer className="footer">
        <p className="footer-text">Copyright 2020 Argent Bank</p>
      </footer>
    </>
  )
}

export default App
