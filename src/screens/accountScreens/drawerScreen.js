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
import CustomDrawerBar from "../../component/customComponents/DrawerBar/CustomDrawerBar";

export default class DrawerScreen extends Component {
  static navigationOptions = () => {
    return {
      header: null
    };
  };

  render() {
    return (
      <Container>
        <View>
          <View style={styles.upperMainViewStyle}>
            <View style={styles.viewStyle}>
              <Image
                style={{ height: 120, width: 120, borderRadius: 100 }}
                source={require("../../images/profile.jpg")}
              />
            </View>
            <View style={[styles.viewStyle, { alignItems: "center" }]}>
              <Text style={{ fontSize: LARGE }}>NetFlix</Text>
              <Text style={{ fontSize: SMALL, paddingTop: 2 }}>
                abc@gmail.com
              </Text>
            </View>
          </View>

          <CustomDrawerBar
            text="Edit Profile"
            navigation={this.props.navigation}
            onPress={() => this.props.navigation.navigate("EditProfileScreen")}
          />
          <CustomDrawerBar
            text="Shipping Address"
            iconName="map-marker"
            navigation={this.props.navigation}
            onPress={() =>
              this.props.navigation.navigate("ShippingAdressScreen")
            }
          />
          <CustomDrawerBar
            text=" Wishlist"
            iconName="heart-o"
            navigation={this.props.navigation}
            onPress={() => this.props.navigation.navigate("WishListScreen")}
          />
          <CustomDrawerBar
            text=" OrderHistory"
            iconName="clock-o"
            navigation={this.props.navigation}
            onPress={() => this.props.navigation.navigate("OrderHistoryScreen")}
          />
          <CustomDrawerBar
            text=" Track Order"
            iconName="road"
            navigation={this.props.navigation}
            onPress={() => this.props.navigation.navigate("TrackOrderScreen")}
          />
          <CustomDrawerBar
            text="Bank Accounts"
            iconName="cc-visa"
            navigation={this.props.navigation}
            onPress={() => this.props.navigation.navigate("BanckAccountScreen")}
          />
          <CustomDrawerBar
            text=" Notification"
            iconName="bell-o"
            navigation={this.props.navigation}
            onPress={() => this.props.navigation.navigate("NotificationScreen")}
          />
          <CustomDrawerBar text=" Logout" iconName="sign-out" />
        </View>
        {/* <Footer>
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
        </Footer> */}
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  upperMainViewStyle: {
    height: 130,
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
