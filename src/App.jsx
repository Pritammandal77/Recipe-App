import './App.css'
import MainBody from './components/body/MainBody'
import FullRecipe from './components/fullRecipe/FullRecipe'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import SavedRecipes from './components/SavedRecipes/SavedRecipes'
import { ToastContainer } from 'react-toastify'



function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <MainBody />
        },
        {
          path: "/fullrecipe",
          element: <FullRecipe />
        },
        {
          path: "/savedrecipes",
          element: <SavedRecipes />
        }
      ]
    },
  ]);


  return (
    <>
      <RouterProvider router={router} />

      <ToastContainer
        position="top-center"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  )
}

export default App
