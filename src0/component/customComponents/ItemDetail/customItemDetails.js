import React, { Component } from "react";
import { StyleSheet, View, ScrollView, ImageBackground } from "react-native";
import {
  Container,
  Content,
  Text,
  Button,
  FooterTab,
  Footer,
  Left,
  Icon,
  Right
} from "native-base";
import { LARGE, SMALL } from "../../../font/font";
import { BLACK, WHITE, GREEN, GREY } from "../../../theme/colors";
import { AirbnbRating } from "react-native-ratings";

export default class CustomItemDetail extends Component {
  render() {
    return (
      <React.Fragment>
        <ImageBackground
          style={{
            height: this.props.imageHeight ? this.props.imageHeight : 400
          }}
          source={require("../../../images/shirt.jpg")}
        >
          <View style={styles.topIconsViewStyle}>
            <Left>
              <Button transparent>
                <Icon
                  name="chevron-left"
                  type="FontAwesome"
                  style={{
                    fontSize: LARGE,
                    color: BLACK
                  }}
                />
              </Button>
            </Left>
            <Right style={{ marginRight: "3%" }}>
              <AirbnbRating showRating={false} size={20} count={1} />
            </Right>
          </View>
        </ImageBackground>

        <View style={styles.itemDesTextViewStyle}>
          <Text style={{ fontSize: LARGE, fontWeight: "bold" }}>
            Nike Dri-FIT full sleeves
          </Text>
        </View>

        <View style={styles.sizeColorMainViewStyle}>
          <View style={styles.sizeColorOuterViewStyle}>
            <View style={styles.sizeColorInnerViewStyle}>
              <View style={styles.leftTextViewStyle}>
                <Text>Size</Text>
              </View>
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <Text style={{ fontWeight: "bold" }}>XL</Text>
              </View>
            </View>
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "flex-start"
            }}
          >
            <View style={styles.sizeColorInnerViewStyle}>
              <View style={styles.sizeColorOuterViewStyle}>
                <Text>Color</Text>
              </View>
              <View style={styles.leftTextViewStyle}>
                <View style={styles.colorViewStyle}></View>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.itemDesTextViewStyle}>
          <Text style={{ fontSize: LARGE, fontWeight: "bold" }}>Details</Text>
        </View>
        <View style={styles.detailDesTextStyle}>
          <Text style={{ fontSize: SMALL }}>
            From businesses to basketball teams to bands to bachelorette
            parties, an awesome shirt can make a huge statement. Whatever
            message your t-shirt might be sending, you’ll need a design style to
            match if you want to be heard. To get you started, we’ve rounded up
            50 t-shirt designs that will get you noticed.
          </Text>
        </View>
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF"
  },
  topIconsViewStyle: {
    height: 100,
    flexDirection: "row"
  },
  itemDesTextViewStyle: {
    height: 60,
    width: "90%",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "flex-start"
  },
  sizeColorMainViewStyle: {
    height: 60,
    width: "95%",
    alignSelf: "center",
    flexDirection: "row"
  },
  sizeColorOuterViewStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  sizeColorInnerViewStyle: {
    height: "80%",
    width: "90%",
    backgroundColor: "#EAEAEA",
    borderRadius: 15,
    flexDirection: "row"
  },
  leftTextViewStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  colorViewStyle: {
    height: 25,
    width: 25,
    borderRadius: 10,
    backgroundColor: "purple"
  },
  detailDesTextStyle: {
    height: 120,
    width: "90%",
    alignSelf: "center",
    justifyContent: "flex-start",
    alignItems: "flex-start"
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
