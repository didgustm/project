import { Link } from "react-router-dom";
import Section from "../Section";
import styles from "./Detail.module.css";

function Detail({ descript, img }: { descript: any; img?: any }) {
    const subjects = Object.keys(descript);
    const values = Object.values(descript);
    const title: any = values[0];
    return (
        <Section title={title}>
            <div className={styles.detail}>
                <div className={styles.descWrap}>
                    <ul className={styles.desc}>
                        {values.map((value: any, index: number) => {
                            if (Array.isArray(value)) {
                                return (
                                    <li key={index}>
                                        <p className={styles.subject}>
                                            {subjects[index]}
                                        </p>
                                        <p className={`${styles.value} script`}>
                                            {value.map(
                                                (list: any, i: number) => {
                                                    return (
                                                        <span key={i}>
                                                            {list}
                                                        </span>
                                                    );
                                                }
                                            )}
                                        </p>
                                    </li>
                                );
                            } else {
                                if (subjects[index] === "URL") {
                                    return (
                                        <li key={index}>
                                            <p className={styles.subject}>
                                                {subjects[index]}
                                            </p>
                                            <p className={styles.value}>
                                                {value === "" ? (
                                                    "-"
                                                ) : (
                                                    <Link
                                                        to={`//${value}`}
                                                        style={{
                                                            color: "var(--color-main)",
                                                        }}
                                                        target="_blank"
                                                    >
                                                        {value}
                                                    </Link>
                                                )}
                                            </p>
                                        </li>
                                    );
                                } else {
                                    return (
                                        <li key={index}>
                                            <p className={styles.subject}>
                                                {subjects[index]}
                                            </p>
                                            <p className={styles.value}>
                                                {value}
                                            </p>
                                        </li>
                                    );
                                }
                            }
                        })}
                    </ul>
                </div>
                {img && (
                    <div className={styles.view}>
                        <img
                            src={img}
                            alt={`${values[0]} 미리보기 이미지`}
                            className={styles.img}
                        />
                    </div>
                )}
            </div>
        </Section>
    );
}

export default Detail;
