async function requestServerApi( tmpdatas: any ) {
    return new Promise((resolve, reject) => {
        setTimeout( function() {
            resolve( tmpdatas )
        }, 250)
    });
}

async function getCategoryArticleList() {

    const rowdatas = [
        { id: '0', nm: '종합/경제', 
            articles: [
                { id: '0', title: `"주유 할인쿠폰이 유료?"...카드사 유료 부가상품 민원 급증`, content: '', },
                { id: '1', title: `이재명 대통령실 부대변인 '자진 사퇴'…'순방일정 유출 도의적 책임'`, content: '', },
                { id: '2', title: `파키스탄서 다리 아래로 '버스 추락'…최소 41명 사망`, content: '', },
                { id: '3', title: `내일 실내마스크 의무 해제...언제·어디서 써야 할까`, content: '', },
                { id: '4', title: `금리 낮춘 '특례보금자리론' 접수 시작···꼼꼼히 따져보자`, content: '', },
                { id: '5', title: `'36兆' 뭉칫돈 몰린 MMF, 온기도는 채권시장 유입 가능성↑`, content: '', },
                { id: '6', title: `중국, 일본 '비자 보복' 풀었다...한국은?`, content: '', },
            ]
        },
        { id: '1', nm: '방송/통신', 
            articles: [
                { id: '0', title: `검찰, 이재명 구속영장 청구…제1야당 대표 헌정사 처음`, content: '', },
                { id: '1', title: `더탐사 대표 또 구속영장…이번엔 청담동 술자리 의혹`, content: '', },
                { id: '2', title: `"유치원 급식에 모기 기피제 넣어"…교사 징역 4년`, content: '', },
                { id: '3', title: `17세 소녀, 강진 발생 248시간 만에 '극적 구조'`, content: '', },
                { id: '4', title: `與 당권주자들, 호남 연설회…"내부총질 vs 차익 해명"`, content: '', },
                { id: '5', title: `경찰, '춘천 실종 초등생 유인' 50대 구속 영장 신청`, content: '', },
                { id: '6', title: `해외직구 식품에 발기부전치료제 성분…위해식품 273개 반입 차단`, content: '', },
            ]
        },
        { id: '2', nm: 'IT', 
            articles: [
                { id: '0', title: `'챗GPT'가 남긴 또 다른 숙제...'검색 유료화'`, content: '', },
                { id: '1', title: `인터넷 서핑에 혁명 몰고온 인공지능 검색엔진`, content: '', },
                { id: '2', title: `"MS, 구글과의 경쟁은 '쩐'의 전쟁...전략적으로 이용"`, content: '', },
                { id: '3', title: `검색 전쟁에 참여한 스타트업 니바...구독형 AI 검색엔진 글로벌 출시`, content: '', },
                { id: '4', title: `소림사도 중국판 챗GPT 이용 예약`, content: '', },
                { id: '5', title: `전쟁의 서막...'구글 vs MS'`, content: '', },
                { id: '6', title: `AI타임스 언론사에서 직접 편집한 뉴스입니다.`, content: '', },
            ]
        },
        { id: '3', nm: '영자지', 
            articles: [
                { id: '0', title: `Google's search business doesn't have to be killed by AI chatbots – here's the ugly workaround`, content: '', },
                { id: '1', title: `Europe Roundup: Sterling gains against dollar after strong UK jobs data,European stocks rise,Gold gains, Oil prices dip on U.S. crude reserve release,`, content: '', },
                { id: '2', title: `inflation pressure-February 14th,2023`, content: '', },
                { id: '3', title: `Uber signs cloud deal with Oracle, Google as it shuts its own data centers`, content: '', },
                { id: '4', title: `South China Sea: China must restrain its forces from committing provocations, says Philippines`, content: '', },
                { id: '5', title: `News Corp's job cuts cast a shadow over the future of its newspapers`, content: '', },
                { id: '6', title: `ChatGPT is confronting, but humans have always adapted to new technology`, content: '', },
            ]
        },
        { id: '4', nm: '스포츠/연예', 
            articles: [
                { id: '0', title: `정가은, ‘140억 사기’ 前남편과 이혼…“장영란 꼴 보기 싫어”`, content: '', },
                { id: '1', title: `‘이종석♥’ 아이유, 열애 공개 후 미모 폭주 중`, content: '', },
                { id: '2', title: `‘횡령·사기 무혐의’ 이두희 심경고백 “아내 지숙♥…”`, content: '', },
                { id: '3', title: `이지아, 딸과 함께 포착…우아한 드레스 자태 (판도라)`, content: '', },
                { id: '4', title: `김나정, 방송 저격인가 허언인가 “노출로 욕? 고민 없다”`, content: '', },
                { id: '5', title: `방민아, 30대 되더니…못 알아보겠네`, content: '', },
                { id: '6', title: `강혜원, 화끈하게 드러낸 어깨→숨 막히는 자태`, content: '', },
            ]
        },
        { id: '5', nm: '매거진/전문지', 
            articles: [
                { id: '0', title: `"할거면 확실히"…'프리미엄 웨딩족' 잡기 나선 백화점 업계`, content: '', },
                { id: '1', title: `[메디위키] ⑧이제 의사 대신 '로봇 CPR' 병원·소방에 1000대 넘게 있어요`, content: '', },
                { id: '2', title: `'스카이패스'라 쓰고 '스카이땅콩'으로 읽다… 대한항공 마일리지 갑질 총정리`, content: '', },
                { id: '3', title: `쇼골프, ‘쇼골프 아카데미’ 론칭…연습장 평정 이어 골프 레슨에도 도전`, content: '', },
                { id: '4', title: `농협 하나로마트, 배추·양파 농가 돕기 특별 할인전 사흘간 진행`, content: '', },
                { id: '5', title: `생명보험재단, 희귀질환 딛고 학업 이어간 '한국의 호킹' 행사 개최`, content: '', },
                { id: '6', title: `뇌전증지원센터, 국내 1호 ‘뇌전증 도우미견' 무료 분양`, content: '', },
            ]
        },
        { id: '6', nm: '지역', 
            articles: [
                { id: '0', title: `충북도, 유치 주력 32개 공공기관 선정`, content: '', },
                { id: '1', title: `직지, 반세기 만에 모습 드러낸다`, content: '', },
                { id: '2', title: `중부내륙특별법 입법을 위한 본격적인 행보 시작`, content: '', },
                { id: '3', title: `청주시, 선제적 예방으로 아동학대 신고 줄이고 대응력 높인다`, content: '', },
                { id: '4', title: `청주시의원 보궐선거 입후보 설명회`, content: '', },
                { id: '5', title: `교대 인기 '시들'…떠나는 신입생도 늘어`, content: '', },
                { id: '6', title: `청주예총, 20회 청주예술상 수상자 선정`, content: '', },
            ]
        },
    ];

    const datas = await requestServerApi( rowdatas );

    return datas;
};

const api = {
    getCategoryArticleList: getCategoryArticleList,
};

export default api;