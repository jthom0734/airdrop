import React, { useState, useContext } from "react";
import { saveAs } from "file-saver";
import { BsLinkedin, BsTwitterX, BsInstagram } from "react-icons/bs";
import { FaUser } from "react-icons/fa6";

import { HiOutlineClipboardDocument } from "react-icons/hi2";

import { MdMarkEmailRead } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { TwitterMomentShare } from "react-social-media-embed";

//INTERNAL IMPORT
import { Linkedin, Twitter, Instagram, Follow } from "./index";
import { CONTEXT } from "../context/index";

const Verify = () => {
  const handleImage = () => {
    let url = `airdrop.png`;
    saveAs(url, `@itsat`);
  };

  const { claimAirdrop, notifyError, address, connect, loader, claimStatus } =
    useContext(CONTEXT);

  const [user, setUser] = useState({
    name: "",
    twitterId: "",
    linkedInUrl: "",
    instagramUrl: "",
    email: "",
  });

  const handleFormFieldChange = (fieldName, e) => {
    setUser({ ...user, [fieldName]: e.target.value });
  };

  const CALLING_AIRDROP = async () => {
    const { name, twitterId, linkedInUrl, instagramUrl, email } = user;

    console.log(user);

    if (!name || !linkedInUrl || !instagramUrl || !twitterId || !email) {
      return notifyError("Provide all details to claim airdrop");
    }
    await claimAirdrop(user);
  };

  console.log(claimStatus);

  return (
    <section class="contact-area pt-140 pb-140">
      <div class="container">
        <div class="contact-info-wrap">
          <div class="row justify-content-center">
            <div class="col-xl-3 col-lg-4 col-md-6">
              <div class="contact-info-item">
                <div class="icon">
                  <i class="fas ">
                    <BsTwitterX />
                  </i>
                </div>
                <div class="content">
                  <h6 class="title">Twitter </h6>
                  <Twitter
                    user={user}
                    handleClick={(e) => handleFormFieldChange("twitterId", e)}
                  />
                </div>
              </div>
            </div>
            {/*<div class="col-xl-3 col-lg-4 col-md-6">
              <div class="contact-info-item">
                <div class="icon">
                  <i class="fas ">
                    <BsLinkedin />
                  </i>
                </div>

                <div class="content">
                  <h6 class="title">Linkedin</h6>

                  <Linkedin
                    user={user}
                    handleClick={(e) => handleFormFieldChange("linkedInUrl", e)}
                  />
                </div>
              </div>
            </div>*/}
            <div class="col-xl-3 col-lg-4 col-md-6">
              <div class="contact-info-item">
                <div class="icon">
                  <i class="fas ">
                    <BsInstagram />
                  </i>
                </div>
                <div class="content">
                  <h6 class="title">Instagram</h6>

                  <Instagram
                    user={user}
                    handleClick={(e) =>
                      handleFormFieldChange("instagramUrl", e)
                    }
                  />
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-lg-4 col-md-6">
              <div class="contact-info-item">
                <div class="icon">
                  <i class="fas ">
                    <FaUser />
                  </i>
                </div>
                <div class="content">
                  <h6 class="title">Email</h6>
                  <Follow
                    name={"Name"}
                    handleClick={(e) => handleFormFieldChange("name", e)}
                  />
                  <Follow
                    name={"Email"}
                    handleClick={(e) => handleFormFieldChange("email", e)}
                  />

                  {address != "" && claimStatus == true ? (
                    <button class="btn margin-btn-new">
                      {loader ? "loading..." : "Already Claim Airdrop"}
                    </button>
                  ) : address != "" && claimStatus == false ? (
                    <button
                      onClick={() => CALLING_AIRDROP()}
                      class="btn margin-btn-new"
                    >
                      {loader ? "loading..." : "Clain  Airdrop"}
                    </button>
                  ) : (
                    <button
                      onClick={() => connect()}
                      class="btn margin-btn-new"
                    >
                      Connect Wallet
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="contact-form-wrap">
          <div class="row g-0">
            <div class="col-57 order-0 order-lg-2">
              <div class="contact-form">
                <h4 class="title">Post Details</h4>
                <div id="contact-form">
                  <div class="row">
                    <div class="col-md-6 ">
                      <HiOutlineClipboardDocument
                        className="new-cursour"
                        onClick={(e) =>
                          navigator.clipboard.writeText("Twitter @Itsat")
                        }
                      />
                      <div
                        class="form-grp"
                        onClick={(e) =>
                          navigator.clipboard.writeText("Twitter @Itsat")
                        }
                      >
                        <input
                          type="text"
                          disabled
                          placeholder="Twitter @Itsat"
                        />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <HiOutlineClipboardDocument
                        className="new-cursour"
                        onClick={(e) =>
                          navigator.clipboard.writeText(
                            "Instgram: @Itsat"
                          )
                        }
                      />
                      <div class="form-grp">
                        <input
                          type="text"
                          disabled
                          placeholder="Instgram: @Itsat"
                        />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <HiOutlineClipboardDocument
                        className="new-cursour"
                        onClick={(e) =>
                          navigator.clipboard.writeText(
                            "@itsat Coin"
                          )
                        }
                      />
                      <div class="form-grp">
                        <input
                          type="text"
                          disabled
                          placeholder="@itsat Coin"
                        />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <HiOutlineClipboardDocument
                        className="new-cursour"
                        onClick={(e) =>
                          navigator.clipboard.writeText(
                            "Website: https://www.itsat.site/"
                          )
                        }
                      />
                      <div class="form-grp">
                        <input
                          type="text"
                          disabled
                          placeholder="Website: https://www.itsat.site/"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="form-grp">
                    <HiOutlineClipboardDocument
                      className="new-cursour"
                      onClick={(e) =>
                        navigator.clipboard.writeText(
                          "🚀 Join the revolution! Introducing @itsat, the future of decentralized finance and social impact. 💡 With every transaction, you're not just investing in a token, you're investing in positive change. 🌍 Let's empower communities, support sustainability, and drive meaningful impact together. Don't miss out on this opportunity to be part of something bigger than yourself. Invest in Iphone Token today and make a difference while earning rewards! #@itsat #crypto #daulathussain #dapp 🌟🔗"
                        )
                      }
                    />
                    <textarea
                      name="message"
                      disabled
                      placeholder="🚀 Join the revolution! Introducing @itsat, the future of decentralized finance and social impact. 💡 With every transaction, you're not just investing in a token, you're investing in positive change. 🌍 Let's empower communities, support sustainability, and drive meaningful impact together. Don't miss out on this opportunity to be part of something bigger than yourself. Invest in Iphone Token today and make a difference while earning rewards! #@itsat #crypto #daulathussain #dapp 🌟🔗"
                    ></textarea>
                  </div>
                  <button onClick={() => handleImage()} class="btn">
                    Download Image
                  </button>
                </div>
                <p class="ajax-response mb-0"></p>
              </div>
            </div>
            <div class="col-43">
              <div class="contact-map">
                <img src="airdrop.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section><!--Start of Tawk.to Script-->
<script type="text/javascript">
var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/660a670fa0c6737bd126f1db/1hqca5615';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();
</script>
<!--End of Tawk.to Script-->
  );
};

export default Verify;
