import React from "react";
import { Heading, Box, Center } from "native-base";
import { HerbalovaBackgroundImage } from "../components/ui/content";
import { HerbalovaModal } from "../components/ui/overlay";
import { Pressable, StyleSheet } from "react-native";
import Line from "../components/ui/content/Line";
import { View } from "react-native";

const LoginRegister = () => {
  const handleOpenModal = () => {
    console.log("Opened");
  };

  return (
    <HerbalovaBackgroundImage style={styles.container}>
      <Center flex={1}>
        <Heading
          fontFamily="heading"
          color="light1"
          fontSize="4xl"
          textAlign="center"
          style={styles.heading}
        >
          Herbalova
        </Heading>
      </Center>
      <View style={styles.pressable}>
        <Center>
          <Pressable onPress={handleOpenModal}>
            <Line />
          </Pressable>
        </Center>
        <Box
          _text={{
            textAlign: "center",
            fontFamily: "body",
            fontWeight: "700",
            fontSize: "md",
            _light: {
              color: "dark1",
            },
            _dark: {
              color: "light1",
            },
          }}
          _light={{
            backgroundColor: "light1",
          }}
          _dark={{
            backgroundColor: "dark1",
          }}
          height={60}
          style={styles.box}
        >
          Sign in to your account
        </Box>
      </View>
    </HerbalovaBackgroundImage>
  );
};

export default LoginRegister;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  heading: {
    marginBottom: 40,
  },
  pressable: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
  box: {
    justifyContent: "center",
    alignItems: "center",
  },
});
