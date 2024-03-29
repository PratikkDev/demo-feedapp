import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/home/HomeScreen";
import { ScreenNames } from "../common/Constants";
import NewFeedScreen from "../screens/createFeed/NewFeedScreen";
import SplashScreen from "../screens/SplashScreen/SplashScreen";
import { ICONS } from "../common/Assets";
import { RFValue } from "react-native-responsive-fontsize";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabBarIcon = ({ icon, focused, color, size }) => {
  return (
    <Image
      style={{
        height: RFValue(20),
        width: RFValue(20),
        tintColor: color,
      }}
      source={icon}
    />
  );
};

export default router = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={ScreenNames.SplashScreen} component={SplashScreen} />
      <Stack.Screen name={ScreenNames.Tab} component={TabNav} />
    </Stack.Navigator>
  );
};

const TabNav = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
      }}
      detachInactiveScreens={true}
      // tabBar={props => <MyTabBar {...props} />}
    >
      <Tab.Screen
        name={ScreenNames.HomeScreen}
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <TabBarIcon
              icon={ICONS.home}
              focused={focused}
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name={ScreenNames.NewFeedScreen}
        component={NewFeedScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <TabBarIcon
              icon={ICONS.edit}
              focused={focused}
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({});
