/* eslint-disable no-unused-vars */
import React, { useState } from "react";

// assets
import ImageTextPlay from "assets/images/text-play.svg";
import ImageVoiceUnion from "assets/images/voice-union.svg";
import ImageVoiceVector01 from "assets/images/voice-vector-01.svg";
import ImageVoiceVector02 from "assets/images/voice-vector-02.svg";

// components
import Star from "./components/Star";

// styles
import "./songList.css";

// mock data
import { data } from "./data";

function SongList() {
  const [song, setSong] = useState(null);
  const [star, setStar] = useState(null);

  const handlePlay = (item) => () => {
    // setSong(item);
    window.location.href = `uniwebview://play-song?songId=${item.id}`;
  };

  function handleBack() {
    setSong(null);
  }

  function finish(star) {
    // console.log("finish: ", star);
    setStar(star);
  }
  // finish();

  return (
    <div className="songList">
      <h1 className="songList_title mb-6">Choose a song</h1>

      <div
        className="songList_list"
        style={{ display: song ? "none" : "block" }}
      >
        {data.map((item, idx) => (
          <div key={idx} className="songList_item">
            <div
              className="songList_overlap"
              style={{ backgroundImage: `url(${item.avatar})` }}
            >
              <div className="songList_voice">
                <img
                  className="songList_voice_union"
                  alt=""
                  src={ImageVoiceUnion}
                />
                <div className="songList_vector">
                  <img
                    className="vsongList_vector_img1"
                    alt=""
                    src={ImageVoiceVector01}
                  />
                  <img
                    className="vsongList_vector_img2"
                    alt=""
                    src={ImageVoiceVector02}
                  />
                </div>
              </div>
            </div>
            <div className="songList_info">
              <div className="songList_info_detail">
                <div className="heading-06">{item.title}</div>
                <p className="heading-07">{item.author}</p>
                <p className="heading-07">{item.id}</p>
              </div>
            </div>
            <div className="songList_actions">
              <div
                // href={`uniwebview://play-song?songId=${item.id}`}
                className="songList_btnPlay"
                onClick={handlePlay(item)}
              >
                <img src={ImageTextPlay} alt="" />
              </div>
              <h6>{Number(star)}</h6>
            </div>
          </div>
        ))}
      </div>

      <div style={{ display: song ? "block" : "none" }}>
        <Star song={song} handleBack={handleBack} />
      </div>
    </div>
  );
}

export default SongList;
