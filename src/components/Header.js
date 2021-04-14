import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'
import { useLocation } from 'react-router-dom'

const Header = ({ user, onAdd, showAdd }) => {
    const location = useLocation()
    return (
        <header className="header">
            <h1 style={{color: "red"}}> Welcome {user} </h1>
            {
                location.pathname === '/' && 
                <Button  color={showAdd ? "red" : "green"} text={showAdd ? "Close" : "Add"} onClick={onAdd}/>
            }
        </header>
    )
}

Header.defaultProps = {
    user: "Rishi"
}

Header.propTypes = {
    user: PropTypes.string
}

export default Header
