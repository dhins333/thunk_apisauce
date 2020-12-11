import React from 'react';
import { Link } from 'react-router-dom';

const Country = ({name,code}) => {
    return(
        <div className='country'>
            <Link to={`/country/${code}`} ><p>{name}:{code}</p></Link>
        </div>
    )
}

export default Country;