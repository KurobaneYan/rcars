import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import './FilterPage.css'
import FilterForm from './FilterForm'
import FilteredCars from './FilteredCars'

const initialState = {
  cars: [],
  manufacturer: '',
  model: '',
  transmission: '',
  fuelType: '',
  yearFrom: 1990,
  yearTo: 2017,
  priceFrom: 0,
  priceTo: 1000000
}

export default class FilterPage extends Component {
  constructor () {
    super()
    this.state = initialState

    this.handleManufacturerChange = this.handleManufacturerChange.bind(this)
    this.handleModelChange = this.handleModelChange.bind(this)
    this.handleYearFromChange = this.handleYearFromChange.bind(this)
    this.handleYearToChange = this.handleYearToChange.bind(this)
    this.handlePriceFromChange = this.handlePriceFromChange.bind(this)
    this.handlePriceToChange = this.handlePriceToChange.bind(this)
    this.handleTransmissionChange = this.handleTransmissionChange.bind(this)
    this.handleFuelChange = this.handleFuelChange.bind(this)
    this.filterByManufacturer = this.filterByManufacturer.bind(this)
    this.filterByModel = this.filterByModel.bind(this)
    this.filterByYear = this.filterByYear.bind(this)
    this.filterByPrice = this.filterByPrice.bind(this)
    this.filterByTransmission = this.filterByTransmission.bind(this)
    this.filterByFuel = this.filterByFuel.bind(this)
    this.resetFilter = this.resetFilter.bind(this)
  }

  componentDidMount () {
    fetch('http://localhost:3000/api/cars')
    .then(response => response.json())
    .then(responseJson => {
      this.setState({
        cars: responseJson
      })
    })
    .catch(error => console.log(error))
  }

  filterByManufacturer (car) {
    const manufacturer = this.state.manufacturer
    if (manufacturer === '') {
      return true
    }
    if (car.manufacturer === manufacturer) {
      return true
    }
    return false
  }

  filterByModel (car) {
    const model = this.state.model
    if (model === '') {
      return true
    }
    if (car.model === model) {
      return true
    }
    return false
  }

  filterByYear (car) {
    if ((car.year >= this.state.yearFrom) && (car.year <= this.state.yearTo)) {
      return true
    }
    return false
  }

  filterByPrice (car) {
    if ((car.price >= this.state.priceFrom) && (car.price <= this.state.priceTo)) {
      return true
    }
    return false
  }

  filterByTransmission (car) {
    if (this.state.transmission === '') {
      return true
    }
    if (car.transmissionType === this.state.transmission) {
      return true
    }
    return false
  }

  filterByFuel (car) {
    if (this.state.fuelType === '') {
      return true
    }
    if (car.fuelType === this.state.fuelType) {
      return true
    }
    return false
  }

  handleManufacturerChange (event, index, value) {
    this.setState({
      manufacturer: value
    })
  }

  handleModelChange (event, index, value) {
    this.setState({
      model: value
    })
  }

  handleYearFromChange (event) {
    let value = event.target.value
    value = value.length > 0 ? parseInt(value, 10) : 0
    this.setState({
      yearFrom: value
    })
  }

  handleYearToChange (event) {
    const value = event.target.value
    this.setState({
      yearTo: value.length > 0 ? parseInt(value, 10) : 0
    })
  }

  handlePriceFromChange (event) {
    let value = event.target.value
    value = value.length > 0 ? parseInt(value, 10) : 0
    this.setState({
      priceFrom: value
    })
  }

  handlePriceToChange (event) {
    const value = event.target.value
    this.setState({
      priceTo: value.length > 0 ? parseInt(value, 10) : 0
    })
  }

  handleTransmissionChange (event, value) {
    this.setState({
      transmission: value
    })
  }

  handleFuelChange (event, value) {
    this.setState({
      fuelType: value
    })
  }

  resetFilter () {
    this.setState({
      manufacturer: '',
      model: '',
      transmission: '',
      fuelType: '',
      yearFrom: 1990,
      yearTo: 2017,
      priceFrom: 0,
      priceTo: 1000000
    })
    console.log(this.state)
  }

  render () {
    let cars = this.state.cars.sort((a, b) => b.views - a.views)
    cars = cars.filter(this.filterByManufacturer)
    cars = cars.filter(this.filterByModel)
    cars = cars.filter(this.filterByYear)
    cars = cars.filter(this.filterByPrice)
    cars = cars.filter(this.filterByTransmission)
    cars = cars.filter(this.filterByFuel)
    return (
      <MuiThemeProvider>
        <div>
          <AppBar title='REACTIVE CARS' />
          <div id='filterPage'>
            <div id='filteredCars'>
              <FilteredCars cars={cars}/>
            </div>
            <div id='filterForm'>
              <FilterForm
                manufacturer={this.state.manufacturer}
                model={this.state.model}
                yearFrom={this.state.yearFrom}
                yearTo={this.state.yearTo}
                priceFrom={this.state.priceFrom}
                priceTo={this.state.priceTo}
                handleManufacturerChange={this.handleManufacturerChange}
                handleModelChange={this.handleModelChange}
                handleYearFromChange={this.handleYearFromChange}
                handleYearToChange={this.handleYearToChange}
                handlePriceFromChange={this.handlePriceFromChange}
                handlePriceToChange={this.handlePriceToChange}
                handleTransmissionChange={this.handleTransmissionChange}
                handleFuelChange={this.handleFuelChange}
                reset={this.resetFilter}
              />
            </div>
          </div>
        </div>
      </MuiThemeProvider>
    )
  }
}
