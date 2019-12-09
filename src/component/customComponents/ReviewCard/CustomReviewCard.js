import React, { Component } from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { AirbnbRating } from "react-native-ratings";
import { MEDIUM } from "../../../font/font";
import { BLACK } from "../../../theme/colors";

export default class CustomReviewCard extends Component {
  render() {
    return (
      <React.Fragment style={{ backgroundColor: "white" }}>
        <View style={{ height: 10 }} />
        <View style={styles.mainViewStyle}>
          <View style={styles.imageViewStyle}>
            <Image style={styles.imageStyle} source={this.props.userImage} />
          </View>
          <View style={{ flex: 3 }}>
            <View style={{ flex: 1, flexDirection: "row" }}>
              <View style={styles.nameViewStyle}>
                <Text
                  style={{ fontWeight: "bold", fontSize: MEDIUM, color: BLACK }}
                >
                  {this.props.userName}
                </Text>
              </View>
              <View style={styles.ratingViewStyle}>
                <AirbnbRating showRating={false} size={20} count={5} />
              </View>
            </View>
            <View style={styles.commentViewStyle}>
              <Text style={{ color: BLACK }}>
                Perfect Jeans Shirt, jave no complian yet.
              </Text>
            </View>
          </View>
        </View>
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  mainViewStyle: {
    height: 80,
    width: "90%",
    alignSelf: "center",
    flexDirection: "row"
  },
  imageViewStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start"
  },
  imageStyle: {
    height: 70,
    width: 70,
    borderRadius: 50
  },
  nameViewStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start"
  },
  ratingViewStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-end"
  },
  commentViewStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start"
  }
});
