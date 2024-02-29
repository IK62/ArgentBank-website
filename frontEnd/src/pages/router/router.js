import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from '../App'
import Home from '../Home'
import SignIn from '../signIn'
import User from '../user'

const browserRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'login',
        element: <SignIn />,
      },
      {
        path: 'profile',
        element: <User />,
      },
    ],
  },
])

function Router() {
  return <RouterProvider router={browserRouter} />
}

export default Router
