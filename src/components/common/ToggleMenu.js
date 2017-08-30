import React from 'react'
import PropTypes from 'prop-types'

export default class ToggleMenu extends React.Component {
  static propTypes = {
    className: PropTypes.string.isRequired,
  }

  toggleMenu (e) {
    const body = $('body')
    const html = $('html')

    if (!body.hasClass('menu-on-top')) {
      html.toggleClass('hidden-menu-mobile-lock')
      body.toggleClass('hidden-menu')
      body.removeClass('minified')
    } else if (body.hasClass('menu-on-top') && body.hasClass('mobile-view-activated')) {
      html.toggleClass('hidden-menu-mobile-lock')
      body.toggleClass('hidden-menu')
      body.removeClass('minified')
    }
    e.preventDefault()
  }

  render () {
    return (
      <div id='hide-menu' className={this.props.className}>
        <span>
          <a onClick={ToggleMenu.toggleMenu} title='Collapse Menu'><i className='fa fa-reorder' /></a>
        </span>
      </div>

    )
  }
}
