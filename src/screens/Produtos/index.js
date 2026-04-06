import { StatusBar } from "expo-status-bar";
import {
  Image,
  StyleSheet,
  Text,
  ScrollView,
  View,
  Button,
  TextInput,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Produtos() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#eef3e4" }}>
      <ScrollView style={{ flex: 1 }}>
        <View style={styles.container}>
          <StatusBar style="auto" />

          {/* Produto: Maçã */}

          <Image
            source={require("../../../assets/Produtos/maca.png")}
            style={styles.image}
          />
          <Text style={styles.titulo}>Maçã</Text>
          <Text style={styles.descricao}>3,00 R$</Text>
          <Text style={styles.Pix}>1,50 R$ no Pix</Text>
          <TextInput
            style={styles.Quantidade}
            placeholder="Quantidade"
            keyboardType="number-pad"
          />
          <Button
            title="Adicionar ao carrinho"
            onPress={() => alert("Produto adicionado ao carrinho")}
          />

          <View style={styles.separador} />

          {/* Produto: Alface */}

          <Image
            source={require("../../../assets/Produtos/alface.png")}
            style={styles.image}
          />
          <Text style={styles.titulo}>Alface</Text>
          <Text style={styles.descricao}>7,00 R$</Text>
          <Text style={styles.Pix}>4,00 R$ no Pix</Text>
          <TextInput
            style={styles.Quantidade}
            placeholder="Quantidade"
            keyboardType="number-pad"
          />
          <Button
            title="Adicionar ao carrinho"
            onPress={() => alert("Produto adicionado ao carrinho")}
          />

          <View style={styles.separador} />

          {/* Produto: Cenoura */}

          <Image
            source={require("../../../assets/Produtos/Cenoura.png")}
            style={styles.image}
          />
          <Text style={styles.titulo}>Cenoura</Text>
          <Text style={styles.descricao}>5,00 R$</Text>
          <Text style={styles.Pix}>2,50 R$ no Pix</Text>
          <TextInput
            style={styles.Quantidade}
            placeholder="Quantidade"
            keyboardType="number-pad"
          />
          <Button
            title="Adicionar ao carrinho"
            onPress={() => alert("Produto adicionado ao carrinho")}
          />

          <View style={styles.separador} />

          {/* Produto: Repolho */}

          <Image
            source={require("../../../assets/Produtos/Repolho.png")}
            style={styles.image}
          />
          <Text style={styles.titulo}>Repolho</Text>
          <Text style={styles.descricao}>9,00 R$</Text>
          <Text style={styles.Pix}>4,50 R$ no Pix</Text>
          <TextInput
            style={styles.Quantidade}
            placeholder="Quantidade"
            keyboardType="number-pad"
          />
          <Button
            title="Adicionar ao carrinho"
            onPress={() => alert("Produto adicionado ao carrinho")}
          />

          <View style={styles.separador} />

          {/* Produto: Brócolis */}

          <Image
            source={require("../../../assets/Produtos/Brocolis.png")}
            style={styles.image}
          />
          <Text style={styles.titulo}>Brócolis</Text>
          <Text style={styles.descricao}>12,00 R$</Text>
          <Text style={styles.Pix}>7,00 R$ no Pix</Text>
          <TextInput
            style={styles.Quantidade}
            placeholder="Quantidade"
            keyboardType="number-pad"
          />
          <Button
            title="Adicionar ao carrinho"
            onPress={() => alert("Produto adicionado ao carrinho")}
          />

          <View style={styles.separador} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 20,
    marginBottom: 10,
  },
  text: {
    fontWeight: "bold",
    fontSize: 14,
    marginBottom: 5,
  },
  Pix: {
    fontWeight: "bold",
    color: "green",
    fontSize: 14,
    marginBottom: 5,
  },
  titulo: {
    fontWeight: "bold",
    fontSize: 32,
    textAlign: "center",
    marginVertical: 10,
  },
  Quantidade: {
    backgroundColor: "white",
    borderRadius: 90,
    margin: 6,
  },
  descricao: {
    fontSize: 16,
    textAlign: "center",
    color: "#333",
    marginBottom: 30,
  },
  separador: {
    marginBottom: 5,
    marginTop: 5,
    height: 1,
    width: "95%",
    backgroundColor: "#eef3e4",
  },
});
