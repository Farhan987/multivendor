import React, { Component } from "react";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import { Text, Button, Card } from "native-base";
import { LARGE, MEDIUM } from "../../../font/font";
import { GREEN, WHITE, BLACK, GREY } from "../../../theme/colors";
import { black } from "ansi-colors";

export default class CustomWishlistCard extends Component {
  render() {
    return (
      <React.Fragment>
        <View style={{ height: 20 }} />
        <Card style={styles.mainOuterViewStyle}>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Image
              style={styles.imageStyle}
              source={require("../../../images/profile.jpg")}
            />
          </View>

          <View style={styles.texsViewStyle}>
            <View style={styles.textsInnerViewStyle}>
              <Text>Item Name</Text>
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
    marginLeft: 20
  },
  imageStyle: {
    height: "90%",
    width: "90%",
    borderRadius: 5
  }
});
