import { useRef } from "react";
import { ReactLenis } from "lenis/react";
import Section from "@components/templates/Section";
import { CodeBox } from "@components/organisms";
import styles from "./Scroll.module.css";
import lenisText from "./lenis.txt"

function SmoothScroll() {
    const scrollContainerRef = useRef<any>(null);
    return (
        <>
            <Section title="부드러운 스크롤" desc="Lenis"> </Section>
            <ReactLenis ref={scrollContainerRef} style={{ height: 400, overflowY: "scroll" }}>
                <div className={styles.scrollInner}>Scroll Down</div>
            </ReactLenis>
            <CodeBox code={lenisText} />
        </>
    );
}

export default SmoothScroll;
