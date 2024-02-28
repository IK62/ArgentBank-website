import { useDispatch } from 'react-redux'
import { store } from '../store/store'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

function SignIn() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const loginPath = '/api/v1/user/login'
  const profilePath = '/api/v1/user/profile/'
  const [isChecked, setIsChecked] = useState(false)

  const loginRequest = async (username, password) => {
    const response = await fetch(`http://localhost:3001${loginPath}`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: username,
        password: password,
      }),
    })

    return response.json()
  }

  async function sendData() {
    const { username, password } = store.getState().form
    const data = await loginRequest(username, password)
    if (data.status === 200) {
      const profileResponse = await fetch(
        `http://localhost:3001${profilePath}`,
        {
          method: 'post',
          headers: {
            Authorization: `Bearer ${data.body.token}`,
          },
        }
      )
      const profileData = await profileResponse.json()
      if (profileData.status === 200) {
        dispatch({ type: 'updateToken', payload: data.body.token })
        dispatch({ type: 'updateUser', payload: profileData.body })
        if (isChecked) {
          localStorage.setItem('users', JSON.stringify(profileData.body))
          localStorage.setItem('token', data.body.token)
        }
        if (store.getState().token && Object.keys(store.getState().users).length !== 0) {
          navigate('/user')
        }
      }
    }
  }

  return (
    <section className="sign-in-content">
      <i className="fa fa-user-circle sign-in-icon"></i>
      <h1>Sign In</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          sendData()
        }}
      >
        <div className="input-wrapper">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            onChange={(e) =>
              dispatch({ type: 'updateUsername', payload: e.target.value })
            }
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={(e) =>
              dispatch({ type: 'updatePassword', payload: e.target.value })
            }
          />
        </div>
        <div className="input-remember">
          <input type="checkbox" id="remember-me" onChange={(e) => e.target.checked ? setIsChecked(true) : setIsChecked(false)}/>
          <label htmlFor="remember-me">Remember me</label>
        </div>
        <button className="sign-in-button" type="submit">
          Sign In
        </button>
      </form>
    </section>
  )
}

export default SignIn
