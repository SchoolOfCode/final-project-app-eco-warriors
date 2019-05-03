import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo";
import { Input, Button } from "react-native-elements";

export default class App extends React.Component {
  render() {
    return (
      <LinearGradient colors={["#6BF755", "#0E9D22"]} style={{ flex: 1 }}>
        <View style={styles.container}>
          <Input placeholder="Username" />
          <Input placeholder="Password" />
          <Button title="Log In" buttonStyle={{ width: "100%" }} />
          <Button title="Sign Up" />
        </View>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
