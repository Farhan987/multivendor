import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { Container, Text, Button, FooterTab, Footer, Icon } from "native-base";
import { GREEN, WHITE, BLACK, GREY } from "../../../theme/colors";

export default class CustomFoooter extends Component {
  render() {
    return (
      <Footer>
        <FooterTab style={{ backgroundColor: WHITE }}>
          <Button
            vertical
            onPress={() =>
              this.props.navigation.navigate("BestBillingItemScreen")
            }
          >
            <Icon
              style={{ color: BLACK, fontSize: 20 }}
              name="home"
              type="FontAwesome"
            />
          </Button>
          <Button>
            <Icon
              style={{ color: BLACK }}
              name="cart"
              onPress={() =>
                this.props.navigation.navigate("CartSwipableScreen")
              }
            />
          </Button>
          <Button>
            <Text style={{ color: BLACK }}>Accounts</Text>
          </Button>
        </FooterTab>
      </Footer>
    );
  }
}

const styles = StyleSheet.create({});
