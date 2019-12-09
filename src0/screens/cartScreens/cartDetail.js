import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
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
import { LARGE, MEDIUM } from "../../font/font";
import { BLACK, GREEN, WHITE, GREY } from "../../theme/colors";
import CustomCartCard from "../../component/customComponents/Cart/CustomCartCard";

let image1 = require("../../images/k.jpg");
let image2 = require("../../images/h.jpg");

export default class CartDetail extends Component {
  render() {
    return (
      <Container>
        <Content>
          <CustomCartCard image={image1} name="Kid Shoes" />
          <CustomCartCard image={image2} name="Head Phone" />
          <CustomCartCard image={image1} name="Kid Shoes" />

          <View style={{ height: 20 }} />
          <View style={styles.lineStyle} />
          <View style={styles.textsMainViewStyle}>
            <View style={styles.desViewStyle}>
              <Text style={{ color: BLACK, fontSize: MEDIUM }}>Sub Total</Text>
            </View>
            <View style={styles.priceViewStyle}>
              <Text
                style={{ color: BLACK, fontSize: MEDIUM, fontWeight: "bold" }}
              >
                $399
              </Text>
            </View>
          </View>

          <View style={styles.textsMainViewStyle}>
            <View style={styles.desViewStyle}>
              <Text style={{ color: BLACK, fontSize: MEDIUM }}>Tax</Text>
            </View>
            <View style={styles.priceViewStyle}>
              <Text
                style={{ color: BLACK, fontSize: MEDIUM, fontWeight: "bold" }}
              >
                $39
              </Text>
            </View>
          </View>
          <View style={styles.lineStyle} />
          <View style={{ height: 20 }} />
        </Content>
        <Footer>
          <FooterTab style={{ backgroundColor: WHITE }}>
            {/* <Left style={{ marginLeft: "2.5%" }}>
              <Text style={{ color: GREY }}>Price</Text>
              <Text style={{ fontWeight: "bold", color: GREEN }}>$1500</Text>
            </Left> */}
            <Right>
              <Button style={styles.buttonStyle}>
                <Text> Checkout </Text>
              </Button>
            </Right>
          </FooterTab>
        </Footer>
        <Footer>
          <FooterTab style={{ backgroundColor: WHITE }}>
            <Button vertical>
              <Icon
                style={{ color: BLACK, fontSize: 20 }}
                name="home"
                type="FontAwesome"
              />
            </Button>
            <Button>
              <Icon style={{ color: BLACK }} name="cart" />
            </Button>
            <Button>
              <Icon
                style={{ color: BLACK, fontSize: 20 }}
                name="user"
                type="FontAwesome"
              />
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  lineStyle: {
    height: 1,
    width: "95%",
    backgroundColor: "#979797",
    alignSelf: "center"
  },
  textsMainViewStyle: {
    height: 50,
    width: "90%",
    alignSelf: "center",
    flexDirection: "row"
  },
  desViewStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start"
  },
  priceViewStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-end"
  },
  buttonStyle: {
    marginRight: "13%",
    backgroundColor: GREEN,
    width: 130,
    justifyContent: "center"
  }
});
