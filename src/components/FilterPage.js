import React, { Component } from 'react'
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import AppBar from 'material-ui/AppBar'
import './FilterPage.css'
import FilterForm from './FilterForm'

export default class FilterPage extends Component {
  render () {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <div>
          <AppBar title='REACTIVE CARS' />
          <div id='filterPage'>
            <div id='filteredCars'>
              Cars
            </div>
            <div id='filterForm'>
              <FilterForm />
            </div>
          </div>
        </div>
      </MuiThemeProvider>
    )
  }
}
