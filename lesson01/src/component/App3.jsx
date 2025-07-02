//Day1_05 : KPopUL 컴포넌트의 부모 컴포넌트
//                      ㄴ {members} 배열을 부모가 전달
//                 index.js 에서 App 의 파일 위치 수정

import KpopUL from "./KpopUL";

export default function App() {
    const twice = ['나연', '모모', '다현', '지효']
    return (
        <div>
            {/* 자식컴포넌트에 정의한 속성들(members, title, 새로운속성,,,)은
             하나의 객체로 자식 컴포넌트에게 전달 */}
            <KpopUL members={twice} title={'트와이스'}/>
            <KpopUL members={['슈가', '지민', '제이홉', '뷔']} title={'BTS'}/>
        </div>
    );
}