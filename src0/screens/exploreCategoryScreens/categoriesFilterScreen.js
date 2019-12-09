import React, { Component } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import {
  Container,
  Header,
  Title,
  Content,
  Footer,
  FooterTab,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Text
} from "native-base";
import { LARGE } from "../../font/font";
import { BLACK, WHITE, GREEN } from "../../theme/colors";
import CustomGadget from "../../component/customComponents/Gadgets/customGadget";
import CustomDropdown from "../../component/customComponents/DropDown/customDropdown";
import SecondCustomDropdown from "../../component/customComponents/DropDown/customDropdown2";

let image1 = require("../../images/g1.jpg");
let image2 = require("../../images/g2.jpg");
let image3 = require("../../images/g3.jpg");
let image4 = require("../../images/g4.jpg");

export default class ExploreCategoriesFilterScreen extends Component {
  render() {
    return (
      <Container>
        <Header style={{ backgroundColor: WHITE, flexDirection: "row" }}>
          <View style={styles.dropDownViewStyle}>
            <CustomDropdown backgroundColor="#EAEAEA" />
          </View>
          <View style={styles.headerTitleViewStyle}>
            <Title style={styles.headerTitleTextStyle}>Filter</Title>
          </View>
        </Header>
        <Content>
          <View style={{ height: 30 }} />
          <SecondCustomDropdown title="Brands" />
          <View style={{ height: 30 }} />
          <SecondCustomDropdown title="Price" />
          <View style={{ height: 30 }} />
          <SecondCustomDropdown title="Colors" />
          <View style={{ height: 30 }} />
          <SecondCustomDropdown title="Ratings" />
        </Content>
        <Footer>
          <FooterTab style={{ backgroundColor: WHITE }}>
            <Left style={{ marginLeft: "2.5%" }}>
              <Button style={styles.buttonStyle1}>
                <Text style={{ color: GREEN }}> Clear</Text>
              </Button>
            </Left>
            <Right>
              <Button style={styles.buttonStyle2}>
                <Text> Filter </Text>
              </Button>
            </Right>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF"
  },
  dropDownViewStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  headerTitleViewStyle: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center"
  },
  headerTitleTextStyle: {
    fontSize: LARGE,
    color: BLACK,
    alignSelf: "flex-start",
    marginLeft: "17%"
  },
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
