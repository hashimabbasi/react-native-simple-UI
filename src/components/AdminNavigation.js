import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from '@react-navigation/drawer'; 

import 'react-native-gesture-handler';
import AddSchool from "../screens/AddSchool";
import Users from "../screens/AdminUsersScreen";
const AdminNavigation=()=>{
    const Drawer = createDrawerNavigator();
    return (
        <NavigationContainer>
          <Drawer.Navigator initialRouteName="Users">
            <Drawer.Screen name="Users" component={Users} />
            <Drawer.Screen name="Add School" component={AddSchool} />
          </Drawer.Navigator>
        </NavigationContainer>
      );


}
export default AdminNavigation