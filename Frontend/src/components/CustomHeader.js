import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { RFValue } from "react-native-responsive-fontsize";
import { COLORS } from "../common/Colors";

export default CustomHeader = (props) => {
  const { title = "" } = props;
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.titleTxt}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "row",
    justifyContent: "center",
    paddingVertical: RFValue(15),
    paddingHorizontal: RFValue(10),
    alignItems: "center",
  },
  titleTxt: {
    fontSize: RFValue(18),
    color: COLORS.black,
    fontWeight: "500",
  },
});
