import './Header.css'
import React from 'react'

export default props => {
  return (
    <header className="header d-none d-sm-flex">
      <h1 className="mt-2">
        <i className={`fa fa-${props.icon}`}></i>
      </h1>
      <p className="lead mt-2 ml-3">{props.subtitle}</p>
    </header>
  )
}
