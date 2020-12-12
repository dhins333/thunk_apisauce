import React from 'react';

import DockableFooter from '../components/dumbComponents/DockableFooter';

const ProfilePage = () => {

    const firstItemHandler = () => {
        console.log('first');
    }

    const secondItemHandler = () => {
        console.log('second');
    }

    const thirdItemHandler = () => {
        console.log('third');
    }

    const renderItems = (children,onClickHandlers) => {
        
        return children.map((child,index) => {
            return (
            <div onClick = {onClickHandlers[index]}
                className='dockableFooter-item'
                key={index}>
                {child}
            </div>
           );
        })

    }

    return(
        <div className='profilePage'>
            <DockableFooter 
                onClickHandlers = {[firstItemHandler,secondItemHandler,thirdItemHandler]}
                renderItems = {renderItems}
            >
                <i className="fas fa-address-card fa-3x"></i>
                <i className="fas fa-address-card fa-3x"></i>
                <i className="fas fa-address-card fa-3x"></i>
            </DockableFooter>
        </div>
    )

}

export default ProfilePage;