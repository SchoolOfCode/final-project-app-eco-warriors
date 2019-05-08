import React from "react";
import { StyleSheet, View, Image } from "react-native";
import { LinearGradient } from "expo";
import { Button, Input, Text, TabBar, TabItem, Icon } from "@99xt/first-born";

export default class MenuBar extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TabBar color="secondary">
          <TabItem>
            <Icon name="person" />
            <Text>Profile</Text>
          </TabItem>
          <TabItem active>
            <Icon name="bookmark" />
            <Text>Interests</Text>
          </TabItem>
          <TabItem>
            <Icon name="camera" />
            <Text>QR Code</Text>
          </TabItem>
        </TabBar>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "flex-end",
    backgroundColor: "#669335",
    height: "10%"
    // borderColor: "red",
    // borderStyle: "solid",
    // borderWidth: 2
  }
});
