import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView
} from "react-native";
import { Card, Item, Label, Input, Button, Icon } from "native-base";
import { BLACK, GREY, GREEN, WHITE } from "../../theme/colors";
import { LARGE } from "../../font/font";

export default class LoginScreen extends Component {
  render() {
    return (
      <React.Fragment>
        <ScrollView>
          <View style={{ height: 60 }} />
          <Card style={styles.cardViewStyle}>
            <View style={styles.welcomeMainViewStyle}>
              <View style={styles.welcomeLeftViewStyle}>
                <Text
                  style={{ fontSize: 22, color: BLACK, fontWeight: "bold" }}
                >
                  Login
                </Text>
                <Text style={{ color: GREY }}>signin to continue</Text>
              </View>

              <View style={styles.welcomeRightViewStyle}>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate("SignUpScreen")}
                >
                  <Text style={{ color: GREEN }}>Sign Up</Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* inputFields */}

            <View style={{ height: 5 }} />
            <View style={styles.textInputViewStyle}>
              <Item floatingLabel>
                <Label>Email</Label>
                <Input keyboardType="email-address" />
              </Item>
            </View>
            <View style={{ height: 10 }} />
            <View style={styles.textInputViewStyle}>
              <Item floatingLabel>
                <Label>Password</Label>
                <Input secureTextEntry />
              </Item>
            </View>
            <View style={styles.forgetTextViewStyle}>
              <TouchableOpacity>
                <Text>Forget Password?</Text>
              </TouchableOpacity>
            </View>

            {/* button */}
            <View style={{ height: 20 }} />
            <View
              style={[
                styles.textInputViewStyle,
                { justifyContent: "center", alignItems: "center" }
              ]}
            >
              <Button
                success
                style={styles.buttonStyle}
                onPress={() => this.props.navigation.navigate("MyDrawerScreen")}
              >
                <Text style={{ color: WHITE }}> Sign In</Text>
              </Button>
            </View>
          </Card>

          <View style={{ height: 5 }} />
          <View style={styles.orTextStyle}>
            <Text style={{ fontSize: LARGE, fontWeight: "bold" }}>OR</Text>
          </View>
          <View style={{ height: 10 }} />
          <View
            style={[
              styles.textInputViewStyle,
              { justifyContent: "center", alignItems: "center" }
            ]}
          >
            <Button iconLeft transparent style={styles.buttonStyle1}>
              <View style={{ flex: 1 }}>
                <Icon
                  name="facebook-official"
                  type="FontAwesome"
                  style={{ color: "#475993" }}
                />
              </View>
              <View style={{ flex: 2.5 }}>
                <Text style={{ color: BLACK }}>Sign In with Facebook</Text>
              </View>
            </Button>
          </View>
          <View style={{ height: 10 }} />
          <View
            style={[
              styles.textInputViewStyle,
              { justifyContent: "center", alignItems: "center" }
            ]}
          >
            <Button iconLeft transparent style={styles.buttonStyle1}>
              <View style={{ flex: 1 }}>
                <Icon
                  name="google"
                  type="FontAwesome"
                  style={{ color: "#FF3D00" }}
                />
              </View>
              <View style={{ flex: 2.5 }}>
                <Text style={{ color: BLACK }}>Sign In with Google</Text>
              </View>
            </Button>
          </View>
          <View style={{ height: 10 }} />
        </ScrollView>
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  cardViewStyle: {
    height: 300,
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
  forgetTextViewStyle: {
    height: 40,
    width: "90%",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "flex-end"
  },
  buttonStyle: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: GREEN
  },
  orTextStyle: {
    height: 40,
    alignItems: "center",
    justifyContent: "center"
  },
  buttonStyle1: {
    width: "100%",
    height: 50,
    flexDirection: "row",
    borderColor: GREY,
    borderWidth: 1
  }
});
