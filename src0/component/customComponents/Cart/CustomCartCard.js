import React, { Component } from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import { Button, Icon } from "native-base";
import { LARGE, MEDIUM } from "../../../font/font";
import { BLACK, GREEN, WHITE } from "../../../theme/colors";
import { SwipeListView } from "react-native-swipe-list-view";
import { AirbnbRating } from "react-native-ratings";

export default class CustomCartCard extends Component {
  state = {
    list: ["A"]
  };
  render() {
    return (
      <React.Fragment>
        <SwipeListView
          data={this.state.list}
          renderItem={(data, rowMap) => (
            <View style={styles.mainViewStyle}>
              <View style={styles.imageViewStyle}>
                <Image source={this.props.image} style={styles.imageStyle} />
              </View>
              <View style={{ flex: 2 }}>
                <View style={styles.kidTextViewStyle}>
                  <Text style={styles.kidTextStyle}>{this.props.name}</Text>
                </View>
                <View style={styles.priceTextViewStyle}>
                  <Text style={styles.priceTextStyle}>$100</Text>
                </View>

                <View style={styles.counterMainViewStyle}>
                  <View style={styles.counterInnerViewStyle}>
                    <TouchableOpacity style={styles.counterTextsViewStyle}>
                      <Text style={{ fontSize: LARGE }}>+</Text>
                    </TouchableOpacity>
                    <View style={styles.counterTextsViewStyle}>
                      <Text style={{ fontSize: MEDIUM }}>2</Text>
                    </View>
                    <TouchableOpacity style={styles.counterTextsViewStyle}>
                      <Text style={{ fontSize: LARGE }}>-</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          )}
          renderHiddenItem={(data, rowMap) => (
            <View
              style={{
                width: "100%",
                height: "100%",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                backgroundColor: "#EAEAEA"
              }}
            >
              <TouchableOpacity>
                <Icon
                  style={{ color: "yellow", fontSize: 20, marginLeft: "25%" }}
                  name="star"
                  type="FontAwesome"
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Icon
                  style={{ color: "red", fontSize: 20, marginRight: "8%" }}
                  name="trash"
                  type="FontAwesome"
                />
              </TouchableOpacity>
            </View>
          )}
          leftOpenValue={75}
          rightOpenValue={-75}
        />
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  mainViewStyle: {
    height: 100,
    flexDirection: "row",
    width: "100%",
    alignSelf: "center",
    backgroundColor: "white"
  },
  imageViewStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start"
  },
  imageStyle: { height: "95%", width: "95%", borderRadius: 5 },
  kidTextViewStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start"
  },
  kidTextStyle: {
    fontSize: LARGE,
    color: BLACK,
    marginLeft: "6%"
  },
  priceTextViewStyle: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start"
  },
  priceTextStyle: {
    fontSize: LARGE,
    color: GREEN,
    marginLeft: "6%"
  },
  counterMainViewStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start"
  },
  counterInnerViewStyle: {
    height: "90%",
    width: "50%",
    backgroundColor: "#EAEAEA",
    marginLeft: "6%",
    borderRadius: 3,
    flexDirection: "row"
  },
  counterTextsViewStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
