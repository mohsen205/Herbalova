import { ThemeProvider } from "@rneui/themed";
import theme from "./styles/theme";
import LoginRegister from "./screens/LoginRegister";
import { SafeAreaView } from "react-native-safe-area-context";

const App = () => {
  return (
    <SafeAreaView>
      <ThemeProvider theme={theme}>
        <LoginRegister />
      </ThemeProvider>
    </SafeAreaView>
  );
};

export default App;
