import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Country = (props) => {

    const {
        name,
        code
    } = props;

    return(
        <div className='country'>
            <Link to={`/country/${code}`} ><p>{name}:{code}</p></Link>
        </div>
    )

}

Country.propTypes = {
    code:PropTypes.string,
    name:PropTypes.string
}

export default Country;
