import React from 'react'
import { Text, View } from 'react-native';
import { createBottomTabNavigator, createStackNavigator, createDrawerNavigator ,createAppContainer} from 'react-navigation'
import PokemonList from './src/components/PokemonList'

const Home = () => {
  return(
    <View>
      <Text>Home</Text>
    </View>
    )
}

const RootStack = createBottomTabNavigator({
  Pokémons: {
    screen: PokemonList,
  },
  Home: {
    screen: Home,
  },
});

const Navbar = createAppContainer(RootStack)

export default Navbar;

