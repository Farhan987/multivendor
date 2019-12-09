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
import CustomFoooter from "../../component/customComponents/Footer/CustomFooter";

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
        <CustomFoooter navigation={this.props.navigation} />
      </Container>
    );
  }
}

const styles = StyleSheet.create({});
