import React from 'react';
import axios from 'axios';
import { StyleSheet, Text, View } from 'react-native';

export default class PokemonList extends React.Component {
  state = {
    pokemons: []
  }

  componentDidMount(){
    this.loadPokemons();
  }

  loadPokemons = async () => {
    const api = axios.create({
      baseURL: 'http://localhost:3000/api/v1'
    })
    const response = await api.get('/pokemons')

    const pokemons = response.data;


    this.setState({ pokemons: pokemons });

  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Pokémons!</Text>
        {this.state.pokemons.map(pokemon => {
           return <Text key={pokemon.id}>{pokemon.name}</Text>
        })}

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
