import createReducer from 'app/utils/create-reducer'

export type Shape = string

/**
 * Initial state for the reducer.
 */
export const initialState: Shape = 'en'

/**
 * Map of handlers.
 */
const handlers = {
  SET_LOCALE: (locale: Shape, action: FSA<Shape>) => action.payload,
}

export default createReducer(handlers, initialState)
