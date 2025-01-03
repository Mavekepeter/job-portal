import React, { useContext } from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from './pages/Home'
import Applyjob from './pages/Applyjob'
import Application from './pages/Application'
import RecruiterLogin from './components/RecruiterLogin'
import { AppContext } from './context/Appcontext'
const App = () => {
  const {showRecruiterLogin} = useContext(AppContext)
  return (
    
    <div>
        {showRecruiterLogin &&  <RecruiterLogin/>}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/apply-job/:id' element={<Applyjob/>}/>
        <Route path='/applictions' element={<Application/>}/>

      </Routes>
    </div>
  )
}

export default App