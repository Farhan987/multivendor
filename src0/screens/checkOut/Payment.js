import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Button, Icon, Content } from "native-base";
import CustomTextInput from "../../components/CustomComponents/TextInput/CuustomTextInput";
import Stepper from "../../components/Stepper/Stepper";
import { GREEN } from "../../theme/colors";
import Headers from "../../components/Header/CustomHeader";
import CustomFooter from "../../components/CustomComponents/customFooter";
export default class PaymentScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "white" }}>
        <Headers title={"CheckOut"} />
        <Content>
          <View style={{ height: 20 }}></View>
          <Stepper currentPosition={1} />
          <View style={{ height: 20 }}></View>
          <View style={styles.ButtonsView}>
            <View style={styles.ButtonInnerView}>
              <Button style={styles.Button}>
                <Icon name="paypal" type="FontAwesome" />
              </Button>
            </View>

            <View style={styles.ButtonInnerView}>
              <Button style={styles.Button}>
                <Icon name="cc-visa" type="FontAwesome" />
              </Button>
            </View>
          </View>
          <View style={{ height: 10 }}></View>

          <CustomTextInput
            FeildTitle="Card Number"
            placeholder="Enter Card Number"
          />
          <View style={{ height: 10 }}></View>
          <View style={styles.textFeildView}>
            <View style={{ flex: 1 }}>
              <CustomTextInput FeildTitle="Expiry Date" placeholder="09/18" />
            </View>
            <View style={{ flex: 1 }}>
              <CustomTextInput FeildTitle="CCV" placeholder="xxx" />
            </View>
          </View>
          <View style={{ height: 20 }}></View>
          <View
            style={{
              height: 30,
              flexDirection: "row",
              witdh: "90%",
              alignItems: "center"
              // justifyContent: "center"
              // alignSelf: "center"
            }}
          >
            <View style={{ width: 30 }}></View>
            <Icon
              name="check"
              type="FontAwesome"
              style={{ fontSize: 20, color: GREEN }}
            />
            <View style={{ width: 30 }}></View>
            <Text>Save this card details</Text>
          </View>
        </Content>
        <CustomFooter Text1="Back" Text2="Next" />
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
