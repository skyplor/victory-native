import React from "react";
import { VictoryLabel } from "sky-victory-core";
import { Text, TSpan } from "../index";

export default class extends VictoryLabel {
  static defaultProps = Object.assign({}, VictoryLabel.defaultProps, {
    textComponent: <Text/>,
    tspanComponent: <TSpan/>
  });
}
