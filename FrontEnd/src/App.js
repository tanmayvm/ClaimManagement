import logo from './logo.svg';
import './App.css';
import BreMain from './Components/BreMain'
import HomePage from './Components/homePage'
import ClaimList from './Components/claimList'
import { createBrowserRouter, RouterProvider  } from 'react-router-dom';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      //  element : <VerticalMenu  />,
      // errorElement: <SignIn />,
      children: [
        { path: '/', element: <HomePage /> },
        // 
        { path: '/claimList', element: <ClaimList /> },
        { path: '/newClaim', element: <BreMain /> },
        { path: '/newClaim/:claimID', element: <BreMain /> }
      ]
    }

  ])
  return <RouterProvider router={router}></RouterProvider>

}

export default App;
