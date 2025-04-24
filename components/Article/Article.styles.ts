import Colors from "@/theme/colors";
import Sizes from "@/theme/sizes";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary,
    borderRadius: Sizes.BORDER_RADIUS,
    paddingHorizontal: 20,
    paddingVertical: 48,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: { fontWeight: "bold", fontSize: Sizes.MD, marginBottom: 4 },
});

export default styles;
