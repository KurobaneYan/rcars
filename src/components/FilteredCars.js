import React, { Component } from 'react'
import CarListItem from './CarListItem'

class FilteredCars extends Component {
  render () {
    const cars = this.props.cars.map((car, i) => {
      return <CarListItem key={i} car={car} />
    })
    return (
      <div>
        {cars}
      </div>
    )
  }
}

export default FilteredCars
