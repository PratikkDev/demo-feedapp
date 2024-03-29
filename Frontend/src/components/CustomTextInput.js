import { StyleSheet, Text, TextInput, View, Image } from "react-native";
import React from "react";
import { RFValue } from "react-native-responsive-fontsize";
import { STYLES } from "../common/Styles";
import { COLORS } from "../common/Colors";

export default CustomTextInput = ({
  icon = "",
  marginBottom = 0,
  ...props
}) => {
  return (
    <View style={[styles.mainContainer, marginBottom && { marginBottom }]}>
      {icon && <Image source={icon} style={styles.iconStyle} />}
      <TextInput
        {...props}
        style={[
          styles.txtInpStyle,
          props.multiline && { height: RFValue(80) },
          props.style,
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "row",
    borderRadius: STYLES.borderRadius,
    backgroundColor: COLORS.white,
    paddingVertical: RFValue(10),
    // alignItems: "center",
    paddingHorizontal: RFValue(10),
    ...STYLES.shadow,
  },
  txtInpStyle: {
    flex: 1,
    fontSize: RFValue(14),
    color: COLORS.black,
    fontWeight: "400",
    textAlignVertical: "top",
    paddingTop: 0,
  },
  iconStyle: {
    height: RFValue(20),
    width: RFValue(20),
    marginRight: RFValue(10),
  },
});
