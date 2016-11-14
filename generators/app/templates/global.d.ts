/**
 * @file Types that should be available globally in the project. This means that this file is not
 *       meant for module level typings, but instead for typings that don't really belong anywhere.
 */

/**
 * Type definition for the Flux Standard Action 'type' property.
 */
type ActionType = string

/**
 * Interface definition for Flux Standard Action.
 */
interface FSA<Payload> {
  /**
   * Type of the action.
   */
  type: ActionType

  /**
   * Payload / data for the action.
   */
  payload: Payload
}

