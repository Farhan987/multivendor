import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { Content } from "native-base";
import CustomTextInput from "../../component/customComponents/TextInput/CuustomTextInput";
import Stepper from "../../component/Stepper/Stepper";
import Headers from "../../component/Header/CustomHeader";
import CustomFooter from "../../component/customComponents/customFooter";
export default class CheckOutScreen extends Component {
  static navigationOptions = () => {
    return {
      header: null
    };
  };
  render() {
    return (
      <React.Fragment>
        <Headers
          title={"CheckOut"}
          navigation={this.props.navigation}
          onPress={() =>
            this.props.navigation.navigate("itemDetailScrollScreen")
          }
        />
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
        <CustomFooter
          Text1="Back"
          Text2="Next"
          onPress1={() => this.props.navigation.navigate("")}
          onPress2={() => this.props.navigation.navigate("PaymentScreen")}
          navigation={this.props.navigation}
        />
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({});
