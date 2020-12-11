import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {

    return(
        <div className='header'>
            <NavLink exact to='/' className='navLink' activeClassName='navLinkActive'>Load More</NavLink>
            <NavLink exact to='/pagination' className='navLink' activeClassName='navLinkActive' >Pagination</NavLink>
            <NavLink exact to='/profile' className='navLink' activeClassName='navLinkActive'>Profile</NavLink>
            <NavLink exact to='/countries' className='navLink' activeClassName='navLinkActive'>Countries</NavLink>
        </div>
    )

}

export default Header;