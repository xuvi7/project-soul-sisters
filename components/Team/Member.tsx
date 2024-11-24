import React from "react";
import styles from "./Team.module.css";
import { Starname } from "./Team";

interface MemberProps {
  role: string;
  name: string;
  imageUrl: string;
  star_names?: Starname[];
}

export default function Member(props: MemberProps) {
  return (
    <div className={styles.teamMember}>
      <div className={styles.memberLeft}>
        {props.star_names ? (
          <>
            <p>{props.role}</p>
            {props.star_names.map((star, i) => (
              <p key={i}>{star.name}</p>
            ))}
          </>
        ) : (
          <>
            <>
              <p>{props.role}</p>
              <p>{props.name}</p>
            </>
          </>
        )}
      </div>
      <img src={props.imageUrl} className={styles.memberPhoto} />
    </div>
  );
}