/**
 * Remove errors for the given action type.
 */
export function clearError(payload: ActionType): FSA<ActionType> {
  return { payload, type: 'CLEAR_ERROR' }
}
