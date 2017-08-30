import React from 'react'
import { browserHistory, Router } from 'react-router'
import { Provider } from 'react-redux'
import PropTypes from 'prop-types'

import 'core-js/es6/array'
import 'core-js/es6/promise'
import 'core-js/es6/object'

import 'jquery-ui-npm/jquery-ui.min.js'
import 'imports-loader?jQuery=jquery!jquery-color/jquery.color.js'

window.jQuery = window.$ = require('jquery')
window.moment = require('moment')
window._ = require('lodash')

class App extends React.Component {
  static propTypes = {
    store: PropTypes.object.isRequired,
    routes: PropTypes.object.isRequired,
  }

  static shouldComponentUpdate () {
    return false
  }

  render () {
    return (
      <Provider store={this.props.store}>
        <div style={{ height: '100%' }}>
          <Router history={browserHistory} children={this.props.routes} />
        </div>
      </Provider>
    )
  }
}

export default App
