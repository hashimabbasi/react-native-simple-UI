import React from "react";
import app from "../../firebaseConfig";
import { firestore } from "firebase";
import * as ImagePicker from "expo-image-picker";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  ScrollView,
  Alert,
  Image,
} from "react-native";
import { Input } from "react-native-elements";
const AddSchool = () => {
  const [name, setName] = React.useState();
  const [category, setCategory] = React.useState();
  const [schoolType, setSchoolType] = React.useState();
  const [fees, setFees] = React.useState();
  const [description, setDescription] = React.useState();
  const [image, setImage] = React.useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };
  const AddData = async () => {
    console.log("in add data");
    await firestore().collection("Schools").add({
      Schoolname: name,
      SchoolCategory: category,
      Fees: fees,
      Description: description,
      SchoolType: schoolType,
      Schoolimage: image,
    });
    Alert.alert("School Added Successfully!");
  };
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.mainTxt}>Add A School</Text>
        <View>
          <Input
            label="School Name"
            style={styles.inputContainer}
            labelStyle={styles.labelSection}
            inputContainerStyle={styles.inputContainer}
            placeholder="Adam White School"
            inputStyle={styles.input}
            value={name}
            onChangeText={setName}
          />
          <Input
            label="Type"
            style={styles.inputContainer}
            labelStyle={styles.labelSection}
            inputContainerStyle={styles.inputContainer}
            placeholder="Public"
            inputStyle={styles.input}
            value={schoolType}
            onChangeText={setSchoolType}
          />

          <Input
            label="Category"
            style={styles.inputContainer}
            labelStyle={styles.labelSection}
            inputContainerStyle={styles.inputContainer}
            placeholder="High School"
            inputStyle={styles.input}
            value={category}
            onChangeText={setCategory}
          />
          <Input
            label="Fees"
            style={styles.inputContainer}
            labelStyle={styles.labelSection}
            inputContainerStyle={styles.inputContainer}
            placeholder="10000"
            keyboardType="numeric"
            inputStyle={styles.input}
            value={fees}
            onChangeText={setFees}
          />
          <Input
            label="Description"
            inputContainerStyle={{ minHeight: "30" }}
            multiline={true}
            style={styles.inputContainer}
            labelStyle={styles.labelSection}
            inputContainerStyle={styles.inputContainer}
            placeholder="School Details"
            inputStyle={styles.input}
            value={description}
            onChangeText={setDescription}
          />
          <TouchableOpacity style={styles.button} onPress={pickImage}>
            <Text
              style={{
                textAlign: "center",
                color: "white",
                fontWeight: "bold",
              }}
            >
              Upload School Image
            </Text>
          </TouchableOpacity>
          <View style={styles.bottomView}>
            <TouchableOpacity style={styles.button} onPress={AddData}>
              <Text
                style={{
                  textAlign: "center",
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                Add School
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
    alignItems: "center",
  },
  mainTxt: {
    color: "#303030",
    fontSize: 30,
    fontWeight: "bold",
    lineHeight: 29,
    marginBottom: 20,
    textAlign: "center",
  },
  labelSection: {
    marginTop: 20,
    marginRight: 35,
    paddingBottom: 10,
  },
  inputContainer: {
    backgroundColor: "#f2f2f2",
    borderTopStartRadius: 5,
    borderTopEndRadius: 5,
    borderBottomWidth: 0,
    padding: 5,
    height: 50,
    width: "95%",
  },
  input: {
    fontSize: 15,
    padding: 10,
  },
  bottomView: {
    marginTop: 20,
    paddingBottom: 30,
  },
  button: {
    marginTop: 10,
    backgroundColor: "#03045E",
    color: "white",
    height: 40,
    padding: 10,
    width: "90%",
    borderRadius: 5,
    marginLeft: 12,
  },
  scrollView: {
    marginBottom: 20,
    marginHorizontal: 0,
    marginVertical: 30,
    width: "90%",
  },
});

export default AddSchool;
