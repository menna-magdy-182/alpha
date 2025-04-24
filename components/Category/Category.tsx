import { View, StyleSheet } from "react-native";
import React, { FunctionComponent } from "react";
import Text from "../Text/Text";
import SvgIcon from "../SvgIcon/SvgIcon";
import Colors from "@/theme/colors";
import { SvgProps } from "react-native-svg";

interface ICategory {
  icon?: FunctionComponent<SvgProps>;
  name: string;
}

const Category = ({ item }: { item: ICategory }) => {
  return (
    <View style={styles.container}>
      {item.icon && (
        <SvgIcon
          size={20}
          svgFile={item.icon}
          color={Colors.surface}
          style={styles.icon}
        />
      )}
      <Text style={styles.name}>{item.name}</Text>
    </View>
  );
};

export default Category;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 7,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.primary,
    marginEnd: 19,
    borderRadius: 9,
  },
  icon: {
    marginEnd: 6,
  },
  name: {
    fontWeight: "500",
  },
});
