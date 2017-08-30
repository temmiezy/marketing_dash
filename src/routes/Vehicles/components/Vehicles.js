import React from 'react'
import PropTypes from 'prop-types'

class Vehicles extends React.Component {
  static propTypes = {
    vehicles: PropTypes.array.isRequired,
    getVehicles: PropTypes.func.isRequired,
  }

  componentDidMount () {
    this.props.getVehicles()
  }

  render () {
    let rows = []
    for (let i = 0; i < this.props.vehicles.length; i++) {
      let vehicle = this.props.vehicles[i]
      rows.push(<tr key={i}>
        <td>{vehicle.name}</td>
        <td>Something</td>
      </tr>)
    }

    return <div style={{ margin: '0 auto' }}>
      <h2>Vehicles</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </div>
  }
}

export default Vehicles
