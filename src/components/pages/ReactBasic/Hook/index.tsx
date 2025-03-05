import { CodeBox } from "@components/organisms";
import Section from "@components/templates/Section";
import userefText from "./useref.txt";
import usecontextText from "./usecontext.txt"

function Hook() {
    return (
        <Section title="Hooks">
            <article>
                <h3 className="subTitle">useState</h3>
                <ul className="script">
                    <li>state(상태) 관리 훅</li>
                    <li>state를 불러오거나 값을 할당 할 수 있음</li>
                    <li className="eg">
                        eg) <br />
                        const [value, setValue] = useState(0) <br />
                        <p className="small">value === 0</p>
                        setValue(10)
                        <p className="small">value === 10</p>
                    </li>
                </ul>
            </article>
            <article style={{ marginTop: "2rem" }}>
                <h3 className="subTitle">useRef</h3>
                <ul className="script">
                    <li>DOM 요소에 직접 접근하는 훅</li>
                    <li>마운트 시 한번만 호출(업데이트 x, 리랜더링 x)</li>
                    <li>useRef 선언 후 DOM 요소에 ref 속성으로 할당</li>
                    <li>컴포넌트 내에서 변경되어야 하는 값이 있지만, 그 변경이 화면에 바로 반영될 필요가 없는 경우 사용</li>
                    <li>조회 및 수정이 가능한 변수 관리와 이전 상태값 참조가 필요할 때 사용( 높이값, 스크롤값 )</li>
                </ul>
                <CodeBox code={userefText} />
            </article>
            <article>
                <h3 className="subTitle">useEffect</h3>
                <ul className="script">
                    <li>컴포넌트가 랜더링 될 때 최초 실행</li>
                    <li>의존성배열 값이 변경 될 때마다 실행</li>
                    <li className="eg">{"eg) useEffect(() => { 실행할 작업 }, [ 의존성배열 ])"}</li>
                </ul>
            </article>
            <article style={{ marginTop: "2rem" }}>
                <h3 className="subTitle">useCallback</h3>
                <ul className="script">
                    <li>자주쓰는 함수 값을 캐싱</li>
                    <li>매개변수로 함수와 의존성배열</li>
                    <li>의존성배열이 변경될 때 함수 호출</li>
                    <li className="eg">{" eg) const cal = useCallback(() => 함수, [ 의존성배열 ]) "}</li>
                </ul>
            </article>
            <article style={{ marginTop: "2rem" }}>
                <h3 className="subTitle">useMemo</h3>
                <ul className="script">
                    <li >반복되거나 동일한 값을 메모리에 저장해놓고 사용</li>
                    <li>의존성배열 값이 변경 될 때마다 콜백함수의 값 업데이트</li>
                    <li>useCallback 과 유사함</li>
                    <li className="eg">eg) 복잡한 계산식, 공통 레이아웃</li>
                </ul>
            </article>
            <article style={{ marginTop: "2rem" }}>
                <h3 className="subTitle">useContext</h3>
                <ul className="script">
                    <li>전역으로 쓰는 데이터를 쉽게 공유할 수 있게 해주는 훅</li>
                    <li>최상위 컴포넌트에 선언된 데이터를 하위컴포넌트들이 다이렉트로 사용 할 수 있음</li>
                    <li>context를 만들고 provider로 감싸준다</li>
                    <li>provider value의 props로 데이터를 넣어준다</li>
                    <li>useContext로 데이터를 가져와 사용한다</li>
                </ul>
                <CodeBox code={usecontextText} />
            </article>
        </Section>
    );
}

export default Hook;
