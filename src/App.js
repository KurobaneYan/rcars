import React, { Component } from 'react'
import Car from './Car'
import './App.css'

class App extends Component {
  constructor () {
    super()
    this.state = {
      mostPopularCars: []
    }
  }

  render () {
    const cars = this.state.mostPopularCars.map((car, i) => {
      return <Car key={i} car={car} />
    })
    return (
      <div className='App'>
        <div id='CarCards'>
          {cars}
        </div>
      </div>
    )
  }

  componentDidMount () {
    fetch('http://localhost:1337/api/cars/mostpopular/25')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          mostPopularCars: responseJson
        })
      })
      .catch((error) => console.log(error))
  }
}

export default App
