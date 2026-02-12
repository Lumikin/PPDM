import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import "./assets/icon.png";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>brat</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#8ace00",
    alignItems: "center",
    justifyContent: "center",
  },
});
