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
    this.portfolio = this.getPortfolio();
  }
  async getPortfolio() {
    const response = await fetch("https://jax-apps.com/portfolio.json");
    const json = await response.json();
    console.log(json);
    console.log("Bleh");
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
        <div class="grid-item">
          <div class="carouselCont">
            <div>
              <img
                alt="upArrow"
                id="upArrow"
                src="https://jax-apps.com/images/ja_arrow.svg"
              />
            </div>
            <div class="carousel">
              <div>
                <img
                  alt="caroImg"
                  class="caroImg"
                  id="img1"
                  src="https://jax-apps.com/images/aboutme1.png"
                />
              </div>
              <div id="img2Cont">
                <img
                  alt="caroImg"
                  class="caroImg"
                  id="img2"
                  src="https://jax-apps.com/images/aboutme1.png"
                />
              </div>
              <div>
                <img
                  alt="caroImg"
                  class="caroImg"
                  id="img3"
                  src="https://jax-apps.com/images/aboutme1.png"
                />
              </div>
            </div>
            <div>
              <img
                alt="downArrow"
                id="downArrow"
                src="https://jax-apps.com/images/ja_arrow.svg"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
  componentDidUpdate() {}
}
export default Interface;
