import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreen from "../screens/SplashScreen";
import WelcomeScreen from "../screens/WelcomeScreen";
import CreateAccountScreen from "../screens/CreateAccountScreen";
import LoginScreen from "../screens/LoginScreen";
import HomeScreen from "../screens/HomeScreen";
import FaqScreen from "../screens/FaqScreen";
import SingleSchoolScreen from "../screens/SingleSchoolScreen";
import app from "../../firebaseConfig";
import { createDrawerNavigator } from "@react-navigation/drawer";
import "react-native-gesture-handler";
import AddSchool from "../screens/AddSchool";
import Users from "../screens/AdminUsersScreen";
import DocumentSubmissionScreen from "../screens/DocumentSubmissionScreen";
const AdminNavigation = () => {
  const Drawer = createDrawerNavigator();
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Users">
        <Drawer.Screen name="Users" component={Users} />
        <Drawer.Screen name="Add School" component={AddSchool} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
const NavigationCheck = () => {
  React.useEffect(() => {
    app.auth().onAuthStateChanged((user) => setcheckUser(user.email));
  }, []);
  const [checkUser, setcheckUser] = React.useState();
  app.auth().onAuthStateChanged((user) => {
    if (user) {
      setcheckUser(user.email);
    }
    if (user == null) {
      setcheckUser(null);
    }
  });
  {
    if (checkUser == "admin@gmail.com") {
      return <AdminNavigation />;
    } else {
      return <ScreenNavigation />;
    }
  }
};
const ScreenNavigation = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        <Stack.Screen
          name="CreateAccountScreen"
          component={CreateAccountScreen}
        />

        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="Users" component={Users} />
        <Stack.Screen name="FaqScreen" component={FaqScreen} />
        <Stack.Screen
          name="SingleSchoolScreen"
          component={SingleSchoolScreen}
        />
        <Stack.Screen
          name="DocumentSubmissionScreen"
          component={DocumentSubmissionScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationCheck;
