/**
 * Type declaration for this reducer's state.
 */
export type Shape = Array<ActionType>

/**
 * Stores the 'in-progress' actions in a set. You can customize this to only include a certain
 * subset of actions by, for example, whitelisting what actions get stored.
 *
 * @param   {Shape}    state  - Current state.
 * @param   {FSA<any>} action - Flux standard action.
 * @returns {Shape}           - The next state.
 */
export default function progress(state: Shape = [], action: FSA<any>) {
  if (action.type === 'ERROR') {
    return state.filter(v => v !== action.payload.origin)
  }
  if (action.type.endsWith('_SUCCESS')) {
    const i = action.type.lastIndexOf('_SUCCESS')
    return state.filter(v => v !== action.type.substr(0, i))
  }
  return state.indexOf(action.type) >= 0
    ? state
    : state.concat(action.type)
}
