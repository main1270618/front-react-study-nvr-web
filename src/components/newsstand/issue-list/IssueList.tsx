import React, { useState, useEffect } from "react";

const issueRowdatas = [
    { id: '0', title: `"3년만에 온가족 모여"…설 연휴 '대이동' 시작`, content: '', link: '#', },
    { id: '1', title: `尹대통령 "NPT 존중이 현실적…日 안보강화 크게 문제 안돼"`, content: '', link: '#', },
    { id: '2', title: `실내마스크 벗는다…30일부터 자율·권고로 전환`, content: '', link: '#', },
    { id: '3', title: `"세상에 공짜 어딨나"…'도움 대가' 요구한 이정근`, content: '', link: '#', },
    { id: '4', title: `'대기업 회장 스토킹 혐의' 50대 여성, 접근금지 처분`, content: '', link: '#', },
];

function IssueList( props: any ) {
    const [ count, setCount ] = useState(0);
    const [ issueRowdata, setIssueRowdata ] = useState({
        id: '', title: '', content: '', link: '',
    });

    const autoRender = () => {
        const maxCount = issueRowdatas.length -1;

        window.setTimeout(() => {
            
            if( count === maxCount ) setCount( 0 );
            else setCount( count + 1 );

            setIssueRowdata( issueRowdatas[ count ] )

        }, 1500);
    };

    useEffect(() => {
        autoRender();
    });

    return (
        <div className='issue-list'> 
            <a href={ issueRowdata.link }> { issueRowdata.title }  </a>
        </div>
    );
}
export default IssueList;