import React        from 'react'
import { connect }  from 'react-redux'
import { isObject } from 'lodash'

interface WrappedProps {
  translate: TranslateFunc
}

type Wrappable = React.ComponentClass<{} & WrappedProps>

/**
 * Type declaration for the translation function provided by this HOC.
 */
export type TranslateFunc = (...string) => string

/**
 * Higher order component for providing translation to components.
 */
export default function translate(Component: Wrappable, resource = {}) {
  const Translator = props => (
    <Component
      {...props}
      translate={createTranslator(props.locale, resource)}
    />
  )
  return connect(state => ({ locale: state.locale }))(Translator)
}

/**
 * Create a translator function against the given resource, with the given locale.
 */
function createTranslator(locale: string, resource: Object): TranslateFunc {
  return function translate(...keys) {
    return keys.concat(locale).reduce(walk, resource)
      || `Missing translation for [${keys.concat(locale).join(' >> ')}]`
  }
}

/**
 * Walk the given resource on keys.
 */
function walk(resource, key) {
  if (!resource) {
    return undefined
  }
  if (isObject(resource[key]) || typeof resource[key] === 'string') {
    return resource[key]
  }
  return undefined
}
