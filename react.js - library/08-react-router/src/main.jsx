import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Root from './Root.jsx'
import Home from './Component/Home/Home.jsx'
import About from './Component/About/About.jsx'
// import Contact from './ContactUs/ContactUs.jsx'
import ContactUs from './ContactUs/ContactUs.jsx'
import CustomRouter from './Component/CustomRoute/CustomRouter.jsx'
import GithubProfile from './Component/GithubProfile/GithubProfile.jsx'
// import Header from './Component/Header/Header.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '',
        element: <Home />
      }, {
        path: 'about',
        element: <About /> 
      }, 
      {
        path: 'contactUs',
        element: <ContactUs />
      },
      {
        path: 'CustomRouter/:generatedCR',
        element: <CustomRouter />
      },
      {
        path: 'github',
        element: <GithubProfile />
      }
    ]
  }
])

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='/' element={<Root />}>
//       <Route path='' element={Home}/>
//       <Route path='/about' element={About}/>
//       <Route path='/contactUs' element={<ContactUs />}/>

//     </Route>
//   )
// )



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
