import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { Header, Button, Icon, Title, View } from "native-base";

export default class CustomHeader extends Component {
  render() {
    return (
      <Header style={{ backgroundColor: "white", flexDirection: "row" }}>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "flex-start"
          }}
        >
          <Button transparent>
            <Icon
              name="chevron-left"
              type="FontAwesome"
              style={{ fontSize: 18, color: "black", alignSelf: "center" }}
            />
          </Button>
        </View>
        <View
          style={{
            flex: 3,
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Title style={styles.headerTitleStyle}>{this.props.title}</Title>
        </View>
        <View style={{ flex: 1 }} />
      </Header>
    );
  }
}

const styles = StyleSheet.create({
  headerTitleStyle: {
    fontSize: 18,
    color: "black"
  }
});
