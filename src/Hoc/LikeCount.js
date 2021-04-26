import React, { Component } from "react";

export default class LikeCount extends Component {
  state = {
    likes: 0,
  };
  render() {
    return <div>{this.state.likes}</div>;
  }
}
