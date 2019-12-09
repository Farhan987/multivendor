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
import CustomFoooter from "../../component/customComponents/Footer/CustomFooter";

export default class BankAccounts extends Component {
  render() {
    return (
      <Container>
        <CustomHeader title="Bank Accounts" />

        <Content>
          <CustomPaymentCard
            backgroundColor="#F8892F"
            paymentMethodIconColor="red"
          />
          <CustomPaymentCard
            backgroundColor="#0DD672"
            paymentMethod="cc-visa"
            paymentMethodIconColor={WHITE}
          />
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
        <CustomFoooter navigation={this.props.navigation} />
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
    marginRight: "5%",
    backgroundColor: GREEN,
    width: 130,
    justifyContent: "center"
  }
});
