import { ActivityIndicator, Image, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { RFValue } from "react-native-responsive-fontsize";
import { COLORS } from "../../common/Colors";
import { STYLES } from "../../common/Styles";

export default FeedComponent = ({ item, index }) => {
  const [imgLoader, setImgLoader] = useState(true);

  return (
    <View style={styles.mainComponent}>
      <View style={styles.imgContainer}>
        {imgLoader && (
          <ActivityIndicator style={styles.actIndStyle} color={COLORS.green} />
        )}
        <Image
          style={styles.imgStyle}
          source={{ uri: item?.image }}
          onLoadStart={() => {
            setImgLoader(true);
          }}
          onLoadEnd={() => {
            setImgLoader(false);
          }}
          onError={() => {
            setImgLoader(false);
          }}
        />
      </View>
      <View style={styles.descContainer}>
        <Text style={styles.titleTxt} numberOfLines={2}>
          {item.title}
        </Text>
        <Text style={styles.descTxt} numberOfLines={2}>
          {item.description}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainComponent: {
    backgroundColor: COLORS.white,
    borderRadius: STYLES.borderRadius,
    overflow: "hidden",
  },
  imgStyle: { height: STYLES.screenHeight / 6, width: "100%" },
  actIndStyle: { flex: 1, position: "absolute" },
  imgContainer: { justifyContent: "center", alignItems: "center" },
  descContainer: {
    paddingHorizontal: RFValue(10),
    paddingVertical: RFValue(10),
  },
  titleTxt: {
    fontSize: RFValue(14),
    fontWeight: "700",
    color: COLORS.black,
  },
  descTxt: {
    fontSize: RFValue(12),
    fontWeight: "500",
    color: COLORS.black,
    marginTop: RFValue(5),
  },
});
