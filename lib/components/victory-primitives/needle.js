import React from "react";
import { Needle } from "sky-victory-core";
import { Path } from "../../index";

export default class VNeedle extends Needle {
  static defaultProps = Object.assign({}, Needle.defaultProps, {
    pathComponent: <Path/>
  });
}
