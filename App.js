import React from "react";
import { NativeBaseProvider } from "native-base";
import { useFonts } from "expo-font";
import { PlayfairDisplay_700Bold } from "@expo-google-fonts/playfair-display";
import { Karla_400Regular, Karla_700Bold } from "@expo-google-fonts/karla";
import theme from "./styles/theme";
import LoginRegister from "./screens/LoginRegister";

const App = () => {
  let [fontsLoaded] = useFonts({
    PlayfairDisplay_700Bold,
    Karla_400Regular,
    Karla_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NativeBaseProvider theme={theme}>
      <LoginRegister />
    </NativeBaseProvider>
  );
};

export default App;
