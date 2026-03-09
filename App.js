import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {/* View 1 */}
      <Text>View dentro da View principal</Text>
      <View style={{ width: 300, height: 50, backgroundColor: "pink" }}></View>
      <View style={styles.separador}> </View>
      {/* View 2 */}
      <Text>View dentro da View principal</Text>
      <View style={{ width: 300, height: 50, backgroundColor: "pink" }}></View>
      {/* View 3 */}
      <Text>View dentro da View principal</Text>
      <View style={{ width: 300, height: 50, backgroundColor: "pink" }}></View>
    </View>
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
