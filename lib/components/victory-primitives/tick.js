import React from "react";
import { G } from "react-native-svg";
import { Tick } from "sky-victory-core";
import { Line } from "../../index";

export default class VTick extends Tick {
  static defaultProps = Object.assign({}, Tick.defaultProps, {
    groupComponent: <G/>,
    lineComponent: <Line/>
  });
}
