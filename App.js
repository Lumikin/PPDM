// Importação dos objetos e das paginas
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/pages/Home";
import Sobre from "./src/pages/Sobre";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: "Página Inicial",
          }}
        />
        <Stack.Screen
          name="Sobre"
          component={Sobre}
          options={{
            title: "Sobre",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
