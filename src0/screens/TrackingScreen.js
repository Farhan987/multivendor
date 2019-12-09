import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { Content, Text } from "native-base";

import Headers from "../components/Header/CustomHeader";
import CustomFooter from "../components/CustomComponents/customFooter";
import { GREEN } from "../theme/colors";
import TrackingCardComponent from "../components/TrackingCardComponent/TrackingCardComponent";
export default class TrackingCard extends Component {
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
