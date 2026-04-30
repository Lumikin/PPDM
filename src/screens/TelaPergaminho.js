import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  StyleSheet,
} from "react-native";

export function TelaPergaminho({ route, navigation }) {
  const missaoRecebida = routeparams.missaoSelecionada;
  const [titulo, setTitulo] = useState(
    missaoRecebida ? missaoRecebida.titulo : "",
  );
  const [xp, setXp] = useState(
    missaoRecebida ? missaoRecebida.xp.toString() : "",
  );
  const salvarMissao = () => {
    try {
        
    } catch (error) {
        
    }
  }
  return <View styles={styles.conteiner}></View>;
}
const styles = StyleSheet.create({});
