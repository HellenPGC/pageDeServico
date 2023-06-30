import React from 'react'
import {RouterProvider, createBrowserRouter} from "react-router-dom"
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from './pages/Home.jsx'
import Clientes from './pages/Clientes.jsx'
import Sobre from './pages/Sobre.jsx'
import Error from './pages/Error.jsx'

const rotas = createBrowserRouter([   
{
path: "/",
element: <App />,
errorElement: <Error />,
Children: [

  {
path: '/',
element: <Home />,
  },

  {
    path: '/sobre-nos',
    element: <Sobre/>,
  },
  
  {
    path: '/nossos-clientes',
    element: <Clientes/>,
  },

]

}
]);

ReactDOM.createRoot(document.getElementById('root')).render( 
  
  <React.StrictMode>
  <RouterProvider router={rotas} />
</React.StrictMode>

);