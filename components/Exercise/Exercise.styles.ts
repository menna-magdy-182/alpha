import Colors from "@/theme/colors";
import Sizes, { ScreenWidth } from "@/theme/sizes";
import { StyleSheet } from "react-native";

const itemWidth = ScreenWidth / 2 - Sizes.CONTENT_PADDING * 2;

const styles = StyleSheet.create({
  container: {
    width: itemWidth,
    marginBottom: 32,
  },
  imageContainer: {
    backgroundColor: Colors.secondary,
    borderRadius: Sizes.BORDER_RADIUS,
    alignItems: "center",
    justifyContent: "center",
    height: itemWidth * 0.9,
  },
  name: {
    marginTop: 12,
    marginBottom: 2,
    fontWeight: "bold",
    fontSize: Sizes.MD,
  },
});
export default styles;
