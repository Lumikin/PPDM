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
      Alert.alert("Login realizado", "Bem vindo", +email);
    }
  };
  return (
    <view style={styles.conteiner}>
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
      
    </view>
  );
}

const styles = StyleSheet.create({});
