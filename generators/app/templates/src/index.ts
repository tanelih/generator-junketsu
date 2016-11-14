import ReactDOM from 'react-dom'

declare var module:  any
declare var require: any

const mount  = document.getElementById('app')
const render = app => ReactDOM.render(app, mount)

if (module.hot) {
  module.hot.accept('app', () => render(require('app').default))
}

render(require('app').default)
