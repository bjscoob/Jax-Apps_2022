import React from "react";
import HomePage from "./HomePage.js";

class Interface extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class="interfaceGrid">
        <div class="menuGrid">
          <div class="flip-container">
            <div class="flipper">
              <div class="front1">
                <button class="menuButton" id="btn1" onclick="">
                  HOME
                </button>
              </div>
              <div class="back"></div>
            </div>
          </div>
          <div class="flip-container">
            <div class="flipper">
              <div class="front2">
                <button class="menuButton" id="btn2">
                  ABOUT ME
                </button>
              </div>
              <div class="back"></div>
            </div>
          </div>
          <div class="flip-container">
            <div class="flipper">
              <div class="front3">
                <button class="menuButton" id="btn3">
                  CONTACT
                </button>
              </div>
              <div class="back"></div>
            </div>
          </div>
        </div>
        <div class="grid-item">
          <HomePage />
        </div>
        <div class="grid-item">3</div>
      </div>
    );
  }
  componentDidUpdate() {}
}
export default Interface;
