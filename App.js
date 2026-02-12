// ----------------- Feito por Lumiko(Lucas.M) ----------------- //

import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";

export default function App() {
  // Criar estados - memorias
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const realizarLogin = () => {
    if (email === "" || senha === "") {
      Alert.alert("Atenção, preencha todos os campos");
    } else {
      Alert.alert("Login realizado", "Bem vindo" + email);
    }
  };

  // ----------------- Retornar na interface ----------------- //

  return (
    <View style={styles.conteiner}>
      <Text style={styles.titulo}> Área do login </Text>
      <TextInput
        placeholder="Digite seu e-mail"
        style={styles.input}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        placeholder="Digite a sua senha"
        style={styles.input}
        secureTextEntry={true}
        onChangeText={setSenha}
      />
      <TouchableOpacity style={styles.botao} onPress={realizarLogin}>
        <Text style={styles.textoBotao}> Entrar </Text>
      </TouchableOpacity>
    </View>
  );
}

// ----------------- Estlização ----------------- //

const styles = StyleSheet.create({
  conteiner: {
    flex: 3,
    justifyContent: "center",
    padding: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "center",
  },
  input: {
    borderBottomWidth: 1,
    marginBottom: 15,
    padding: 10,
  },
  botao: {
    backgroundColor: "#81c3e7",
    padding: 15,
    borderRadius: 5,
  },
  textoBotao: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
  },
});
