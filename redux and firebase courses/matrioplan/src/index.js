import * as serviceWorker from './serviceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './store/reducers/rootReducer'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { createFirestoreInstance,reduxFirestore, getFirestore } from 'redux-firestore'
import { ReactReduxFirebaseProvider, getFirebase } from 'react-redux-firebase';
import fbConfig from './config/fbConfig'
import firebase from 'firebase/app'


const store = createStore(rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
    //reactReduxFirebase(fbConfig), // redux binding for firebase
    reduxFirestore(fbConfig) // redux bindings for firestore
  )
);



const rrfConfig = {
  userProfile: 'users',
}
const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance,
}

ReactDOM.render(
  <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>           
          <App />           
      </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById('root'));
serviceWorker.unregister();