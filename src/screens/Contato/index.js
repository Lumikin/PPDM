import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Contato() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <Text style={{ fontWeight: "bold", fontSize: 25 }}>
        Nossos contatos
      </Text>
      <Text style={styles.Text}> Telefone: +55 (11) 4002-8922</Text>
      <Text style={styles.Text}> WhatsApp: +55 (11) 99999-0000</Text>
      <Text style={styles.Text}>
        Endereço: Praça Dom Máximo, 420, Térreo/Loja
      </Text>
      <Text style={styles.Text}> CNPJ: 00.000.000/0001-00</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eef3e4",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
    gap: 5,
  },
  Text: {
    fontSize: 16,
  },
});
