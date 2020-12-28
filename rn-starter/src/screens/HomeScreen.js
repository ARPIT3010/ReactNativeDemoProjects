import React from "react";
import { Text, StyleSheet, Button, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const HomeScreen = (props) => {
  return (
    <View>
      <Text style={styles.text}>Home</Text>
      <Button
        title="Go to Component Demo"
        onPress={() => props.navigation.navigate("Components")}
      />
      <TouchableOpacity onPress={() => props.navigation.navigate("ListScreen")}>
        <Text>Touch here</Text>
      </TouchableOpacity>

      <Button
        title="Go to Component Demo"
        onPress={() => props.navigation.navigate("Image")}
      />

      <Button
        title="Go to Counter Demo"
        onPress={() => props.navigation.navigate("Counter")}
      />

      <Button
        title="Go to Color Demo"
        onPress={() => props.navigation.navigate("Color")}
      />

      <Button
        title="Go to Square demo"
        onPress={() => props.navigation.navigate("Square")}
      />

      <Button
        title="Go to Box Demo"
        onPress={() => props.navigation.navigate("Box")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
