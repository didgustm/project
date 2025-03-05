import { Link } from "react-router-dom";
import Section from "@components/templates/Section";
import styles from "./Works.module.css";

function Works () {
    return (
        <Section title="Projects">
            <ul className={styles.list}>
                <li><Link to="/works/atgc">ATGC Bio</Link></li>
                <li><Link to="/works/adm-platform"><p>카카오뱅크</p> 광고주 플랫폼</Link></li>
                <li><Link to="/"><p>카카오뱅크</p> 공통 컴포넌트</Link></li>
                <li><Link to="/works/corevac">CoreVac</Link></li>
                <li><Link to="/">8282에어크린린</Link></li>
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
    )
}

export default Works