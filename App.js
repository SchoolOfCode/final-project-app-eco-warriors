import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.input}>
          <Text>Log in</Text>
          <TextInput placeholder="username" />
          <TextInput placeholder="password" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  input: {
    alignItems: "center",
    justifyContent: "center",
    borderColor: "red",
    borderStyle: "solid",
    borderWidth: 2,
    height: 100,
    width: "100%"
  }
});
