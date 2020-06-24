import './Main.css'
import React from 'react'
import Header from './Header'

export default props => {
  return (
    <React.Fragment>
      <Header {...props} />
      <main className="content cotainer-fluid">
        <div className="p-3">
          {props.children}
        </div>
      </main>
    </React.Fragment>
  )
}
