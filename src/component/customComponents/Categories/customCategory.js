import React, { Component } from "react";
import { StyleSheet, View, Image, TouchableOpacity, Text } from "react-native";

export default class CustomCategories extends Component {
  render() {
    return (
      <React.Fragment>
        <View style={{ height: 20 }} />
        <View style={styles.mainViewStyle}>
          <View style={{ flex: 1 }}>
            <TouchableOpacity
              style={styles.imageViewStyle}
              onPress={() => this.props.navigation.navigate("GadgetScreen")}
            >
              <Image
                source={this.props.leftSideCategoryImage}
                style={{ height: 60, width: 60, borderRadius: 30 }}
              />
            </TouchableOpacity>
            <View style={styles.textViewStyle}>
              <Text>{this.props.leftSideCategoryName}</Text>
            </View>
          </View>
          <View style={{ flex: 1 }}>
            <TouchableOpacity
              style={styles.imageViewStyle}
              onPress={() => this.props.navigation.navigate("GadgetScreen")}
            >
              <Image
                source={this.props.rightSideCategoryImage}
                style={{ height: 60, width: 60, borderRadius: 30 }}
              />
            </TouchableOpacity>
            <View style={styles.textViewStyle}>
              <Text>{this.props.rightSideCategoryName}</Text>
            </View>
          </View>
        </View>
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  mainViewStyle: {
    height: 90,
    flexDirection: "row"
  },
  imageViewStyle: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center"
  },
  textViewStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
