import React from 'react'

export default props => (
  <li className='treeview'>
    <a href>
      <i className={`fa fa-${props.icon}`}></i> {props.label}
      <i className='fa fa-angle pull-right'></i>
    </a>
    <ul className='treeview'>
      {props.children}
    </ul>
  </li>
)