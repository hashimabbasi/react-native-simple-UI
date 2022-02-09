import React from "react";
import app from "../../firebaseConfig";
import { firestore } from "firebase";
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
import * as ImagePicker from "expo-image-picker";
import { Input } from "react-native-elements";
const DocumentSbmissionScreen = () => {
  const [name, setName] = React.useState();
  const [category, setCategory] = React.useState();
  const [schoolType, setSchoolType] = React.useState();
  const [document, setDocument] = React.useState(null);

  const pickDocument = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setDocument(result.uri);
    }
  };
  const SubmitDocument = async () => {
    console.log("in add data");
    await firestore().collection("Documents").add({
      Schoolname: name,
      SchoolCategory: category,
      SchoolType: schoolType,
      Document: document,
    });
    Alert.alert("Document Added Successfully!");
  };
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.mainTxt}>Submit your documents</Text>
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
            label="Type of school"
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

          <TouchableOpacity style={styles.button} onPress={pickDocument}>
            <Text
              style={{
                textAlign: "center",
                color: "white",
                fontWeight: "bold",
              }}
            >
              Upload Documents
            </Text>
          </TouchableOpacity>
          <View style={styles.bottomView}>
            <TouchableOpacity style={styles.button} onPress={SubmitDocument}>
              <Text
                style={{
                  textAlign: "center",
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                Submit
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

export default DocumentSbmissionScreen;
