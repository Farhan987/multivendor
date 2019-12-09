import React, { Component } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { Button, Text, Content, Icon } from "native-base";

import Headers from "../../components/Header/CustomHeader";
import Stepper from "../../components/Stepper/Stepper";
import { GREEN } from "../../theme/colors";
import Product from "../../components/productDetailComponent";
import CustomFooter from "../../components/CustomComponents/customFooter";
export default class PaymentScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "white" }}>
        <Headers title={"CheckOut"} />
        <Content>
          <View style={{ height: 20 }}></View>
          <Stepper currentPosition={2} />
          <ScrollView
            horizontal={true}
            style={{ height: 150, flexDirection: "row", paddingLeft: 20 }}
          >
            <Product gadgetImageLeft={require("../../images/flower.jpeg")} />
            <Product gadgetImageLeft={require("../../images/flower.jpeg")} />
            <Product gadgetImageLeft={require("../../images/flower.jpeg")} />
            <Product gadgetImageLeft={require("../../images/flower.jpeg")} />
            <Product gadgetImageLeft={require("../../images/flower.jpeg")} />
            <Product gadgetImageLeft={require("../../images/flower.jpeg")} />
          </ScrollView>
          <View
            style={{ height: 1, borderWidth: 1, borderColor: "#EAECEF" }}
          ></View>
          <View style={{ height: 10 }}></View>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              width: "90%",
              alignSelf: "center"
            }}
          >
            <View style={{ flex: 3 }}>
              <Text style={{ fontSize: 14, fontWeight: "500" }}>
                Shipping Address
              </Text>
              <View style={{ height: 7 }}></View>
              <Text style={{ fontSize: 11 }}>
                21, Alex Davidson Avenue, Opposite Omegatron, Vicent Smith
                Quarters, Victoria Island, Lagos, Nigeria
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                alignSelf: "center",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <Icon
                style={{ fontSize: 20, color: GREEN }}
                name="check"
                type="FontAwesome"
              ></Icon>
            </View>
          </View>
          <View style={{ height: 28 }}></View>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              width: "90%",
              alignSelf: "center"
            }}
          >
            <View style={{ flex: 3 }}>
              <Text style={{ fontSize: 14, fontWeight: "500" }}>Payment</Text>
              <View style={{ height: 7 }}></View>
              <Text style={{ fontSize: 11 }}>
                21, Alex Davidson Avenue, Opposite Omegatron, Vicent Smith
                Quarters, Victoria Island, Lagos, Nigeria
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                alignSelf: "center",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <Icon
                style={{ fontSize: 20, color: GREEN }}
                name="check"
                type="FontAwesome"
              ></Icon>
            </View>
          </View>
        </Content>
        <CustomFooter Text1="Back" Text2="Pay" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  ButtonsView: {
    flexDirection: "row",
    width: "90%",
    alignSelf: "center"
  },
  ButtonInnerView: {
    flex: 1,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center"
  },
  Button: {
    width: "60%",
    height: 40,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#00C569"
  },
  textFeildView: {
    height: 70,
    flexDirection: "row",
    width: "90%",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center"
  }
});
