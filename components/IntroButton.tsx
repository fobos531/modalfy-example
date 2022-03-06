import React from "react";
import Animated, { FadeIn, FadeOut } from "react-native-reanimated";
import { useModal } from "react-native-modalfy";
import { TouchableOpacity, StyleSheet, Text } from "react-native";

import { ModalStackParamsList } from "../App";

const IntroButton = () => {
  const { openModal } = useModal<ModalStackParamsList>();
  const onPress = () => openModal("IntroModal");
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Animated.Text style={styles.buttonText} entering={FadeIn} exiting={FadeOut}>
        Show me!
      </Animated.Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    marginTop: 150,
    borderRadius: 20,
    paddingVertical: 20,
    paddingHorizontal: 60,
    backgroundColor: "white",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#064635",
  },
});

export default IntroButton;
