import React from 'react'
import './collection-overview.styles.scss'
import { createStructuredSelector } from 'reselect'
import CollectionPreview from '../collection-preview/collection-preview'
import { connect } from 'react-redux'
import { selectShopCollections } from '../../redux/shop/shop.selectors'

const CollectionOverview = ({collections}) => {
  return (
    <div className='collection-overview'>
        { collections.map(({id, ...othersCollectionProps}) => (
                <CollectionPreview key={id} {...othersCollectionProps } />
            ))
        }
    </div>
  )
}
const mapStateToProps = createStructuredSelector({
    collections:selectShopCollections
})
export default connect(mapStateToProps)(CollectionOverview)