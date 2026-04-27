import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { use } from "react";
import { StyleSheet, View, FlatList, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Produtos() {
  const produtos = [
    {
      id: 1,
      nome: "Teclado",
      precoParc: 120.0,
      precoAVista: 105.9,
      caminhoImg: "videocamera.png",
    },
    {
      id: 2,
      nome: "Mouse",
      precoParc: 80.0,
      precoAVista: 73.9,
      caminhoImg: "videocamera.png",
    },
    {
      id: 3,
      nome: "Monitor 27",
      precoParc: 900.0,
      precoAVista: 849.9,
      caminhoImg: "videocamera.png",
    },
    {
      id: 4,
      nome: "Monitor 34 Ultra Wide",
      precoParc: 2900.0,
      precoAVista: 2549.9,
      caminhoImg: "videocamera.png",
    },
    {
      id: 5,
      nome: "Impressora",
      precoParc: 1899.0,
      precoAVista: 1649.9,
      caminhoImg: "videocamera.png",
    },
  ];
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <FlatList
        contentContainerStyle={{ padding: 15, marginTop: 30 }}
        data={produtos}
        key={item => item.id}
        renderItem={({ item }) => (
          <view style={styles.card}>
            <Image source={require("../../../assets/image.png")} />
            <Text style={styles.nome}>{item.nome}</Text>
            <View style={styles.precosConteiner}>
              <Text> Parcelado:</Text>
              <Text> RS{item.precoParc.toFixed(2)}</Text>
            </View>

            <View style={styles.precosConteiner}>
              <Text> PIX ou Boleto: </Text>
              <Text> RS{item.precoAVista.toFixed(2)}</Text>
            </View>

            <View style={styles.actionConteiner}>
              <View style={styles.quantidadeConteiner}>
                <TouchableOpacity
                  onPress={() => diminuir(item.id)}
                  style={styles.btnQtd}
                >
                  <Text>-</Text>
                </TouchableOpacity>
                <Text style={styles.qtd}>{quantidades[item.id] || 1}</Text>
              </View>
              <TouchableOpacity
                onPress={() => aumentar(item.id)}
                style={styles.btnQtd}
              >
                <Text>+</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.btnCarrinho}>
              <Text style={styles.textBtn}> Adicionar </Text>
            </TouchableOpacity>
          </view>
        )}
      ></FlatList>
      <View style={styles.separador} />
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
  card: {},
  imagem: {},
  nome: {},
  precosConteiner: {},
  quantidadeConteiner: {},
  precoAVista: {},
  qtd: {},
  btnQtd: {},
  textBtn: {},
  btnCarrinho: {},
});
