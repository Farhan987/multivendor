import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { Content, Text } from "native-base";

import Headers from "../../component/Header/CustomHeader";
import TrackingCardComponent from "../../component/TrackingCardComponent/TrackingCardComponent";
export default class TrackingCard extends Component {
  static navigationOptions = () => {
    return {
      header: null
    };
  };

  render() {
    return (
      <React.Fragment>
        <Headers title={"OD - 424923192 - N"} />
        <Content>
          <TrackingCardComponent />
          <TrackingCardComponent />
          <TrackingCardComponent />
          <TrackingCardComponent />
          <TrackingCardComponent />
        </Content>
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({});
