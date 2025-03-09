import { Link } from "react-router-dom";
import Section from "@components/templates/Section";
import styles from "./Works.module.css";

function Works () {
    return (
        <>
            <Section title="Projects">
                <ul className={styles.list}>
                    <li><Link to="/works/atgc">ATGC Bio</Link></li>
                    <li><Link to="/works/adm-platform"><p>카카오뱅크</p> 광고주 플랫폼</Link></li>
                    <li><Link to="/works/design-system"><p>카카오뱅크</p> 디자인 시스템</Link></li>
                    <li><Link to="/works/corevac">CoreVac</Link></li>
                    <li><Link to="/works/airclean">8282에어크린린</Link></li>
                    {/* <li><Link to="/">패스트헌터 - 딜러</Link></li>
                    <li><Link to="/">패스트헌터 </Link></li>
                    <li><Link to="/">더 클라세움</Link></li>
                    <li><Link to="/">Stake</Link></li>
                    <li><Link to="/">LottoFly</Link></li>
                    <li><Link to="/">BJPeoples</Link></li>
                    <li><Link to="/">한국재무컨설팅센터</Link></li>
                    <li><Link to="/">자몽픽</Link></li>
                    <li><Link to="/">플레이업</Link></li>
                    <li><Link to="/">퍼블링</Link></li>
                    <li><Link to="/">멘토데스크</Link></li>
                    <li><Link to="/">로우어드바이저</Link></li>
                    <li><Link to="/">리더스CPA</Link></li> */}
                </ul>
            </Section>
            <Section title="Landing">
                <ul className={styles.list}>
                    <li><Link to="/works/refinanceLoan"><p>카카오뱅크</p> 신용대출 갈아타기</Link></li>
                    <li><Link to="/works/loanComparisonCredit"><p>카카오뱅크</p> 신용대출 비교하기</Link></li>
                    <li><Link to="/works/aptManagementFee"><p>카카오뱅크</p> 아파트 관리비 납부</Link></li>
                    <li><Link to="/works/safebox"><p>카카오뱅크</p> 세이프박스</Link></li>
                    <li><Link to="/works/fund"><p>카카오뱅크</p> 펀드</Link></li>
                    <li><Link to="/works/withdrawal"><p>카카오뱅크</p> 입출금통장</Link></li>
                </ul>
            </Section>
        </>
    )
}

export default Works