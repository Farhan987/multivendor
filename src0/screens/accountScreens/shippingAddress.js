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
  Title,
  CheckBox
} from "native-base";
import { LARGE, MEDIUM } from "../../font/font";
import { GREEN, WHITE, BLACK, GREY } from "../../theme/colors";
import CustomPaymentCard from "../../component/customComponents/paymentCard/CustomPaymentCard";
import CustomHeader from "../../component/customComponents/Header/CustomHeader";

export default class ShippingAddressScreen extends Component {
  render() {
    return (
      <Container>
        <CustomHeader title="Shipping Address" />

        <Content>
          <View style={{ height: 30 }} />
          <View style={styles.desTextStyle}>
            <Text style={{ fontWeight: "bold", fontSize: LARGE }}>
              Home Address
            </Text>
          </View>
          <View style={styles.addressMainViewStyle}>
            <View style={styles.addressViewStyle}>
              <Text>
                Maximum City, Andheri, Mumbai, Maharashtra, India Sunny Leone
                who was busy apartment hunting
              </Text>
            </View>
            <View style={styles.checkBoxViewStyle}>
              <CheckBox
                checked={true}
                color={GREEN}
                style={{ backgroundColor: GREEN }}
              />
            </View>
          </View>

          <View style={{ height: 30 }} />
          <View style={styles.desTextStyle}>
            <Text style={{ fontWeight: "bold", fontSize: LARGE }}>
              Work Address
            </Text>
          </View>
          <View style={styles.addressMainViewStyle}>
            <View style={styles.addressViewStyle}>
              <Text>
                Sorry We can’t violate our policies by showing or linking #$$##
                contents
              </Text>
            </View>
            <View style={styles.checkBoxViewStyle}>
              <CheckBox checked={false} color={GREEN} style={{}} />
            </View>
          </View>
        </Content>
        <Footer>
          <FooterTab style={{ backgroundColor: WHITE }}>
            {/* <Left style={{ marginLeft: "2.5%" }}>
              <Text style={{ color: GREY }}>Price</Text>
              <Text style={{ fontWeight: "bold", color: GREEN }}>$1500</Text>
            </Left> */}
            <Right>
              <Button style={styles.buttonStyle}>
                <Text>New </Text>
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
  desTextStyle: {
    height: 40,
    width: "90%",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "flex-start"
  },
  buttonStyle: {
    marginRight: "5%",
    backgroundColor: GREEN,
    width: 130,
    justifyContent: "center"
  },
  addressMainViewStyle: {
    width: "90%",
    alignSelf: "center",
    flexDirection: "row"
  },
  addressViewStyle: {
    flex: 3,
    justifyContent: "flex-start",
    alignItems: "flex-start"
  },
  checkBoxViewStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
