/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict'

const React = require('react-native')
const {
  Text,
  TextInput,
  View,
  Component,
  PropTypes
} = React
const {MKButton, MKRipple} = require('react-native-material-kit')
const {header} = require('../lib/styles/')
const propTypes = {
  iconLeft: PropTypes.string,
  iconRight: PropTypes.string,
  onIconLeftClick: PropTypes.func,
  onIconRightClick: PropTypes.func
}
const defaultProps = {
}

class HeaderSearch extends Component {

  constructor () {
    super()
    this.state = {text: 'Hello World'}
    this.onInputPress = this.onInputPress.bind(this)
  }

  blur () {
    const input = this.refs.input
    if (input) {
      input.blur()
    }
  }

  onInputPress () {
    const input = this.refs.input
    if (input) {
      input.focus()
    }
  }

  render () {
    return (
      <View style={header.topbar}>
        <View style={header.input}>
          <MKButton
            style={header.inputLeftButton}
            onPress={this.props.onLeftTap}
          >
             <Text>
              {this.props.iconLeft}
             </Text>
          </MKButton>
          <MKButton
            rippleColor={'rgba(0,0,0,.05)'}
            style={header.textinput}
            onPressOut={this.onInputPress}
            delayPressOut={150}
          >
            <TextInput
              ref='input'
              placeholder={this.props.placeholder}
              textAlignVertical='center'
              underlineColorAndroid='transparent'
              style={header.textinput}
              onChangeText={this.props.onChange}
              value={this.props.value}
              onFocus={this.props.onFocus}
              onBlur={this.props.onBlur}
            />
          </MKButton>
          <MKButton
            style={header.inputRightButton}
            onPress={this.props.onRightTap}
          >
              <Text>
                {this.props.iconRight}
              </Text>
          </MKButton>
        </View>
      </View>
    )
  }
}

HeaderSearch.propTypes = propTypes
HeaderSearch.defaultProps = defaultProps

module.exports = HeaderSearch
