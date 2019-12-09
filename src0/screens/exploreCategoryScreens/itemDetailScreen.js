import React, { Component } from "react";
import { StyleSheet, View, ScrollView, ImageBackground } from "react-native";
import {
  Container,
  Content,
  Text,
  Button,
  FooterTab,
  Footer,
  Left,
  Icon,
  Right
} from "native-base";
import { LARGE, SMALL } from "../../font/font";
import { BLACK, WHITE, GREEN, GREY } from "../../theme/colors";
import { AirbnbRating } from "react-native-ratings";
import CustomItemDetail from "../../component/customComponents/ItemDetail/customItemDetails";

export default class ExploreCategoryItemDetailScreen extends Component {
  render() {
    return (
      <Container>
        <Content>
          <CustomItemDetail />
        </Content>
        <Footer>
          <FooterTab style={{ backgroundColor: WHITE }}>
            <Left style={{ marginLeft: "2.5%" }}>
              <Text style={{ color: GREY }}>Price</Text>
              <Text style={{ fontWeight: "bold", color: GREEN }}>$1500</Text>
            </Left>
            <Right>
              <Button style={styles.buttonStyle}>
                <Text> Add </Text>
              </Button>
            </Right>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  buttonViewStyle: {
    height: 80,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    width: "95%",
    alignSelf: "center"
  },
  buttonStyle: {
    marginRight: "3%",
    backgroundColor: GREEN,
    width: 130,
    justifyContent: "center"
  }
});
