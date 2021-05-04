import React from 'react'
import PropTypes from 'prop-types'


export default function header(props) {
    return (
        <div>
            <nav className="navbar navbar-light bg-light">
  <div className="container-fluid">
                    <a className="navbar-brand">{props.title}</a>
                    
                    {props.searchbar?<form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>:"nothing"}
  </div>
</nav>
        </div>
    )
}

header.defaultProps = {
    title: "title here"  //default ye chlega 
}


header.propTypes = {
    title: PropTypes.string  // agr title string nhi hua to console pr error aaega 
}