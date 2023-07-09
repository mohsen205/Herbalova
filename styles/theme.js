import { extendTheme } from "native-base";

const theme = extendTheme({
  colors: {
    primary: "#19A54A",
    light1: "#F9FAFB",
    dark1: "#121515",
    dark2: "#1A1E1E",
    grey: "#888888",
  },
  fontConfig: {
    PlayfairDisplay: {
      700: {
        normal: "PlayfairDisplay_700Bold",
      },
    },
    Karla: {
      400: {
        normal: "Karla_400Regular",
      },
      700: {
        normal: "Karla_700Bold",
      },
    },
  },
  fonts: {
    heading: "PlayfairDisplay",
    body: "Karla",
    mono: "Karla",
  },
  config: {
    useSystemColorMode: false,
    initialColorMode: "light",
  },
});

export default theme;
