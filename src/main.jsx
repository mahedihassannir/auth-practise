import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Components/Layout.jsx/MAIN.jsx';
import Home from './Components/Home/Home.jsx';
import Register from './Components/Register.jsx';
import Login from './Components/Login.jsx';
import ContexProvider from './Components/Contex.jsx/ContexProvider';


let router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },

      {
        path: "Login",
        element: <Login></Login>
      },
      {
        path: "Register",
        element: <Register></Register>
      },


    ]
  }
])




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContexProvider>
      <RouterProvider router={router}></RouterProvider>
    </ContexProvider>
  </React.StrictMode>,
)
