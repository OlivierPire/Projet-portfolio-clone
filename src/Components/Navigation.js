import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { faMagnifyingGlass, faBell, faCaretDown } from '@fortawesome/free-solid-svg-icons';

const Navigation = () => {
    return (
        <div className='navigation'>
            <div className="left-nav">
                <NavLink to={'/'}>Accueil</NavLink>
                <NavLink to={'/'}>Séries</NavLink>
                <NavLink to={'/'}>Films</NavLink>
                <NavLink to={'/'}>Nouveautés les plus regardées</NavLink>
                <NavLink to={'/'}>Ma liste</NavLink>
            </div>
            <div className="right-nav">
                <FontAwesomeIcon icon={faMagnifyingGlass} className='search-icon icon' />
                <NavLink to={'/'}>DIRECT</NavLink>
                <NavLink to={'/'}>Jeunesse</NavLink>
                <FontAwesomeIcon icon={faBell} className='bell-icon icon' />
                <div className="dropdown-menu">
                    <img src="../profile.png" alt="" />
                    <FontAwesomeIcon icon={faCaretDown} />
                </div>
            </div>
        </div>
    );
};

export default Navigation;