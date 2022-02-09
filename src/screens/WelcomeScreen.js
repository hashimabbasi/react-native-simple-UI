import React from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Image,
  TouchableOpacity,
} from "react-native";

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.backgroundImg}
        source={require("../../assets/welcomeScreenBG.png")}
      ></Image>

      <View style={styles.overlay}></View>

      <View style={styles.imageView}>
        <Image source={require("../../assets/logo.png")}></Image>
      </View>

      <View style={styles.contentView}>
        <Text style={styles.mainTxt}>Welcome to ZARF Study </Text>

        <View style={styles.innerTxtView}>
          <Text style={styles.innerTxt}>What are you waiting for?</Text>
          <Text style={styles.innerTxt}>
            Let's find you a school you'll love
          </Text>
        </View>

        <TouchableOpacity
          style={styles.mainBtn}
          onPress={() => navigation.navigate("CreateAccountScreen")}
        >
          <Text style={styles.btnTxt}>Lets go</Text>
        </TouchableOpacity>

        <View style={{ flexDirection: "row" }}>
          <Text style={styles.innerTxt}>
            Already studying throug ZARF study?
          </Text>

          <TouchableOpacity
            style={{ justifyContent: "center" }}
            onPress={() => navigation.navigate("LoginScreen")}
          >
            <Text style={styles.loginBtn}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    overflow: "hidden",
  },
  backgroundImg: {
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
    opacity: 0.5,
  },
  overlay: {
    position: "absolute",
    height: "100%",
    width: "100%",
    flex: 1,
    backgroundColor: "#03045E",
    opacity: 0.8,
    bottom: 0,
  },
  imageView: {
    position: "absolute",
    top: "30%",
    left: "33%",
  },
  contentView: {
    position: "absolute",
    bottom: 0,
    backgroundColor: "rgba(3, 4, 94, 0.4)",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 20,
    paddingBottom: 50,
  },
  mainTxt: {
    fontSize: 28,
    color: "#FFFFFF",
    fontWeight: "bold",
    letterSpacing: 1.5,
    lineHeight: 50,
  },
  innerTxtView: {
    marginTop: 10,
    marginBottom: 15,
    alignItems: "center",
  },
  innerTxt: {
    color: "#94A3B8",
    fontSize: 16,
    fontWeight: "400",
    lineHeight: 24,
  },
  mainBtn: {
    width: "80%",
    backgroundColor: "#FFFFFF",
    height: 40,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginBottom: 30,
  },
  btnTxt: {
    color: "#03045E",
    fontWeight: "bold",
    lineHeight: 20,
    fontSize: 16,
  },
  loginBtn: {
    color: "#FFFFFF",
    marginLeft: 5,
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default WelcomeScreen;
