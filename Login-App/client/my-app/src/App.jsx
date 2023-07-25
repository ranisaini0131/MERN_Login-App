import React from 'react'
import { BrowserRouter, Route, Link ,Switch} from 'react-router-dom'

import Signup from './features/User/Signup.js'
import Login from './features/User/Login.js'


function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        
        <Switch>
          <Route path='/Signup' element={ <Signup/>} />
          <Route path='/Login' element={ <Login/>} />
        </Switch>
      
      </BrowserRouter>

    </div>
    
  )
}

export default App
