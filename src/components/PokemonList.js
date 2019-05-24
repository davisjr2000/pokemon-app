import React from 'react';
import axios from 'axios';
import { StyleSheet, Text, View, FlatList } from 'react-native';

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

  renderItem = ({ item }) => (
    <View style={styles.pokemonContainer}>
      <Text style={styles.pokemonTitle}>{item.name}</Text>
      <Text style={styles.pokemonDescription}>{item.description}</Text>
    </View>
  );

  render() {
    return (
      <View style={styles.container}>
       <FlatList
        contentContainerStyle={styles.list}
         data={this.state.pokemons}
         keyExtractor={item => item.id}
         renderItem={this.renderItem}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  list: {
    padding: 20
  },
  pokemonContainer: {
    backgroundColor: "#fafafa",
    borderWidth: 1,
    borderColor: "#DDD",
    borderRadius: 5,
    padding: 20,
    marginBottom: 20,
  },
  pokemonTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  pokemonDescription: {
    fontSize: 16,
    color: "#999",
    marginTop: 5,
    lineHeight: 24,
  },
});
