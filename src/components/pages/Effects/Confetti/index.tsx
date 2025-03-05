import { useRef } from "react";
import MotionBox from "@components/templates/MotionBox";
import { basicClick, customClick } from "./fn";
import basicCode from "./basic.txt";
import particleCode from "./particle.txt";

function Confetti() {
    const basicRef = useRef<HTMLCanvasElement>(null);
    const particleRef = useRef<HTMLDivElement>(null);
    const partyRef = useRef<HTMLDivElement>(null);

    

    return (
        <>
            <MotionBox
                title="콘페티 기본"
                desc="canvas-confetti.js"
                onClick={() => basicClick(basicRef)}
                code={basicCode}
            >
                <canvas ref={basicRef} width={300} height={300}></canvas>
            </MotionBox>
            <MotionBox
                title="커스텀 2D 콘페티"
                onClick={() => customClick(particleRef)}
                code={particleCode}
            >
                <div
                    ref={particleRef}
                    style={{ position: "relative", width: 300, height: 300 }}
                ></div>
            </MotionBox>
            <MotionBox title="3D Svg 콘페티" desc="party-js" useClick={false}>
                <div ref={partyRef} style={{ width: 300, height: 300 }}></div>
            </MotionBox>
        </>
    );
}

export default Confetti;
