import { createPortal } from "react-dom";
import { LayoutCounter } from "./LayoutCounter";
import styles from "./SettingsModal.module.css";
import { Link } from "react-router-dom";
export const Setting = () => {
  return (
    <div className={styles.settings}>
      <h3>Settings</h3>
      <Link to="/">Close</Link>
      <div className={styles["settings__counter"]}>
        <LayoutCounter widget="YOUTUBE" widgetVariable="youtubeCount" />
        <LayoutCounter widget="COUNTER" widgetVariable="counterCount" />
        <LayoutCounter widget="PROFILE" widgetVariable="profileCount" />
      </div>
    </div>
  );
};

export const SettingsModal = () => {
  return createPortal(<Setting />, document.querySelector("#settings-root"));
};

async function PromisePractice() {
  Promise.race([fetch("google.com")], timeout(3000));
}

const timeout = function (milli) {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject(new Error("The request took too long!"));
    }, milli);
  });
};

/*
race => first one to finish gets returned (be it fulfilled or rejected)
any => first one to be fulfilled gets returned
all => waits for all promises to be fulfilled, short circuits all upon a single rejection
allSettled => waits for all promises to be fulfilled, does not short circuit even if there is one rejection
*/
