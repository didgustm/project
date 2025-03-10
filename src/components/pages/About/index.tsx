import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Section from "@components/templates/Section";
import styles from "./About.module.css";
import vscodeImg from "@assets/images/intro/vscode.svg";
import gitImg from "@assets/images/intro/git.svg";
import githubImg from "@assets/images/intro/github.svg";
import figmaImg from "@assets/images/intro/figma.svg";
import psdImg from "@assets/images/intro/psd.svg";
import aiImg from "@assets/images/intro/ai.svg";
import xdImg from "@assets/images/intro/xd.svg";
import viteImg from "@assets/images/intro/vite.svg";
import reactImg from "@assets/images/intro/react.svg";
import tsImg from "@assets/images/intro/ts.svg";
import jsImg from "@assets/images/intro/js.svg";
import htmlImg from "@assets/images/intro/html.svg";
import cssImg from "@assets/images/intro/css.svg";
import scssImg from "@assets/images/intro/scss.svg";
import svelteImg from "@assets/images/intro/svelte.svg";
import editplusImg from "@assets/images/intro/editplus.webp";
import phpImg from "@assets/images/intro/php.svg";
import laravelImg from "@assets/images/intro/laravel.svg";

gsap.registerPlugin(useGSAP, ScrollTrigger);

function About() {
    /**
     * 이름, 사진
     * 폰번호??
     * 사용 스킬 - scale 크기로 숙련도 순서
     * 스와이프 형식으로 해도 될듯??
     */
    return (
        <Section title="About me">
            {/* <div className={styles.img}>
                    <img src={img} alt="" />
                </div> */}
            <ul className={styles.list}>
                <li>
                    <p className={styles.subject}>Name</p>
                    <p className={styles.value}>Han yanghyun</p>
                </li>
                <li>
                    <p className={styles.subject}>Career</p>
                    <div className={`${styles.value} ${styles.career}`}>
                        <div>
                            <p className={styles.date}>2024.07 -</p>
                            <dl>
                                <dt className={styles.dt}>주식회사 바능</dt>
                                <dd>
                                    SI 3팀 ⋅ 프론트앤드 ⋅ 웹퍼블리셔 ⋅
                                    카카오뱅크 ⋅ 신규 상품 및 이벤트 코딩 ⋅ 기존
                                    페이지 유지보수
                                </dd>
                            </dl>
                        </div>
                        <div>
                            <p className={styles.date}>2019.01 - 2023.12</p>
                            <dl>
                                <dt className={styles.dt}>비제이피플즈</dt>
                                <dd>
                                    웹개발사업본부 ⋅ 웹퍼블리셔 ⋅ 대리 ⋅
                                    신규프로젝트 코딩 ⋅ 랜딩페이지 제작 ⋅ 기존
                                    사이트 유지보수 ⋅ 이벤트배너 추가 ⋅ 팝업
                                    추가 ⋅ 코드업데이트 ⋅ 최적화
                                </dd>
                            </dl>
                        </div>
                        <div>
                            <p className={styles.date}>2018.04 - 2018.10</p>
                            <dl>
                                <dt className={styles.dt}>
                                    디지털디자인(웹디, 웹퍼블) 양성 교육
                                </dt>
                                <dd>
                                    웹기획 ⋅ UX/UI 디자인 ⋅ HTML5 ⋅ CSS ⋅ jQuery
                                    ⋅ Javascript ⋅ 포트폴리오 제작 ⋅ 실무
                                    프로젝트
                                </dd>
                            </dl>
                        </div>
                        <div>
                            <p className={styles.date}>2018.02</p>
                            <dl>
                                <dt className={styles.dt}>
                                    컴퓨터활용능력 1급
                                </dt>
                                <dd>스프레드시트 ⋅ 데이터베이스</dd>
                            </dl>
                        </div>
                        <div>
                            <p className={styles.date}>2010.03 - 2018.02</p>
                            <dl>
                                <dt className={styles.dt}>경기대학교</dt>
                                <dd>스포츠경영학과</dd>
                            </dl>
                        </div>
                    </div>
                </li>
                <li>
                    <p className={styles.subject}>Tools & Skills</p>
                    <div className={`${styles.value} ${styles.tools}`}>
                        <div>
                            <img src={vscodeImg} alt="" />
                            <p>VSCode</p>
                        </div>
                        <div>
                            <img src={editplusImg} alt="" />
                            <p>Edit Plus</p>
                        </div>
                        <div>
                            <img src={gitImg} alt="" />
                            <p>Gitlab</p>
                        </div>
                        <div>
                            <img src={githubImg} alt="" />
                            <p>Github</p>
                        </div>
                        <div>
                            <img src={figmaImg} alt="" />
                            <p>Figma</p>
                        </div>
                        <div>
                            <img src={psdImg} alt="" />
                            <p>Photoshop</p>
                        </div>
                        <div>
                            <img src={xdImg} alt="" />
                            <p>Adobe XD</p>
                        </div>
                        <div>
                            <img src={aiImg} alt="" />
                            <p>Illustrator</p>
                        </div>
                        <div>
                            <img src={reactImg} alt="" />
                            <p>React</p>
                        </div>
                        <div>
                            <img src={viteImg} alt="" />
                            <p>vite</p>
                        </div>
                        <div>
                            <img src={tsImg} alt="" />
                            <p>typescript</p>
                        </div>
                        <div>
                            <img src={jsImg} alt="" />
                            <p>Javascript</p>
                        </div>
                        <div>
                            <img src={htmlImg} alt="" />
                            <p>HTML</p>
                        </div>
                        <div>
                            <img src={cssImg} alt="" />
                            <p>css</p>
                        </div>
                        <div>
                            <img src={scssImg} alt="" />
                            <p>Scss</p>
                        </div>
                        <div>
                            <img src={svelteImg} alt="" />
                            <p>Svelte</p>
                        </div>
                        <div>
                            <img src={phpImg} alt="" />
                            <p>php</p>
                        </div>
                        <div>
                            <img src={laravelImg} alt="" />
                            <p>Laravel</p>
                        </div>
                    </div>
                </li>
                <li>
                    <p className={styles.subject}>Contact</p>
                    <div className={`${styles.value} ${styles.contact}`}>
                        <p>
                            <span className={styles.dt}>카카오톡</span>
                            <button type="button" className={styles.themeColor}>
                                bw03306@naver.com
                            </button>
                        </p>
                        <p>
                            <span className={styles.dt}>이메일</span>
                            <button type="button" className={styles.themeColor}>
                                didgustm12@naver.com
                            </button>
                        </p>
                        <p>
                            <span className={styles.dt}>인스타그램(DM)</span>
                            <button type="button" className={styles.themeColor}>
                                jegalryanghyun
                            </button>
                        </p>
                        <p>
                            <span className={styles.dt}>크몽</span>
                            <button type="button" className={styles.themeColor}>
                                크몽 계정
                            </button>
                        </p>
                        <p>
                            <span className={styles.dt}>숨고</span>
                            <button type="button" className={styles.themeColor}>
                                숨고 계정
                            </button>
                        </p>
                    </div>
                </li>
            </ul>
        </Section>
    );
}

export default About;
