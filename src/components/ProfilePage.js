import React from 'react';
import DockableFooter from './DockableFooter';

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

    return(
        <div className='profilePage'>
            <DockableFooter onClickHandlers = {[firstItemHandler,secondItemHandler,thirdItemHandler]}>
                <i className="fas fa-address-card fa-3x"></i>
                <i className="fas fa-address-card fa-3x"></i>
                <i className="fas fa-address-card fa-3x"></i>
            </DockableFooter>
        </div>
    )

}

export default ProfilePage;