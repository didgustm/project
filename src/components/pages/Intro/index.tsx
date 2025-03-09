import Section from "@components/templates/Section";
import styles from "./Intro.module.css";
import img from "@assets/images/intro/img.webp";
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
import nodeImg from "@assets/images/intro/node.svg";
import scssImg from "@assets/images/intro/scss.svg";
import svelteImg from "@assets/images/intro/svelte.svg";

function Intro() {
    /**
     * 이름, 사진
     * 폰번호??
     * 경력
     * 메일주소
     * 교육내용 / 자격증
     * 사용 스킬
     * 사용 툴
     */
    return (
        <>
            <Section title="About me">
                <div className={styles.img}>
                    <img src={img} alt="" />
                </div>
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
                                    <dt>주식회사 바능</dt>
                                    <dd>
                                        SI 3팀 ⋅ 프론트앤드 ⋅ 웹퍼블리셔 ⋅
                                        카카오뱅크 ⋅ 신규 상품 및 이벤트
                                        코딩 ⋅ 기존 페이지 유지보수
                                    </dd>
                                </dl>
                            </div>
                            <div>
                                <p className={styles.date}>2019.01 - 2023.12</p>
                                <dl>
                                    <dt>비제이피플즈</dt>
                                    <dd>
                                        웹개발사업본부 ⋅ 웹퍼블리셔 ⋅ 대리 ⋅
                                        신규프로젝트 코딩 ⋅ 랜딩페이지 제작 ⋅
                                        기존 사이트 유지보수 ⋅ 이벤트배너 추가 ⋅
                                        팝업 추가 ⋅ 코드업데이트 ⋅ 최적화
                                    </dd>
                                </dl>
                            </div>
                        </div>
                    </li>
                    <li>
                        <p className={styles.subject}>Edu & License</p>
                        <p className={styles.value}>
                            디지털디자인(웹디, 웹퍼블) 양성 교육, 컴퓨터활용능력
                            1급
                        </p>
                    </li>
                    <li>
                        <p className={styles.subject}>Skills</p>
                        <div className={`${styles.value} ${styles.tools}`}>
                            <div>
                                <img src={reactImg} alt="" />
                            </div>
                            <div>
                                <img src={viteImg} alt="" />
                            </div>
                            <div>
                                <img src={tsImg} alt="" />
                            </div>
                            <div>
                                <img src={jsImg} alt="" />
                            </div>
                            <div>
                                <img src={nodeImg} alt="" />
                            </div>
                            <div>
                                <img src={htmlImg} alt="" />
                            </div>
                            <div>
                                <img src={cssImg} alt="" />
                            </div>
                            <div>
                                <img src={scssImg} alt="" />
                            </div>
                            <div>
                                <img src={svelteImg} alt="" />
                            </div>
                        </div>
                    </li>
                    <li>
                        <p className={styles.subject}>Tools</p>
                        <div className={`${styles.value} ${styles.tools}`}>
                            <div>
                                <img src={vscodeImg} alt="" />
                            </div>
                            <div>
                                <img src={gitImg} alt="" />
                            </div>
                            <div>
                                <img src={githubImg} alt="" />
                            </div>
                            <div>
                                <img src={figmaImg} alt="" />
                            </div>
                            <div>
                                <img src={psdImg} alt="" />
                            </div>
                            <div>
                                <img src={xdImg} alt="" />
                            </div>
                            <div>
                                <img src={aiImg} alt="" />
                            </div>
                        </div>
                    </li>
                    <li>
                        <p className={styles.subject}>Contact</p>
                        <div className={styles.value}>
                            <p>
                                <span>Kakao</span> <span className={styles.themeColor}>bw03306@naver.com</span>
                            </p>
                            <p>
                                <span>Email</span> <span className={styles.themeColor}>didgustm12@naver.com</span>
                            </p>
                            <p>
                                <span>Instagram</span> <span className={styles.themeColor}>jegalryanghyun</span>
                            </p>
                            <p>
                                <span>kmong</span> <span className={styles.themeColor}> 크몽 계정</span>
                            </p>
                            <p>
                                <span>Somgo</span> <span className={styles.themeColor}> 숨고 계정</span>
                            </p>
                        </div>
                    </li>
                </ul>
            </Section>
        </>
    );
}

export default Intro;
