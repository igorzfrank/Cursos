import React from 'react'

const headerStyle = {
    background: 'lightgray',
    padding:'10px 0px',
}

const headerContainer = {
    margin: '0 auto',
    maxWidth : '960px',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between'
}

const Header = () => {
  return (
    <header style={headerStyle}>
        <div style={headerContainer}>
            <h2>Logo</h2>
            <button>Button</button>
        </div>
    </header>
  )
}

export default Header
