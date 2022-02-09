import React from "react";
import { View, StyleSheet, Image } from "react-native";

const SplashScreen = ({ navigation }) => {
  setTimeout(() => {
    navigation.replace("WelcomeScreen");
  }, 1000);
  return (
    <View style={styles.container}>
      <Image source={require("../screens/../../assets/logo.png")}></Image>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#03045E",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default SplashScreen;
