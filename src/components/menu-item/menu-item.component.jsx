import React from 'react';
import { withRouter } from 'react-router-dom';

import './menu-item.styles.scss';

const MenuItem = ({title, subtitle, imageUrl, size, linkUrl, match}) => (
    <div 
        className={`${size} menu-item`} 
        onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
        <div 
            className='background-image'
            style={{
                backgroundImage: `url(${imageUrl})`
            }}
        />
        <div className='content'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <span className='subtitle'>{subtitle.toUpperCase()}</span>
        </div>
    </div>
)

/*
withRouter is a HIGHER ORDER COMPONENT.
It is a function that takes a component as an argument
and then returns a modified component.

withRouter takes the MenuItem and then returns the component with the same name
that now has access to Router location, match and history props
*/
export default withRouter(MenuItem);
