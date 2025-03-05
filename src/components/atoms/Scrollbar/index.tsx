import styles from "./Scrollbar.module.css";

function Scrollbar({
    menuOpen,
    trackRef,
    thumbRef,
    thumbHeight,
    isScroll,
    isScrolling,
}: {
    menuOpen: any;
    trackRef: any;
    thumbRef: any;
    thumbHeight: number;
    isScroll: boolean;
    isScrolling: boolean;
}) {
    return (
        <div
            className={`${styles.scrollBar} ${
                !menuOpen.close ? styles.hide : ""
            } ${isScrolling ? styles.scrolling : ""}    
            `}
            ref={trackRef}
        >
            {isScroll && (
                <div
                    className={styles.scrollThumb}
                    ref={thumbRef}
                    style={{ height: thumbHeight }}
                ></div>
            )}
        </div>
    );
}

export default Scrollbar;
