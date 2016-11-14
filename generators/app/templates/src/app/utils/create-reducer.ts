import { ReducersMapObject } from 'redux'
import { handleActions }     from 'redux-actions'

/**
 * Creates a reducer.
 *
 * @param   {Object}   handlers     - Hash of handlers.
 * @param   {Object}   initialState - Initial state.
 * @returns {Function}              - Reducer function.
 */
export default function createReducer(handlers: ReducersMapObject, initialState: any) {
  return handleActions(handlers, initialState)
}
