import { View, SafeAreaView, Image } from "react-native";
import * as React from "react";
import TopBar from "../components/topBar";
import { LiveStation, StationInfo } from "../components/annoucementScreens";

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const screenOptions = {
  tabBarShowLabel: true,
  tabBarStyle: {
    background: "#fff",
  },
};

export default function AnnouncementScreen() {
  const Tab = createMaterialTopTabNavigator();

  return (
    <SafeAreaView className="flex-1 bg-white">
      <TopBar heading={"Get Announcement"} />

      <Tab.Navigator
        initialRouteName="LiveStation"
        screenOptions={screenOptions}
      >
        <Tab.Screen
          name="Live Station"
          component={LiveStation}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <View className="flex-col justify-around items-center bg-neutral-100 rounded-xl mt-3 space-x-1 space-y-1 mb-1">
                  <Image
                    source={require("../../assets/images/location_live.png")}
                    className="rounded"
                    style={{ width: wp(10), height: wp(10) }}
                  />
                </View>
              );
            },
          }}
        />
        <Tab.Screen
          name="Station Info"
          component={StationInfo}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <View
                  style={{ alignItems: "center", justifyContent: "center" }}
                >
                  <Image
                    source={require("../../assets/images/information.png")}
                    className="rounded"
                    style={{ width: wp(10), height: wp(10) }}
                  />
                </View>
              );
            },
          }}
        />
        <Tab.Screen
          name="Live Station"
          component={LiveStation}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <View className="flex-col justify-around items-center bg-neutral-100 rounded-xl mt-3 space-x-1 space-y-1 mb-1">
                  <Image
                    source={require("../../assets/images/location_live.png")}
                    className="rounded"
                    style={{ width: wp(10), height: wp(10) }}
                  />
                </View>
              );
            },
          }}
        />
        <Tab.Screen
          name="Station Info"
          component={StationInfo}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <View
                  style={{ alignItems: "center", justifyContent: "center" }}
                >
                  <Image
                    source={require("../../assets/images/information.png")}
                    className="rounded"
                    style={{ width: wp(10), height: wp(10) }}
                  />
                </View>
              );
            },
          }}
        />
      </Tab.Navigator>
    </SafeAreaView>
  );
}
