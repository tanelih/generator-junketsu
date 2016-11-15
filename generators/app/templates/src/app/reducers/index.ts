import * as ReduxRouter from 'react-router-redux'

import { Shape as LocaleShape }   from 'app/reducers/locale'
import { Shape as ErrorsShape }   from 'app/reducers/errors'
import { Shape as ProgressShape } from 'app/reducers/progress'

declare var require: Function

/**
 * Interface definition for the shape of the application state.
 */
export interface IStoreShape {
  locale: LocaleShape
  errors: ErrorsShape
  progress: ProgressShape
  routing: ReduxRouter.DefaultSelectLocationState
}

/**
 * Map of reducers mimicking the application state's shape.
 */
export default {
  locale:   require('app/reducers/locale').default,
  errors:   require('app/reducers/errors').default,
  progress: require('app/reducers/progress').default,
  routing:  ReduxRouter.routerReducer,
}
