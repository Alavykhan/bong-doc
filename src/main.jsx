import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './components/Main/Main.jsx';
import Home from './components/Home/Home.jsx';
import Login from './components/Login/Login.jsx';
import AuthProvider from './providers/AuthProvider.jsx';
import SignUp from './components/SignUp/SignUp.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    children:[
      {
        path: '/',
        element: <Home/>,
        loader: ()=>fetch('/doc.json')
      },
      {
        path:'/login',
        element:<Login/>
      },
      {
        path:'/signup',
        element:<SignUp/>
      }
    ]
  },

]);

createRoot(document.getElementById('root')).render(
  <AuthProvider>
   <RouterProvider router={router} />
  </AuthProvider>,
)
