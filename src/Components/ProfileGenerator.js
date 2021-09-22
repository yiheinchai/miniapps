import { useContext, useMemo, useState } from "react";
import { ProfileContext } from "../store/profile-context";
import styles from "./ProfileGenerator.module.css";
import ProfileItem from "./ProfileItem";

const PROFILE_API_URL = "https://random-data-api.com/api/users/random_user?size=9";

const ProfileGenerator = () => {
  const ProfileCtx = useContext(ProfileContext);
  const [page, setPage] = useState(0);
  async function fetchProfile() {
    const response = await fetch(PROFILE_API_URL);
    const data = await response.json();
    console.log(data);
    const userList = data.map((user) => {
      const {
        first_name,
        last_name,
        avatar,
        uid,
        employment: { title: job },
      } = user;
      const profile_data = { first_name, last_name, avatar, uid, job };
      return profile_data;
    });
    ProfileCtx.dispatchProfile({
      type: "GENERATE_PROFILE",
      generatedProfiles: userList,
    });
  }

  const randomArray = useMemo(() => [1, 2, 3, 4, 5], []);

  return (
    <div>
      <h3>Profile Generator</h3>
      <button onClick={fetchProfile}>
        {ProfileCtx.profileState.generatedProfiles.length > 0
          ? "Generate More Profiles!"
          : "Generate Profile!"}
      </button>
      {ProfileCtx.profileState.generatedProfiles.length > 0 && <p>{`Page: ${page + 1}`}</p>}
      {page >= 1 && (
        <button
          onClick={() => {
            setPage((prevPage) => prevPage >= 1 && --prevPage);
          }}
        >
          Back
        </button>
      )}
      {ProfileCtx.profileState.generatedProfiles.length > 0 &&
        page + 1 < ProfileCtx.profileState.generatedProfiles.length / 3 && (
          <button
            onClick={() => {
              setPage((prevPage) => ++prevPage);
            }}
          >
            Next
          </button>
        )}
      <div className={styles["profile__list"]}>
        {ProfileCtx?.profileState?.generatedProfiles
          .slice(3 * (page + 1) - 3, 3 * (page + 1))
          .map((user, index) => {
            return (
              <ProfileItem
                name={`${user.first_name} ${user.last_name}`}
                avatar={user.avatar}
                key={user.uid}
                job={user.job}
              />
            );
          })}
      </div>
    </div>
  );
};

export default ProfileGenerator;
