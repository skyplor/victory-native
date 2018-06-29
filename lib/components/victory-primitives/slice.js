import React from "react";
import { Path } from "../../index";
import { Slice } from "sky-victory-core";

export default class extends Slice {
  static defaultProps = Object.assign({}, Slice.defaultProps, {
    pathComponent: <Path/>
  });
}
