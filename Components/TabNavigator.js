import React from "react";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createAppContainer, createStackNavigator } from "react-navigation";
import Home from "../Sreens/Home";
import SignInScreen from "./SignInScreen";

// const StackNavigator = createStackNavigator({
//   Home: {
//     screen: Home,
//     navigationOptions: {
//       title: "Home"
//     }
//   },
//   Login: {
//     screen: Login
//   }
// });

const TabNavigator = createBottomTabNavigator({
  Home: Home,
  Login: SignInScreen
});

export default createAppContainer(TabNavigator);
