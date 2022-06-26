import React from "react";

class Interface extends React.Component {
  render() {
    return (
      <div class="interfaceGrid">
        <div class="menuGrid">
          <button class="menuButton">Home</button>
          <button class="menuButton">Resume</button>
          <button class="menuButton">About Me</button>
          <button class="menuButton">Contact</button>
        </div>
        <div class="grid-item">2</div>
        <div class="grid-item">3</div>
      </div>
    );
  }
}
export default Interface;
