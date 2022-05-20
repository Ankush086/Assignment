import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import "../React video/style.css";
function VideoPlayer({ url, hl, id, user }) {
  const [item, setItem] = useState([]);
  const [des, setDes] = useState("");

  async function getData() {
    try {
      const response = await fetch(
        ` https://youtube.googleapis.com/youtube/v3/videos?part=snippet&id=${id}&key=AIzaSyDua4TwqCZxSvq7D4tpFgUuCK0lE3wfBMM`
      );
      const result = await response.json();
      console.log("XIOXOXO", result);
      setItem(result.items);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {}, [item]);
  console.log(
    "MOMOMO",
    item,
    item && item.length > 0 ? item[0].snippet.description : "no data"
  );
  return (
    <>
      <div className="video-container">
        <ReactPlayer className="react-player" controls={true} url={url} />
        <h3>
          {item && item.length > 0
            ? item[0].snippet.description
            : "No description"}
        </h3>
      </div>
    </>
  );
}

export default VideoPlayer;
