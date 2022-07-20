import React from "react";
import HomePage from "./HomePage.js";
import ABPage from "./AboutMe.js";

class Interface extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentView: <HomePage />,
      currentState: 1
    };
  }

  render() {
    return (
      <div class="interfaceGrid">
        <div class="menuGrid">
          <div class="flip-container">
            <div class="flipper">
              <div class="front1">
                <button
                  class="menuButton"
                  id="btn1"
                  onClick={() =>
                    this.setState({
                      currentView: <HomePage />,
                      currentState: 1
                    })
                  }
                >
                  HOME
                </button>
              </div>
              <div class="back"></div>
            </div>
          </div>
          <div class="flip-container">
            <div class="flipper">
              <div class="front2">
                <button
                  class="menuButton"
                  id="btn2"
                  onClick={() =>
                    this.setState({
                      currentView: <ABPage />,
                      currentState: 2
                    })
                  }
                >
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
          <div class="contentContainer">{this.state.currentView}</div>
        </div>
        <div class="grid-item">3</div>
      </div>
    );
  }
  componentDidUpdate() {}
}
export default Interface;
