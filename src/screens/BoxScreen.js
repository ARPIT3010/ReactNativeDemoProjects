import React from "react";
import { Text, View, FlatList, StyleSheet } from "react-native";

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <View style={styles.viewOneStyle}></View>
      <View style={styles.viewTwoStyle}></View>
      <View style={styles.viewThreeStyle}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 1,
    borderColor: "black",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  viewOneStyle: { width: 100, height: 100, backgroundColor: "red" },
  viewTwoStyle: { width: 100, height: 100, backgroundColor: "green", marginTop:50 },
  viewThreeStyle: { width: 100, height: 100, backgroundColor: "blue" },
});

export default BoxScreen;
