import React, {useState} from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

export default function App () {

  const [feed, setFeed] = useState ([
    {id : '1', nome: 'Matheus', idade: 50, email: 'matheus@matheus.com'},
    {id : '2', nome: 'Lucas', idade: 23, email: 'lucas@lucas.com'},
    {id : '3', nome: 'Henrique', idade: 40, email: 'henrique@henrique.com'},
    {id : '4', nome: 'Ana', idade: 19, email: 'ana@ana.com'},
  ]);

  return(
    <View style={styles.container}>

    <FlatList
    data={feed}
    renderItem={ ({item} ) => <Pessoa data={item} />}
    />

    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  areaPessoa:{
    backgroundColor: 'white',
    height: 100,
    margin: 20,
    marginBottom: 1,
    top: 40,
  },
})


function Pessoa(props){
  return(
    <View style={styles.areaPessoa}>
    <Text>{props.data.id}</Text>
    <Text>{props.data.nome}</Text>
    <Text>{props.data.idade}</Text>
    <Text>{props.data.email}</Text>
    </View>
  );
}
