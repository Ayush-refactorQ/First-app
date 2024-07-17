import { Tabs } from "expo-router";
import React from "react";
import { View, Image } from "react-native";
import { icons } from "../../constants";

const TabIcon = ({ icon, color, focused, name }) => {
  <View>
    <Image source={icon} />
  </View>;
};

const TabsLayout = () => {
  return (
    <>
      <Tabs>
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            // header: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon icon={icons.home} name="Home" focused={focused} />
            ),
          }}
        />
      </Tabs>
    </>
  );
};

export default TabsLayout;
