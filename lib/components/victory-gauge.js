import React from "react";
import { Dimensions } from "react-native";
import { G } from "react-native-svg";
import { VictoryGauge } from "sky-victory-gauge/es";
import VictoryLabel from "./victory-label";
import VictoryContainer from "./victory-container";
import VictoryLine from "./victory-line";
import { Slice } from "../index";

export default class extends VictoryGauge {
  static defaultProps = Object.assign({}, VictoryGauge.defaultProps, {
    dataComponent: <Slice/>,
    labelComponent: <VictoryLabel/>,
    containerComponent: <VictoryContainer/>,
    groupComponent: <G/>,
    lineComponent: <VictoryLine/>,
    height: Dimensions.get("window").width,
    width: Dimensions.get("window").width
  });
}
