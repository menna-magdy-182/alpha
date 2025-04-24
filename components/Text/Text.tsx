import React from "react";
import { Text as RNText, TextProps as RNTextProps } from "react-native";
import Colors from "@/theme/colors";

const AppText: React.FC<RNTextProps> = ({ children, style, ...rest }) => {
  return (
    <RNText
      style={[
        {
          color: Colors.text,
        },
        style,
      ]}
      {...rest}
    >
      {children}
    </RNText>
  );
};

export default AppText;
