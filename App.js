import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, alignItems: "center" }}>
      <ScrollView style={{ flex: 1, width: "100%" }}>
        <View style={styles.container}>
          <StatusBar style="auto" />
          <Text>View dentro da View principal</Text>
          <View
            style={{ width: "95%", height: 50, backgroundColor: "pink" }}
          ></View>
          <View style={styles.separador}> </View>
        </View>
        <Image source={{uri:'https://picsum.photos/200/300'}} style={{ width:"95%", height:200,}}></Image>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  separador: {
    marginBottom: 5,
    marginTop: 5,
    height: 1,
    width: "95%",
    backgroundColor: "gray",
    elevation: 2,
  },
});
