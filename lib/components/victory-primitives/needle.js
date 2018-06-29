import React from "react";
import { Needle } from "sky-victory-core";
import Path from "./path";

export default class VNeedle extends React.Component {
  static defaultProps = Object.assign({}, Needle.defaultProps, {
    pathComponent: <Path/>
  });
}
