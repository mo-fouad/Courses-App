import {applyMiddleware, compose, createStore} from "redux";
import rootReducer from './reducers'
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";

import thunk from "redux-thunk";

// Creating our Starter stor

function configureStore(initialState) {
    const composeEnhancers =
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // add support for Redux dev tools
    // just return the createStore function with two args > combinedReducers & initialState
    return createStore(
        rootReducer,
        initialState,
        composeEnhancers(applyMiddleware(
            thunk,
            reduxImmutableStateInvariant()
            )
        )
    );
}

export default configureStore;
