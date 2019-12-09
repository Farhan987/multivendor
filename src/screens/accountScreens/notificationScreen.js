import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import {
  Container,
  Header,
  Body,
  Content,
  Text,
  Button,
  FooterTab,
  Footer,
  Left,
  Icon,
  Right,
  Title,
  CheckBox
} from "native-base";
import { LARGE, MEDIUM } from "../../font/font";
import { GREEN, WHITE, BLACK, GREY } from "../../theme/colors";
import CustomNotification from "../../component/customComponents/notification/CustomNotification";
import CustomHeader from "../../component/customComponents/Header/CustomHeader";
import CustomFoooter from "../../component/customComponents/Footer/CustomFooter";

export default class NotificationScreen extends Component {
  static navigationOptions = () => {
    return {
      header: null
    };
  };

  render() {
    return (
      <Container>
        <CustomHeader title="Notification" marginLeft="6%" />
        <Content>
          <CustomNotification />
          <CustomNotification />
          <CustomNotification />
        </Content>
        <CustomFoooter navigation={this.props.navigation} />
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  desTextStyle: {
    height: 40,
    width: "90%",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "flex-start"
  },
  buttonStyle: {
    marginRight: "5%",
    backgroundColor: GREEN,
    width: 130,
    justifyContent: "center"
  },
  addressMainViewStyle: {
    width: "90%",
    alignSelf: "center",
    flexDirection: "row"
  },
  addressViewStyle: {
    flex: 3,
    justifyContent: "flex-start",
    alignItems: "flex-start"
  },
  checkBoxViewStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
