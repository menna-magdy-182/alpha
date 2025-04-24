import { View } from "react-native";
import React from "react";
import { Exercise } from "@/models/Exercise";
import styles from "./Exercise.styles";
import { SvgIcon, Text } from "@/components";
import { images } from "@/assets/images";
import Colors from "@/theme/colors";
import Sizes, { ScreenWidth } from "@/theme/sizes";

const itemWidth = ScreenWidth / 2 - Sizes.CONTENT_PADDING * 2;

const ExerciseItem = ({
  item,
  isLastRow,
}: {
  item: Exercise;
  isLastRow: boolean;
}) => {
  return (
    <View style={[styles.container, isLastRow && { marginBottom: 10 }]}>
      <View style={styles.imageContainer}>
        <SvgIcon
          svgFile={images.placeholder}
          size={itemWidth * 0.42}
          color={Colors.dark}
        />
      </View>
      <Text style={styles.name}>{item.name}</Text>
      <Text>{item.description}</Text>
    </View>
  );
};

export default ExerciseItem;
