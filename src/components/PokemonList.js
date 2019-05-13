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
    <View>
      <Text>{item.name}</Text>
      <Text>{item.description}</Text>
    </View>
  );

  render() {
    return (
      <View style={styles.container}>
       <FlatList
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
    alignItems: 'center',
    justifyContent: 'center',
  },
});
