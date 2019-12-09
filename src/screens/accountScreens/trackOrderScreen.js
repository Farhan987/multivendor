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
import { GREEN, WHITE, BLACK, GREY } from "../../theme/colors";
import CustomHeader from "../../component/customComponents/Header/CustomHeader";
import CustomTrackOrderCard from "../../component/customComponents/TrackOrder/CustomTrackOrderCard";
import CustomFoooter from "../../component/customComponents/Footer/CustomFooter";

export default class TrackOrderScreen extends Component {
  static navigationOptions = () => {
    return {
      header: null
    };
  };
  render() {
    return (
      <Container>
        <CustomHeader title="Track Order" />
        <Content>
          <CustomTrackOrderCard navigation={this.props.navigation} />
          <CustomTrackOrderCard navigation={this.props.navigation} />
          <CustomTrackOrderCard navigation={this.props.navigation} />
        </Content>
        <CustomFoooter navigation={this.props.navigation} />
      </Container>
    );
  }
}

const styles = StyleSheet.create({});
