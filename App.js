import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { TelaPergaminho } from "./src/screens/TelaPergaminho";
import { TelaTaverna } from "./src/screens/TelaTaverna";

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Taverna">
        <Stack.Screen
          name="Taverna"
          component={TelaTaverna}
          options={{ title: "Diario de Missões" }}
        />
        <Stack.Screen
          name="Taverna"
          component={TelaPergaminho}
          options={{ title: "Nova Missão" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
