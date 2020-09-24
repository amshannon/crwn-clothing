const INITIAL_STATE = {
    sections: [
        {
            title: 'hats',
            subtitle: 'SHOP NOW',
            imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
            id: 1,
            linkUrl: 'shop/hats'
        },
        {
            title: 'jackets',
            subtitle: 'SHOP NOW',
            imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
            id: 2,
            linkUrl: 'shop/jackets'
        },
        {
            title: 'sneakers',
            subtitle: 'SHOP NOW',
            imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
            id: 3,
            linkUrl: 'shop/sneakers'
        }, 
        {
            title: 'womens',
            subtitle: 'SHOP NOW',
            imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
            size: 'large',
            id: 4,
            linkUrl: 'shop/womens'
        },
        {
            title: 'mens',
            subtitle: 'SHOP NOW',
            imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
            size: 'large',
            id: 5,
            linkUrl: 'shop/mens'
        }
    ]
}

// ES6 allows us to set INITIAL_STATE as default value when nothing is passed
const directoryReducer = ( state = INITIAL_STATE, action ) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default directoryReducer;