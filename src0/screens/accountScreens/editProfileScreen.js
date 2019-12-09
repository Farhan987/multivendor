import React, { Component } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  Switch,
  StatusBar
} from "react-native";
import { Input, Item, Icon, Text, Button, Label } from "native-base";
import { GREEN, GREY, WHITE } from "../../theme/colors";
import ImagePicker from "react-native-image-crop-picker";

class EditProfileScreen extends Component {
  constructor() {
    super();
    this.state = {
      image: null,
      images: null
    };
  }

  SelectImage = () => {
    ImagePicker.openPicker({
      width: 200,
      height: 100,
      cropping: true
    }).then(image => {
      console.log(image);
      let imgSource = {
        uri: image.path,
        type: image.mime,
        name: image.path.replace(/^.*[\\\/]/, "")
      };

      this.setState({ image: imgSource });
    });
  };

  render() {
    return (
      <View style={styles.container}>
        {/* <StatusBar backgroundColor="#383838" barStyle="light-content" /> */}

        {/* profileImage */}
        <View style={styles.imageViewStyle}>
          <View
            style={{
              width: "40%",
              marginTop: 100
            }}
          >
            <Image
              style={styles.logoStyle}
              source={
                this.state.image
                  ? this.state.image
                  : require("../../images/profile.jpg")
              }
            />
            <TouchableOpacity
              onPress={() => this.SelectImage()}
              style={{
                height: 50,
                width: 50,
                borderRadius: 50,
                backgroundColor: GREEN,
                alignSelf: "center",
                marginLeft: 80,
                marginTop: -60,

                justifyContent: "center"
              }}
            >
              <Text
                style={{ color: "white", fontSize: 40, textAlign: "center" }}
              >
                +
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ height: 80 }} />
        <View style={styles.textInputViewStyle}>
          <Item floatingLabel>
            <Label>Name</Label>
            <Input />
          </Item>
        </View>
        <View style={{ height: 10 }} />
        <View style={styles.textInputViewStyle}>
          <Item floatingLabel>
            <Label>Email</Label>
            <Input keyboardType="email-address" />
          </Item>
        </View>
        <View style={{ height: 10 }} />
        <View style={styles.textInputViewStyle}>
          <Item floatingLabel>
            <Label>Phone Number</Label>
            <Input keyboardType="phone-pad" />
          </Item>
        </View>
        <View style={{ height: 50 }} />
        <View
          style={[
            styles.textInputViewStyle,
            { justifyContent: "center", alignItems: "center" }
          ]}
        >
          <Button
            success
            style={{
              width: "100%",
              height: 50,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: GREEN
            }}
          >
            <Text> Save </Text>
          </Button>
        </View>
      </View>
    );
  }
}

export default EditProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: WHITE
  },
  imageViewStyle: {
    height: 160,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: GREEN
  },
  logoStyle: {
    height: 120,
    width: 120,
    borderRadius: 100,
    alignSelf: "center"
  },
  inputViewStyle: {
    justifyContent: "center",
    alignItems: "center"
  },
  lastInputViewStyle: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20
  },
  itemStyle: {
    width: "90%",
    borderColor: "#6F6F6F",
    backgroundColor: "#5E6164",
    borderWidth: 2,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  inputStyle: {
    color: "white",
    backgroundColor: "#5E6164",
    borderRadius: 10
  },
  buttonViewStyle: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 45
  },
  buttonStyle: {
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    width: "90%",
    height: 50,
    borderRadius: 5,
    backgroundColor: "red"
  },
  textInputViewStyle: {
    height: 50,
    width: "85%",
    alignSelf: "center"
  }
});
