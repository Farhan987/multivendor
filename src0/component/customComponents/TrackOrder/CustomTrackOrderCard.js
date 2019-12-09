import React, { Component } from "react";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import { Text, Button, Card } from "native-base";
import { LARGE, MEDIUM } from "../../../font/font";
import { GREEN, WHITE, BLACK, GREY } from "../../../theme/colors";
import { black } from "ansi-colors";

export default class CustomTrackOrderCard extends Component {
  render() {
    return (
      <React.Fragment>
        <View style={styles.dateTextStyle}>
          <Text style={{ color: "#6D6D6D" }}>Sep 23, 2019</Text>
        </View>
        <Card style={styles.mainOuterViewStyle}>
          <View style={styles.texsViewStyle}>
            <View style={styles.textsInnerViewStyle}>
              <Text>OD-39989e893-N</Text>
            </View>
            <View
              style={[
                styles.textsInnerViewStyle,
                { justifyContent: "flex-start" }
              ]}
            >
              <Text style={{ color: GREEN }}>$4500</Text>
            </View>
            <View style={[styles.textsInnerViewStyle, { flex: 2 }]}>
              <Button
                warning
                style={{
                  height: 40,
                  backgroundColor: this.props.buttonColor
                    ? this.props.buttonColor
                    : "orange"
                }}
              >
                <Text>
                  {this.props.buttonText ? this.props.buttonText : "In Transit"}
                </Text>
              </Button>
            </View>
          </View>
          <View style={{ flex: 1 }}>
            <View style={{ flex: 1, flexDirection: "row" }}>
              <View style={styles.imageViewStyle}>
                <Image
                  source={require("../../../images/h.jpg")}
                  style={{ height: "90%", width: "90%", borderRadius: 5 }}
                />
              </View>
              <View style={styles.imageViewStyle}>
                <Image
                  source={require("../../../images/k.jpg")}
                  style={{ height: "90%", width: "90%", borderRadius: 5 }}
                />
              </View>
            </View>
            <View style={{ flex: 1 }}>
              <View style={{ flex: 1, flexDirection: "row" }}>
                <View style={styles.imageViewStyle}>
                  <Image
                    source={require("../../../images/g.jpg")}
                    style={{ height: "90%", width: "90%", borderRadius: 5 }}
                  />
                </View>
                <View style={styles.imageViewStyle1}>
                  <TouchableOpacity style={styles.buttonStyle}>
                    <Text style={{ color: BLACK }}>+4</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </Card>
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  mainOuterViewStyle: {
    height: 150,
    width: "95%",
    alignSelf: "center",
    borderRadius: 5,
    flexDirection: "row"
  },
  texsViewStyle: { flex: 1 },
  textsInnerViewStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
    marginLeft: 10
  },
  imageViewStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  dateTextStyle: {
    height: 50,
    width: "95%",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "flex-start"
  },
  imageViewStyle1: {
    flex: 1,
    alignSelf: "center"
  },
  buttonStyle: {
    height: "80%",
    width: "70%",
    borderWidth: 1,
    borderColor: BLACK,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center"
  }
});
