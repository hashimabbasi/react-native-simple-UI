import React from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Rating, AirbnbRating, Icon, Card } from "react-native-elements";
import { RadioButton } from "react-native-paper";
const CustomCard = (props) => {
  const [checked, setChecked] = React.useState("first");
  return (
    <Card containerStyle={styles.card}>
      <View>
        <View style={{ justifyContent: "space-between", flexDirection: "row" }}>
          <Text style={{ fontSize: 15, fontWeight: "bold", paddingTop: 5 }}>
            {props.title}
          </Text>
          <RadioButton
            value={props.buttonValue}
            onPress={() => setChecked("second")}
            status={checked === "second" ? "checked" : "unchecked"}
            color="#03045E"
          />
        </View>
        <View style={{ alignItems: "flex-start", flexDirection: "row" }}>
          <Icon name="schedule" type="material" color="#9CA3AF" size={18} />
          <Text style={{ color: "#9CA3AF", paddingLeft: 5 }}>Schedule</Text>
          <Text
            style={{
              color: "#4B5563",
              fontWeight: "bold",
              paddingLeft: 5,
            }}
          >
            {props.years}
          </Text>
        </View>
        <View
          style={{
            alignItems: "flex-start",
            flexDirection: "row",
            paddingTop: 10,
          }}
        >
          <Icon name="work" type="material" color="#9CA3AF" size={18} />
          <Text style={{ color: "#9CA3AF", paddingLeft: 5 }}>
            Specification
          </Text>
          <Text
            style={{
              color: "#4B5563",
              fontWeight: "bold",
              paddingLeft: 5,
            }}
          >
            {props.specification}
          </Text>
        </View>
        <Text style={{ color: "#9CA3AF", paddingTop: 20, paddingBottom: 20 }}>
          {props.details}
        </Text>
      </View>
    </Card>
  );
};
const Icons = (props) => {
  return (
    <View style={{ flexDirection: "row" }}>
      <Icon name={props.name} color="#6B7280" type="material" size={18} />
      <Text style={{ color: "#6B7280" }}>{props.title}</Text>
    </View>
  );
};

const SingleSchool = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ alignItems: "center" }}>
          <Image
            style={styles.SchoolImg}
            source={require("../../assets/highSchool.png")}
          />
        </View>
        <View style={{ padding: 10 }}>
          <Text
            style={{
              fontSize: 13,
              paddingTop: 10,
              fontWeight: "bold",
              color: "#0077B6",
            }}
          >
            HIGH SCHOOL
          </Text>
          <Text style={{ fontSize: 22, paddingTop: 10, fontWeight: "bold" }}>
            Sampson’s Harly School
          </Text>
        </View>
        <View style={styles.iconsView}>
          <Icons name="room" title="Popard" />
        </View>
        <View style={styles.iconsView}>
          <Icons name="local-offer" title="Public" />
          <View style={styles.verticleLine}></View>
          <Icons name="room" title="Business School" />
        </View>
        <View style={{ alignItems: "flex-start", padding: 10 }}>
          <AirbnbRating
            count={5}
            isDisabled={true}
            showRating={false}
            defaultRating={4}
            size={15}
          />
          <Text
            style={{
              paddingTop: 20,
              color: "#03045E",
              fontWeight: "bold",
              fontSize: 13,
            }}
          >
            Tution
          </Text>
          <Text style={{ paddingTop: 5, fontWeight: "bold", fontSize: 23 }}>
            £1000/yr
          </Text>
          <Text style={{ paddingTop: 15, color: "#6B7280", fontSize: 14 }}>
            Lorem ipsum dolor sit amet, consectetur adipicing elit. Auctor
            suspendisse vitae, id risus morbi eget. Ornare habitasse cursus
            libero vitae dignissim sit velit, erat. Neque tempor, vivamus purus
            amet orci risus nibh ut donec. Elit lacus. dignissim Ornare
            habitasse cursus libero
          </Text>

          <Text
            style={{
              paddingTop: 25,
              paddingBottom: 25,
              fontWeight: "bold",
              fontSize: 18,
            }}
          >
            Teaching Programs
          </Text>
        </View>
        <CustomCard
          title="Nursing"
          buttonValue="first"
          years="2yrs"
          specification="Medical Science"
          details="Lorem ipsum dolor sit amet, consectetur adipicing elit.
           Auctor suspendisse vitae, id risus morbi eget. "
        />
        <CustomCard
          title="Banking"
          buttonValue="second"
          years="4yrs"
          specification="Accountant"
          details="Lorem ipsum dolor sit amet, consectetur adipicing elit.
           Auctor suspendisse vitae, id risus morbi eget. "
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("DocumentSubmissionScreen")}
        >
          <Text
            style={{ textAlign: "center", color: "white", fontWeight: "bold" }}
          >
            I'd like to study here
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  SchoolImg: {
    width: 395,
    height: 200,
    borderRadius: 20,
    marginTop: 15,
  },
  verticleLine: {
    height: "100%",
    width: 1,
    marginRight: 10,
    marginLeft: 10,
    backgroundColor: "#6B7280",
  },
  iconsView: {
    alignItems: "flex-start",
    padding: 10,
    flexDirection: "row",
  },
  card: {
    borderRadius: 12,
    elevation: 5,
    marginBottom: 10,
  },
  button: {
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: "#03045E",
    color: "white",
    height: 40,
    padding: 10,
    width: "80%",
    borderRadius: 5,
    marginLeft: 35,
  },
});

export default SingleSchool;
