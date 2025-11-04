import './App.css';
import Homepage from './pages/landing/Homepage';
import { createBrowserRouter, } from 'react-router';
import { RouterProvider } from 'react-router/dom';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Homepage />
  }
]);

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
