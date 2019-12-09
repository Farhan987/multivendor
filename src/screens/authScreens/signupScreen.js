import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import {
  Container,
  Content,
  Card,
  Item,
  Label,
  Input,
  Button,
  Icon
} from "native-base";
import { LARGE, MEDIUM } from "../../font/font";
import { GREEN, WHITE, BLACK, GREY } from "../../theme/colors";

export default class SignupScreen extends Component {
  render() {
    return (
      <Container>
        {/* <CustomHeader /> */}
        <Content>
          <View style={{ height: 30 }} />
          <Card style={styles.cardViewStyle}>
            <View style={styles.welcomeMainViewStyle}>
              <View style={styles.welcomeLeftViewStyle}>
                <Text
                  style={{ fontSize: 22, color: BLACK, fontWeight: "bold" }}
                >
                  Sign Up
                </Text>
              </View>

              <View style={styles.welcomeRightViewStyle}>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate("LoginScreen")}
                >
                  <Text style={{ color: GREEN }}>Sign In</Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* inputFields */}

            <View style={{ height: 5 }} />
            <View style={styles.textInputViewStyle}>
              <Item floatingLabel>
                <Label>Name</Label>
                <Input keyboardType="default" />
              </Item>
            </View>
            <View style={{ height: 10 }} />
            <View style={styles.textInputViewStyle}>
              <Item floatingLabel>
                <Label>Email</Label>
                <Input keyboardType="email-address" />
              </Item>
            </View>
            <View style={{ height: 10 }} />
            <View style={styles.textInputViewStyle}>
              <Item floatingLabel>
                <Label>Phone Number</Label>
                <Input keyboardType="phone-pad" />
              </Item>
            </View>
            <View style={{ height: 10 }} />
            <View style={styles.textInputViewStyle}>
              <Item floatingLabel>
                <Label>Password</Label>
                <Input secureTextEntry />
              </Item>
            </View>
            <View style={{ height: 10 }} />
            <View style={styles.textInputViewStyle}>
              <Item floatingLabel>
                <Label>Confirm Password</Label>
                <Input secureTextEntry />
              </Item>
            </View>

            {/* button */}
            <View style={{ height: 30 }} />
            <View
              style={[
                styles.textInputViewStyle,
                { justifyContent: "center", alignItems: "center" }
              ]}
            >
              <Button
                success
                style={styles.buttonStyle}
                onPress={() =>
                  this.props.navigation.navigate("CodeVerification")
                }
              >
                <Text style={{ color: WHITE }}> Sign Up</Text>
              </Button>
            </View>
          </Card>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  cardViewStyle: {
    height: 450,
    width: "90%",
    alignSelf: "center"
  },
  welcomeMainViewStyle: {
    height: 60,
    flexDirection: "row",
    paddingLeft: "5%",
    paddingRight: "5%"
  },
  welcomeLeftViewStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start"
  },
  welcomeRightViewStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-end"
  },
  textInputViewStyle: {
    height: 50,
    width: "90%",
    alignSelf: "center"
  },

  buttonStyle: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: GREEN
  }
});
