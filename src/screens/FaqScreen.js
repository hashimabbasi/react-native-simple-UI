import * as React from "react";
import { Text, View, StyleSheet, StatusBar, ScrollView } from "react-native";
import { Icon } from "react-native-elements";
import {
  Collapse,
  CollapseHeader,
  CollapseBody,
} from "accordion-collapse-react-native";

const Faq = (props) => {
  return (
    <View>
      <Collapse style={styles.collapse}>
        <CollapseHeader style={styles.header}>
          <Text style={styles.title}>{props.title}</Text>
          <Icon name="chevron-down" color="#03045E" type="entypo" />
        </CollapseHeader>
        <CollapseBody style={styles.body}>
          <Text style={styles.bodyTxt}>{props.Body}</Text>
        </CollapseBody>
      </Collapse>
    </View>
  );
};

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.headingTxt}>Frequently Asked Questions</Text>
        <Faq
          title="Why do I have to choose 2 schools?"
          Body="The alternative school functions as a safety net. In case you don’t get into your primary school, this is the second option.

Or, if you’re admitted to both schools, you’ll be able to choose where do you want to study."
        />
        <Faq
          title="Why do I have to choose 2 schools?"
          Body="The alternative school functions as a safety net. In case you don’t get into your primary school, this is the second option.

Or, if you’re admitted to both schools, you’ll be able to choose where do you want to study."
        />
        <Faq
          title="Why do I have to choose 2 schools?"
          Body="The alternative school functions as a safety net. In case you don’t get into your primary school, this is the second option.

Or, if you’re admitted to both schools, you’ll be able to choose where do you want to study."
        />
        <Faq
          title="Why do I have to choose 2 schools?"
          Body="The alternative school functions as a safety net. In case you don’t get into your primary school, this is the second option.

Or, if you’re admitted to both schools, you’ll be able to choose where do you want to study."
        />
        <Faq
          title="Why do I have to choose 2 schools?"
          Body="The alternative school functions as a safety net. In case you don’t get into your primary school, this is the second option.

Or, if you’re admitted to both schools, you’ll be able to choose where do you want to study."
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: "#ecf0f1",
    paddingHorizontal: 8,
  },
  headingTxt: {
    textAlign: "center",
    fontSize: 25,
    fontWeight: "bold",
    marginVertical: 20,
  },
  header: {
    alignItems: "center",
    backgroundColor: "#F1F5F9",
    color: "#03045E",
    elevation: 5,
    paddingRight: 20,
    paddingLeft: 20,
    paddingBottom: 10,
    paddingTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    height: 60,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  body: {
    alignItems: "center",
    padding: 20,
    elevation: 5,
    backgroundColor: "#F1F5F9",
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
  bodyTxt: {
    fontSize: 17,
  },
  title: {
    color: "#03045E",
    fontWeight: "bold",
    fontSize: 15,
  },
  collapse: {
    marginBottom: 20,
    marginTop: 20,
  },
});
