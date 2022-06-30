import React from "react";

class Interface extends React.Component {
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
          <div class="textCont">
            <div id="bannerGrid">
              <hr />
              <img
                alt="circleImg"
                id="circleImg"
                src="https://jax-apps.com/images/ja_house.svg"
                width="100%"
                height="100%"
              />
              <hr />
            </div>
            <h1>
              Welcome to<span style={{ color: "#1E8BAB" }}> Planet</span>{" "}
              <span style={{ color: "#1FB18C" }}>JAX </span>
            </h1>
            <p>
              JAX Apps is a sole proprietorship, owned by Brandon Jackson, whose
              mission is to help small businesses thrive and grow in this
              rampant world of technology. Services range from IT consultations
              to building new, cutting-edge mobile and web applications. But it
              doesn’t end there - how many people in IT have you known to just
              do what's required and leave you with a product FULL of bugs? My
              goal is to change the interpersonal behaviors of the IT industry.
              Good works are rooted in good communication and collaboration. I
              take the time to figure out the learning styles of my clients,
              what their needs are, and the end product they want to achieve.
              Process diagrams, scenarios, and routine checkups are some of the
              few tools I use to keep a project moving forward proactively. And
              ultimately, the job ain’t done without your stamp of approval.
              Happen to have an idea in mind? Let's take the first step!
            </p>
          </div>
        </div>
        <div class="grid-item">3</div>
      </div>
    );
  }
}
export default Interface;
