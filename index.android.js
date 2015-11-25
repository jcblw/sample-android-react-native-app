/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict'

const React = require('react-native')
const {
  AppRegistry,
  Text,
  View,
  Component,
  DrawerLayoutAndroid,
  ViewPagerAndroid,
  Image
} = React
const {MKCardStyles} = require('react-native-material-kit')
const HeaderSearch = require('./components/HeaderSearch')
const Tab = require('./components/Tab')
const {header, utils} = require('./lib/styles/')

class CoolKids extends Component {

  constructor () {
    super()
    this.onLeftTap = this.onLeftTap.bind(this)
    this.onRightTap = this.onRightTap.bind(this)
    this.onSearchFocus = this.onSearchFocus.bind(this)
    this.onSearchBlur = this.onSearchBlur.bind(this)
    this.onPageSelected = this.onPageSelected.bind(this)
    this.onTabSelect = this.onTabSelect.bind(this)
    this.state = {
      text: 'Hello World',
      leftActive: false,
      rightActive: false,
      drawerPosition: 'left',
      drawerWidth: 300,
      currentPage: 0,
      region: {
        latitude: 0,
        longitude: 0,
        latitudeDelta: 0,
        longitudeDelta: 0
      }
    }
  }

  onLeftTap () {
    if (this.state.inputFocused) {
      const {searchInput} = this.refs
      this.setState({inputFocused: false})
      searchInput.blur()
    } else {
      this.setState({drawerPosition: 'left'})
      const {drawer} = this.refs
      drawer.openDrawer()
    }
  }

  onRightTap () {
    if (this.state.inputFocused) {
      this.setState({value: ''})
    } else {}
  }

  onSearchFocus () {
    this.setState({inputFocused: true})
  }

  onSearchBlur () {
    this.setState({inputFocused: false})
  }

  onPageSelected (e) {
    const currentPage = e.nativeEvent.position
    this.setState({currentPage})
  }

  onTabSelect (tab) {
    const currentPage = tab.page
    const {pager} = this.refs
    pager.setPage(currentPage)
    this.setState({currentPage})
  }

  render () {
    const {inputFocused, drawerWidth, drawerPosition, currentPage} = this.state
    const leftIcon = inputFocused ? '◀︎' : '●'
    const rightIcon = inputFocused ? '✕' : '●'
    const position = drawerPosition === 'left' ? DrawerLayoutAndroid.positions.Left : DrawerLayoutAndroid.positions.Right
    return (
      <View style={utils.container}>
        <DrawerLayoutAndroid
          ref='drawer'
          drawerWidth={drawerWidth}
          drawerPosition={position}
          renderNavigationView={() => {
            return (
              <View style={utils.maincontent}>
                <Text>
                  hello
                </Text>
              </View>
            )
          }}
        >
          <HeaderSearch
            ref='searchInput'
            iconLeft={leftIcon}
            iconRight={rightIcon}
            onLeftTap={this.onLeftTap}
            onRightTap={this.onRightTap}
            value={this.state.value}
            placeholder='Search...'
            onChange={(value) => this.setState({value})}
            onFocus={this.onSearchFocus} />
          <View style={[header.topbar, header.topbarTabs]}>
            <Tab
              selected={currentPage}
              page={0}
              label='Photos'
              onSelect={this.onTabSelect}
            />
            <View style={header.tabSpacer} />
            <Tab
              selected={currentPage}
              page={1}
              label='Map'
              onSelect={this.onTabSelect}
            />
            <View style={header.tabSpacer} />
            <Tab
              selected={currentPage}
              page={2}
              label='Likes'
              onSelect={this.onTabSelect}
            />
          </View>
          <View style={header.topBarBorderBottom} />
          <ViewPagerAndroid style={utils.maincontent} initialPage={1} onPageSelected={this.onPageSelected} ref='pager'>
            <View style={utils.maincontent}>
              <Text>
                Photos
              </Text>
            </View>
            <View style={utils.maincontent}>
              <Text>
                Map
              </Text>
            </View>
            <View style={utils.maincontent}>
              <Text>
                Likes
              </Text>
            </View>
          </ViewPagerAndroid>
        </DrawerLayoutAndroid>
      </View>
    )
  }
}

AppRegistry.registerComponent('CoolKids', () => CoolKids)
