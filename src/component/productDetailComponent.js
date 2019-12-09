import React, { Component } from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { BLACK, GREY, GREEN } from "../theme/colors";

export default class CustomGadget extends Component {
  render() {
    return (
      <View style={styles.mainViewStyle}>
        <View style={styles.gadgetImageViewStyle}>
          <Image
            resizeMode={"stretch"}
            source={this.props.gadgetImageLeft}
            style={styles.gadgetImageStyle}
          />
          <View style={{ height: 6 }}></View>
          <View style={styles.textsViewStyle}>
            <Text style={{ fontSize: 14 }}>
              {this.props.LeftGadgetName
                ? this.props.LeftGadgetName
                : "Smart Bluetooth Headphone"}
            </Text>
            <View style={{ height: 6 }}></View>
            <Text style={{ color: GREEN, fontSize: 13 }}>
              {this.props.LeftGadgetPrice
                ? this.props.LeftGadgetPrice
                : "$9000"}
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainViewStyle: {
    height: 100,
    flexDirection: "row"
  },

  gadgetImageViewStyle: {
    flex: 1,
    alignItems: "center"
  },
  gadgetImageStyle: {
    alignSelf: "flex-start",
    height: "100%",
    width: "90%",
    borderRadius: 10
  },
  textsViewStyle: {
    height: 90,
    width: "90%",
    alignSelf: "center",
    justifyContent: "flex-start",
    alignItems: "flex-start"
  }
});
