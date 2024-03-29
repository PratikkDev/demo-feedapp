import * as ImagePicker from "expo-image-picker";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Image,
  LayoutAnimation,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { ICONS } from "../../common/Assets";
import { COLORS } from "../../common/Colors";
import { API_END_POINTS } from "../../common/Constants";
import { STYLES } from "../../common/Styles";
import CustomHeader from "../../components/CustomHeader";
import CustomTextInput from "../../components/CustomTextInput";
import { apiCall } from "../../helper/APICall";

export default NewFeedScreen = () => {
  const [showLoader, setShowLoader] = useState(false);
  const [inputFields, setInputFields] = useState({
    title: "",
    description: "",
  });

  const [isDisabled, setIsDisabled] = useState(true);
  const [coverImage, setCoverImage] = useState(null);

  const handleInputChange = (name, value) => {
    setInputFields({
      ...inputFields,
      [name]: value,
    });
  };

  useEffect(() => {
    fetch("https://fakestoreapi.com/carts", {
      method: "POST",
      body: JSON.stringify({
        userId: 5,
        date: "2020-02-03", // Enclose the date in quotes
        products: [
          { productId: 5, quantity: 1 },
          { productId: 1, quantity: 5 },
        ],
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((json) => console.log(json))
      .catch((error) => console.error("API Call error --> ", error));
  }, []);

  const openGallery = async () => {
    await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    })
      .then((res) => {
        const img = res.assets[0];
        const imgNameArr = img.uri.split("/");
        const imgName = imgNameArr[img.uri.split("/").length - 1].split(".")[0];
        const obj = {
          uri: img.uri,
          type: `image/${img.type}`,
          name: imgName,
        };
        setCoverImage(obj);
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
      })
      .catch((error) => {
        console.log("ImagePicker ===> ", error);
      });
  };

  const createFeed = () => {
    setShowLoader(true);
    const formdata = new FormData();
    formdata.append("title", inputFields.title);
    formdata.append("description", inputFields.description);
    formdata.append("image", coverImage);
    try {
      apiCall(API_END_POINTS.createPost, "POST", formdata, true).then((res) => {
        if (res?.success) {
          if (res?.data?.success) {
            setInputFields({
              title: "",
              description: "",
            });
            setCoverImage(null);
          }
        } else {
        }
        setShowLoader(false);
      });
    } catch (error) {
      console.log(error);
      setShowLoader(false);
    }
  };

  useEffect(() => {
    if (
      inputFields.description.trim().length &&
      inputFields.title.trim().length &&
      coverImage
    ) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [inputFields, coverImage]);

  return (
    <View style={styles.mainScreen}>
      <SafeAreaView />
      {showLoader && (
        <View style={styles.loaderContainer}>
          <ActivityIndicator
            style={{
              backgroundColor: COLORS.white,
              padding: RFValue(20),
              borderRadius: STYLES.borderRadius,
            }}
            size={"large"}
            color={COLORS.green}
          />
        </View>
      )}
      <CustomHeader title="Create Post" />
      <View style={styles.subContainer}>
        <CustomTextInput
          value={inputFields.title}
          icon={ICONS.title}
          onChangeText={(txt) => handleInputChange("title", txt)}
          placeholder={"title"}
          marginBottom={RFValue(10)}
        />
        <CustomTextInput
          value={inputFields.description}
          icon={ICONS.description}
          onChangeText={(txt) => handleInputChange("description", txt)}
          placeholder={"description"}
          multiline={true}
          numberOfLines={4}
          marginBottom={RFValue(15)}
        />
        {coverImage && (
          <View style={styles.coverImageContainer}>
            <Image style={styles.coverImage} source={{ uri: coverImage.uri }} />
          </View>
        )}
        <View style={styles.btnContainer}>
          <TouchableOpacity
            style={styles.btnBG}
            activeOpacity={STYLES.btnOpacity}
            onPress={() => {
              openGallery();
            }}
          >
            <Image style={styles.iconStyle} source={ICONS.addImage} />
            <Text style={styles.btnTxt}>
              {coverImage ? "Change" : "Add"} Cover
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            disabled={isDisabled}
            style={[styles.btnBG, { opacity: isDisabled ? 0.5 : 1 }]}
            activeOpacity={STYLES.btnOpacity}
            onPress={() => {
              createFeed();
            }}
          >
            <Image style={styles.iconStyle} source={ICONS.addPost} />
            <Text style={styles.btnTxt}>Create Feed</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainScreen: {
    flex: 1,
    paddingTop: STYLES.statusBarHeight,
  },
  subContainer: {
    flex: 1,
    paddingHorizontal: STYLES.horizontalPadding,
  },
  coverImageContainer: {
    borderRadius: STYLES.borderRadius,
    overflow: "hidden",
    marginBottom: RFValue(15),
    ...STYLES.shadow,
  },
  coverImage: {
    width: "100%",
    height: RFValue(200),
  },
  iconStyle: {
    height: RFValue(20),
    width: RFValue(20),
  },
  btnContainer: {},
  btnBG: {
    flexDirection: "row",
    backgroundColor: COLORS.white,
    paddingVertical: RFValue(8),
    paddingHorizontal: RFValue(10),
    justifyContent: "center",
    alignItems: "center",
    marginBottom: RFValue(10),
    borderRadius: STYLES.borderRadius,
    ...STYLES.shadow,
  },
  btnTxt: {
    fontSize: RFValue(14),
    fontWeight: "500",
    color: COLORS.black,
    marginLeft: RFValue(8),
  },
  loaderContainer: {
    position: "absolute",
    height: STYLES.screenHeight,
    width: STYLES.screenWidth,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  },
});
