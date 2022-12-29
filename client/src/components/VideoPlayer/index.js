import React from "react";

function VideoPlayer() {

  return (
    <div className="flex justify-center">
      <iframe id="player" title="knitting" type="text/html" width="355" height="200"
        src='https://www.youtube.com/embed?listType=playlist&list=PLUv37jBrlCtIMJEGGCFIuF-jfEUGTex_q&autoplay=1&mute=1'
        frameBorder="0" style={{'borderRadius':'5px'}}>
      </iframe>
    </div>
    
  )
}

export default VideoPlayer;