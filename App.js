import React from "react";
import { StyleSheet, View, Image, ScrollView } from "react-native";
import { LinearGradient } from "expo";
import {
  Button,
  Input,
  Text,
  TabBar,
  TabItem,
  Icon,
  CardList
} from "@99xt/first-born";
import MenuBar from "../final-project-app-eco-warriors/pages/components/MenuBar";

export default class App extends React.Component {
  render() {
    const listData = [
      {
        title: "Heading 1",
        description: "Description 1"
      },
      {
        title: "Heading 2",
        description: "Description 2"
      },
      {
        title: "Heading 3",
        description: "Description 3"
      }
    ];

    return (
      // <LinearGradient colors={["#a2ea54", "#669335"]} style={{ flex: 1 }}>
      //   <View style={styles.container}>
      //     <Image
      //       style={{
      //         width: 220,
      //         height: 95,
      //         marginBottom: 50,
      //         marginRight: 75
      //       }}
      //       source={require("./assets/white-leaf-png-6.png")}
      //     />
      //     <Input placeholder="Username" color="secondary" />
      //     <Input placeholder="Password" color="secondary" />
      //     <Button block style={{ backgroundColor: "white" }}>
      //       <Text style={{ color: "black" }}>Log In</Text>
      //     </Button>
      //     <Button style={{ backgroundColor: "white" }} block>
      //       <Text style={{ color: "black" }}>Sign Up</Text>
      //     </Button>
      //   </View>
      // </LinearGradient>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={{ color: "white" }}>Interests</Text>
        </View>
        <View style={styles.carousel}>
          <Image
            style={{ height: 125, width: 125 }}
            source={require("./assets/530878d8-gp0stt3fm.jpg")}
          />
          <Image
            style={{ height: 125, width: 125 }}
            source={require("./assets/530878d8-gp0stt3fm.jpg")}
          />
          <Image
            style={{ height: 125, width: 125 }}
            source={require("./assets/530878d8-gp0stt3fm.jpg")}
          />
          <Image
            style={{ height: 125, width: 125 }}
            source={require("./assets/530878d8-gp0stt3fm.jpg")}
          />
        </View>
        <View style={styles.cards}>
          <CardList data={listData} />
        </View>
        <MenuBar />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // alignItems: "center"
  },
  header: {
    backgroundColor: "#a2ea54",
    height: "20%",
    width: "100%",
    alignItems: "center",
    justifyContent: "flex-end"
    // borderColor: "red",
    // borderStyle: "solid",
    // borderWidth: 2
  },
  carousel: {
    flexDirection: "row",
    alignItems: "center",
    height: "25%"
    // borderColor: "red",
    // borderStyle: "solid",
    // borderWidth: 2
  },
  cards: {
    height: "45%"
    // borderColor: "red",
    // borderStyle: "solid",
    // borderWidth: 2
  }
});
