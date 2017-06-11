import React, { Component } from 'react'
import './CarListItem.css'

class CarListItem extends Component {
  render () {
    const car = this.props.car
    return (
      <div className='carListItem'>
        <div className='img'>
          <img
            src={car.photos[0]}
            alt={car.manufacturer + ' ' + car.model} />
        </div>
        <div className='description'>
          <h3>
            {car.manufacturer + ' ' + car.model}
          </h3>
          <p>
            {car.views} views
          </p>
          <p>
            Kilometrage: {car.kilometrage * 1000} km
          </p>
          <p>
            Engine displacement {car.engineDisplacement} cm<sup>3</sup>
          </p>
          <p>
            Year {car.year}
          </p>
          <p>
            FuelType {car.fuelType}
          </p>
          <p>
            {car.transmissionType} transmission
          </p>
          <p>
            &#36;{car.price}
          </p>
        </div>
      </div>
    )
  }
}

export default CarListItem
