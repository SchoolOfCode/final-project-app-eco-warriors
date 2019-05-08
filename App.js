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
import { AntDesign, Feather } from "@expo/vector-icons";
import MenuBar from "../final-project-app-eco-warriors/pages/components/MenuBar";
import Header from "../final-project-app-eco-warriors/pages/components/Header";

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
          <View style={styles.header2}>
            <AntDesign name="arrowleft" size={25} color="white" />
            <Text style={{ color: "white", fontSize: 20 }}>Profile</Text>
            <Feather name="log-out" size={25} color="white" />
          </View>
        </View>
        <View style={styles.carousel}>
          <Image
            style={{ height: 125, width: 125, marginLeft: 3, marginRight: 3 }}
            source={require("./assets/530878d8-gp0stt3fm.jpg")}
          />
          <Image
            style={{ height: 125, width: 125, marginLeft: 3, marginRight: 3 }}
            source={require("./assets/530878d8-gp0stt3fm.jpg")}
          />
          <Image
            style={{ height: 125, width: 125, marginLeft: 3, marginRight: 3 }}
            source={require("./assets/530878d8-gp0stt3fm.jpg")}
          />
          <Image
            style={{ height: 125, width: 125, marginLeft: 3, marginRight: 3 }}
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
    backgroundColor: "#669335",
    height: "15%",
    width: "100%",
    justifyContent: "center"
    // borderColor: "red",
    // borderStyle: "solid",
    // borderWidth: 2
  },
  header2: {
    justifyContent: "space-between",
    flexDirection: "row",
    marginLeft: 10,
    marginRight: 10,
    marginTop: 30
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
    height: "50%"
    // borderColor: "red",
    // borderStyle: "solid",
    // borderWidth: 2
  }
});
