import app from "../../firebaseConfig";
import { firestore } from "firebase";
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Card, Button, Icon } from "react-native-elements";
const UsersScreen = ({navigation}) => {
  const [key, setkey] = React.useState("this is first key");
  const [items, setItems] = React.useState([]);
  const getUsers = async () => {
    const querySnap = await firestore().collection("Users").get();
    const result = querySnap.docs.map((docSnap) => docSnap.data());
    setItems(result);
    items.map((data) => {
      console.log();
    });
  };
  React.useEffect(() => {
    getUsers();
    app.auth().onAuthStateChanged((user) => console.log("user email is :" + user.email))
  }, []);
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.heading}>Users Info</Text>
        {items.map((data) => {
          return (
            <TouchableOpacity
              onPress={() => {
                setkey(data.uid);
                console.log(key)
              }}
            >
              <Card containerStyle={styles.card}>
                <Text style={styles.text}>Name : {data.name}</Text>
                <Card.Divider />
                <Text style={styles.text}>Email : {data.email}</Text>
                <Text style={styles.text}>Key : {data.uid}</Text>
              </Card>
            </TouchableOpacity>
           
          );
        })}
          <TouchableOpacity style={styles.button} onPress={()=>{
            app.auth().signOut() 
            } 
          
          }>
              <Text>Logout</Text>
       </TouchableOpacity>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#03045E",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  button: {
    marginTop: 20,
    backgroundColor: "white",
    color: "white",
    height: 40,
    padding: 10,
    width: "80%",
    borderRadius: 5,
    marginLeft: 35,
  },
  heading: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
  text: {
    fontSize: 16,
    padding: 10,
    color: "#03045E",
  },
  card: {
    borderRadius: 8,
    elevation: 5,
    width: "90%",
  },
  scrollView: {
    marginBottom: 20,
  },
});
export default UsersScreen;
