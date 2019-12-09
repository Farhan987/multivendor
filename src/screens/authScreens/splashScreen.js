import React, { Component } from "react";
import { View, StyleSheet, StatusBar, Text, AsyncStorage } from "react-native";

import { BLACK } from "../../theme/colors";

export default class SplashScreen extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.navigate("LoginScreen");
    }, 3000);
  }
  render() {
    return (
      <React.Fragment>
        <StatusBar backgroundColor="blue" barStyle="light-content" />
        <View style={styles.Container}>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
              backgroundColor: "#343a40"
            }}
          >
            <Text
              style={{
                alignSelf: "center",
                fontSize: 30,
                fontWeight: "bold",
                color: "#fff353"
              }}
            >
              MultiVendor
            </Text>
            <Text
              style={{
                alignSelf: "center",
                fontSize: 30,
                fontWeight: "bold",
                color: BLACK
              }}
            >
              Application
            </Text>
            {/* <Image
						resizeMode="stretch"
						source={require('../../Images/slide1.jpg')}
						style={{ alignSelf: 'center', height: 200, width: '90%' }}
					/> */}
          </View>
        </View>
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black"
  }
});
