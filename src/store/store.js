import {createStore, applyMiddleware, compose} from 'redux';
import reducers from '../reducers/index';
import thunk from "redux-thunk";

const logger = store => next => action => {
  let result = next(action);
  return result;
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default createStore(reducers, composeEnhancers(applyMiddleware(logger, thunk)));
//
// import {createStore,applyMiddleware} from 'redux';
// import thunk from 'redux-thunk';
// import rootReducer from '../reducers';
//
// const middleware = [thunk]
//
// const store = createStore(
//   rootReducer,
//   applyMiddleware(...middleware)
// )
//
// export default store
