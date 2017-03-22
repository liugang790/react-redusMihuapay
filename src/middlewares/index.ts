import {
  applyMiddleware,
  compose,
  createStore as createStoreAction,
} from 'redux'
import { createEpicMiddleware } from 'redux-observable'
import {
  autoRehydrate,
  persistStore,
} from 'redux-persist'

import epics from '../epics'
import reducers from '../reducers'

const whitelist = ['register']

// tslint:disable-next-line no-string-literal
const composeEnhancers = process.env.dev && window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] ?
                            // tslint:disable-next-line:no-string-literal
                            window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] : compose

export default () => {
  const enhancer = composeEnhancers(
    autoRehydrate(),
    applyMiddleware(
      createEpicMiddleware(epics),
    ),
  )

  const store = createStoreAction(reducers, undefined, enhancer)

  persistStore(
    store,
    {
      whitelist,
    },
  )
  return store
}
