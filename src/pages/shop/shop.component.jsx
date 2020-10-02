import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { 
    firestore, 
    convertCollectionsSnapshotToMap 
} from '../../firebase/firebase.utils'

import { updateCollections } from '../../redux/shop/shop.actions';

import WithSpinner from '../../components/with-spinner/with-spinner.component';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';

import { ShopPageContainer } from './shop.styles';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
    state = {
        loading: true
    };

    unsubscribeFromSnapshot = null;

    componentDidMount() {
        const { updateCollections } = this.props;
        const collectionRef = firestore.collection('collections');
        
        /**
         * Native FETCH API
         * Don't use for this as it returns an object where the values
         * are extremely nested.
         */
        // fetch('https://firestore.googleapis.com/v1/projects/crwn-clothing-db-88ca1/databases/(default)/documents/collections')
        // .then(response => response.json())
        // .then(collections => console.log(collections));

        /*
        PROMISE PATTERN
        */
        collectionRef.get().then(snapshot => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
            updateCollections(collectionsMap);
            this.setState({ loading: false });
        })

        /*
        OBSERVABLE PATTERN
        */
        // collectionRef.onSnapshot(async snapshot => {
        //     const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
        //     updateCollections(collectionsMap);
        //     this.setState({ loading: false });
        // })

    }

    render() {
        const { match } = this.props;
        const { loading } = this.state;
        return (
            <ShopPageContainer>
                <Route
                    exact 
                    path={`${match.path}`} 
                    render={(props) => (
                        <CollectionsOverviewWithSpinner isLoading={loading} {...props}/>
                    )}
                />
                <Route 
                    path={`${match.path}/:collectionId`} 
                    render={(props) => (
                        <CollectionPageWithSpinner isLoading={loading} {...props}/>
                    )}
                />
            </ShopPageContainer>
           
        );
    }
}

const mapDispatchToProps = dispatch => ({
    updateCollections: collectionsMap => 
        dispatch(updateCollections(collectionsMap))
})

export default connect(null, mapDispatchToProps)(ShopPage);
