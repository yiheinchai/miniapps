import { useContext } from "react";
import { OverallContext } from "../store/overall-context";
import styles from "./ProfileItem.module.css";
import { useDispatch } from "react-redux";
import { PracProfileActions, PracProfileContext, profileActions } from "../store/practiceStore";

const ProfileItem = (props) => {
  const PracProfileCtx = useContext(PracProfileContext);
  const dispatch = useDispatch();

  return (
    <div
      onClick={() => {
        const data = { avatar: props.avatar, name: props.name, job: props.job };
        PracProfileCtx.dispatchPracProfile({ type: "UPDATE_PROFILE", value: data });

        // Redux No ToolKit
        // dispatch({ type: "UPDATE_PROFILE", value: data });

        dispatch(PracProfileActions.updateProfile(data));
      }}
      className={styles["profile__item"]}
    >
      <img alt="User Avatar" className={styles["profile__avatar"]} src={props.avatar} />
      <div className={styles["profile__name"]}>{props.name}</div>
      <div className={styles["profile__job"]}>{props.job}</div>
    </div>
  );
};

export default ProfileItem;
