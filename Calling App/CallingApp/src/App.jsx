import './App.css'
import{ createBrowserRouter,RouterProvider} from 'react-router-dom'; 
import HomePage from './Components/HomePage';
import RoomPage from './Components/RoomPage';


function App() {

const router = createBrowserRouter([

{
  path: '/',
  element: <HomePage/>,
},
{
  path: '/room/:id',
  element: <RoomPage/>,
}


]);
  return (
 <div>
  <RouterProvider router={router} />
  </div>
  )
}

export default App
