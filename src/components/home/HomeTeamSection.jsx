import styles from "./HomeTeamSection.module.scss";
import TeamMembersGrid from "../shared/TeamMembersGrid";

export default function TeamSection() {
  return (
    <section className={styles.teamSection}>
      <div className={styles.teamIntro}>
        <p className="icon">Our team</p>
        <h2>People you’ll be working with</h2>
        <p className="description">
          We’re a 100% remote team spread all across the world.
        </p>
      </div>
      <TeamMembersGrid />
      <div className={styles.hiringCard}>
        <h3 className="hiringTitle">We’re hiring</h3>
        <p className={styles.hiringDescription}>
          We are looking for people that share our vision. Are you adaptable,
          driven, and friendly?
        </p>
        <button className={styles.hiringBtn} type="button">
          Submit application
        </button>
      </div>
    </section>
  );
}
