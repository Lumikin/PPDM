import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

export default function Home() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />

      <Image
        source={require("../../../assets/image.png")}
        style={styles.image}
      />

      <Text style={{ fontWeight: "bold", fontSize: 40 }}>Miranda's Market</Text>

      <Text style={{ fontSize: 17, margin: 7 }}>
        Somos um mercado focado em produtos para alimentação saudavel,
        priorizamos alimentos frescos como frutas, hortaliças e grãos de alta
        qualidade.
      </Text>

      <TouchableOpacity
        style={styles.botao}
        onPress={() => navigation.navigate("Produtos")}
      >
        <Text style={styles.Text}>Produtos</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.botao}
        onPress={() => navigation.navigate("Contato")}
      >
        <Text style={styles.Text}>Contato</Text>
      </TouchableOpacity>
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
  botao: {
    backgroundColor: "#4CAF50",
    width: "90%",
    height: 50,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 15,
  },
  image: {
    width: "40%",
    height: "20%",
    borderRadius: 20,
  },
  Text: {
    fontWeight: "bold",
  },
});
