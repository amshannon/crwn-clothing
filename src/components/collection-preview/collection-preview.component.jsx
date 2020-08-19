import React from 'react';

import CollectionItem from '../collection-item/collection-item.component';

import './collection-preview.styles.scss';

const CollectionPreview = ({ title, items }) => (
  <div className='collection-preview'>
      <h1 className='title'>{title.toUpperCase()}</h1>
      <div className='preview'>
        {
            /*
            All anonymous function calls inside component (like those below), get
            called again when the component is rerendered. This can be a performance
            concern.
            */
            items
              .filter((item, idx) => idx < 4)
              .map((item) => (
                <CollectionItem key={item.id} item={item}/>
            ))
        }
      </div>
  </div>
)

export default CollectionPreview;
