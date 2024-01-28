import React from 'react'

const styleFooter = {
    background: 'lightgray',
    padding: '50px 0px'
}

const footerContainer = {
    margin: '0 auto',
    maxWidth : '960px',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between'
}
const Footer = () => {
  return (
    <footer style={styleFooter}>
        <div style={footerContainer}>
            <p>Direitos reservados.</p>
        </div>
    </footer>
  )
}

export default Footer
