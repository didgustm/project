import { useEffect, useState, useRef, useCallback, Suspense } from "react";
import { createPortal } from "react-dom";
import { Outlet, useLocation } from "react-router-dom";
import { BasicContext } from "context/basic";
import { useSpring, animated } from "@react-spring/web";
import { Header, Footer, Aside } from "@components/organisms";
import { Spinner, Scrollbar } from "@components/atoms";
import styles from "./Layout.module.css";

function Layout() {
    const { pathname } = useLocation();
    const containerRef = useRef<HTMLDivElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);
    const thumbRef = useRef<HTMLDivElement>(null);
    /** Scroll Y */
    const [scrollNum, setScrollNum] = useState<number>(0);
    /** innerWidth */
    const [wrapperWidth, setWrapperWidth] = useState<number>(innerWidth);
    /** 스크롤 생성 여부 */
    const [isScroll, setIsScroll] = useState<boolean>(false);
    /** 스크롤 이벤트 동작 여부  */
    const [isScrolling, setIsScrolling] = useState<boolean>(false);
    /** 스크롤바 높이 */
    const [thumbHeight, setThumbHeight] = useState<number>(0);
    /** 모바일 메뉴 열림/닫힘 */
    const [menuOpen, setMenuOpen] = useState<{ open: boolean; close: boolean }>(
        {
            open: false,
            close: true,
        }
    );

    /** scrollbar props */
    const props = {
        menuOpen: menuOpen,
        trackRef: trackRef,
        thumbRef: thumbRef,
        thumbHeight: thumbHeight,
        isScroll: isScroll,
        isScrolling: isScrolling,
    };

    /**
     * useSPring
     */
    const [{ opacity, transform }, api] = useSpring(() => ({
        opacity: 0,
        transform: `translateX(200px)`,
    }));

    /**
     * 이벤트 : 모바일 메뉴 열기
     */
    const openMenu = useCallback(() => {
        setMenuOpen({
            close: false,
            open: true,
        });
        api.start({
            from: {
                opacity: 0,
                transform: `translateX(200px)`,
            },
            to: {
                opacity: 1,
                transform: `translateX(0)`,
            },
        });
    }, [api]);

    /**
     * 이벤트 : 모바일 메뉴 닫기
     */
    const closeMenu = useCallback(() => {
        setMenuOpen({
            close: true,
            open: true,
        });
        api.start({
            opacity: 0,
            transform: `200px`,
            onRest: () => {
                setMenuOpen({
                    close: true,
                    open: false,
                });
            },
        });
    }, [api]);

    /**
     * 이벤트 : 모바일 메뉴 열기/닫기
     */
    const handleMenu = () => {
        menuOpen.open ? closeMenu() : openMenu();
    };

    /**
     * 이벤트 : 스크롤바 크기 변경
     * @param ref
     * @param trackHeight
     */
    const handleResize = (ref: HTMLDivElement, trackHeight: number) => {
        const { clientHeight } = ref;
        if (innerHeight < clientHeight) {
            setIsScroll(true);
        } else {
            setIsScroll(false);
        }
        setWrapperWidth(innerWidth);
        setThumbHeight((innerHeight / clientHeight) * trackHeight);
    };

    /**
     * 이벤트 : 스크롤
     */
    let scrolling: any;
    const handleScroll = useCallback(() => {
        if (!containerRef.current || !trackRef.current || !thumbRef.current) {
            return;
        }
        const scrollTop = containerRef.current.parentElement?.scrollTop || 0;
        const { clientHeight } = containerRef.current;
        const { clientHeight: trackHeight } = trackRef.current;
        const newTop = (scrollTop / clientHeight) * trackHeight;
        thumbRef.current.style.transform = `translateY(${newTop}px)`;
        setScrollNum(scrollTop);
        setIsScrolling(true);
        clearTimeout(scrolling);
        scrolling = setTimeout(() => {
            setIsScrolling(false);
        }, 1500);
    }, []);

    useEffect(() => {
        if (menuOpen.open) closeMenu();
        setScrollNum(0);
        setIsScrolling(false);
        if (containerRef.current) {
            containerRef.current.parentElement?.scrollTo({
                top: 0,
            });
        }
    }, [pathname]);
    useEffect(() => {
        if (containerRef.current && trackRef.current) {
            const ref = containerRef.current;
            const { clientHeight: trackHeight } = trackRef.current;
            const resizeObserver = new ResizeObserver(() => {
                handleResize(ref, trackHeight);
            });
            resizeObserver.observe(ref);
            ref.parentElement?.addEventListener("scroll", handleScroll);
            return () => {
                resizeObserver?.unobserve(ref);
                ref.parentElement?.removeEventListener("scroll", handleScroll);
            };
        }
    }, [innerHeight, innerWidth]);

    return (
        <BasicContext.Provider value={{ containerRef, scrollNum }}>
        <div id="app" className={styles.app} ref={containerRef}>
            <Header
                menuOpen={menuOpen}
                scrollNum={scrollNum}
                onClick={handleMenu}
            />
            {wrapperWidth > 768 ? (
                <Aside />
            ) : (
                menuOpen.open && (
                    <animated.div
                        style={{
                            position: "fixed",
                            top: 64,
                            right: 0,
                            height: "calc(100vh - 64px)",
                            zIndex: 98,
                            pointerEvents: "none",
                            transform,
                        }}
                    >
                        <Aside />
                    </animated.div>
                )
            )}
            <Suspense fallback={<Spinner />}>
                <main>
                    <Outlet />
                </main>
            </Suspense>
            <Footer />
            {menuOpen.open && innerWidth <= 768 && (
                <animated.div
                    className={styles.dimm}
                    onClick={closeMenu}
                    style={{ opacity }}
                />
            )}
            {scrollNum > 100 && (
                <button
                    type="button"
                    className={styles.btnTop}
                    onClick={() => {
                        if (containerRef.current) {
                            containerRef.current.parentElement?.scrollTo({
                                top: 0,
                                behavior: "smooth",
                            });
                        }
                    }}
                >
                    <svg
                        width={20}
                        height={20}
                        fill="none"
                        stroke="var(--color-white)"
                        strokeWidth={2.5}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M4,13 L10,7 16,13" />
                    </svg>
                </button>
            )}
            {createPortal(<Scrollbar {...props} />, document.body)}
        </div>
        </BasicContext.Provider>
    );
}

export default Layout;
