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

let image1 = require("../../images/g1.jpg");
let image2 = require("../../images/g2.jpg");
let image3 = require("../../images/g3.jpg");
let image4 = require("../../images/g4.jpg");

export default class ExploreCategoryGadgetsScreen extends Component {
  render() {
    return (
      <Container>
        <Header style={{ backgroundColor: WHITE }}>
          <Left>
            <Button transparent>
              <Icon
                name="chevron-left"
                type="FontAwesome"
                style={{ fontSize: LARGE, color: BLACK }}
              />
            </Button>
          </Left>
          <Body>
            <Title style={{ fontSize: LARGE, color: BLACK }}>Gadgets</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon
                name="bars"
                type="FontAwesome"
                style={{ fontSize: LARGE, color: BLACK }}
              />
            </Button>
          </Right>
        </Header>
        <Content>
          <CustomGadget gadgetImageLeft={image1} gadgetImageRight={image2} />
          <CustomGadget gadgetImageLeft={image3} gadgetImageRight={image4} />
        </Content>
        <Footer>
          <FooterTab style={{ backgroundColor: WHITE }}>
            <Left style={{ marginLeft: "2.5%" }}>
              <Text style={{ fontWeight: "bold" }}>No filters applied</Text>
            </Left>
            <Right>
              <Button style={styles.buttonStyle}>
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
  buttonStyle: {
    marginRight: "5%",
    backgroundColor: GREEN,
    width: 130,
    justifyContent: "center"
  }
});
