
/* tslint:disable:no-unused-variable */

import 'app/style'

import React        from 'react'
import { Provider } from 'react-redux'
import { Router }   from 'react-router'

import { browserHistory }       from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import routes      from 'app/routes'
import createStore from 'app/store'

/**
 * The application's store, history etc.
 */
const store   = createStore(browserHistory)
const history = syncHistoryWithStore(browserHistory, store)

/**
 * The application's root element.
 */
const application = (
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>
)

export default application
