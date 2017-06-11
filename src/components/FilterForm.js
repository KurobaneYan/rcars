import React, { Component } from 'react'
import SelectField from 'material-ui/SelectField'
import TextField from 'material-ui/TextField'
import MenuItem from 'material-ui/MenuItem'
import FlatButton from 'material-ui/FlatButton'
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton'

const manufacturerModels = {
  '': [''],
  'BMW': ['', 'I3', 'I8', 'M6'],
  'Volvo': ['', 'v90', 'XC90', 'S90'],
  'Mitsubishi': ['', 'Lancer', 'Pajero', 'Outlander']
}

const styles = {
  radioButton: {
    marginBottom: 16
  }
}

export default class FilterForm extends Component {
  constructor () {
    super()
    this.state = {
      value: 'test'
    }
  }
  handleChange(event) {
    console.log(event.target.value)
  }
  render () {
    const models = manufacturerModels[this.props.manufacturer].map((model, i) => {
      return <MenuItem key={i} value={model} primaryText={model} />
    })
    return (
      <form>
          <SelectField
            floatingLabelText="Manufacturer"
            value={this.props.manufacturer}
            fullWidth={true}
            onChange={this.props.handleManufacturerChange}>
            <MenuItem value="" primaryText="" />
            <MenuItem value="BMW" primaryText="BMW" />
            <MenuItem value="Volvo" primaryText="Volvo" />
            <MenuItem value="Mitsubishi" primaryText="Mitsubishi" />
          </SelectField>
          <SelectField
            floatingLabelText="Model"
            value={this.props.model}
            fullWidth={true}
            onChange={this.props.handleModelChange}>
            {models}
          </SelectField>
          <TextField
            type="number"
            floatingLabelText="Year from"
            value={this.props.yearFrom}
            onChange={this.props.handleYearFromChange}
            fullWidth={true}
          />
          <TextField
            type="number"
            floatingLabelText="Year to"
            value={this.props.yearTo}
            onChange={this.props.handleYearToChange}
            fullWidth={true}
          />
          <TextField
            type="number"
            floatingLabelText="Price from"
            value={this.props.priceFrom}
            onChange={this.props.handlePriceFromChange}
            fullWidth={true}
          />
          <TextField
            type="number"
            floatingLabelText="Price to"
            value={this.props.priceTo}
            onChange={this.props.handlePriceToChange}
            fullWidth={true}
          />
          <RadioButtonGroup
            name="transmission"
            defaultSelected=""
            onChange={this.props.handleTransmissionChange}
          >
            <RadioButton
              value="Manual"
              label="Manual"
              style={styles.radioButton}
            />
            <RadioButton
              value="Automatic"
              label="Automatic"
              style={styles.radioButton}
            />
            <RadioButton
              value=""
              label="doesn't matter"
              style={styles.radioButton}
            />
          </RadioButtonGroup>
          <RadioButtonGroup
            name="fuelType"
            defaultSelected=""
            labelPosition="left"
            onChange={this.props.handleFuelChange}
          >
            <RadioButton
              value="Disel"
              label="Disel"
              style={styles.radioButton}
            />
            <RadioButton
              value="Gasoline"
              label="Gasoline"
              style={styles.radioButton}
            />
            <RadioButton
              value=""
              label="doesn't matter"
              style={styles.radioButton}
            />
          </RadioButtonGroup>
          <FlatButton
            label="Reset Filter"
            onClick={this.props.reset}
            fullWidth={true}
          />
      </form>
    )
  }
}
