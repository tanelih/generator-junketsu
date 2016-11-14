/**
 * Set the current locale of the application.
 */
export function setLocale(payload: string): FSA<string> {
  return { payload, type: 'SET_LOCALE' }
}
