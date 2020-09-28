import React from 'react';

import CollectionItem from '../collection-item/collection-item.component';

import {
  CollectionPreviewContainer,
  TitleContainer,
  PreviewContainer
} from './collection-preview.styles';

const CollectionPreview = ({ title, items }) => (
  <CollectionPreviewContainer>
      <TitleContainer>{title.toUpperCase()}</TitleContainer>
      <PreviewContainer>
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
      </PreviewContainer>
  </CollectionPreviewContainer>
)

export default CollectionPreview;
