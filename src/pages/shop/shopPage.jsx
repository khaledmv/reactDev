import React from 'react'
import { Route } from 'react-router-dom';
import './shopPage.styles.scss'
import WithSpiner from '../../components/withspiner/with-spiner';
import CollectionOverview from '../../components/collections-overview/collection-overview.components'
import Category from '../category/category.page';
import { firestore,convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import { updateCollections } from '../../redux/shop/shop.action';

const CollectionOverviewWithSpinner = WithSpiner(CollectionOverview)
const CategoryWithSpinner = WithSpiner(Category)


class ShopPage extends React.Component{

      state = {
            loading: true
      };
      
      unsubscribeFromSnapshot = null;

      componentDidMount(){
            const { updateCollection} = this.props;

            const collectionRef = firestore.collection('collections');
            collectionRef.onSnapshot( async snapshot =>{
                 const collectionMap =  convertCollectionsSnapshotToMap(snapshot);
                 updateCollection(collectionMap);
                 this.setState({loading:false})
            });
      }


      render(){
            const { match } = this.props;
            const { loading } = this.state;
            return (

                  <div className='shop-page'>
                         {/* <Route exact path={`${match.path}`} component={CollectionOverview}/> */}
                         <Route exact path={`${match.path}`} render={(props) => <CollectionOverviewWithSpinner isLoading={loading} {...props } />} />
                         <Route path={`${match.path}/:categoryId`} 
                          render={(props) => <CategoryWithSpinner isLoading={loading} {...props} />}
                          />
                   </div>
               )
      }
}

const mapDispatchToProps = dispatch => ({
      updateCollection: collectionMap => dispatch(updateCollections(collectionMap))
})

export default connect(null, mapDispatchToProps)(ShopPage)