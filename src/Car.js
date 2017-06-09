import React, { Component } from 'react'

class Car extends Component {
  render () {
    return (
      <div className='CarCard'>
        <img
          src={this.props.car.photos[0]}
          alt={this.props.car.manufacturer + ' ' + this.props.car.model} />
        <h3>
          {this.props.car.manufacturer + ' ' + this.props.car.model}
        </h3>
        <p>
          kilometrage: {this.props.car.kilometrage * 1000} km
        </p>
      </div>
    )
  }
}

export default Car
