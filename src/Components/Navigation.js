import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { faMagnifyingGlass, faBell, faCaretDown } from '@fortawesome/free-solid-svg-icons';

const Navigation = () => {
    return (
        <div className='navigation'>
            <div className="left-nav">
                <NavLink to={'/'} className={(navData) => navData.isActive ? 'nav-active' : ""}>Accueil</NavLink>
                <NavLink to={'/series'} className={(navData) => navData.isActive ? 'nav-active' : ""}>Séries</NavLink>
                <NavLink to={'/movies'} className={(navData) => navData.isActive ? 'nav-active' : ""}>Films</NavLink>
                <NavLink to={'/news'} className={(navData) => navData.isActive ? 'nav-active' : ""}>Nouveautés les plus regardées</NavLink>
                <NavLink to={'/list'} className={(navData) => navData.isActive ? 'nav-active' : ""}>Ma liste</NavLink>
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