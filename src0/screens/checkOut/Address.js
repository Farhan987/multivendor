import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { Content } from "native-base";
import CustomTextInput from "../../components/CustomComponents/TextInput/CuustomTextInput";
import Stepper from "../../components/Stepper/Stepper";
import Headers from "../../components/Header/CustomHeader";
import CustomFooter from "../../components/CustomComponents/customFooter";
export default class CheckOutScreen extends Component {
  render() {
    return (
      <React.Fragment>
        <Headers title={"CheckOut"} />
        <Content>
          <View style={{ height: 20 }}></View>
          <Stepper currentPosition={0} />
          <View style={{ height: 20 }}></View>
          <View style={{ flex: 1, backgroundColor: "white" }}>
            <CustomTextInput
              FeildTitle="Permenant Address"
              placeholder="Permenant Address"
            />
            <View style={{ height: 10 }}></View>
            <CustomTextInput
              FeildTitle="Delivery Address"
              placeholder="Delivery Address"
            />
            <View style={{ height: 10 }}></View>
            <CustomTextInput FeildTitle="City" placeholder="Enter City" />
            <View style={{ height: 10 }}></View>
            <CustomTextInput FeildTitle="State" placeholder="Enter State" />
          </View>
        </Content>
        <CustomFooter Text1="Back" Text2="Next" />
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({});
