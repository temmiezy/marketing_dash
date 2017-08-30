import React from 'react'
import PropTypes from 'prop-types'
import './PageLayout.scss'

import Layout from '../../components/common/Layout'

export const PageLayout = ({ children }) => (

  <Layout children={children} />
)
PageLayout.propTypes = {
  children: PropTypes.node,
}

export default PageLayout
