import React from 'react';
import { Breadcrumbs } from '@material-ui/core';
import { Link } from 'react-router-dom';

const BreadCrumbs = () => {

    const items = window.location.pathname.split('/').splice(1);

    const appendPath = (index) => {
        let path = '/';
        items.slice(0,( index + 1 )).forEach((each) => {
            path = `${path}${each}/`
        })
        return (path.slice(0,-1));
    }

    const renderItems = (items) => {
        
        return items.map((item,index) => {
            return  <Link to = { appendPath(index) } key = {index} >{item}</Link>
        })
    }

    return(
        <Breadcrumbs aria-label="breadcrumb">
            <Link to = '/'>Home</Link>
            {renderItems(items)}
        </Breadcrumbs>
    )
}

export default BreadCrumbs;