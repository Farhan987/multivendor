import React, { Component } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import {
  Container,
  Header,
  Title,
  Content,
  Text,
  Item,
  Input,
  Button
} from "native-base";
import { LARGE } from "../../font/font";
import { BLACK, WHITE, GREEN } from "../../theme/colors";
import { Rating, AirbnbRating } from "react-native-ratings";
import CustomDropdown from "../../component/customComponents/DropDown/customDropdown";

export default class ExploreCategoryItemReviewScreen extends Component {
  static navigationOptions = () => {
    return {
      header: null
    };
  };
  render() {
    return (
      <Container>
        <Header style={{ backgroundColor: WHITE, flexDirection: "row" }}>
          <View style={styles.dropDownViewStyle}>
            <CustomDropdown />
          </View>
          <View style={styles.headerTitleViewStyle}>
            <Title style={styles.headerTitleTextStyle}>Write Review</Title>
          </View>
        </Header>

        <Content>
          <View style={styles.itemNameTexViewStyle}>
            <Text style={{ fontSize: LARGE, fontWeight: "bold" }}>
              Nike Dry-FIT Long
            </Text>
          </View>

          <View style={styles.ratingStarsViewStyle}>
            <AirbnbRating />
          </View>

          <View style={styles.textFieldViewStyle}>
            <Item>
              <Input placeholder="Tell us your experience" />
            </Item>
          </View>

          <View style={styles.buttonViewStyle}>
            <Button style={styles.buttonStyle}>
              <Text> Send </Text>
            </Button>
          </View>
          <View style={{ height: 20 }} />
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF"
  },
  dropDownViewStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  headerTitleViewStyle: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center"
  },
  headerTitleTextStyle: {
    fontSize: LARGE,
    color: BLACK,
    alignSelf: "flex-start",
    marginLeft: "9%"
  },
  itemNameTexViewStyle: {
    height: 100,
    justifyContent: "center",
    alignItems: "flex-start",
    width: "95%",
    alignSelf: "center"
  },
  ratingStarsViewStyle: {
    height: 130,
    justifyContent: "flex-start",
    alignItems: "center",
    width: "95%",
    alignSelf: "center"
  },
  textFieldViewStyle: {
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    width: "95%",
    alignSelf: "center"
  },
  buttonViewStyle: {
    height: 80,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    width: "95%",
    alignSelf: "center"
  },
  buttonStyle: {
    marginRight: "3%",
    backgroundColor: GREEN,
    width: 130,
    justifyContent: "center"
  }
});
