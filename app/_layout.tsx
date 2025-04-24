import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack initialRouteName="(tabs)" screenOptions={{ header: () => null }}>
      <Stack.Screen name="(tabs)" />
    </Stack>
  );
}
