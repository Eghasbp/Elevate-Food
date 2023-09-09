
import Home from './Pages/Home'
import Login from './Pages/Login'
import Register from './Pages/Register'
import UserId from './Pages/UserId'
import { useRoutes } from 'react-router'
import ProtectedRoutes from './routes/ProtectedRoutes'

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
 
]

function App() {
  const element = useRoutes(routes)
  return element;
}

export default App
