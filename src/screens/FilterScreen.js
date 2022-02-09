import { Searchbar } from "react-native-paper";
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
const CustomImageContainerForScrollView = (props) => {
  return (
    <View style={{ margin: 15 }}>
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
    </View>
  );
};
const CustomTopSchoolScrollView = () => {
  return ( 
      <View style={{paddingBottom:100}} >
    <ScrollView  showsVerticalScrollIndicator={false}>
      <CustomImageContainerForScrollView
        schoolCategory="Buisness School"
        schoolName="Sampson's Harley School"
        imgUrl={require("../../assets/highSchool.png")}
      />
      <CustomImageContainerForScrollView
        schoolCategory="Buisness School"
        schoolName="Brafford College"
        imgUrl={require("../../assets/highSchool2.jpg")}
      />
        <CustomImageContainerForScrollView
        schoolCategory="Buisness School"
        schoolName="Brafford College"
        imgUrl={require("../../assets/highSchool.png")}
      />
        <CustomImageContainerForScrollView
        schoolCategory="Buisness School"
        schoolName="Brafford College"
        imgUrl={require("../../assets/highSchool2.jpg")}
      />
        <CustomImageContainerForScrollView
        schoolCategory="Buisness School"
        schoolName="Brafford College"
        imgUrl={require("../../assets/highSchool.png")}
      />
    </ScrollView>
    </View>
  );
};
const FilterScreen = () => {
  const [search, setSearch] = React.useState("");
  return (
    <View style={styles.container}>
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
        <View >
          <CustomTopSchoolScrollView />
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 10,
    paddingTop: 50,
  },
  searchBarView: {
    width: "100%",
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
  containerImg: {
    width: 360,
    borderTopLeftRadius:15,
    borderTopRightRadius:15,
    resizeMode: "cover",
  },
});
export default FilterScreen;
