import React from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Image,
  ScrollView,
} from "react-native";
import { Card, Button, Icon } from "react-native-elements";

const CustomCard = (props) => {
  return (
    <Card>
      <Image style={styles.img} source={props.imgUrl} />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View>
          <Text style={styles.innerHeadingTxt}>{props.headingText}</Text>
          <Text style={styles.innerTxt}>{props.innerText}</Text>
        </View>
        <Icon
          style={styles.icon}
          name="arrow-right"
          type="font-awesome"
          color="#03045E"
          size={24}
          solid={false}
        />
      </View>
    </Card>
  );
};

const SchoolLevelScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingVertical: 20 }}>
        <Text style={styles.paragraph}>
          Lorem ipsum dolor sit amet, consectetur adipicing elit. Auctor
          suspendisse vitae, id risus morbi eget.
        </Text>
        <Text style={styles.mainHeading}>I want to study in...</Text>

        <CustomCard
          headingText="In High School"
          innerText="From 9th grade"
          style={styles.img}
          imgUrl={require("../../assets/highSchool.png")}
        />
        <CustomCard
          headingText="In College"
          innerText="From 11th grade"
          style={styles.img}
          imgUrl={require("../../assets/college.png")}
        />
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 25,
    backgroundColor: "#FFFFFF",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  paragraph: {
    padding: 24,
    marginTop: 30,
    fontWeight: "normal",
    textAlign: "justify",
    color: "#6B7280",
  },
  mainHeading: {
    padding: 24,
    paddingBottom: 5,
    fontWeight: "bold",
    fontSize: 20,
    paddingTop: 0,
  },
  card: {
    borderRadius: 8,
    elevation: 5,
  },
  img: {
    width: "100%",
    borderRadius: 8,
  },
  innerHeadingTxt: {
    fontWeight: "bold",
    fontSize: 18,
    paddingTop: 20,
  },
  innerTxt: {
    color: "#6B7280",
    marginTop: 5,
  },
  icon: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: "#F3F4F6",
    marginTop: 15,
    justifyContent: "center",
    padding: 5,
  },
});

export default SchoolLevelScreen;
