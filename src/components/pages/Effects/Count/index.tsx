import { useRef } from "react";
import MotionBox from "@components/templates/MotionBox";
import { basicCount, increaseCount } from "./fn";
import basicText from "./basic.txt";
import increaseText from "./increase.txt";

function Count() {
    const basicRef = useRef<HTMLDivElement>(null);
    const increaseRef = useRef<HTMLDivElement>(null);

    return (
        <>
            <MotionBox
                title="숫자 롤링"
                desc="gsap"
                onClick={() => basicCount(basicRef)}
                code={basicText}
            >
                <div
                    ref={basicRef}
                    style={{
                        height: 40,
                        fontSize: 40,
                        textAlign: "center",
                        fontVariationSettings: `'wght' 650`,
                        overflow: "hidden",
                    }}
                ></div>
            </MotionBox>
            <MotionBox
                title="숫자 증가"
                onClick={() => increaseCount(increaseRef)}
                code={increaseText}
            >
                <div
                    ref={increaseRef}
                    style={{
                        height: 40,
                        fontSize: 40,
                        fontVariationSettings: `'wght' 650`,
                        overflow: "hidden",
                    }}
                ></div>
            </MotionBox>
        </>
    );
}

export default Count;
