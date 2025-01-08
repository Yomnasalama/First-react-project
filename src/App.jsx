import { useState } from 'react'
import Layout from './components/Layout/Layout'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import PortFolio from './components/Portfolio/Portfolio'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {path:'' ,element:<Layout />, children:[
    {path:'' ,element:<About />},
    {path:'about' ,element:<About />},
    {path:'portfolio' ,element:<PortFolio />},
    {path:'contact' ,element:<Contact />},
  ]},
]);

export default function App() {

  return (
    <>
    <RouterProvider router={router}/>
    {/* <Layout /> */}
    {/* <About /> */}
    {/* <Contact/> */}
    {/* <PortFolio /> */}
    </>
  )
}
