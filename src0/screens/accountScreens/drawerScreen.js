import React, { Component } from "react";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import {
  Container,
  Content,
  Text,
  Button,
  FooterTab,
  Footer,
  Icon
} from "native-base";
import { LARGE, MEDIUM, SMALL } from "../../font/font";
import { GREEN, WHITE, BLACK, GREY } from "../../theme/colors";
import CustomHeader from "../../component/customComponents/Header/CustomHeader";
import CustomTrackOrderCard from "../../component/customComponents/TrackOrder/CustomTrackOrderCard";
import CustomDrawerBar from "../../component/customComponents/DrawerBar/CustomDrawerBar";

export default class DrawerScreen extends Component {
  render() {
    return (
      <Container>
        <Content>
          <View style={styles.upperMainViewStyle}>
            <View style={styles.viewStyle}>
              <Image
                style={{ height: 130, width: 130, borderRadius: 100 }}
                source={require("../../images/profile.jpg")}
              />
            </View>
            <View style={styles.viewStyle}>
              <Text style={{ fontSize: LARGE }}>NetFlix</Text>
              <Text style={{ fontSize: SMALL, paddingTop: 2 }}>
                abc@gmail.com
              </Text>
            </View>
          </View>

          <CustomDrawerBar text="Edit Profile" />
          <CustomDrawerBar text="Shipping Address" iconName="map-marker" />
          <CustomDrawerBar text=" Wishlist" iconName="heart-o" />
          <CustomDrawerBar text=" OrderHistory" iconName="clock-o" />
          <CustomDrawerBar text=" Track Order" iconName="road" />
          <CustomDrawerBar text="Bank Accounts" iconName="cc-visa" />
          <CustomDrawerBar text=" Notification" iconName="bell-o" />
          <CustomDrawerBar text=" Logout" iconName="sign-out" />
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

const styles = StyleSheet.create({
  upperMainViewStyle: {
    height: 150,
    width: "90%",
    alignSelf: "center",
    flexDirection: "row"
  },
  viewStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start"
  }
});
