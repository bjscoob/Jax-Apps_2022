import "./styles.css";

export default function App() {
  return (
    <div id="pageCont">
      <div class="imgbox">
        <img
          alt="bg"
          class="center-fit"
          src="https://jax-apps.com/images/JA_BG.svg"
        />
        <div class="sky">
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
        </div>
        <div class="sky2">
          <div class="star2"></div>
          <div class="star2"></div>
          <div class="star2"></div>
          <div class="star2"></div>
          <div class="star2"></div>
          <div class="star2"></div>
          <div class="star2"></div>
        </div>
      </div>
      <div class="logobox">
        <img
          alt="logo"
          id="logo"
          src="https://jax-apps.com/images/ja_logo.svg"
        />
      </div>
    </div>
  );
}
