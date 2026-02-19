import styles from "./TeamMembersGrid.module.scss";
import teamMembers from "../../data/TeamMembersData";

export default function TeamMembersGrid() {
  return (
    <div className={styles.teamMembersGrid}>
      {teamMembers.map((n) => (
        <div key={n.id} className={styles.memberCard}>
          <img
            className={styles.memberImg}
            src={n.image}
            alt={n.alt}
            width={280}
            loading="lazy"
          />
          <h6 className={styles.memberName}>{n.name}</h6>
          <p className={styles.memberRole}>{n.role}</p>
        </div>
      ))}
    </div>
  );
}
