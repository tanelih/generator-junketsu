import * as Redux from 'redux'

import thunk   from 'redux-thunk'
import logger  from 'redux-logger'

import * as ReduxRouter from 'react-router-redux'

import root, { IStoreShape } from 'app/reducers'

declare var module: any
declare var require: any

/**
 * Create a redux store to contain the application's state.
 */
export default function createStore(history): Redux.Store<IStoreShape> {
  const store = Redux.createStore<IStoreShape>(
    Redux.combineReducers<IStoreShape>(root),
    Redux.applyMiddleware(
      ReduxRouter.routerMiddleware(history),
      thunk,
      logger()
    )
  )
  if (module.hot) {
    module.hot.accept('app/reducers', () => {
      const root = require('app/reducers').default
      store.replaceReducer(Redux.combineReducers<IStoreShape>(root))
    })
  }
  return store
}
