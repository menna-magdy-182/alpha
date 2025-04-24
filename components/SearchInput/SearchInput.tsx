import React from "react";
import SvgIcon from "../SvgIcon/SvgIcon";
import { images } from "@/assets/images";
import { StyleSheet, TextInput, View } from "react-native";
import Colors from "@/theme/colors";

const SearchInput = () => {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <SvgIcon
          svgFile={images.search}
          size={20}
          color={Colors.surface}
          style={styles.icon}
        />
        <TextInput
          placeholder="Search"
          style={styles.input}
          placeholderTextColor={Colors.surface}
          onFocus={() => console.log("Input focused")}
        />
      </View>
      <View style={styles.optionsContainer}>
        <SvgIcon svgFile={images.options} size={20} color={Colors.surface} />
      </View>
    </View>
  );
};

export default SearchInput;

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    flexDirection: "row",
    alignItems: "center",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: Colors.primary,
    borderRadius: 9,
    paddingHorizontal: 10,
    paddingVertical: 8,
    color: Colors.surface,
    flex: 1,
  },
  icon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: Colors.surface,
  },
  optionsContainer: {
    backgroundColor: Colors.primary,
    borderRadius: 9,
    marginStart: 7,
    alignSelf: "stretch",
    justifyContent: "center",
    paddingHorizontal: 10,
  },
});
