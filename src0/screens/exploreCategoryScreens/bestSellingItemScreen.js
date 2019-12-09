import React, { Component } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import {
  Container,
  Header,
  Title,
  Content,
  Footer,
  FooterTab,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Text,
  Item,
  Input
} from "native-base";
import { LARGE } from "../../font/font";
import { BLACK, WHITE, GREEN } from "../../theme/colors";
import CustomGadget from "../../component/customComponents/Gadgets/customGadget";

let image1 = require("../../images/watch.jpg");
let image2 = require("../../images/antena.jpg");
let image3 = require("../../images/watch2.jpg");
let image4 = require("../../images/antena2.jpg");

export default class ExploreBestSellingItemScreen extends Component {
  render() {
    return (
      <Container>
        <Header style={styles.headerStyle}>
          <View style={styles.headerIconStyle}>
            <Button transparent>
              <Icon
                name="bars"
                type="FontAwesome"
                style={{ fontSize: LARGE, color: BLACK }}
              />
            </Button>
          </View>
          <View style={styles.searchBarStyle}>
            <Item rounded style={{ height: 40 }}>
              <Icon name="ios-search" />
              <Input placeholder="Search" />
            </Item>
          </View>
          <View style={styles.headerIconStyle}>
            <Button transparent>
              <Icon
                name="filter"
                type="FontAwesome"
                style={{ fontSize: LARGE, color: BLACK }}
              />
            </Button>
          </View>
        </Header>
        <Content>
          <CustomGadget
            gadgetImageLeft={image1}
            gadgetImageRight={image2}
            LeftGadgetName="Leather Watch"
            RightGadgetName="Antena"
          />
          <CustomGadget
            gadgetImageLeft={image3}
            gadgetImageRight={image4}
            LeftGadgetName="Leather Watch"
            RightGadgetName="Antena"
          />
        </Content>
        <Footer>
          <FooterTab style={{ backgroundColor: WHITE }}>
            <Button vertical>
              <Text style={{ color: BLACK }}>Explore</Text>
            </Button>
            <Button>
              <Icon style={{ color: BLACK }} name="cart" />
            </Button>
            <Button>
              <Icon
                style={{ color: BLACK, fontSize: 20 }}
                name="user-o"
                type="FontAwesome"
              />
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  headerStyle: { backgroundColor: WHITE, flexDirection: "row" },
  headerIconStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  searchBarStyle: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center"
  }
});
