import { useState, useEffect } from "react";
import axios from "axios";
import hljs from "highlight.js";
import typescript from "highlight.js/lib/languages/typescript";
import "highlight.js/styles/atom-one-light.min.css";
import styles from "./Codebox.module.css";

hljs.registerLanguage("typescript", typescript);

function CodeBox({ code }: { code: string }) {
    const [codeText, setCodeText] = useState<string>("");
    useEffect(() => {
        axios(code).then((res: any) => {
            if (res) {
                setCodeText(res.data);
            }
        });
    }, []);
    const highlightCode = hljs.highlight(codeText, { language: "tsx" }).value;

    return (
        <div className={styles.codeBox}>
            <pre>
                <code
                    dangerouslySetInnerHTML={{ __html: highlightCode }}
                ></code>
            </pre>
        </div>
    );
}

export default CodeBox;
