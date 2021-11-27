import React from 'react'
import { styleSheet, Text, View, Image} from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import WriteStoryScreen from './screens/WriteStoryScreen'
import ReadStoryScreen from './screens/ReadStoryScreen'

export default class App extends React.Component {
  render() {
    return (
      <SafeAreaProvider>
        <AppContainer />
      </SafeAreaProvider>
    )
  }
}
const TabNavigator = createBottomTabNavigator({
  ReadStory: { screen: ReadStoryScreen },
  WriteStory: { screen: WriteStoryScreen }
},
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ }) => {
        const routeName = navigation.state.routeName
        if (routeName === "ReadStory") {
          return (
            <Image
              source={require("./assets/read.png")}
              style={{ width: 40, height: 40 }}
            />
          )
        }
        else if (routeName === "WriteStory") {
          return (
            <Image
              source={require("./assets/write.png")}
              style={{ width: 40, height: 40 }}
            />
          )
        }
      }
    })
  })
const AppContainer = createAppContainer(TabNavigator)