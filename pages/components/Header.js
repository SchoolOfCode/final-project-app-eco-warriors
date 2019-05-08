import React from "react";
import { StyleSheet, View, Image } from "react-native";
import { LinearGradient } from "expo";
import { Text } from "@99xt/first-born";
import { AntDesign, Feather } from "@expo/vector-icons";

export default class Header extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.header2}>
            <AntDesign name="arrowleft" size={25} color="white" />
            <Text style={{ color: "white", fontSize: 25 }}>Profile</Text>
            <Feather name="log-out" size={25} color="white" />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "20%",
    alignItems: "center",
    justifyContent: "center",
    width: "100%"
  },
  header: {
    backgroundColor: "green",
    position: "absolute",
    width: "100%",
    justifyContent: "center"
  },
  header2: {
    justifyContent: "space-between",
    flexDirection: "row",
    marginLeft: 10,
    marginRight: 10
  }
});
