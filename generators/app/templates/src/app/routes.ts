declare var require: any

/**
 * Route configuration for the application.
 */
export default <ReactRouter.Router.RouteConfig>[
  {
    getComponent(location, done) {
      require.ensure([], require =>
        done(null, require('app/containers/index').default))
    },
    path: '/',
  },
]
