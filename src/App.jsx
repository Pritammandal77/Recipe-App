import './App.css'
import MainBody from './components/body/MainBody'
import FullRecipe from './components/fullRecipe/FullRecipe'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import SavedRecipes from './components/SavedRecipes/SavedRecipes'



function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <MainBody/>
        },
        {
          path: "/fullrecipe",
          element: <FullRecipe />
        },
        {
          path: "/savedrecipes",
          element: <SavedRecipes/>
        }
      ]
    },
  ]);

  
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
