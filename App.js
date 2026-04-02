import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ImageBackground,
  KeyboardAvoidingView,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

export default function App() {
  // Criar estados - memorias
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const [mostrarSenha, setMostrarSenha] = useState(false); // Estado que controla se a senha esta visivel (true): visivel (false): oculta
  const [modalVisivel, setModalVisivel] = useState(false);

  const [nomeCadastro, setNomeCadastro] = useState("");
  const [emailCadastro, setEmailCadastro] = useState("");
  const [senhaCadastro, setSenhaCadastro] = useState("");

  const realizarLogin = () => {
    if (email === "" || senha === "") {
      Alert.alert("Atenção, preencha todos os campos");
    } else {
      Alert.alert("Login realizado", "Bem vindo" + email);
    }
  };

  const finalizarCadastro = () => {
    if (nomeCadastro === "" || emailCadastro === "" || senhaCadastro === "") {
      Alert.alert("Campos não preenchidos!");
      return;
    }
    Alert.alert("Sucesso", "Cadastro realizado!")
    setModalVisivel(true)
  };
  // ----------------- Retornar na interface ----------------- //

  return (
    <ImageBackground
      source={require("./assets/Wallpaper.jpg")}
      style={styles.fundo}
      resizeMode="cover"
    >
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
        <Text style={styles.esqueciSenha}> Esqueci minha senha</Text>
      </View>
    </ImageBackground>
  );
}

// ----------------- Estlização ----------------- //

const styles = StyleSheet.create({
  conteiner: {
    width: "70%",
    height: "50%",
    padding: 40,
    borderRadius: 20,
    backgroundColor: "#ccc",
  },
  fundo: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
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
  esqueciSenha: {
    textAlign: "center",
    fontWeight: "bold",
    paddingTop: "10px",
    textDecorationLine: "underline",
  },
});
