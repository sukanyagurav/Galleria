import { createBrowserRouter, RouterProvider } from "react-router-dom"
import RootLayout from "./RootLayout"
import HomePage from "./Pages/HomePage"
import SlideShowPage from "./Pages/SlideShowPage"


const router= createBrowserRouter([
  {
    path:'/',
    element:<RootLayout/>,
    children:[
      {
        path:'/',
        element:<HomePage/>
      },
      {
        path:'/slideshow',
        element:<SlideShowPage/>
      }
    ]
  }
])

function App() {
 
  return (
   <>
      
      <RouterProvider router={router} />

    
    </>
  )
}

export default App
