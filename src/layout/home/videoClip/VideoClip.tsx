import React from 'react';
import * as Styles from './VideoClip.styled';

const VideoClip = () => {
  return (
    <Styles.VideoClip>
      <iframe
        width="100%"
        height="420"
        src="https://www.youtube.com/embed/yGS6jLlEJjs?si=Cak4trId6sAN6GS1"
        title="YouTube video player"
        // frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </Styles.VideoClip>
  );
};

export default VideoClip;
