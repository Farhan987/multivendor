import React, { Component } from "react";
import { StyleSheet, View, ScrollView, Image } from "react-native";
import {
  Container,
  Header,
  Title,
  Content,
  Text,
  Item,
  Input,
  Button,
  Left,
  Icon,
  Right,
  Body,
  Footer,
  FooterTab
} from "native-base";
import { LARGE } from "../../font/font";
import { BLACK, WHITE, GREEN } from "../../theme/colors";
import CustomCategories from "../../component/customComponents/Categories/customCategory";

let image1 = require("../../images/s1.jpg");
let image2 = require("../../images/s2.jpg");
let image3 = require("../../images/b.jpg");
let image4 = require("../../images/h.jpg");
let image5 = require("../../images/g.jpg");
let image6 = require("../../images/k.jpg");

export default class CategoriesScreen extends Component {
  static navigationOptions = () => {
    return {
      header: null
    };
  };

  render() {
    return (
      <Container>
        <Header style={{ backgroundColor: WHITE }}>
          <Body style={{ justifyContent: "center", alignItems: "center" }}>
            <Title style={{ fontSize: LARGE, color: BLACK }}>Categories</Title>
          </Body>
        </Header>

        <Content>
          <CustomCategories
            navigation={this.props.navigation}
            leftSideCategoryImage={image1}
            leftSideCategoryName="Men"
            rightSideCategoryImage={image2}
            rightSideCategoryName="Women"
          />
          <CustomCategories
            navigation={this.props.navigation}
            leftSideCategoryImage={image3}
            leftSideCategoryName="Devices"
            rightSideCategoryImage={image4}
            rightSideCategoryName="Gadgets"
          />

          <CustomCategories
            navigation={this.props.navigation}
            leftSideCategoryImage={image5}
            leftSideCategoryName="Gaming"
            rightSideCategoryImage={image6}
            rightSideCategoryName="Kids"
          />
        </Content>
        <Footer>
          <FooterTab style={{ backgroundColor: WHITE }}>
            <Left />
            <Right>
              <Button
                style={styles.buttonStyle}
                onPress={() => this.props.navigation.goBack()}
              >
                <Icon
                  name="times"
                  type="FontAwesome"
                  style={{
                    fontSize: 25,
                    color: WHITE
                  }}
                />
              </Button>
            </Right>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF"
  },
  buttonStyle: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: GREEN,
    justifyContent: "center",
    alignItems: "center",
    marginRight: "5%"
  }
});
