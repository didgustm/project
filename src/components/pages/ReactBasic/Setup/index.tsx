import Section from "@components/templates/Section";
import { CodeBox } from "@components/organisms";
import setupText from "./setup.txt";
import aliasText from "./alias.txt";
import routerText from "./router.txt";
import layoutText from "./layout.txt";

function Setup() {
    return (
        <Section title="Set up" desc="React, vite, typescript 환경 세팅">
            <article>
                <h3 className="subTitle">설치하기</h3>
                <CodeBox code={setupText} />
            </article>
            <article>
                <h3 className="subTitle">Alias 설정(path)</h3>
                <dl className="script">
                    <dt className="dt">Alias 란?</dt>
                    <dd>경로명을 지정된 문자로 축약해서 사용 가능</dd>
                    <dd className="eg">
                        eg) "../../../components/pages/test" 를 alias 설정 후
                        "@pages/test"
                    </dd>
                </dl>
                <dl className="script">
                    <dt className="dt">설정 방법</dt>
                    <dd>vite-tsconfig-paths @types/node 설치(dev)</dd>
                    <dd>
                        vite config 파일에에 vite-tsconfig-paths 불러오고
                        plugins 에 추가
                    </dd>
                    <dd>
                        tsconfig.json파일 compilerOptions path 에서 경로 설정
                    </dd>
                </dl>
                <CodeBox code={aliasText} />
            </article>
            <article>
                <h3 className="subTitle">Router 설정</h3>
                <dl className="script">
                    <dt className="dt">router ?</dt>
                    <dd>페이지 이동 처리(입력한 URL 에 맞는 페이지 연결)</dd>
                    <dd>
                        SPA(새 페이지에서 필요한 부분만 리랜더링, 새로고침 x )
                    </dd>
                </dl>
                <dl className="script">
                    <dt className="dt">설정 방법</dt>
                    <dd>react-router-dom 설치</dd>
                    <dd>Routes.tsx 파일에 createBrowserRouter 생성</dd>
                    <dd>
                        router 리스트 추가 ( path, element, children 객체 배열)
                    </dd>
                    <dd className="small">공통 레이아웃 설정( memo )</dd>
                    <dd>
                        상위 컴포넌트(app)에 RouterProvider 추가. router props
                        추가
                    </dd>
                </dl>
                <CodeBox code={routerText} />
                <dl className="script">
                    <dt className="dt">공통 레이아웃 설정</dt>
                    <dd>
                        여러 페이지에 공통으로 들어가는 컴포넌트들을 레이아웃화
                        해서 사용
                    </dd>
                    <dd>
                        페이지 이동 시 마다 리랜더링 하지 않고 memory에 넣어서
                        사용
                    </dd>
                    <dd>
                        공통 컴포넌트들을 레이아웃으로 만들고 Outlet 태그에 개별
                        페이지 내용이 들어감
                    </dd>
                    <dd>
                        Suspense 컴포넌트로 로드 되기 전 대체화면 표시 가능 (
                        fallback 속성 )
                    </dd>
                    <dd>CreateBrowserRouter 상위 객체에 element로 추가</dd>
                </dl>
                <CodeBox code={layoutText} />
            </article>
        </Section>
    );
}

export default Setup;
