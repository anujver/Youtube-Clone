import React from "react";
import "./video.css";
import Playvideo from "../../Components/playVideo/playVideo";
import Recomanded from "../../Components/recomanded/recomanded";
import { useParams } from "react-router-dom";
const Video = () => {
  const { videoId, categoryId } = useParams();
  return (
    <div className="play-container">
      <Playvideo videoId={videoId} />
      <Recomanded categoryId={categoryId} />
    </div>
  );
};

export default Video;
