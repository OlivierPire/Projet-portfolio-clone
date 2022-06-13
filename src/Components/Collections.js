import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';

const Collections = ({title}) => {
    return (
        <div className='collections'>
            <p>{title}<span>Tout explorer <FontAwesomeIcon icon={faAngleRight} className='explorer-arrow' /></span></p>
            <div className="content">
                <FontAwesomeIcon icon={faAngleLeft} className='angle-left angle'/>
                <div className="cards">
                    <div className='card'></div>
                    <div className='card'></div>
                    <div className='card'></div>
                    <div className='card'></div>
                    <div className='card'></div>
                    <div className='card'></div>
                </div>
                <FontAwesomeIcon icon={faAngleRight} className='angle-right angle'/>
            </div>
        </div>
    );
};

export default Collections;