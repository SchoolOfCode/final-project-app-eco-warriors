import React from "react";
import { StyleSheet, View, Image } from "react-native";
import { LinearGradient } from "expo";
import { Button, Input, Text, TabBar, TabItem, Icon } from "@99xt/first-born";

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
          <Input placeholder="Username" color="secondary" />
          <Input placeholder="Password" color="secondary" />
          <Button block style={{ backgroundColor: "white" }}>
            <Text style={{ color: "black" }}>Log In</Text>
          </Button>
          <Button style={{ backgroundColor: "white" }} block>
            <Text style={{ color: "black" }}>Sign Up</Text>
          </Button>
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
  },
  menu: {
    backgroundColor: "green"
  }
});
