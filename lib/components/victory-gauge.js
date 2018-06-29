import React from "react";
import { Dimensions } from "react-native";
import { G } from "react-native-svg";
import { VictoryGauge } from "sky-victory-gauge/es";
import VictoryLabel from "./victory-label";
import VictoryContainer from "./victory-container";
import VictoryLine from "./victory-line";
import { Slice, Needle, Tick } from "../index";

export default class extends VictoryGauge {
  static defaultProps = Object.assign({}, VictoryGauge.defaultProps, {
    segmentComponent: <Slice/>,
    labelComponent: <VictoryLabel/>,
    containerComponent: <VictoryContainer/>,
    groupComponent: <G/>,
    lineComponent: <VictoryLine/>,
    tickComponent: <Tick/>,
    needleComponent: <Needle/>,
    height: Dimensions.get("window").width,
    width: Dimensions.get("window").width
  });
}
