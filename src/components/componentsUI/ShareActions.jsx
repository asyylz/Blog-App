import React from 'react';
import {
  EmailShareButton,
  PinterestShareButton,
  TwitterIcon,
  FacebookIcon,
  TwitterShareButton,
  EmailIcon,
  PinterestIcon,
  FacebookShareButton,
  WhatsappIcon,
  WhatsappShareButton,
  LinkedinShareButton,
  LinkedinIcon,
} from 'react-share';

const ShareActions = ({
  title,
  image,
  content,
  children,
  designCardB,
  id,
  comingFromDetailPage,
}) => {
  const url = window.location.href;

  let shareUrl;

  if (comingFromDetailPage) {
    shareUrl = window.location.href;
  } else {
    shareUrl = `${url.split('?')[0]}${id}`;
  }

  return (
    <div
      //style={{ border: '1px solid red' }}
      className={`flex ${
        designCardB ? 'flex-col absolute top-0 left-[-50px]' : 'flex-row'
      } items-center justify-center`}
    >
      <div className="mr-2">
        <EmailShareButton url={shareUrl} subject={title}>
          <EmailIcon size={32} round bgStyle={{ fill: '#838280' }} />
          {children}
        </EmailShareButton>
      </div>
      <div className="mr-2">
        <PinterestShareButton media={image} url={shareUrl} description={title}>
          <PinterestIcon size={32} round bgStyle={{ fill: '#838280' }} />
          {children}
        </PinterestShareButton>
      </div>
      <div className="mr-2">
        <TwitterShareButton url={shareUrl} title={title}>
          <TwitterIcon size={32} round bgStyle={{ fill: '#838280' }} />
          {children}
        </TwitterShareButton>
      </div>

      <div className="mr-2">
        <FacebookShareButton url={shareUrl} hashtag="#" title={title}>
          <FacebookIcon size={32} round bgStyle={{ fill: '#838280' }} />
          {children}
        </FacebookShareButton>
      </div>
      <div className="mr-2">
        <WhatsappShareButton url={shareUrl} title={title}>
          <WhatsappIcon size={32} round bgStyle={{ fill: '#838280' }} />
        </WhatsappShareButton>
      </div>
      <div className="mr-2">
        <LinkedinShareButton url={shareUrl} title={title} summary={content}>
          <LinkedinIcon size={32} round bgStyle={{ fill: '#838280' }} />
          {children}
        </LinkedinShareButton>
      </div>
    </div>
  );
};

export default ShareActions;
