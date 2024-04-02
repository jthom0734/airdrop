import React, { useState } from "react";
import { InstagramEmbed 
  InstagramShareButton,
  InstagramFollowButton,
  InstagramHashtagButton,
  InstagramMentionButton,
  TwitterTweetEmbed,
  InstagramMomentShare,
  InstagramDMButton,
  InstagramVideoEmbed,
  InstagramOnAirButton,
} from "react-social-media-embed";

const Instagram = ({ handleClick, user }) => {
  return (
    <>
      {/*  {user.instagramUrl ? (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <InstagramEmbed url={user.instagramUrl} width={325} height={424} />
        </div>
      ) : (
        <div class="input-group-new">
          <label class="label-new">Post Url</label>
          <input onChange={handleClick} class="input-new" type="text" />
          <div></div>
        </div>
      )}*/}

     <div className="custom-width ">
        <img src="token.png" alt="" />
        <h4>Kindly do the following steps:</h4>
        <TwitterShareButton
          url={"https://twitter.com/TheBCoders/status/1753257564899545178/"}
          options={{ text: "Limited airdrop", via: "TheBCoders", height: 400 }}
        />
        <InstagramFollowButton screenName={"TheBCoders"} />
        <InstagramHashtagButton tag={"TheBCoders"} />
      </div> 
    </>
  );
};

export default Instagram;
