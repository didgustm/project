import { ReactNode } from "react";
import Section from "../Section";
import { CodeBox } from "@components/organisms";
import styles from "./Motionbox.module.css";

function MotionBox({
    title,
    desc,
    children,
    useClick = true,
    code,
    onClick,
}: {
    title: string;
    desc?: string;
    children?: string | ReactNode;
    useClick?: boolean;
    code?: any;
    onClick?: () => void;
}) {
    return (
        <Section title={title} desc={desc}>
            <div className={styles.wrapper}>
                {useClick && (
                    <button
                        type="button"
                        className={styles.btn}
                        onClick={onClick}
                    >
                        Play
                    </button>
                )}
                <div className={styles.view}>{children}</div>
            </div>
            {code && <CodeBox code={code} />}
        </Section>
    );
}

export default MotionBox;
