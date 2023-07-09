import React from "react";
import { Box } from "native-base";
import { StyleSheet } from "react-native";

const Line = () => {
  return (
    <Box
      _light={{
        backgroundColor: "light1",
      }}
      _dark={{
        backgroundColor: "dark1",
      }}
      style={styles.linebar}
    />
  );
};

export default Line;

const styles = StyleSheet.create({
  linebar: {
    width: 50,
    height: 5,
    borderRadius: 2.5,
    marginBottom: 20,
  },
});
