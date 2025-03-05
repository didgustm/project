import { Link } from "react-router-dom";
import styles from "./Header.module.css";

function Header({
    menuOpen,
    scrollNum,
    onClick,
}: {
    menuOpen: { open: boolean; close: boolean };
    scrollNum: number;
    onClick: () => void;
}) {
    const { close } = menuOpen;
    return (
        <header
            className={`${styles.header} ${!close ? styles.open : ""} ${
                scrollNum > 0 ? styles.fix : ""
            }`}
        >
            <h1 className={styles.logo}>
                <Link to="/">
                    <span className={styles.ico}>B</span>
                    <div>
                        <p>Project 1.0</p>
                        <strong>React + Ts + Vite</strong>
                    </div>
                </Link>
            </h1>
            <div className={styles.btn_wrap}>
                <button type="button" onClick={onClick}>
                    <span className={styles.line01}></span>
                    <span className={styles.line02}></span>
                </button>
            </div>
        </header>
    );
}

export default Header;
