import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./src/screens/home/index";
import PosicaoGPSScreen from "./src/screens/PosicaoGPS";
import RedesWiFiScreen from "./src/screens/redesWiFi";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PosicaoGPSScreen"
          component={PosicaoGPSScreen}
          options={{ title: "Posição de GPS" }}
        />
        <Stack.Screen
          name="RedesWiFiScreen"
          component={RedesWiFiScreen}
          options={{ title: "Redes WIFI" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
