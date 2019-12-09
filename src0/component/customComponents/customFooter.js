import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Footer, Button, FooterTab, Left, Right } from "native-base";
import { GREEN, WHITE } from "../../theme/colors";
import { MEDIUM, LARGE } from "../../font/font";

export default class CustomFooter extends Component {
  render() {
    return (
      <Footer>
        <FooterTab style={{ backgroundColor: WHITE }}>
          <Left style={{ paddingLeft: "2.5%" }}>
            <Button style={styles.buttonStyle1}>
              <Text style={{ color: "black" }}> {this.props.Text1}</Text>
            </Button>
          </Left>
          <Right>
            <Button style={styles.buttonStyle2}>
              <Text style={{ color: "white" }}> {this.props.Text2} </Text>
            </Button>
          </Right>
        </FooterTab>
      </Footer>
    );
  }
}

const styles = StyleSheet.create({
  buttonStyle2: {
    marginRight: "11%",
    backgroundColor: GREEN,
    width: 130,
    justifyContent: "center"
  },
  buttonStyle1: {
    marginLeft: "5%",
    backgroundColor: WHITE,
    borderColor: GREEN,
    borderWidth: 1,
    width: 130,
    justifyContent: "center"
  }
});
