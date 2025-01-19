import React from 'react';
import ReactDOM from 'react-dom/client';
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import './index.css';
// import App from './App.js';
import reportWebVitals from './reportWebVitals';
import Layout from './Layout.js';
import Home from './components/Home/Home.js';
import About from './components/About/About.js';
import Contact from './components/Contact/Contact.js';
import Register from './components/Auth/Register.js';
import Login from './components/Auth1/Login.js';
import RatingStar from './components/Rating/RatingStar';

// import Login from './components/Auth/login.js';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [

      {
        path:'',
        element: <Home/>
      },
      {
        path: 'about',
        element: <About/>
      },
      {
        path: 'contact-us',
        element: <Contact/>
      },
      {
        path: 'login',
        element: <Login/>


      },
      {
        path: 'register',
        element: <Register/>
      },
      {
        path: 'rating',
        element: <RatingStar/>
      }
      
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
