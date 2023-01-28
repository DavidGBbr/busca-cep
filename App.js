import React from "react";
import axios from "axios";
import { StyleSheet, Text, TextInput, View, Button } from "react-native";

export default function App() {
  const [searchCep, setSearchCep] = React.useState(null);
  const [infoCep, setInfoCep] = React.useState({});

  const getCep = async () => {
    const { data } = await axios.get(
      `http://viacep.com.br/ws/${searchCep}/json/`
    );
    setInfoCep(data);
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerSearch}>
        <TextInput
          placeholder="Digite um Cep:"
          value={searchCep}
          onChangeText={(text) => setSearchCep(text)}
        />
        <Button title="Buscar" onPress={getCep} />
      </View>

      {infoCep && (
        <View>
          <Text>Rua: {infoCep.logradouro}</Text>
          <Text>Bairro: {infoCep.bairro}</Text>
          <Text>Cidade {infoCep.localidade}: </Text>
          <Text>Estado: {infoCep.uf}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
