import { View } from "react-native";
import React, { FC } from "react";
import styles from "./Header.styles";
import SvgIcon from "../SvgIcon/SvgIcon";
import Text from "../Text/Text";

import { images } from "@/assets/images";
import Colors from "@/theme/colors";

interface HeaderProps {
  title?: string;
}

const Header: FC<HeaderProps> = ({ title }) => {
  return (
    <View>
      <View style={styles.iconsContainer}>
        <SvgIcon
          size={24}
          svgFile={images.notification}
          color={Colors.surface}
        />
        <SvgIcon size={24} svgFile={images.user} color={Colors.surface} />
      </View>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default Header;
