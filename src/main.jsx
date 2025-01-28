import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AddCoffee from './compnents/AddCoffee.jsx';
import UpdateCoffee from './compnents/UpdateCoffee.jsx';
import SignUp from './compnents/SignUp.jsx';
import SignIn from './compnents/SignIn.jsx';
import AuthProvider from './compnents/provider/AuthProvider.jsx';
import Users from './compnents/Users.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader: ()=> fetch('http://localhost:5000/coffee')
  },
  {
    path: "addCoffee",
    element: <AddCoffee></AddCoffee>,
  },
  {
    path: "updateCoffee/:id",
    element: <UpdateCoffee></UpdateCoffee>,
    loader: ({params})=> fetch(`http://localhost:5000/coffee/${params.id}`)
  },
  {
    path: '/signup',
    element: <SignUp></SignUp>,
  },
  {
    path: '/signin',
    element: <SignIn></SignIn>,
  },
  {
    path: '/users',
    element: <Users></Users>,
    loader: () => fetch('http://localhost:5000/user/')
  },
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <AuthProvider>
    <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </StrictMode>,
)
