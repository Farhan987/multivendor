import StepIndicator from "react-native-step-indicator";
import React, { Component } from "react";
const labels = ["Address", "Payment", "Summary "];
const customStyles = {
  stepIndicatorSize: 20,
  currentStepIndicatorSize: 25,
  separatorStrokeWidth: 2,
  currentStepStrokeWidth: 2,
  stepStrokeCurrentColor: "#00C569",
  stepStrokeWidth: 2,
  stepStrokeFinishedColor: "#00C569",
  stepStrokeUnFinishedColor: "#00C569",
  separatorFinishedColor: "#00C569",
  separatorUnFinishedColor: "#00C569",
  stepIndicatorFinishedColor: "#00C569",
  stepIndicatorUnFinishedColor: "#ffffff",
  stepIndicatorCurrentColor: "#00C569",
  stepIndicatorLabelFontSize: 13,
  currentStepIndicatorLabelFontSize: 13,
  stepIndicatorLabelCurrentColor: "#ffffff",
  stepIndicatorLabelFinishedColor: "#ffffff",
  stepIndicatorLabelUnFinishedColor: "#00C569",
  labelColor: "#00C569",
  labelSize: 11,
  currentStepLabelColor: "#00C569"
};

export default class CheckOutScreen extends Component {
  state = {
    currentPosition: this.props.currentPosition
  };

  onPageChange(position) {
    this.setState({ currentPosition: position });
  }
  render() {
    return (
      <StepIndicator
        direction={this.props.direction ? this.props.direction : "horizontal"}
        stepCount={3}
        customStyles={customStyles}
        currentPosition={this.state.currentPosition}
        labels={labels}
      />
    );
  }
}
