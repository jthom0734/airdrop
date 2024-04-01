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
                Discover the Next Big Opportunity: <br />
                <span>Our ICO is Live</span>
              </h2>
              <p>
                A new smart block chain based marketplace for trading digital
                <br />
                goods & assets according.
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
var Tawk_API = Tawk_API || {};
var Tawk_LoadStart = new Date();

(function() {
    var s1 = document.createElement("script"),
        s0 = document.getElementsByTagName("script")[0];
    s1.async = true;
    s1.src = 'https://embed.tawk.to/660a670fa0c6737bd126f1db/1hqca5615';
    s1.charset = 'UTF-8';
    s1.setAttribute('crossorigin', '*');
    s0.parentNode.insertBefore(s1, s0);
})();


export default Hero;
