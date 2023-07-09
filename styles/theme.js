import { createTheme, Text, Button } from "@rneui/themed";

const theme = createTheme({
  costumColors: {
    primary: "#19A54A",
    light2: "#F9FAFB",
    dark1: "#121515",
    dark2: "#1A1E1E",
    grey: "#888888",
  },
  components: {
    Text: {
      h1Style: {
        fontFamily: "PlayfairDisplay_700Bold",
        fontSize: 36,
        color: "red",
      },
      h2Style: {
        fontFamily: "PlayfairDisplay_700Bold",
        fontSize: 24,
      },
      h3Style: {
        fontFamily: "Karla_400Regular",
        fontSize: 16,
      },
      h4Style: {
        fontFamily: "Karla_700Bold",
        fontSize: 14,
      },
    },
    Button: {
      titleStyle: {
        color: "red",
      },
    },
  },
});

export default theme;
