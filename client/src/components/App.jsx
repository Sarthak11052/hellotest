import '../styles/App.css';
import { CheckUserExist } from '../helper/helper';
/*Import Components*/
import Main from './Main';
import Quiz from './Quiz'
import Result from './Result'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
/*React routes*/
const router = createBrowserRouter([
  {
    path : '/',
    element : <Main></Main>
  },
  {
    path : '/quiz',
    element : <CheckUserExist><Quiz/></CheckUserExist>
  },
  {
    path : '/result',
    element :<CheckUserExist><Result/></CheckUserExist>
  },
  
])

function App() {
  return (
    <>
      <RouterProvider router={router}/>
        
    </>
  )
}

export default App
