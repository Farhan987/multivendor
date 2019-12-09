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
import CustomWishlistCard from "../../component/customComponents/WishlistCard/CustomWishlistCard";
import CustomFoooter from "../../component/customComponents/Footer/CustomFooter";

export default class WishlistScreen extends Component {
  static navigationOptions = () => {
    return {
      header: null
    };
  };

  render() {
    return (
      <Container>
        <CustomHeader title="Wishlist" />
        <Content>
          <CustomWishlistCard buttonText="In Stock" buttonColor={GREEN} />
          <CustomWishlistCard buttonText="Out of Stock" />
          <CustomWishlistCard buttonText="In Stock" buttonColor={GREEN} />
        </Content>
        <CustomFoooter navigation={this.props.navigation} />
      </Container>
    );
  }
}

const styles = StyleSheet.create({});
