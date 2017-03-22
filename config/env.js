// Grab NODE_ENV and REACT_APP_* environment variables and prepare them to be
// injected into the application via DefinePlugin in Webpack configuration.

const REACT_APP = /^REACT_APP_/i;

function getClientEnvironment(passEnv) {
  let processEnv = Object
    .keys(process.env)
    .filter(key => REACT_APP.test(key))
    .reduce((env, key) => {
      env[key] = JSON.stringify(process.env[key])
      return env
    }, {
      // Useful for determining whether we’re running in production mode.
      // Most importantly, it switches React into the correct mode.
      'NODE_ENV': JSON.stringify(
        process.env.NODE_ENV || 'development'
      ),
    })
  Object.keys(passEnv).map((key) => passEnv[key] = JSON.stringify(passEnv[key]))
  return {'process.env': Object.assign(processEnv, passEnv)}
}

module.exports = getClientEnvironment
