import React from 'react'
import './App.css'
import { UserStorage } from '../../scroll-react/src/UserContext'
import Hero from './Components/Hero/Hero'

function App() {

  return (
    <UserStorage>
      <Hero />
    </UserStorage>
  )
}

export default App
