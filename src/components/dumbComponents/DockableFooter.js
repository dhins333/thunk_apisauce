import React from 'react';
import PropTypes from 'prop-types';

const DockableFooter = (props) => {

    console.log(props);

    const {
        children,
        onClickHandlers,
        renderItems
    } = props


    return(
        <div className='dockableFooter'>
            {renderItems(children,onClickHandlers)}
        </div>
    )
}

DockableFooter.propTypes = {
    children:PropTypes.array,
    onClickHandlers:PropTypes.array,
    renderItems:PropTypes.func
}

export default DockableFooter;