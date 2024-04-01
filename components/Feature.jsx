import React from "react";

const Feature = () => {
  const features = [
    {
      title: "Mobile Payment Make Easy",
      description: "Our platform simplifies mobile payments, providing a hassle-free experience for users. With a user-friendly interface and robust security features, managing transactions on-the-go has never been easier. Say goodbye to long queues and complicated checkout processes - join us and experience the future of convenient, secure mobile payments.",
      image: "features_img01.png",
    },
    {
      title: "Lifetime Free Transaction",
      description: "Experience the freedom of lifetime free transactions with our innovative platform. Say goodbye to transaction fees forever as you enjoy seamless financial interactions without any hidden costs. Our commitment to providing a transparent and user-centric experience ensures that you can manage your finances effortlessly, without worrying about additional charges. Join us and unlock a lifetime of convenient, fee-free transactions, empowering you to make the most of your financial journey.





",
      image: "features_img02.png",
    },
    {
      title: "Protect Your Identity",
      description: "Shield your identity with our cutting-edge protection solutions. We prioritize your privacy by employing advanced security measures, ensuring your personal information remains secure. Join us to safeguard your digital identity confidently.",
      image: "features_img03.png",
    },
    {
      title: "Security & Control Over Money",
      description: "Gain peace of mind with our platform's top-notch security and financial control. Our user-friendly interface ensures effortless money management, empowering you to make transactions confidently. Join us to take charge of your finances securely.",
      image: "features_img04.png",
    },
  ];
  return (
    <section id="feature" class="features-area pt-140 pb-110">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-10">
            <div class="section-title text-center mb-70">
              <h2 class="title">
                Revolutionary ICO Platform with Exclusive Rewards Program
              </h2>
            </div>
          </div>
        </div>
        <div class="row">
          {features.map((feature, index) => (
            <div key={index + 1} class="col-lg-6">
              <div class="features-item">
                <div class="features-content">
                  <h2 class="title">
                    <a href="#!">{feature.title}</a>
                  </h2>
                  <p>{feature.description}</p>
                </div>
                <div class="features-img">
                  <img src={`assets/img/images/${feature.image}`} alt="" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Feature;
