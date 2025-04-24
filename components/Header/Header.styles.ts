import Sizes from "@/theme/sizes";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  iconsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 23,
    marginBottom: 32,
  },
  title: {
    fontSize: Sizes.TITLE,
    fontWeight: "bold",
    alignSelf: "center",
    marginBottom: 24,
  },
});
export default styles;
