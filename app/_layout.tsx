import Colors from "@/theme/colors";
import { Stack } from "expo-router";
import { I18nManager, StatusBar } from "react-native";
import { useEffect } from "react";

export default function RootLayout() {
  useEffect(() => {
    if (I18nManager.isRTL) {
      I18nManager.allowRTL(false);
      I18nManager.forceRTL(false);
    }
  }, []);

  return (
    <>
      <Stack initialRouteName="(tabs)" screenOptions={{ header: () => null }}>
        <Stack.Screen name="(tabs)" />
      </Stack>
      <StatusBar backgroundColor={Colors.background} barStyle="light-content" />
    </>
  );
}
