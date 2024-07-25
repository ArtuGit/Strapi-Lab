import type { Schema, Attribute } from '@strapi/strapi';

export interface BlocksTeaser extends Schema.Component {
  collectionName: 'components_blocks_teasers';
  info: {
    displayName: 'Teaser';
  };
  attributes: {
    Description: Attribute.Text;
    Icon: Attribute.Media<'images'>;
    LInk: Attribute.String;
  };
}

export interface BlocksIconWithText extends Schema.Component {
  collectionName: 'components_blocks_icon_with_texts';
  info: {
    displayName: 'Icon with text';
  };
  attributes: {
    Text: Attribute.Text;
    Icon: Attribute.Media<'images'>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'blocks.teaser': BlocksTeaser;
      'blocks.icon-with-text': BlocksIconWithText;
    }
  }
}
