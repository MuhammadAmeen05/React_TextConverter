import React from 'react'
import PropTypes from 'prop-types'
export default function Navbar(props) {
  return (
   <nav className={`navbar navbar-expand-lg navbar-${props.mood} bg-${props.mood}`}>
<a className="navbar-brand" href="/">{props.tittle}</a>
<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
<span className="navbar-toggler-icon"></span>
</button>

<div className="collapse navbar-collapse" id="navbarSupportedContent">
<ul className="navbar-nav mr-auto">
  <li className="nav-item active">
    <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="/">{props.AboutText}</a>
  </li>
</ul>
{/*
<forClassm className="forClassm-inline my-2 my-lg-0">
  <input className="forClassm-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
  <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
</forClassm>
  */}
<div className={`forClassm-check forClassm-switch text-${props.mood==='light'?'dark':'light'}`}>
  <input className="forClassm-check-input" onClick={props.tooglemode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="forClassm-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark mood </label>
</div>
</div>
</nav>
  )
}
Navbar.propTypes={tittle:PropTypes.string.isRequired,
AboutText:PropTypes.string}

/*
Navbar.defaultProps={tittle:"Set the tittle forClass the navbar",
    AboutText:"Set the text forClass about sectio"}
    */