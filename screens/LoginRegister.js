import React from "react";
import { View } from "react-native";
import { HerbalovaBackgroundImage } from "../component/ui/content";
import { Text } from "@rneui/themed";
import { Button } from "@rneui/base";

const LoginRegister = () => {
  return (
    <HerbalovaBackgroundImage>
      <View>
        <Text h1 h1Style>
          Herbalova
        </Text>
        <Button title="Ye" />
      </View>
    </HerbalovaBackgroundImage>
  );
};

export default LoginRegister;
