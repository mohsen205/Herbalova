import React, { useEffect } from "react";
import { StatusBar, Appearance } from "react-native";
import { ThemeProvider, useThemeMode } from "@rneui/themed";
import { useFonts } from "expo-font";
import { PlayfairDisplay_700Bold } from "@expo-google-fonts/playfair-display";
import { Karla_400Regular, Karla_700Bold } from "@expo-google-fonts/karla";
import theme from "./styles/theme";
import LoginRegister from "./screens/LoginRegister";

const App = () => {
  const colorMode = Appearance.getColorScheme();
  const { mode, setMode } = useThemeMode();

  useEffect(() => {
    // setMode(colorMode);
  }, [colorMode]);

  let [fontsLoaded] = useFonts({
    PlayfairDisplay_700Bold,
    Karla_400Regular,
    Karla_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <StatusBar barStyle="light-content" translucent={true} />
      <ThemeProvider theme={theme}>
        <LoginRegister />
      </ThemeProvider>
    </>
  );
};

export default App;
