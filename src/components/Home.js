import React, { Component } from 'react'
import Car from './Car'

export default class Home extends Component {
  constructor () {
    super()
    this.state = {
      mostPopularCars: []
    }
  }

  componentDidMount () {
    fetch('http://localhost:1337/api/cars/mostpopular/25')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          mostPopularCars: responseJson
        })
      })
      .catch((error) => console.error(error))
  }

  render () {
    const cars = this.state.mostPopularCars.map((car, i) => {
      return <Car key={i} car={car} />
    })
    return (
      <div className='Home'>
        <div id='CarCards'>
          {cars}
        </div>
      </div>
    )
  }
}
