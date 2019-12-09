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
import CustomHeader from "../../component/customComponents/Header/CustomHeader";
import CustomTrackOrderCard from "../../component/customComponents/TrackOrder/CustomTrackOrderCard";

export default class OrderHistoryScreen extends Component {
  render() {
    return (
      <Container>
        <CustomHeader title="Order History" />
        <Content>
          <CustomTrackOrderCard buttonColor={GREEN} buttonText="Delivered" />
          <CustomTrackOrderCard buttonColor={GREEN} buttonText="Delivered" />
          <CustomTrackOrderCard buttonColor={GREEN} buttonText="Delivered" />
        </Content>
        <Footer>
          <FooterTab style={{ backgroundColor: WHITE }}>
            <Button vertical>
              <Icon
                style={{ color: BLACK, fontSize: 20 }}
                name="home"
                type="FontAwesome"
              />
            </Button>
            <Button>
              <Icon style={{ color: BLACK }} name="cart" />
            </Button>
            <Button>
              <Text style={{ color: BLACK }}>Accounts</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

const styles = StyleSheet.create({});
