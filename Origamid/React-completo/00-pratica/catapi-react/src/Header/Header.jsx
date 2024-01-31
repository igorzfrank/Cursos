import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <header>
        <div className="headerContainer">
            <h2>logo</h2>
            <nav>
                <a href="">Home</a>
                <a href="">Sobre</a>
                <a href="">Gatos</a>
            </nav>
            <button>Login</button>
        </div>
    </header>
  )
}

export default Header
