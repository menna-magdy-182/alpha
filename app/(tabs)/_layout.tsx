import { images } from "@/assets/images";
import SvgIcon from "@/components/SvgIcon/SvgIcon";
import Colors from "@/theme/colors";
import { Tabs } from "expo-router";
import { StatusBar, Text } from "react-native";

interface TabBarLabelProps {
  title: string;
  focused: boolean;
  color: string;
}

function TabBarLabel({ title, focused, color }: TabBarLabelProps) {
  return (
    <Text
      style={{
        color,
        fontWeight: focused ? "bold" : "light",
        fontSize: 12,
      }}
    >
      {title}
    </Text>
  );
}

const TabLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: Colors.primary,
        },
        tabBarActiveTintColor: Colors.text,
        tabBarInactiveTintColor: Colors.text,
      }}
    >
      <Tabs.Screen
        name="plan"
        options={{
          tabBarIcon: ({ color }) => (
            <SvgIcon svgFile={images.calendar} color={color} size={20} />
          ),
          tabBarLabel: ({ focused, color }) => (
            <TabBarLabel title="Plan" focused={focused} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="exercises"
        options={{
          tabBarIcon: ({ color }) => (
            <SvgIcon svgFile={images.exercise} color={color} size={20} />
          ),
          tabBarLabel: ({ focused, color }) => (
            <TabBarLabel title="Exercises" focused={focused} color={color} />
          ),
        }}
      />
    </Tabs>
  );
};
export default TabLayout;
