import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'


import { createBrowserRouter,  Route , RouterProvider } from 'react-router-dom'

import {Layout ,Hero,About_Me,Project,Skills , Service ,Contact , Page404} from './Component/index.js'


const router = createBrowserRouter([
{

  path:"/",
  element:<Layout/>,
  children:[
     {
         path:"", 
         element : <Hero />

     },
      {
         path:"about_me", 
         element : <About_Me/>

     },
     {
      path:"project",
      element: <Project/>

     },
     {
        path:"Skills",
        element:<Skills/>

     },
      {
        path:"Contact",
        element:<Contact/>

      },
      {
        path:"Service",
        element:<Page404/>
      }


  ]
}

])



createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}/>
  </StrictMode>,
)
