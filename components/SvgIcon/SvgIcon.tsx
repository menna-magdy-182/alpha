import Colors from "@/theme/colors";
import React, { FunctionComponent } from "react";
import { ColorValue } from "react-native";
import { SvgProps } from "react-native-svg";

interface Props extends SvgProps {
  accessibilityLabel?: string;
  color?: ColorValue;
  size: number;
  svgFile: FunctionComponent<SvgProps>;
}

const SvgIcon: React.FC<Props> = ({
  accessibilityLabel,
  color,
  size = 25,
  svgFile: SvgFile,
  ...rest
}) => {
  return (
    <SvgFile
      accessibilityLabel={accessibilityLabel}
      color={color ?? Colors.primary}
      width={size}
      height={size}
      {...rest}
    />
  );
};

export default SvgIcon;
