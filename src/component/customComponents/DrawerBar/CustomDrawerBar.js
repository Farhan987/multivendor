import React, { Component } from "react";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import {
  Container,
  Content,
  Text,
  Button,
  FooterTab,
  Footer,
  Icon
} from "native-base";
import { LARGE, MEDIUM, SMALL } from "../../../font/font";
import { GREEN, WHITE, BLACK, GREY } from "../../../theme/colors";

export default class CustomDrawerBar extends Component {
  render() {
    return (
      <View style={styles.mainViewStyle}>
        <View style={styles.iconStyle1}>
          <Icon
            style={{ color: BLACK, fontSize: LARGE }}
            name={this.props.iconName ? this.props.iconName : "pencil"}
            type="FontAwesome"
          />
        </View>

        <View style={styles.textViewStyle}>
          <Text>{this.props.text}</Text>
        </View>

        <TouchableOpacity
          style={styles.iconStyle2}
          onPress={this.props.onPress}
        >
          <Icon
            style={{ color: BLACK, fontSize: LARGE }}
            name="chevron-right"
            type="FontAwesome"
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  upperMainViewStyle: {
    height: 150,
    width: "90%",
    alignSelf: "center",
    flexDirection: "row"
  },
  viewStyle: {
    flex: 1,
    backgroundColor: "pink",
    justifyContent: "center",
    alignItems: "flex-start"
  },
  mainViewStyle: {
    height: 60,
    width: "90%",
    alignSelf: "center",
    flexDirection: "row"
  },
  iconStyle1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start"
  },
  iconStyle2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-end"
  },
  textViewStyle: {
    flex: 4,
    justifyContent: "center",
    alignItems: "flex-start"
  }
});
