import React, { Component } from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { BLACK, GREY, GREEN } from "../../../theme/colors";

export default class CustomGadget extends Component {
  render() {
    return (
      <View style={styles.mainViewStyle}>
        <View style={styles.innerViewStyle}>
          <View style={styles.gadgetImageViewStyle}>
            <Image
              source={this.props.gadgetImageLeft}
              style={styles.gadgetImageStyle}
            />
          </View>
          <View style={styles.textsViewStyle}>
            <Text>
              {this.props.LeftGadgetName
                ? this.props.LeftGadgetName
                : "Smart Bluetooth Headphone"}
            </Text>
            <Text style={{ paddingTop: 3, paddingBottom: 3, color: GREY }}>
              {this.props.LeftGadgetDes
                ? this.props.LeftGadgetDes
                : "Google LLC"}
            </Text>
            <Text style={{ color: GREEN }}>
              {this.props.LeftGadgetPrice
                ? this.props.LeftGadgetPrice
                : "$9000"}
            </Text>
          </View>
        </View>

        <View style={styles.innerViewStyle}>
          <View style={styles.gadgetImageViewStyle}>
            <Image
              source={this.props.gadgetImageRight}
              style={styles.gadgetImageStyle}
            />
          </View>
          <View style={styles.textsViewStyle}>
            <Text>
              {this.props.RightGadgetName
                ? this.props.RightGadgetName
                : "Smart Disk"}
            </Text>
            <Text style={{ paddingTop: 3, paddingBottom: 3, color: GREY }}>
              {this.props.RightGadgetDes
                ? this.props.RightGadgetDes
                : "Smart lnc"}
            </Text>
            <Text style={{ color: GREEN }}>
              {this.props.RightGadgetPrice
                ? this.props.RightGadgetPrice
                : "$1200"}
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainViewStyle: { height: 350, flexDirection: "row" },
  innerViewStyle: {
    flex: 1
  },
  gadgetImageViewStyle: {
    height: 250,
    justifyContent: "center",
    alignItems: "center"
  },
  gadgetImageStyle: { height: "90%", width: "90%" },
  textsViewStyle: {
    height: 90,
    width: "90%",
    alignSelf: "center",
    justifyContent: "flex-start",
    alignItems: "flex-start"
  }
});
