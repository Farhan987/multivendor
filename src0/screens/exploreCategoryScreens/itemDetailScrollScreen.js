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
import { LARGE, SMALL, MEDIUM } from "../../font/font";
import { BLACK, WHITE, GREEN, GREY } from "../../theme/colors";
import CustomItemDetail from "../../component/customComponents/ItemDetail/customItemDetails";
import CustomReviewCard from "../../component/customComponents/ReviewCard/CustomReviewCard";

let image1 = require("../../images/p1.jpg");
let image2 = require("../../images/p2.jpg");

export default class ExploreCategoryItemDetailScrollScreen extends Component {
  render() {
    return (
      <Container>
        <Content>
          <CustomItemDetail imageHeight={200} />

          {/* //// */}
          <View style={styles.itemDesTextViewStyle}>
            <Text style={{ fontSize: LARGE, fontWeight: "bold" }}>Reviews</Text>
          </View>
          {/* reviewCard */}
          <CustomReviewCard userImage={image1} userName="Farhan" />
          <CustomReviewCard userImage={image2} userName="Dawood" />
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
  itemDesTextViewStyle: {
    height: 40,
    width: "90%",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "flex-start"
  },

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
