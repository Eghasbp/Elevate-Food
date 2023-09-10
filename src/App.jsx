
import Home from './Pages/Home'
import Login from './Pages/Login'
import Register from './Pages/Register'
import UserId from './Pages/UserId'
import { useRoutes } from 'react-router'
import ProtectedRoutes from './routes/ProtectedRoutes'
<<<<<<< HEAD
import Reference from './Pages/Reference'
=======
>>>>>>> 25ae726c98674c04e814a9523fa929e7c1d77df9

const routes = [
  {path:'/login', element:<Login/>},
  {path:'/register', element:<Register/>},
  
  {path:'/detail/:userId', element:
  <ProtectedRoutes>
  <UserId/>
  </ProtectedRoutes>},

  {path:'/', element:
  <ProtectedRoutes>
  <Home/>
  </ProtectedRoutes>},
<<<<<<< HEAD

  {path:'/reference', element:
  <ProtectedRoutes>
  <Reference/>
  </ProtectedRoutes>},
=======
>>>>>>> 25ae726c98674c04e814a9523fa929e7c1d77df9
 
]

function App() {
  const element = useRoutes(routes)
  return element;
}

export default App
