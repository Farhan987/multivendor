import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import { BLACK, GREY } from "../../../theme/colors";
import { LARGE, SMALL, MEDIUM } from "../../../font/font";

export default class CustomNotification extends Component {
  render() {
    return (
      <React.Fragment>
        <View style={{ height: 20 }} />
        <View style={styles.mainViewStyle}>
          <View style={styles.textViewStyle}>
            <Text
              style={{
                fontSize: LARGE,
                color: BLACK,
                marginLeft: 8,
                paddingBottom: 3
              }}
            >
              Order Signed
            </Text>
            <Text
              style={{
                fontSize: SMALL,
                color: BLACK,
                marginLeft: 8,
                paddingTop: 3
              }}
            >
              Lahore Main City, Pakistan
            </Text>
          </View>
          <View style={styles.dateViewStyle}>
            <Text style={{ fontSize: SMALL, color: GREY }}>20/18</Text>
            <Text style={{ fontSize: SMALL, color: GREY, paddingTop: 3 }}>
              10:00 AM
            </Text>
          </View>
        </View>
        <View style={{ height: 5 }} />
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  mainViewStyle: {
    height: 80,
    width: "95%",
    alignSelf: "center",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: BLACK,
    flexDirection: "row"
  },
  textViewStyle: {
    flex: 2,
    justifyContent: "center",
    alignItems: "flex-start"
  },
  dateViewStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
