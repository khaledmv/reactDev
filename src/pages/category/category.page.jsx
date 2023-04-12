import React from 'react'
import { connect } from 'react-redux'
import { selectCollection } from '../../redux/shop/shop.selectors'
import './category.style.scss'
import CollectionItem from '../../components/collection-item/collection-item'


const Category = ({collection}) => {
    const { title, items } = collection
  return (
    <div className='category-page'>
        <h2> {title} </h2>
        <div className='category-page-items'>
           {
            items.map(item => (
              <CollectionItem  key={item.key} item={item} />
            ))
           }
        </div>
    </div>
  )
}

const mapStateToProps = (state, ownProps)=> ({
  collection: selectCollection(ownProps.match.params.categoryId)(state)
})

export default connect(mapStateToProps)(Category)