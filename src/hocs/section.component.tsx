import React from "react";
import styles from "./section.component.css";

export default function Section(props: SectionProps) {
  return (
    <div className={styles.section}>
      <div className={styles.sectionTitle}>
        <h2 className="text-center">{props.title}</h2>
      </div>
      {props.children}
    </div>
  );
}

type SectionProps = {
  title: string;
  children?: React.ReactNode;
};
