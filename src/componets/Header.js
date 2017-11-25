import React from 'react'

const Header = (props) => {
  return (
    <div className="navbar navbar-default" role="navigation">
      <div className="container">
        <div className="navbar-header">
          <a className="navbar-brand" href="/">RBT Book Store</a>
        </div>
        <ul className="nav navbar-nav navbar-right">
          <li><a href="/"><button type="button" className="btn btn-primary btn-sm">Add New Book</button></a></li>
        </ul>
      </div>
    </div>
  )
}

export default Header
