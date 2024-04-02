import React from 'react';
import {
  InstagramEmbed,
  InstagramShareButton,
  InstagramFollowButton,
  InstagramHashtagButton,
  InstagramMentionButton,
  InstagramMomentShare,
  InstagramDMButton,
  InstagramVideoEmbed,
  InstagramOnAirButton,
} from 'react-social-media-embed';

const InstagramComponent = () => {
  return (
    <div>
      {/* Instagram Embed */}
      <InstagramEmbed
        url="https://www.instagram.com/p/CBd9R_4AJtJ/"
        maxWidth={320}
        hideCaption={false}
        containerTagName="div"
        protocol=""
        injectScript
        onLoading={() => {}}
        onSuccess={() => {}}
        onAfterRender={() => {}}
        onFailure={() => {}}
      />

      {/* Instagram Share Button */}
      <InstagramShareButton
        url="https://www.instagram.com/p/CBd9R_4AJtJ/"
        size={32}
      >
        Share on Instagram
      </InstagramShareButton>

      {/* Instagram Follow Button */}
      <InstagramFollowButton
        account="openai"
        size="large"
        protocol=""
        color="white"
        includeMargin
        appId="12345"
      >
        Follow @openai
      </InstagramFollowButton>

      {/* Instagram Hashtag Button */}
      <InstagramHashtagButton hashtag="openai">
        #openai
      </InstagramHashtagButton>

      {/* Instagram Mention Button */}
      <InstagramMentionButton username="openai">
        @openai
      </InstagramMentionButton>

      {/* Instagram Moment Share */}
      <InstagramMomentShare />
      
      {/* Instagram Direct Message Button */}
      <InstagramDMButton
        to="openai"
        appId="12345"
      >
        DM @openai
      </InstagramDMButton>

      {/* Instagram Video Embed */}
      <InstagramVideoEmbed
        url="https://www.instagram.com/p/CBd9R_4AJtJ/"
        maxWidth={320}
        hideCaption={false}
        containerTagName="div"
        protocol=""
        injectScript
        onLoading={() => {}}
        onSuccess={() => {}}
        onAfterRender={() => {}}
        onFailure={() => {}}
      />

      {/* Instagram On Air Button */}
      <InstagramOnAirButton username="openai">
        On Air
      </InstagramOnAirButton>
    </div>
  );
};

export default InstagramComponent;
