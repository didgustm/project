import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { menuList } from "./menuList";
import styles from "./Aside.module.css";

function Aside() {
    const [openMenu, setOpenMenu] = useState<any>({});
    const { pathname } = useLocation();

    /**
     * 이벤트 : 메뉴 depth2 열기/닫기
     * @param url
     */
    const handleClick = (url: string) => {
        let isOpen: boolean = false;
        !openMenu[url] ? (isOpen = true) : (isOpen = false);
        setOpenMenu({
            ...openMenu,
            [url]: isOpen,
        });
    };

    useEffect(() => {
        if (pathname !== "/" && pathname.split("/").length > 2) {
            setOpenMenu({
                ...openMenu,
                [pathname.split("/")[1]]: true,
            });
        }
    }, [pathname]);

    return (
        <nav className={styles.gnb}>
            <ul className={styles.depth01}>
                {menuList.map(
                    (menu: {
                        url: string;
                        name: string;
                        children?: { url: string; name: string }[];
                    }) => {
                        const isActive = pathname.split("/")[1] === menu.url;
                        // depth 있을 때
                        if (menu.children) {
                            const { children } = menu;
                            const isOpen = openMenu[menu.url];
                            return (
                                <li key={menu.name}>
                                    <div
                                        role="link"
                                        className={
                                            isActive ? styles.active : ""
                                        }
                                        onClick={() => handleClick(menu.url)}
                                    >
                                        {menu.name}
                                        <svg
                                            width="20"
                                            height="20"
                                            viewBox="0 0 20 20"
                                            strokeLinecap="round"
                                            className={
                                                isOpen ? styles.open : ""
                                            }
                                        >
                                            <path d="M4,7 L10,13 16,7" />
                                        </svg>
                                    </div>
                                    {isOpen && (
                                        <ul className={styles.depth02}>
                                            {children.map((child) => {
                                                const isActiveChild =
                                                    pathname === child.url;
                                                return (
                                                    <li key={child.name}>
                                                        <Link
                                                            to={child.url}
                                                            className={
                                                                isActiveChild
                                                                    ? styles.active
                                                                    : ""
                                                            }
                                                        >
                                                            {child.name}
                                                        </Link>
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    )}
                                </li>
                            );
                        }
                        // depth 없을 때
                        return (
                            <li key={menu.name}>
                                <Link
                                    to={menu.url}
                                    className={isActive ? styles.active : ""}
                                >
                                    {menu.name}
                                </Link>
                            </li>
                        );
                    }
                )}
            </ul>
        </nav>
    );
}

export default Aside;
