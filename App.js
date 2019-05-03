import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { LinearGradient } from "expo";
import { Input, Button } from "react-native-elements";

export default class App extends React.Component {
  render() {
    return (
      <LinearGradient colors={["#a2ea54", "#669335"]} style={{ flex: 1 }}>
        <View style={styles.container}>
          <Image
            style={{
              width: 220,
              height: 95,
              marginBottom: 50,
              marginRight: 75
            }}
            source={require("./assets/white-leaf-png-6.png")}
          />
          <Input placeholder="Username" />
          <Input placeholder="Password" />
          <Button
            title="Log In"
            buttonStyle={{
              width: "150%",
              margin: "6%",
              backgroundColor: "white"
            }}
            titleStyle={{ color: "black" }}
          />
          <Button
            title="Sign Up"
            buttonStyle={{ width: "150%", backgroundColor: "white" }}
            titleStyle={{ color: "black", textAlign: "center" }}
          />
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
