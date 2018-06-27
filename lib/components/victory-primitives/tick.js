import React from "react";
import { G } from "react-native-svg";
import { Tick } from "sky-victory-core/es";

export default class VTick extends React.Component {
  static defaultProps = Object.assign({}, Tick.defaultProps, {
    groupComponent: <G/>
  });
}
