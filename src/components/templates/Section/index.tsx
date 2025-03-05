import { ReactNode } from "react";
import styles from "./Section.module.css";

function Section({
    title,
    desc,
    children,
}: {
    title?: string;
    desc?: string;
    children: string | ReactNode;
}) {
    return (
        <section className={styles.section}>
            {title && (
                <div className={styles.top}>
                    <h2 className={styles.title}>{title}</h2>
                    {desc && <p className={styles.desc}>{desc}</p>}
                </div>
            )}
            {children}
        </section>
    );
}

export default Section;
