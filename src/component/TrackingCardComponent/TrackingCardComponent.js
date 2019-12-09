import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { Content, Text } from "native-base";

import { GREEN } from "../../theme/colors";
export default class TrackingCardComponent extends Component {
  render() {
    return (
      <React.Fragment>
        <View
          style={{
            height: 100,
            flexDirection: "row",

            alignItems: "center",
            justifyContent: "center",
            width: "90%",
            alignSelf: "center"
          }}
        >
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 10, color: "#929292" }}>20/18</Text>
            <Text style={{ fontSize: 10, color: "#929292" }}>10:00 AM</Text>
          </View>
          <View
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              alignSelf: "center"
            }}
          >
            <View
              style={{
                width: 10,
                height: 10,
                backgroundColor: GREEN,
                borderRadius: 30
              }}
            ></View>
          </View>
          <View style={{ flex: 4 }}>
            <Text>Order Signed</Text>
            <Text style={{ fontSize: 13 }}>Lagos State, Pakistan</Text>
          </View>
        </View>
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({});
