import { useContext, useState } from "react";
import { useSelector } from "react-redux";
import { Route, Link } from "react-router-dom";
import { LogContext } from "../store/log-context";
import { OverallContext } from "../store/overall-context";
import { PracProfileContext } from "../store/practiceStore";
import styles from "./Nav.module.css";
import ProfileItem from "./ProfileItem";
import { SettingsModal } from "./SettingsModal";

const Nav = () => {
  const LogCtx = useContext(LogContext);
  const PracProfileCtx = useContext(PracProfileContext);
  // const PracProfile = useSelector((state) => state.profile);
  const PracProfile = useSelector((state) => state.pracProfile.profile);
  return (
    <div className={styles.nav}>
      <div>
        <h3>Current Video:</h3> {LogCtx.videoTitle.slice(0, 40)}
      </div>
      <h1>MiniApps</h1>
      <div className={styles["nav__options"]}>
        <div>
          {console.log(PracProfile)}
          {PracProfile &&
          Object.keys(PracProfile).length === 0 &&
          PracProfile.constructor === Object ? (
            <p> Not Logged In</p>
          ) : (
            <ProfileItem
              name={PracProfile.name}
              avatar={PracProfile.avatar}
              job={PracProfile.job}
            />
          )}
        </div>
        <div>
          {PracProfileCtx.pracProfileState.profile &&
          Object.keys(PracProfileCtx.pracProfileState.profile).length === 0 &&
          PracProfileCtx.pracProfileState.profile.constructor === Object ? (
            <p> Not Logged In</p>
          ) : (
            <ProfileItem
              name={PracProfileCtx.pracProfileState.profile.name}
              avatar={PracProfileCtx.pracProfileState.profile.avatar}
              job={PracProfileCtx.pracProfileState.profile.job}
            />
          )}
        </div>
        <Link to="/settings">
          <button onClick={LogCtx.updateSettingsHandler}>Settings</button>
        </Link>
        <Route path="/settings">
          <SettingsModal />
        </Route>
      </div>
    </div>
  );
};

export default Nav;
