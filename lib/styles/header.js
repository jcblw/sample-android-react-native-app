const {MKColor} = require('react-native-material-kit')

module.exports = {
  topbar: {
    flex: 0,
    backgroundColor: MKColor.Blue
  },
  input: {
    flex: 1,
    margin: 20,
    paddingRight: 20,
    paddingLeft: 20,
    backgroundColor: MKColor.Silver,
    height: 50,
    borderRadius: 5,
    alignItems: 'flex-start',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  inputLeftButton: {
    height: 50,
    flex: 0,
    justifyContent: 'center',
    marginRight: 20,
    color: MKColor.Grey
  },
  inputRightButton: {
    height: 50,
    flex: 0,
    borderRadius: 5,
    alignItems: 'flex-end',
    justifyContent: 'center',
    marginLeft: 20,
    color: MKColor.Grey
  },
  textinput: {
    borderWidth: 0,
    flex: 1,
    height: 50,
    justifyContent: 'center',
    margin: 0
  },
  topbarTabs: {
    flexDirection: 'row'
  },
  topBarBorderBottom: {
    height: 1,
    backgroundColor: 'rgba(0,0,0,0.2)',
    flex: 0
  },
  tab: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 20
  },
  tabSpacer: {
    flex: 0,
    width: 1,
    height: 30,
    backgroundColor: 'rgba(0,0,0,0.2)',
    alignSelf: 'center'
  },
  tabSelected: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 17,
    borderBottomWidth: 3,
    borderBottomColor: MKColor.Silver
  },
  tabLabel: {
    color: MKColor.Silver
  }
}
