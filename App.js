import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, alignItems: "center" }}>
      <ScrollView style={{ flex: 1, width: "100%" }}>
        <View style={styles.container}>
          <StatusBar style="auto" />
          <Text>View dentro da View principal</Text>
          <View
            style={{ width: 300, height: 50, backgroundColor: "pink" }}
          ></View>
          <View style={styles.separador}> </View>
          <Text>View dentro da View principal</Text>
          <View
            style={{ width: 300, height: 50, backgroundColor: "pink" }}
          ></View>
          <Text>View dentro da View principal</Text>
          <View
            style={{ width: 300, height: 50, backgroundColor: "pink" }}
          ></View>
          <Text>View dentro da View principal</Text>
          <View
            style={{ width: 300, height: 50, backgroundColor: "green" }}
          ></View>
          <Text>View dentro da View principal</Text>
          <View
            style={{ width: 300, height: 50, backgroundColor: "pink" }}
          ></View>
          <Text>View dentro da View principal</Text>
          <View
            style={{ width: 300, height: 50, backgroundColor: "pink" }}
          ></View>
          <Text>View dentro da View principal</Text>
          <View
            style={{ width: 300, height: 50, backgroundColor: "pink" }}
          ></View>
          <Text>View dentro da View principal</Text>
          <View
            style={{ width: 300, height: 50, backgroundColor: "pink" }}
          ></View>
          <Text>View dentro da View principal</Text>
          <View
            style={{ width: 300, height: 50, backgroundColor: "pink" }}
          ></View>
          <Text>View dentro da View principal</Text>
          <View
            style={{ width: 300, height: 50, backgroundColor: "pink" }}
          ></View>
          <Text>View dentro da View principal</Text>
          <View
            style={{ width: 300, height: 50, backgroundColor: "pink" }}
          ></View>
          <Text>View dentro da View principal</Text>
          <View
            style={{ width: 300, height: 50, backgroundColor: "pink" }}
          ></View>
          <Text>View dentro da View principal</Text>
          <View
            style={{ width: 300, height: 50, backgroundColor: "pink" }}
          ></View>
          <Text>View dentro da View principal</Text>
          <View
            style={{ width: 300, height: 50, backgroundColor: "green" }}
          ></View>
        </View>
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
