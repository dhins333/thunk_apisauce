import React from 'react';

const DockableFooter = ({children,onClickHandlers}) => {

    return(
        <div className='dockableFooter'>
            {children.map((child,index) => {
                return (<div onClick = {onClickHandlers[index]}
                            className='dockableFooter-item'
                            key={index}>
                            {child}
                        </div>
                       );
            })}
        </div>
    )
}

export default DockableFooter;