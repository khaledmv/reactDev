import React, { Component } from 'react'
import CollectionPreview from '../../components/collection-preview/collection-preview'
import SHOP_DATA from './shop.data'
import './shopPage.styles.scss'

export class ShopPage extends Component {
    constructor(){
        super()

        this.state = {
            collections: SHOP_DATA
        }
    }
  render() {
    const { collections } = this.state;
    return (
      <div className='shop-page'>
        {
            collections.map(({id, ...othersCollectionProps}) => (
                <CollectionPreview key={id} {...othersCollectionProps } />
            ))
        }
      </div>
    )
  }
}

export default ShopPage