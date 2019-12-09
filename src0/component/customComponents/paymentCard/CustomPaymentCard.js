import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Icon } from "native-base";
import { WHITE } from "../../../theme/colors";
import { LARGE } from "../../../font/font";

export default class CustomPaymentCard extends Component {
  render() {
    return (
      <React.Fragment>
        <View style={{ height: 20 }} />
        <View
          style={[
            styles.mainViewStyle,
            { backgroundColor: this.props.backgroundColor }
          ]}
        >
          <View style={styles.accountNameViewStyle}>
            <Icon
              style={{
                color: this.props.paymentMethodIconColor,
                fontSize: 20,
                marginRight: "8%"
              }}
              name={
                this.props.paymentMethod
                  ? this.props.paymentMethod
                  : "cc-mastercard"
              }
              type="FontAwesome"
            />
          </View>
          <View style={{ flex: 1, flexDirection: "row" }}>
            <View
              style={[
                styles.numbersViewStyle,
                { alignItems: "flex-start", marginLeft: "8%" }
              ]}
            >
              <Text style={styles.numbersTextStyle}>3344</Text>
            </View>
            <View style={styles.numbersViewStyle}>
              <Text style={styles.numbersTextStyle}>5477</Text>
            </View>
            <View style={{ width: 11 }} />
            <View style={styles.numbersViewStyle}>
              <Text style={styles.numbersTextStyle}>8388</Text>
            </View>
            <View
              style={[
                styles.numbersViewStyle,
                { alignItems: "flex-end", marginRight: "8%" }
              ]}
            >
              <Text style={styles.numbersTextStyle}>3732</Text>
            </View>
          </View>
          <View style={{ flex: 1.5, flexDirection: "row" }}>
            <View style={styles.textsViewStyle}>
              <Text style={{ color: WHITE }}>Card Holder</Text>
              <Text style={{ color: WHITE, fontSize: LARGE, paddingTop: 2 }}>
                David Spade
              </Text>
            </View>
            <View style={styles.datesViewStyle}>
              <Text style={{ color: WHITE, marginRight: 17 }}>Expr</Text>
              <Text style={{ color: WHITE, fontSize: LARGE, paddingTop: 2 }}>
                09-18
              </Text>
            </View>
          </View>
        </View>
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  mainViewStyle: {
    height: 170,
    width: "95%",
    alignSelf: "center",
    borderRadius: 5
  },
  numbersViewStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  numbersTextStyle: { color: WHITE, fontSize: LARGE, fontWeight: "bold" },
  accountNameViewStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-end"
  },
  textsViewStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
    marginLeft: "8%"
  },
  datesViewStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-end",
    marginRight: "8%"
  }
});
