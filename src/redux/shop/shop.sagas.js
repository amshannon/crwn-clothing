import { 
    takeLatest, 
    call, 
    put,
    all 
} from 'redux-saga/effects';

import { 
    firestore, 
    convertCollectionsSnapshotToMap 
} from '../../firebase/firebase.utils';

import {
    fetchCollectionsSuccess,
    fetchCollectionsFailure
} from './shop.actions';

import ShopActionTypes from './shop.types';

export function* fetchCollectionsAsync() {
    try{
        const collectionRef = firestore.collection('collections');
        const snapshot = yield collectionRef.get();
        /**
         * call takes function as first argument and subsequent args are params 
         * for the function call.
         */
        const collectionsMap = yield call(
            convertCollectionsSnapshotToMap,
            snapshot
        );
        /**
         * Sagas don't dispatch using dispatch keyword. Instead they use the effect 'put'
         */
        yield put(fetchCollectionsSuccess(collectionsMap))
    } catch(error) {
        yield put(fetchCollectionsFailure(error.message))
    }

}

export function* fetchCollectionsStart() {
    /**
     * Use takeLatest as we only want to fire api one time
     * instead of firing multiples. If FETCH_COLLECTIONS_START
     * fires multiple times the latest is the best to use as
     * will be most likely to have most up to date data from db
     */
    yield takeLatest(
        ShopActionTypes.FETCH_COLLECTIONS_START,
        fetchCollectionsAsync 
    );
}

export function* shopSagas() {
    yield all([
        call(fetchCollectionsStart)
    ]);
}
