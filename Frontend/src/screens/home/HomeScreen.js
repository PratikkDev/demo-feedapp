import {
  FlatList,
  RefreshControl,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useCallback, useContext, useEffect, useState } from "react";
import { STYLES } from "../../common/Styles";
import CustomHeader from "../../components/CustomHeader";
import { COLORS } from "../../common/Colors";
import { RFValue } from "react-native-responsive-fontsize";
import FeedComponent from "./FeedComponent";
import { apiCall } from "../../helper/APICall";
import { API_END_POINTS } from "../../common/Constants";
import DataContext from "../../context/DataContext";
import { useIsFocused } from "@react-navigation/native";

export default HomeScreen = () => {
  const isFocused = useIsFocused();
  const { feedData, setFeedData } = useContext(DataContext);
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    getData();
  }, []);

  useEffect(() => {
    if (isFocused) {
      getData();
    }
  }, [isFocused]);

  const getData = () => {
    apiCall(API_END_POINTS.getAllFeeds, "GET", "").then((res) => {
      if (res.success) {
        setFeedData(res.data?.data);
      } else {
      }
      setRefreshing(false);
    });
  };

  const listSeparator = () => <View style={styles.separator} />;
  return (
    <View style={styles.mainScreen}>
      <SafeAreaView />
      {/* Header */}
      <CustomHeader title="Daily Feed" />
      {/* Feeds data */}
      <FlatList
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        style={styles.flatlistStyle}
        data={feedData}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.flatListContainer}
        ItemSeparatorComponent={listSeparator}
        // keyExtractor={(item, index) => toString(index)}
        renderItem={({ item, index }) => (
          <FeedComponent item={item} index={index} />
        )}
        ListEmptyComponent={() => (
          <View style={styles.emptContainer}>
            <Text style={styles.emptyTxt}>Pull the screen for refresh</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainScreen: {
    flex: 1,
    paddingTop: STYLES.statusBarHeight,
  },
  separator: { marginBottom: RFValue(15) },
  flatListContainer: {
    paddingHorizontal: RFValue(20),
    paddingVertical: RFValue(20),
  },
  emptyTxt: {
    fontSize: RFValue(12),
    fontWeight: "500",
    color: COLORS.black,
  },
  emptContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: STYLES.screenHeight * 0.38,
  },
  flatlistStyle: { ...STYLES.shadow },
});
