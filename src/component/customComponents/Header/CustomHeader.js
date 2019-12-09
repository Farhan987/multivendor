import React, { Component } from "react";
import { StyleSheet } from "react-native";
import {
  Container,
  Header,
  Body,
  Button,
  Left,
  Icon,
  Title,
  View,
  Right
} from "native-base";
import { LARGE } from "../../../font/font";
import { WHITE, BLACK } from "../../../theme/colors";

export default class CustomHeader extends Component {
  render() {
    return (
      <Header style={{ backgroundColor: WHITE, flexDirection: "row" }}>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "flex-start"
          }}
        >
          <Button transparent>
            <Icon
              name="chevron-left"
              type="FontAwesome"
              style={{ fontSize: LARGE, color: BLACK, alignSelf: "center" }}
            />
          </Button>
        </View>
        <View
          style={{
            flex: 3,
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Title style={styles.headerTitleStyle}>{this.props.title}</Title>
        </View>
        <View style={{ flex: 1 }} />
      </Header>
    );
  }
}

const styles = StyleSheet.create({
  headerTitleStyle: {
    fontSize: LARGE,
    color: BLACK
  }
});
