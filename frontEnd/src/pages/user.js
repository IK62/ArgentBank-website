import { useNavigate } from 'react-router-dom'
import { store } from '../store/store'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

function User() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const profilePath = '/api/v1/user/profile'
  const token = store.getState().token

  useEffect(() => {
    if (!store.getState().token) {
      navigate('/')
    }
  })

  const { userName } = store.getState().users


  async function changeUserName(newUserName) {
    const response = await fetch(`http://localhost:3001${profilePath}`, {
      method: 'put',
      body: JSON.stringify({ userName: newUserName }),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      }
    })
    const data = await response.json()
    if (data.status === 200) {
      localStorage.setItem('users', { ...localStorage.getItem('users'), userName: newUserName })
      dispatch({type: 'updateUserName', payload: newUserName})
      alert(data.message)
    }
  }

  return (
    <>
      <div className="header">
        <h1>
          Welcome back
          <br />
          {`${userName}!`}
        </h1>
        <button className="edit-button" onClick={() => {
          const newUserName = window.prompt("Entrer votre nom", "")
          changeUserName(newUserName)
        } 
        }>Edit Name</button>
      </div>
      <h2 className="sr-only">Accounts</h2>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Checking (x8349)</h3>
          <p className="account-amount">$2,082.79</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Savings (x6712)</h3>
          <p className="account-amount">$10,928.42</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
          <p className="account-amount">$184.30</p>
          <p className="account-amount-description">Current Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
    </>
  )
}

export default User
