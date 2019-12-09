import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import {
  Container,
  Header,
  Body,
  Content,
  Text,
  Button,
  FooterTab,
  Footer,
  Left,
  Icon,
  Right,
  Title
} from "native-base";
import { LARGE, MEDIUM } from "../../font/font";
import { GREEN, WHITE, BLACK, GREY } from "../../theme/colors";
import CustomPaymentCard from "../../component/customComponents/paymentCard/CustomPaymentCard";
import CustomHeader from "../../component/customComponents/Header/CustomHeader";

export default class EditCardScreen extends Component {
  render() {
    return (
      <Container>
        <CustomHeader title="Edit Card" />

        <Content>
          <CustomPaymentCard
            backgroundColor="#0DD672"
            paymentMethod="cc-visa"
            paymentMethodIconColor={WHITE}
          />
          <View style={{ height: 20 }} />
          <View style={styles.textStyle}>
            <Text style={{ color: GREY }}>Name on Card</Text>
          </View>
          <View style={[styles.textStyle, { height: 40 }]}>
            <Text style={{ fontSize: LARGE }}>David Spade</Text>
          </View>

          <View style={styles.lineStyle} />
          <View style={[styles.textStyle, { height: 50 }]}>
            <Text style={{ color: GREY }}>Card Number</Text>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              width: "95%",
              alignSelf: "center"
            }}
          >
            <View
              style={[styles.numbersViewStyle, { alignItems: "flex-start" }]}
            >
              <Text style={styles.numbersTextStyle}>3344</Text>
            </View>
            <View style={styles.numbersViewStyle}>
              <Text style={styles.numbersTextStyle}>5477</Text>
            </View>
            <View style={{ width: "2.5%" }} />
            <View style={styles.numbersViewStyle}>
              <Text style={styles.numbersTextStyle}>8388</Text>
            </View>
            <View style={{ width: "2.5%" }} />
            <View style={styles.numbersViewStyle}>
              <Text style={styles.numbersTextStyle}>8388</Text>
            </View>
            <View style={styles.numbersViewStyle} />
            <View style={[styles.numbersViewStyle, { alignItems: "flex-end" }]}>
              <Icon
                style={{
                  color: "red",
                  fontSize: 20
                }}
                name="cc-visa"
                type="FontAwesome"
              />
            </View>
          </View>
          <View style={{ height: 12 }} />
          <View style={styles.lineStyle} />
          <View style={{ height: 10 }} />
          <View style={styles.textsMainViewStyle1}>
            <View style={styles.textViewStyle1}>
              <Text style={{ color: GREY }}>Expiry Date</Text>
            </View>
            <View style={styles.textViewStyle1}>
              <Text style={{ color: GREY }}>CCV</Text>
            </View>
          </View>
          <View style={styles.textsMainViewStyle1}>
            <View style={styles.textViewStyle1}>
              <Text style={{ color: BLACK }}>09-18</Text>
            </View>
            <View style={styles.textViewStyle1}>
              <Text style={{ color: BLACK }}>667</Text>
            </View>
          </View>

          <View style={{ height: 5 }} />
          <View style={styles.lineStyle} />
        </Content>
        <Footer>
          <FooterTab style={{ backgroundColor: WHITE }}>
            <Left style={{ marginLeft: "2.5%" }}>
              <Button style={styles.buttonStyle1}>
                <Text style={{ color: GREEN }}> Cancel</Text>
              </Button>
            </Left>
            <Right>
              <Button style={styles.buttonStyle2}>
                <Text> Save </Text>
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
              <Text style={{ fontWeight: "bold", color: BLACK }}>Account</Text>
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
  },
  textStyle: {
    width: "95%",
    height: 30,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "flex-start"
  },
  lineStyle: {
    height: 1,
    width: "95%",
    alignSelf: "center",
    backgroundColor: GREY
  },
  numbersViewStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  numbersTextStyle: { color: BLACK, fontSize: LARGE, fontWeight: "bold" },
  textsMainViewStyle1: {
    height: 40,
    width: "95%",
    alignSelf: "center",
    flexDirection: "row"
  },
  textViewStyle1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start"
  }
});
