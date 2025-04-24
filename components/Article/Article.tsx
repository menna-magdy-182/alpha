import { View } from "react-native";
import React from "react";
import Text from "../Text/Text";
import styles from "./Article.styles";
import SvgIcon from "../SvgIcon/SvgIcon";
import { images } from "@/assets/images";
import Colors from "@/theme/colors";

const Article = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Article Title</Text>
        <Text>Description goes here</Text>
      </View>
      <SvgIcon size={52} svgFile={images.placeholder} color={Colors.surface} />
    </View>
  );
};

export default Article;
