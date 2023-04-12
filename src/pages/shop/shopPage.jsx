import React from 'react'
import { Route } from 'react-router-dom';
import './shopPage.styles.scss'
import CollectionOverview from '../../components/collections-overview/collection-overview.components'
import Category from '../category/category.page';

const ShopPage= ({ match }) => {
      
         return (

            <div className='shop-page'>
                   <Route exact path={`${match.path}`} component={CollectionOverview}/>
                   <Route path={`${match.path}/:categoryId`} component={Category} />
             </div>
         )


      };

export default ShopPage