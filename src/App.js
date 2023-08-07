import React from 'react'
import {Route,Routes} from 'react-router-dom'
import Currencies from './pages/Currencies'
import Main from './pages/Main'
import Prices from './pages/Price'
import Nav from './components/Nav'


const App = () => {
    return (
      //  we will use the Route component to specify each route
      // path ... if i go to "blank" site.com/path .... browserRouter automically looks into pages folder (?) or that logic comes from import statement
      // element calls the page you want
      // :symbol -> imports name of symbol here.. "URL param" variable in URL
      <div className='App'>
          <Nav />
        <Routes>
          {/* / because its the root page. landing page */}
          <Route path="/" element={<Main />}/> 
          <Route path="/currencies" element={<Currencies />}/>
          <Route path="/price/:symbol" element={<Prices />}/>
        </Routes>
      </div>
    )
  }
  
  export default App