import React from 'react';
import { withRouter } from 'react-router-dom';

import {
    MenuItemContainer,
    BackgroundImage,
    ContentContainer,
    ContentTitle,
    ContentSubtitle
} from './menu-item.styles';

const MenuItem = ({title, subtitle, imageUrl, size, history, linkUrl, match}) => (
    <MenuItemContainer 
        size={size}
        onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
        <BackgroundImage 
            className='background-image'
            imageUrl={imageUrl}
        />
        <ContentContainer className='content'>
            <ContentTitle>{title.toUpperCase()}</ContentTitle>
            <ContentSubtitle>{subtitle.toUpperCase()}</ContentSubtitle>
        </ContentContainer>
    </MenuItemContainer>
)

/*
withRouter is a HIGHER ORDER COMPONENT.
It is a function that takes a component as an argument
and then returns a modified component.

withRouter takes the MenuItem and then returns the component with the same name
that now has access to Router location, match and history props
*/
export default withRouter(MenuItem);
