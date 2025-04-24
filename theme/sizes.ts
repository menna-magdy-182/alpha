import { Dimensions } from "react-native";

const Sizes = {
  XS: 10,
  SM: 12,
  MD: 14,
  LG: 16,
  XL: 20,
  XXL: 24,
  TITLE: 42,
  CONTENT_PADDING: 26,
  HEADER_PADDING: 26,
  BORDER_RADIUS: 10,
};

export const ScreenHeight = Dimensions.get("screen").height;
export const ScreenWidth = Dimensions.get("screen").width;

export default Sizes;
