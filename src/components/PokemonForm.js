import React from 'react';
import axios from 'axios';
import { StyleSheet, Text, View, Button } from 'react-native';
import t from 'tcomb-form-native';

const Form = t.form.Form;

const Pokemon = t.struct({
  name: t.String,
  description: t.String
});

export default class PokemonForm extends React.Component {

  handleCreate = async () => {
    const value = this._form.getValue();
    const api = axios.create({
      baseURL: 'http://localhost:3000/api/v1'
    })
     await api.post('/pokemons',value)
     .then(function(response){
        if (response.status == 200){
          // redirect
          this.props.navigation.navigate('Home')
        } else {
          alert("Error!")
        }
        console.log(response.status)
      });
   }


  render() {
    return (
      <View style={styles.container}>
        <Form
          ref={c => this._form = c}
          type={Pokemon}
        />
        <Button
          title="Create Pokémon"
          onPress={this.handleCreate}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   justifyContent: 'center',
    marginTop: 50,
    padding: 20,
    backgroundColor: '#ffffff',
  },
});
