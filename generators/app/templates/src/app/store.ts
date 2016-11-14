import * as Redux from 'redux'

import thunk   from 'redux-thunk'
import logger  from 'redux-logger'

import * as Router      from 'react-router'
import * as ReduxRouter from 'react-router-redux'

import root, { StoreShape } from 'app/reducers'

declare var module:  any
declare var require: any

/**
 * Create a redux store to contain the application's state.
 */
export default function createStore(history): Redux.Store<StoreShape> {
  const store = Redux.createStore<StoreShape>(
    Redux.combineReducers<StoreShape>(root),
    Redux.applyMiddleware(
      ReduxRouter.routerMiddleware(history),
      thunk,
      logger()
    )
  )
  if (module.hot) {
    module.hot.accept('app/reducers', () => {
      const root = require('app/reducers').default
      store.replaceReducer(Redux.combineReducers<StoreShape>(root))
    })
  }
  return store
}
