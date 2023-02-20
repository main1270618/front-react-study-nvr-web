function Footer() {
    return (
        <footer>
            <div className="footer_container">
                <div className="footer_Image" >
                    <img src={ require('../../assets/img/open_podium_scholarly_essay.png') } style={{height:86, width:160}} alt=''/>
                    <div className="thumnail_content" style={{height:86, width:196}}>
                        <em style={{fontSize:12, color:"#58c464" ,fontWeight:700}}>열린연단 석학에세이</em><br/>
                        <strong style={{fontSize:13}}>관제 중화민족주의</strong>
                        <div style={{fontSize:12}}>대국에 맞지않은 옷</div>
                        <div style={{fontSize:12}}>제국으로서의 재부상에 부쳐</div>
                    </div>
                    <img src={ require('../../assets/img/junior_school.png') } style={{height:86, width:160}} alt=''/>
                    <div className="thumnail_content" style={{height:86, width:196}}>
                        <em style={{fontSize:12, color:"#58c464" ,fontWeight:700}}>쥬니버스쿨</em><br/>
                        <strong style={{fontSize:13}}>수학부터 코딩까지</strong>
                        <div style={{fontSize:12}}>쥬니어 네이버가 제데로 만든</div>
                        <div style={{fontSize:12}}>우리 아이 무료 학습 앱</div>
                    </div>
                    <img src={ require('../../assets/img/naver_square_gwangju.png') } style={{height:86, width:160}} alt=''/>
                    <div className="thumnail_content" style={{height:86, width:196}}>
                        <em style={{fontSize:12, color:"#58c464" ,fontWeight:700}}>네이버 스퀘어 광주</em><br/>
                        <strong style={{fontSize:13}}>공유 오피스 입주자 모집</strong>
                        <div style={{fontSize:12}}>스마트스토어 사업자</div>
                        <div style={{fontSize:12}}>업무공간 무료 지원 혜택</div>
                    </div>
                    
                </div>
                <div className="notice_area">
                    <a href='#none'><strong>공지사항</strong></a>
                    <a href='#none'>서비스 전체보기</a>
                </div>
                <div className="test">
                    <div className="box_wrap">
                        <div className="creators_box">
                            <h3 className="title">Creators</h3>
                            <a href='#none' style={{paddingLeft:10}}>크리에이터</a>
                            <a href='#none'>스몰비즈니스</a>
                        </div>
                        <div className="partners_box">
                            <h3 className="title">Partners</h3>
                            <a href='#none' style={{paddingLeft:10}}>SME 풀케어 시스템</a>
                            <a href='#none'>비즈니스 . 광고</a>
                            <a href='#none'>스토어 개설</a>
                            <a href='#none'>지역업체 등록</a>
                            <a href='#none'>엑스퍼트 등록</a>
                        </div>
                        <div className="developers_box">
                            <h3 className="title">Developers</h3>
                            <a href='#none' style={{paddingLeft:10}}>네이버 개발자 센터</a>
                            <a href='#none'>오픈 API</a>
                            <a href='#none'>오픈소스</a>
                            <a href='#none'>네이버 D2SF</a>
                            <a href='#none'>네이버 랩스</a>
                        </div>
                    </div>
                    <div className="corp_service">
                        <div style={{fontSize:12}}>
                            <strong>웨일 브라우저</strong><br/>
                            <a href='#none'>다운받기</a>
                        </div>
                        <img src={ require('../../assets/img/whale_blowser_logo.png') } style={{height:80, width:80}} alt=''/>
                        <div style={{fontSize:12}}>
                            <strong>프로젝트 꽃</strong><br/>
                            <a href='#none'>바로가기</a>
                        </div>
                        <img src={ require('../../assets/img/flower.png') } style={{height:80, width:80}} alt=''/>
                    </div>
                </div>
                <div className="corp_area" style={{wordSpacing:10}}>
                    <a href='#none'>회사소개</a>
                    <a href='#none'>인재채용</a>
                    <a href='#none'>제휴제안</a>
                    <a href='#none'>이용약관</a>
                    <a href='#none'>개인정보처리방침</a>
                    <a href='#none'>청소년보호정책</a>
                    <a href='#none'>네이버 정책</a>
                    <a href='#none'>고객센터</a>
                    <a href='#none'><strong>NAVERCorp.</strong></a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;