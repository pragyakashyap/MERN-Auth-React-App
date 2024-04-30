import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, createRoutesFromElements,Route,RouterProvider} from 'react-router-dom'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import HomeScreen from './screens/HomeScreen.jsx'
import LoginScreen from './screens/LoginScreen.jsx'
import RegisterScreen from './screens/RegisterScreen.jsx'
import store from './store.js'
import {Provider} from 'react-redux'
import ProfileScreens from './screens/ProfileScreens.jsx'
import PrivateRoute from './components/PrivateRoute.jsx'

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route index={true} path='/' element={<HomeScreen/>} />
      <Route  path='/login' element={<LoginScreen/>} />
      <Route  path='/register' element={<RegisterScreen/>} />
      <Route path='' element={<PrivateRoute/>}>
      <Route  path='/profile' element={<ProfileScreens/>} />
      </Route>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
  </Provider>
)
