import { Link } from "react-router-dom";
import Section from "@components/templates/Section";
import { effectList } from "./effectList";
import styles from "./effect.module.css";

function Effects () {
    return (
        <Section title="Javascript 효과 모음">
            <ul className={styles.list}>
                {effectList.map((item) => {
                    return (
                        <li key={item.name}>
                            <Link to={item.path}>{item.name}</Link>
                        </li>
                    )
                })}
            </ul>
        </Section>
    )
}

export default Effects