import createReducer from 'app/utils/create-reducer'

export type Err   = { error: Error, origin: string }
export type Shape = Array<Err>

/**
 * Initial state for the reducer.
 */
export const initialState: Shape = []

/**
 * Map of handlers.
 */
const handlers = {
  ERROR: (errors: Shape, action: FSA<Err>) =>
    errors.concat(action.payload),

  CLEAR_ERROR: (errors: Shape, action: FSA<ActionType>) =>
    errors.filter(err => err.origin !== action.payload),
}

export default createReducer(handlers, initialState)
