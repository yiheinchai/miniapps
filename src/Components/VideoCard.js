import { useCallback, memo } from "react";
import styles from "./VideoCard.module.css";

const VideoCard = (props) => {
  console.log("VideoCard re-evaluated!");
  const onClickHandler = useCallback(
    function () {
      props.onClickHandler(props.video_id, props.video_title);
    },
    [props.onClickHandler]
  );
  return (
    <div key={props.video_id} onClick={onClickHandler} className={styles.video}>
      <img
        alt="Thumbnail of youtube video"
        className={styles["video__img"]}
        src={props.img_url}
      ></img>
      <div className={styles["video__title"]}>{props.video_title}</div>
      <div className={styles["video__channel"]}>{props.channel_name}</div>
    </div>
  );
};

export default memo(VideoCard);
