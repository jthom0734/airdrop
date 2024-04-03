import React from "react";

const Hero = () => {
  return (
    <section
      class="banner-area banner-bg"
      data-background="assets/img/banner/banner_bg.png"
    >
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-10">
            <div class="banner-content text-center">
              <h2 class="title">
               XECO Pre-Sale and Airdrop for<br />
                <span> XECO $Iphone is Live</span>
              </h2>
              <p>
                Pre-sales CA: 0x52046D05A8C21517553EE8bB65F1763B5c704Cf4
                <br>
                "Participate in our token sale using the contract address."
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="banner-scroll-down">
        <a href="#contribution" class="section-link">
          <span></span>
          <span></span>
          <span></span>
        </a>
      </div>
      <div class="banner-shape-wrap">
        <img
          src="assets/img/banner/banner_shape01.png"
          alt=""
          class="leftToRight"
        />
        <img
          src="assets/img/banner/banner_shape02.png"
          alt=""
          class="alltuchtopdown"
        />
      </div>
    </section>
  );
};


export default Hero;
