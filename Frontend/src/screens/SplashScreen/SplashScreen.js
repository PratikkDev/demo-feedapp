import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { COLORS } from "../../common/Colors";
import { ScreenNames } from "../../common/Constants";

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate(ScreenNames.Tab);
    }, 1000);
  }, []);
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.titleTxt}>Welcome</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  titleTxt: {
    fontSize: RFValue(24),
    color: COLORS.black,
    fontWeight: "600",
  },
});
