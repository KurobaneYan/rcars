import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import './index.css'
import injectTapEventPlugin from 'react-tap-event-plugin'

import FilterPage from './FilterPage'

injectTapEventPlugin()

ReactDOM.render(<FilterPage />, document.getElementById('root'))
registerServiceWorker()
