import React from "react"
import { BrowserRouter, Route,  } from 'react-router-dom'
import Home from './Home'
import Navbar from './Navbar'
import Gallery from './Gallery'
import About from './About'
import '../style.css'


function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Route exact path='/' component={Home} />
        <Route path='/gallery' component={Gallery} />
        <Route path='/about' component={About} />
      </div>
    </BrowserRouter>
  )
}

export default App;