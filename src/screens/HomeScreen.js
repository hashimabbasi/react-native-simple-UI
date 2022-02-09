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
import { Icon } from "react-native-elements";
import { Searchbar } from "react-native-paper";

const CustomCategoryScrollView = () => {
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      <View style={{ margin: 15 }}>
        <Image
          style={styles.categoryImg}
          source={require("../../assets/buisness.png")}
        />
      </View>
      <View style={{ margin: 15 }}>
        <Image
          style={styles.categoryImg}
          source={require("../../assets/engineering.png")}
        />
      </View>
      <View style={{ margin: 15 }}>
        <Image
          style={styles.categoryImg}
          source={require("../../assets/IT.png")}
        />
      </View>
      <View style={{ margin: 15 }}>
        <Image
          style={styles.categoryImg}
          source={require("../../assets/accounting.png")}
        />
      </View>
    </ScrollView>
  );
};
const CustomImageContainerForScrollView = (props) => {
  return (
    <TouchableOpacity style={{ margin: 15 }} onPress={props.handlePress}>
      <Image style={styles.containerImg} source={props.imgUrl} />
      <View style={styles.SchoolDetails}>
        <Text style={styles.schoolDetailCategory}>{props.schoolCategory}</Text>
        <Text style={styles.schoolDetailTitle}>{props.schoolName}</Text>

        <View
          style={{
            flexDirection: "row",
            margin: 3,
            justifyContent: "flex-start",
          }}
        >
          <View style={{ flexDirection: "row", marginRight: 25 }}>
            <Icon name="room" color="#FFFFFF" type="material" size={18} />
            <Text style={{ color: "#FFFFFF" }}>Propard</Text>
          </View>

          <View style={{ flexDirection: "row" }}>
            <Icon
              name="local-offer"
              color="#FFFFFF"
              type="material"
              size={18}
            />
            <Text style={{ color: "#FFFFFF", marginLeft: 5 }}>Public</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};
const CustomTopSchoolScrollView = (props) => {
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      <CustomImageContainerForScrollView
        schoolCategory="Buisness School"
        schoolName="Sampson's Harley School"
        imgUrl={require("../../assets/highSchool.png")}
        handlePress={props.handlePress}
      />
      <CustomImageContainerForScrollView
        schoolCategory="Buisness School"
        schoolName="Brafford College"
        imgUrl={require("../../assets/highSchool2.jpg")}
        handlePress={props.handlePress}
      />
    </ScrollView>
  );
};
const CustomPopularSchoolScrollView = (props) => {
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      <CustomImageContainerForScrollView
        schoolCategory="Finance School"
        schoolName="Sampson's Harley School"
        imgUrl={require("../../assets/popularSchool.jpg")}
        handlePress={props.handlePress}
      />
      <CustomImageContainerForScrollView
        schoolCategory="Finance School"
        schoolName="Brafford College"
        imgUrl={require("../../assets/popularSchool2.jpg")}
        handlePress={props.handlePress}
      />
    </ScrollView>
  );
};
const CustomCollegesYouMayLikeScrollView = (props) => {
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      <CustomImageContainerForScrollView
        schoolCategory="Engineering School"
        schoolName="Sampson's Harley School"
        imgUrl={require("../../assets/collegesYML.jpg")}
        handlePress={props.handlePress}
      />
      <CustomImageContainerForScrollView
        schoolCategory="Finance School"
        schoolName="Brafford College"
        imgUrl={require("../../assets/collegesYML2.png")}
        handlePress={props.handlePress}
      />
    </ScrollView>
  );
};
const HomeScreen = ({ navigation }) => {
  const [search, setSearch] = React.useState("");
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <View style={styles.headerRow}>
            <Image
              style={{ height: 25, width: "25%" }}
              source={require("../../assets/logo.png")}
            />

            <View style={styles.headerRight}>
              <TouchableOpacity
                onPress={() => navigation.navigate("FaqScreen")}
              >
                <Icon
                  name="question-circle"
                  color="#FFFFFF"
                  type="font-awesome"
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.replace("WelcomeScreen")}
              >
                <Icon name="sign-out" color="#FFFFFF" type="font-awesome" />
              </TouchableOpacity>
            </View>
          </View>
          <Text style={styles.headerTxt}>
            Find the best Schools in Slovakia
          </Text>
          <View style={styles.searchBarView}>
            <Searchbar
              placeholder="Search"
              placeholderTextColor="#D1D5DB"
              iconColor="#D1D5DB"
              clearIconColor="black"
              onChangeText={setSearch}
              value={search}
              inputStyle={{ color: "black" }}
              style={styles.input}
            />
          </View>
        </View>

        <View style={styles.categoriesSection}>
          <Text style={styles.innerSectionHeaderTxt}>Categories</Text>
          <CustomCategoryScrollView />
        </View>
        <View style={styles.Section}>
          <Text style={styles.innerSectionHeaderTxt}>Top Schools</Text>
          <CustomTopSchoolScrollView
            handlePress={() => navigation.navigate("SingleSchoolScreen")}
          />
        </View>
        <View style={styles.Section}>
          <Text style={styles.innerSectionHeaderTxt}>Popular Schools</Text>
          <CustomPopularSchoolScrollView
            handlePress={() => navigation.navigate("SingleSchoolScreen")}
          />
        </View>
        <View style={styles.Section}>
          <Text style={styles.innerSectionHeaderTxt}>
            Colleges you make like
          </Text>
          <CustomCollegesYouMayLikeScrollView
            handlePress={() => navigation.navigate("SingleSchoolScreen")}
          />
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  header: {
    backgroundColor: "#03045E",
    height: 235,
    width: "100%",
  },
  headerRow: {
    marginTop: 20,
    marginLeft: 15,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerRight: {
    flexDirection: "row",
    width: "20%",
    justifyContent: "space-around",
    alignItems: "center",
    marginRight: 10,
  },
  headerTxt: {
    color: "#FFFFFF",
    fontSize: 25,
    lineHeight: 35,
    fontWeight: "bold",
    textAlign: "center",
    margin: "10%",
  },
  searchBarView: {
    width: "100%",
    alignItems: "center",
  },
  input: {
    backgroundColor: "#FFFFFF",
    width: "85%",
    height: 50,
    padding: 10,
    borderRadius: 6,
    margin: 10,
    color: "black",
  },
  innerSectionHeaderTxt: {
    fontSize: 22,
    color: "#1F2937",
    fontWeight: "bold",
  },
  categoriesSection: {
    padding: 15,
    marginTop: 30,
  },
  categoryImg: {
    width: 120,
    height: 120,
  },
  Section: {
    padding: 15,
  },
  containerImg: {
    height: 250,
    width: 300,
    borderRadius: 15,
    resizeMode: "cover",
  },
  SchoolDetails: {
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    position: "absolute",
    bottom: 0,
    width: "100%",
    padding: 10,
  },
  schoolDetailCategory: {
    fontSize: 15,
    color: "#00FFFF",
  },
  schoolDetailTitle: {
    fontSize: 20,
    color: "#FFFFFF",
  },
});

export default HomeScreen;
