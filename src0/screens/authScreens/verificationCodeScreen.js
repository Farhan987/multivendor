import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from "react-native";
import { Card } from "native-base";
import { WHITE, BLACK, GREY } from "../../theme/colors";

class VerificationCodeScreen extends Component {
  render() {
    return (
      <React.Fragment>
        <View style={{ height: 50 }} />
        <Card style={styles.container}>
          <View
            style={{
              width: "90%",
              height: 70,
              alignItems: "flex-start",
              justifyContent: "center"
            }}
          >
            <Text style={{ fontSize: 22, color: BLACK, fontWeight: "bold" }}>
              Verification Code
            </Text>
            <Text style={{ color: GREY }}>
              A 4-digit pin has been sent to your number, please enter it below
              to continue.
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              width: "90%",
              height: 100,
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <View
              style={{
                height: 63,
                width: 63,
                backgroundColor: "#fff",
                elevation: 1,
                borderRadius: 23
              }}
            >
              <TextInput
                onChangeText={() => {
                  this.secondTextInput.focus();
                }}
                fontSize={30}
                maxLength={1}
                keyboardType={"numeric"}
                style={{
                  width: "100%",
                  height: "100%",
                  marginLeft: 23
                }}
              />
            </View>
            <View style={{ width: 14 }}></View>
            <View
              style={{
                height: 63,
                width: 63,
                backgroundColor: "#fff",
                elevation: 1,
                borderRadius: 23
              }}
            >
              <TextInput
                ref={input => {
                  this.secondTextInput = input;
                }}
                onChangeText={() => {
                  this.thirdTextInput.focus();
                }}
                fontSize={30}
                maxLength={1}
                keyboardType={"numeric"}
                style={{
                  width: "100%",
                  height: "100%",
                  marginLeft: 23
                }}
              />
            </View>
            <View style={{ width: 14 }}></View>
            <View
              style={{
                height: 63,
                width: 63,
                backgroundColor: "#fff",
                elevation: 1,
                borderRadius: 23
              }}
            >
              <TextInput
                ref={input => {
                  this.thirdTextInput = input;
                }}
                onChangeText={() => {
                  this.fourthTextInput.focus();
                }}
                fontSize={30}
                maxLength={1}
                keyboardType={"numeric"}
                style={{
                  width: "100%",
                  height: "100%",
                  marginLeft: 23
                }}
              />
            </View>
            <View style={{ width: 14 }}></View>
            <View
              style={{
                height: 63,
                width: 63,
                backgroundColor: "#fff",
                elevation: 1,
                borderRadius: 23
              }}
            >
              <TextInput
                fontSize={30}
                ref={input => {
                  this.fourthTextInput = input;
                }}
                maxLength={1}
                keyboardType={"numeric"}
                style={{
                  width: "100%",
                  height: "100%",
                  marginLeft: 23
                }}
              />
            </View>
          </View>

          <View
            style={{
              width: "90%",
              height: 100,
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "row"
            }}
          >
            <TouchableOpacity
              style={styles.buttonWhite}
              onPress={() => this.props.navigation.navigate("")}
            >
              <Text style={{ fontSize: 15 }}>Back</Text>
            </TouchableOpacity>

            <View style={{ width: 50 }}></View>
            <TouchableOpacity
              style={styles.buttonGreen}
              onPress={() => this.props.navigation.navigate("")}
            >
              <Text style={{ fontSize: 15, color: "#fff" }}>Next</Text>
            </TouchableOpacity>
          </View>
        </Card>
      </React.Fragment>
    );
  }
}
export default VerificationCodeScreen;

const styles = StyleSheet.create({
  container: {
    height: 256,
    width: "90%",
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: WHITE
  },
  buttonGreen: {
    width: 110,
    height: 45,
    backgroundColor: "#33c360",
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center"
  },
  buttonWhite: {
    width: 110,
    height: 45,
    backgroundColor: "#fff",
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#33c360",
    borderWidth: 1
  }
});
