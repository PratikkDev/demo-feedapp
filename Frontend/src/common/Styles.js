import { StyleSheet, StatusBar, Dimensions } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { COLORS } from "./Colors";

export const STYLES = StyleSheet.create({
  btnOpacity: 0.7,
  statusBarHeight: StatusBar.currentHeight,
  horizontalPadding: RFValue(20),
  borderRadius: RFValue(8),
  shadow: {
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  screenHeight: Dimensions.get("screen").height,
  screenWidth: Dimensions.get("screen").width,
});
