import React from 'react'
import { Text, View,} from 'react-native';
import { createBottomTabNavigator, createStackNavigator, createDrawerNavigator ,createAppContainer} from 'react-navigation'
import PokemonList from './src/components/PokemonList'
import PokemonForm from './src/components/PokemonForm'

const AppNavigator = createBottomTabNavigator({
  Home: {
    screen: PokemonList
  },
  Create: {
    screen: PokemonForm
  }
});

const Navbar = createAppContainer(AppNavigator)

export default Navbar;

