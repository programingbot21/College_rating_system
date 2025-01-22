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
import Information1 from './components/information/Information1';

import Infor2 from './components/information/Infor2';
import Infor from './components/information/Infor';
import Info3 from './components/information/Info3';
import Infor4 from './components/information/Infor4';
import Infor5 from './components/information/Infor5';
import Infor6 from './components/information/Infor6';
import Infor7 from './components/information/Infor7';
import Infor8 from './components/information/Infor8';
import Infor9 from './components/information/Infor9';
import Infor10 from './components/information/Infor10';
import Infor11 from './components/information/Infor11';

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
      },
      {
        path: 'information',
        element: <Information1/>
      },
      {
        path: 'infor2',
        element: <Infor2/>
      },
      {
        path: 'infor1',
        element: <Infor/>
      },
      {
        path: 'info3',
        element: <Info3/>
      },
      {
        path: 'infor4',
        element: <Infor4/>
      },
      {
        path: 'infor5',
        element: <Infor5/>
      },
      {
        path: 'infor6',
        element: <Infor6/>
      },
      {
        path: 'infor7',
        element: <Infor7/>
      },
      {
        path: 'infor8',
        element:  <Infor8/>
      },
      {
        path: 'infor9',
        element: <Infor9/>
      },
      {
        path: 'infor10',
        element: <Infor10/>
      },
      {
        path: 'infor11',
        element: <Infor11/>
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
