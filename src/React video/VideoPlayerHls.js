import React from "react";
import ReactHlsPlayer from "react-hls-player";
function VideoPlayerHls({ hls }) {
  return (
    <div className="video-container">
      <ReactHlsPlayer
        className="react-player"
        src={hls}
        autoPlay={false}
        controls={true}
        width="100%"
        height="auto"
      />
    </div>
  );
}

export default VideoPlayerHls;
