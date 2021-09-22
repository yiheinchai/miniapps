import { getAuthentication } from "../Helper/youtube";
import { useRef, useState } from "react";
import VideoCard from "./VideoCard";
import styles from "./MusicPlayer.module.css";
import { useContext, memo } from "react";
import { LogContext } from "../store/log-context";
import Input from "./Input";

const MusicPlayer = () => {
  const LogCtx = useContext(LogContext);
  const [queryInput, setQueryInput] = useState("");
  const [videoList, setVideoList] = useState();
  const [selectedVideoID, setSelectedVideoID] = useState();
  const [viewSelector, setViewSelector] = useState(null);

  async function searchVideos() {
    const queryObject = await getAuthentication(queryInput);
    const videoListData = queryObject.items;
    const videoList = videoListData.map((video) => {
      const title = video.snippet.title;
      const channelName = video.snippet.channelTitle;
      const thumbnail = video.snippet.thumbnails.medium.url;
      const id = video.id.videoId;
      return [title, channelName, thumbnail, id];
    });
    setVideoList(videoList);
  }

  const inputChangeHandler = (event) => {
    setQueryInput(event.target.value);
  };

  const playVideoHandler = function (videoId, videoTitle) {
    LogCtx.updateTitleHandler(videoTitle);
    setSelectedVideoID(videoId);
    setViewSelector(1);
  };

  const forwardedRef = useRef();

  return (
    <div className={styles["music"]}>
      <h3>Youtube Widget</h3>
      {!viewSelector && (
        <>
          <div>
            <input onChange={inputChangeHandler} value={queryInput}></input>
            <button onClick={searchVideos}>Search</button>
          </div>
          <div>
            <Input ref={forwardedRef} />
            <button
              onClick={() => {
                forwardedRef.current.print();
              }}
            >
              Go!
            </button>
          </div>
        </>
      )}
      {viewSelector && <button onClick={() => setViewSelector(0)}>Back</button>}
      {!viewSelector && (
        <div className={styles["video__list"]}>
          {videoList?.map((video) => {
            return (
              <VideoCard
                key={video[3]}
                onClickHandler={playVideoHandler}
                img_url={video[2]}
                video_title={video[0]}
                channel_name={video[1]}
                video_id={video[3]}
              ></VideoCard>
            );
          })}
        </div>
      )}
      <div>
        {viewSelector && selectedVideoID && (
          <iframe
            className={styles["video__playback"]}
            src={`https://www.youtube.com/embed/${selectedVideoID}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        )}
      </div>
    </div>
  );
};

export default memo(MusicPlayer);
