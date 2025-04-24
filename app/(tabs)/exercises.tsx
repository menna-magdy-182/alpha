import { StyleSheet } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Colors from "@/theme/colors";
import { Text } from "@/components";

const Exercises = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Coming Soon</Text>
    </SafeAreaView>
  );
};

export default Exercises;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    justifyContent: "center",
    alignItems: "center",
  },
});
