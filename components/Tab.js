/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict'

const React = require('react-native')
const {
  Text,
  Component
} = React
const {MKButton} = require('react-native-material-kit')
const {header} = require('../lib/styles/')

class Tab extends Component {

  constructor () {
    super()
    this.onTabSelect = this.onTabSelect.bind(this)
  }

  onTabSelect () {
    if (this.props.onSelect) {
      this.props.onSelect(this.props)
    }
  }

  render () {
    const {selected, label, page} = this.props
    return (
      <MKButton
        style={[header.tab, selected === page ? header.tabSelected : undefined]}
        onPressOut={this.onTabSelect}
        delayPressOut={150}
        page={page}
      >
        <Text style={header.tabLabel}>
          {label}
        </Text>
      </MKButton>
    )
  }
}

module.exports = Tab
