import React, { Component } from "react";
import { StyleSheet, View, Image } from "react-native";
import {
  Container,
  Header,
  Content,
  Footer,
  FooterTab,
  Button,
  Icon,
  Text,
  Item,
  Input
} from "native-base";
import { LARGE, MEDIUM } from "../../font/font";
import { BLACK, WHITE } from "../../theme/colors";
import CustomGadget from "../../component/customComponents/Gadgets/customGadget";

let image1 = require("../../images/watch.jpg");
let image2 = require("../../images/antena.jpg");

export default class ExploreRecommendedItemScreen extends Component {
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
          <View style={{ height: 20 }} />
          <View style={styles.imageViewStyle}>
            <Image
              resizeMode="stretch"
              source={require("../../images/mobile.jpg")}
              style={{ height: "100%", width: "100%" }}
            />
          </View>
          <View style={styles.textMainViewStyle}>
            <View style={styles.recTextViewStyle}>
              <Text style={{ fontSize: LARGE, fontWeight: "bold" }}>
                Recommended
              </Text>
            </View>
            <View style={styles.seeAllTextViewStyle}>
              <Text style={{ fontSize: MEDIUM }}>See all</Text>
            </View>
          </View>

          <CustomGadget
            gadgetImageLeft={image1}
            gadgetImageRight={image2}
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
  },
  imageViewStyle: {
    height: 200,
    width: "95%",
    alignSelf: "center"
  },
  textMainViewStyle: {
    height: 40,
    width: "95%",
    alignSelf: "center",
    flexDirection: "row"
  },
  recTextViewStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start"
  },
  seeAllTextViewStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-end"
  }
});
