import React from 'react'
import PropTypes from 'prop-types'

import Header from './Header'
import Footer from './Footer'
import Navigation from '../navigation/components/Navigation'

export default class Layout extends React.Component {
  static propTypes = {
    children: PropTypes.object.isRequired,
  }

  render () {
    return (
      <div>
        <Header />
        <Navigation />
        <div id='main' role='main'>

          {this.props.children}
        </div>

        <Footer />
      </div>
    )
  }
}
