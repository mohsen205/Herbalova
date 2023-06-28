import React from "react";
import { ImageBackground, View, StyleSheet } from "react-native";

const HerbalovaBackgroundImage = ({ children }) => {
  return (
    <View style={styles.imageBackgroundContainer}>
      <ImageBackground>{children}</ImageBackground>
    </View>
  );
};

export default HerbalovaBackgroundImage;

const styles = StyleSheet.create({
  imageBackgroundContainer: {},
});
