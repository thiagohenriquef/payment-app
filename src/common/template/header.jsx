import React from 'react'
import NavBar from './navbar'

export default props => (
  <header className='main-header'>
    <a href='/#/' className='logo'>
      <span className='logo-mini'> <b>App</b> Payment</span>
      <span className='logo-lg'>
        <i className='fa fa-money'></i>
        <b>Payment</b>App
      </span>
    </a>
    <nav className='navbar navbar-static-top'>
      <a href className='sidebar-toggle' data-toggle='offcanvas'> </a>
      <NavBar />
    </nav>
  </header>
)