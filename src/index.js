import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import './index.css'
import injectTapEventPlugin from 'react-tap-event-plugin'
import FilterPage from './components/FilterPage'
import { createStore } from 'redux'
import filter from './reducers/filter'

injectTapEventPlugin()

const store = createStore(filter)

console.log('store state', store.getState())

ReactDOM.render(<FilterPage />, document.getElementById('root'))

registerServiceWorker()
