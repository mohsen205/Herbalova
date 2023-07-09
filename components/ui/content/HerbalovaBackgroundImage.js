import React from "react";
import { ImageBackground, View, StyleSheet } from "react-native";

const image = {
  uri: "https://firebasestorage.googleapis.com/v0/b/herbalova-89624.appspot.com/o/background-image.png?alt=media&token=218f2c6f-171d-4c65-987d-c57cb1e076f3",
};

const HerbalovaBackgroundImage = ({ children }) => {
  return (
    <View style={styles.imageBackgroundContainer}>
      <ImageBackground source={image} style={styles.image}>
        {children}
      </ImageBackground>
    </View>
  );
};

export default HerbalovaBackgroundImage;

const styles = StyleSheet.create({
  imageBackgroundContainer: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
  },
});
