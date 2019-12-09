import React, { Component } from "react";
import { StyleSheet, View, ScrollView, TouchableOpacity } from "react-native";
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
  static navigationOptions = () => {
    return {
      header: null
    };
  };
  render() {
    return (
      <Container>
        <Content>
          <CustomItemDetail imageHeight={300} />

          {/* //// */}
          <View style={styles.itemDesTextViewStyle}>
            <Text style={{ fontSize: LARGE, fontWeight: "bold" }}>Reviews</Text>
          </View>
          {/* reviewCard */}

          <CustomReviewCard userImage={image1} userName="Farhan" />

          <CustomReviewCard userImage={image2} userName="Dawood" />
        </Content>
        <Footer>
          <FooterTab style={{ backgroundColor: WHITE, flexDirection: "row" }}>
            <View
              style={{
                flex: 2,
                justifyContent: "center",
                alignItems: "flex-start",
                paddingLeft: "7%"
              }}
            >
              <Text style={{ color: GREY }}>Price</Text>
              <Text style={{ fontWeight: "bold", color: GREEN }}>$1500</Text>
            </View>
            <View
              style={{
                flex: 2,
                justifyContent: "center",
                alignItems: "center",
                // backgroundColor: "red"
                padding: 5
              }}
            >
              <Button
                style={[styles.buttonStyle, { height: 10 }]}
                onPress={() => this.props.navigation.navigate("AdressScreen")}
              >
                <Text style={{ color: "white", fontSize: 9 }}> Buy Now </Text>
              </Button>
            </View>

            <View
              style={{
                flex: 2,
                justifyContent: "center",
                alignItems: "center",
                padding: 5
              }}
            >
              <Button
                style={styles.buttonStyle}
                onPress={() =>
                  this.props.navigation.navigate("CartSwipableScreen")
                }
              >
                <Text
                  style={{ color: "white", alignSelf: "center", fontSize: 9 }}
                >
                  Add to Cart
                </Text>
              </Button>
            </View>
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
    backgroundColor: GREEN,
    width: "92%",
    height: "100%",
    justifyContent: "center"
  }
});
