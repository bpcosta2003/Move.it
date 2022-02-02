import {useContext} from "react";
import styles from "../styles/components/Profile.module.css";
import {ChallengesContext} from "../contexts/ChallengesContext";

export function Profile() {
  const {level} = useContext(ChallengesContext);

  return (
    <div className={styles.profileContainer}>
      <div className={styles.profileContainerLeft}>
        <img src="https://github.com/bpcosta2003.png" alt="Bruno Costa" />
        <div className={styles.profileContent}>
          <strong>Bruno Costa</strong>
          <p>
            <img src="icons/level.svg" alt="Level" />
            Level {level}
          </p>
        </div>
      </div>
      {/* <button>
        <img src="icons/logout.png" alt="Logout" />
      </button> */}
    </div>
  );
}
