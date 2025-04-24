import Colors from "@/theme/colors";
import { Stack } from "expo-router";
import { StatusBar } from "react-native";

export default function RootLayout() {
  return (
    <>
      <Stack initialRouteName="(tabs)" screenOptions={{ header: () => null }}>
        <Stack.Screen name="(tabs)" />
      </Stack>
      <StatusBar backgroundColor={Colors.background} barStyle="light-content" />
    </>
  );
}
