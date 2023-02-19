// import { Outlet } from 'react-router-dom';
import '../assets/css/main.css';
import {useEffect, useRef, useState} from 'react';
import { getAllProducts } from '../API';
import { List, Card, Image, Pagination, Carousel  } from "antd"
const { Meta } = Card


function PortalLayout () {
    

    const newsShopData = [
        {
            title:"미즈민",
            content:"설날맞이 BEST 아우터 30%SALE~"
        },
        {
            title:"오벨리",
            content:"설날맞이 최대 75%할인!"
        },
        {
            title:"쿠팡",
            content:"와우회원이라면! 매일새로운 특가"
        },
        {
            title:"뮬라웨어",
            content:"산뜻한 데일리템 1+1혜택"
        },
        {
            title:"제이엘프",
            content:"니트 기획전 19,900원~"
        },
        {
            title:"나나살롱",
            content:"극찬후기!3,883건 슬림라인데님셔츠"
        },
        {
            title:"메이뜰",
            content:"신상7%세일중 예쁘고 편한룩"
        },
        {
            title:"오벨리",
            content:"설날맞이 최대 75%할인!"
        },
        {
            title:"일품나라",
            content:"매콤한돼지갈비찜 46%할인이벤트!"
        },
        {
            title:"몽베숲",
            content:"신발방수스프레이 66% 할인중 "
        },
        {
            title:"신민전자",
            content:"1+1 특별행상 1인용 라면포트"
        },
        {
            title:"수면상점",
            content:"우리집필수감성템 무드등 29% 특가"
        },
        {
            title:"요즘공구",
            content:"요즘공구기획특가 가정용사다리할인"
        },
        {
            title:"발롱뷰티",
            content:"뭘해도 건조해? 바디오일 36%OFF"
        },
    ]
    const onePlusData = [
        {
            img:"fried_rice",
            thumimg:"fried_rice_thum",
            content:"생어거스틴&발재반점 아시안푸드 볶음밥&커리&중화면2팩+2패 ",
            discount:"45%",
            price:"9,900원"
        },
        {
            img:"mandarin",
            thumimg:"mandarin_thum",
            content:"4차앵콜!! 제주 명품 레드향 1kg+1kg (총 2kg) 15브릭스 당도!",
            discount:"69%",
            price:"14,900원"
        },
        {
            img:"crab",
            thumimg:"crab_thum",
            content:"수율 70% 이상! 당일조업 신선한 제철 붉은대게 홍게 1kg+1kg",
            discount:"59%",
            price:"19,900원"
        },
        {
            img:"tissue",
            thumimg:"tissue_thum",
            content:"모나리자 보타닉포레 블라썸(모케향) 3겹 27M 30롤+30롤",
            discount:"47%",
            price:"26,900원"
        },
        {
            img:"cleaning_cloth",
            thumimg:"cleaning_cloth_thum",
            content:"3M 대용량 정전기 청소포 150매 + 40매 특별행사!!",
            discount:"26%",
            price:"13,500원"
        },
        {
            img:"sweet_potato",
            thumimg:"sweet_potato_thum",
            content:"무농약 해남 꿀고구마 2.5kg+2.5kg 대 사이즈(총 5kg)",
            discount:"26%",
            price:"13,500원"
        },
        {
            img:"meat",
            thumimg:"meat_thum",
            content:"320도에 구운 초벌삼겹살 원육 300그램 + 300그램",
            discount:"33%",
            price:"17,900원"
        },
        {
            img:"cable",
            thumimg:"cable_thum",
            content:"벨크로 케이블 타이 전선 정리 찍찍이 1m 3개+3개",
            discount:"51",
            price:"3,900원"
        },
    ]
    const shopData = [
           
        {
            gridType:"A",
            company:"UMAR",
            products:[
            {
                title:"벨트 가죽 교체",
                img:"belt_logo_black",
                content:"쓰던 버클 그대로",
            },
            {
                title:"한국 총판",
                img:"belt_logo_brown",
                content:"스타메라 벨트",
            },
            {
                title:"이태리 완제품",
                img:"belt_logo_blue",
                content:"직수입 가죽벨트",
            }
        ]

        },
        {
            gridType:"A",
            company:"미라지가구",
            products:[
                {
                    title:"넉넉한 수납공간",
                    img:"desk_logo_1",
                    content:"활용도가 좋아요~",
                },
                {
                    title:"완벽한 동선고려",
                    img:"desk_logo_2",
                    content:"홈데스크 34%SALE",
                },
                {
                    title:"유럽 감성의",
                    img:"desk_logo_3",
                    content:"우아한 고급가구!",
                }
            ]
        },
        {
            gridType:"A",
            company:"아라크네",
            products:[
                {
                    title:"넉넉한 수납공간",
                    img:"curtain_logo_black",
                    content:"활용도가 좋아요~",
                },
                {
                    title:"완벽한 동선고려",
                    img:"curtain_logo_brown",
                    content:"홈데스크 34%SALE",
                },
                {
                    title:"유럽 감성의",
                    img:"curtain_logo_white",
                    content:"우아한 고급가구!",
                }
            ]
        },
        {
            gridType:"A",
            company:"아라크네",
            products:[
                {
                    title:"넉넉한 수납공간",
                    img:"curtain_logo_black",
                    content:"활용도가 좋아요~",
                },
                {
                    title:"완벽한 동선고려",
                    img:"curtain_logo_brown",
                    content:"홈데스크 34%SALE",
                },
                {
                    title:"유럽 감성의",
                    img:"curtain_logo_white",
                    content:"우아한 고급가구!",
                }
            ]
        },

    ]  
    // const [shopitems, setShopItem] = useState([]);
    // setShopItem(shopitems)
    // useEffect (()=>{
    //     <ShoplistComponent rowdatas={shopData} />
    //     console.log(shopData);
    // },[]);


    const [items, setItems] = useState<any[]>([]);
    const [totalPage, setTotalPage] = useState(1);

        useEffect (()=>{
            getAllProducts().then(( res ) => {
                setItems(res.products);  
                setTotalPage(res.total);
        });    
    },[]);
    let loopInterval = setInterval(() => {

    },3000)
    const ref = useRef<any>();

    return (
        <div className='wrap'>
            <div className='inner'>
                <header>
                    <div id='search'>
                        <div style={{paddingRight: '25px'}}>
                            <img src={ require('../assets/img/logo.png') } style={{width: '222px', height: '52px'}} alt = "face" />
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <input id='search_input'/>
                            <button id='search_btn' className=''></button>
                        </div>
                    </div>
                    <div id='gnb'>
                        <ul id='nav-list'>
                            <li style={{ color: "#19ce60" }}>
                                <a href='/#'>메일</a>
                            </li>
                            <li style={{ color: "#19ce60" }}>
                                <a href='/#'>카페</a>
                            </li>
                            <li style={{ color: "#19ce60" }}>
                                <a href='/#'>블로그</a>
                            </li>
                            <li style={{ color: "#19ce60" }}>
                                <a href='/#'>지식iN</a>
                            </li>
                            <li style={{ color: "#19ce60" }}>
                                <a href='/#'>쇼핑</a>
                            </li>
                            <li style={{ color: "#19ce60" }}>
                                <a href='/#'>쇼핑</a>
                            </li>
                            <li style={{ color: "#19ce60" }}>
                                <a href='/#'>쇼핑LIVE</a>
                            </li>
                            <li style={{ color: "#19ce60" }}>
                                <a href='/#'>Pay</a>
                            </li>
                            <li style={{ color: "#19ce60" }}>
                                <a href='/#'>TV</a>
                            </li>
                            <li style={{ color: "#000000" }}>
                                <a href='/#'>사전</a>
                            </li>
                            <li style={{ color: "#000000" }}>
                                <a href='/#'>뉴스</a>
                            </li>
                            <li style={{ color: "#000000" }}>
                                <a href='/#'>증권</a>
                            </li>
                            <li style={{ color: "#000000" }}>
                                <a href='/#'>부동산</a>
                            </li>
                            <li style={{ color: "#000000" }}>
                                <a href='/#'>지도</a>
                            </li>
                            <li style={{ color: "#000000" }}>
                                <a href='/#'>VIBE</a>
                            </li>
                            <li style={{ color: "#000000" }}>
                                <a href='/#'>도서</a>
                            </li>
                            <li style={{ color: "#000000" }}>
                                <a href='/#'>웹툰</a>
                            </li>
                        </ul>
                        <a id='more_btn' href='/#'>더보기</a>
                    </div>  
                </header>
                <main>
                    <div className='main-wrap'>
                        <div className='right-content'>

                        </div>
                        <div className='left-content'>
                            <div className="login_box">
                                <p style={{fontSize:12}}>네이버를 더 안전하고 편리하게 이용하세요</p>
                                <a className="link_login">
                                    <i className="ico_naver">NAVER</i>
                                    로그인
                                </a>
                                <div className="login_sub_area">
                                    <div className="login_find">
                                        <a style={{paddingRight:20}}>아이디</a>
                                        <a>비밀번호찾기</a>
                                    </div>
                                    <div className="login_join">
                                        <a>회원가입</a>
                                    </div>
                                </div>
                            </div>
                            <div className="card_wrap" style={{width:"100%",float:"left"}}>
                                <div className="card_news_nav" style={{display:"inline-flex",paddingTop:13,paddingRight:20,float:"right"}}>
                                    <img  src={ require('../assets/img/left.png') }  onClick={()=>{
                                        ref.current.prev();
                                    }}  style={{height:24, width:24}}></img>
                                    <img  src={ require('../assets/img/right.png') } onClick={()=>{
                                        ref.current.next();
                                    }}  style={{height:24, width:24}}></img>
                                </div>
                                <Carousel  
                                    style={{paddingLeft:15,display:"inline-flex",width:"80%"}}  
                                    autoplay 
                                    dots={true}
                                    pauseOnDotsHover={true}
                                    ref={ref}
                                >
                                    <div>
                                        <a>
                                            <strong style={{color:"black"}}>증시</strong>
                                            <span className="issue_title"> 유로스톡스 </span>
                                            <strong className="issue_title"> 4,727.88</strong>
                                        </a>
                                    </div>
                                    <div>
                                        <a>
                                        <strong style={{color:"black"}}>이슈</strong>
                                            <span className="issue_title"> 코로나바이러스감염증-19 현황</span>
                                        </a>
                                    </div>
                                    <div>
                                        <a>
                                        <strong style={{color:"orange"}}>LIVE</strong>
                                            <span className="issue_title"> 저녁방송 메인뉴스 보기</span>
                                        </a>
                                    </div>
                                 </Carousel>

                            </div>

                            <div className="board_player">
                                <div className="inner_img">
                                    <img  src={ require('../assets/img/apartment_logo.png') }  style={{height:200, width:350}}></img>
                                </div>
                            </div>
                            <div className="shop_header">
                                <span style={{display:"flex"}}><img src={ require('../assets/img/navermark.png') } style={{width:15,height:15}}/><strong>트렌드 쇼핑 &gt;</strong></span>
                                <div className="shop_list">
                                    <a><strong>상품</strong></a>
                                    <a><strong>쇼핑몰</strong></a>
                                    <a><strong>MEN</strong></a>
                                </div>
                            </div>    
                            <div className="content">
                                <div className="group_mall">
                                    <div className="group_area">
                                        <a>쿠팡</a>
                                        <a>G마켓</a>
                                        <a>옥션</a>
                                        <a>11번가</a>
                                        <a>SSG닷컴</a>
                                    </div>
                                    <div className="group_area">
                                        <a>티몬</a>
                                        <a>올리브영</a>
                                        <a>위메프</a>
                                        <a>GS샵</a>
                                    </div>
                                </div>
                                <div className="group_goods">
                                    <List
                                        className="itemList" 
                                        pagination={{ simple:true, pageSize:12, position:'both'}}
                                        grid={{column:3}} 
                                        renderItem={(product,index) => {
                                        return <Card  key={index} cover={<Image className="cardItemImage" src={product.thumbnail}/>}>
                                                    <Meta style={{fontSize:10}} title={product.title} />
                                                </Card>
                                                
                                                
                                    }} dataSource={items}>
                                        
                                    </List>
                                    {/* <Pagination simple   /> */}
                                </div>
                                <div className="group_event">
                                    <NewsShopList rowDatas={newsShopData} />
                                </div> 
                                <div className="group_pnf">

                                    {/* <List 
                                      
                                        grid={{column:1}}
                                        renderItem={(data,index) =>{
                                            return  <div className='pnf_list' >
                                                        <div > 
                                                            <img src={ require(`../assets/img/${data.img}.jpg`)  } style={{height:100 , paddingLeft:5}} />
                                                            <span>asdasd</span>
                                                        </div>
                                                    
                                                 </div>
                                            
                                        }}
                                        dataSource={}
                                    >
                                    </List> */}
                                <ShoplistComponent rowDatas={shopData} />
                                </div> 
                            </div>
                            <div className="group_plusdeal" style={{display:"flex", alignItems:"center"}}>
                                <OneplusShopItemList rowDatas={onePlusData} />
                            </div> 
                        </div>
                    </div>
                </main>
                <footer>
                    <div className="footer_container">
                        <div className="footer_Image" >
                            <img src={ require('../assets/img/open_podium_scholarly_essay.png') } style={{height:86, width:160}}></img>
                            <div className="thumnail_content" style={{height:86, width:196}}>
                                <em style={{fontSize:12, color:"#58c464" ,fontWeight:700}}>열린연단 석학에세이</em><br/>
                                <strong style={{fontSize:13}}>관제 중화민족주의</strong>
                                <div style={{fontSize:12}}>대국에 맞지않은 옷</div>
                                <div style={{fontSize:12}}>제국으로서의 재부상에 부쳐</div>
                            </div>
                            <img src={ require('../assets/img/junior_school.png') } style={{height:86, width:160}}></img>
                            <div className="thumnail_content" style={{height:86, width:196}}>
                                <em style={{fontSize:12, color:"#58c464" ,fontWeight:700}}>쥬니버스쿨</em><br/>
                                <strong style={{fontSize:13}}>수학부터 코딩까지</strong>
                                <div style={{fontSize:12}}>쥬니어 네이버가 제데로 만든</div>
                                <div style={{fontSize:12}}>우리 아이 무료 학습 앱</div>
                            </div>
                            <img src={ require('../assets/img/naver_square_gwangju.png') } style={{height:86, width:160}}></img>
                            <div className="thumnail_content" style={{height:86, width:196}}>
                                <em style={{fontSize:12, color:"#58c464" ,fontWeight:700}}>네이버 스퀘어 광주</em><br/>
                                <strong style={{fontSize:13}}>공유 오피스 입주자 모집</strong>
                                <div style={{fontSize:12}}>스마트스토어 사업자</div>
                                <div style={{fontSize:12}}>업무공간 무료 지원 혜택</div>
                            </div>
                           
                        </div>
                        <div className="notice_area">
                            <a><strong>공지사항</strong></a>
                            <a>서비스 전체보기</a>
                        </div>
                        <div className="test">
                            <div className="box_wrap">
                                <div className="creators_box">
                                    <h3 className="title">Creators</h3>
                                    <a style={{paddingLeft:10}}>크리에이터</a>
                                    <a>스몰비즈니스</a>
                                </div>
                                <div className="partners_box">
                                    <h3 className="title">Partners</h3>
                                    <a style={{paddingLeft:10}}>SME 풀케어 시스템</a>
                                    <a>비즈니스 . 광고</a>
                                    <a>스토어 개설</a>
                                    <a>지역업체 등록</a>
                                    <a>엑스퍼트 등록</a>
                                </div>
                                <div className="developers_box">
                                    <h3 className="title">Developers</h3>
                                    <a style={{paddingLeft:10}}>네이버 개발자 센터</a>
                                    <a>오픈 API</a>
                                    <a>오픈소스</a>
                                    <a>네이버 D2SF</a>
                                    <a>네이버 랩스</a>
                                </div>
                            </div>
                            <div className="corp_service">
                                <div style={{fontSize:12}}>
                                    <strong>웨일 브라우저</strong><br/>
                                    <a>다운받기</a>
                                </div>
                                <img src={ require('../assets/img/whale_blowser_logo.png') } style={{height:80, width:80}}></img>
                                <div style={{fontSize:12}}>
                                    <strong>프로젝트 꽃</strong><br/>
                                    <a>바로가기</a>
                                </div>
                                <img src={ require('../assets/img/flower.png') } style={{height:80, width:80}}></img>
                            </div>
                        </div>
                        <div className="corp_area" style={{wordSpacing:10}}>
                            <a>회사소개</a>
                            <a>인재채용</a>
                            <a>제휴제안</a>
                            <a>이용약관</a>
                            <a>개인정보처리방침</a>
                            <a>청소년보호정책</a>
                            <a>네이버 정책</a>
                            <a>고객센터</a>
                            <a><strong>NAVERCorp.</strong></a>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
    // function DataTest() {

    

    //     return (
    //         <div>

    //         </div>
            
    //     )
    }
// }

function testClick(){
    alert("#@#")
}
function NewsShopList ( props : any  ){
    let numEachPage = 7
    let [test, setTest] = useState({
        minValue:0,
        maxValue:7
    });
    const  HandleChange  =  (data : any) =>  {

        setTest({
          minValue: (data - 1) * numEachPage,
          maxValue: data * numEachPage
        });
    };
    return (
        <div>
            <div className="shop_title">
                <strong>반갑다! 쇼핑뉴스</strong>
                <Pagination
                        simple={true}
                        defaultCurrent={1}
                        defaultPageSize={numEachPage}
                        onChange={HandleChange}
                        total={props.rowDatas.length} //total number of card data available
                    />
            </div>
            <ul className="list_event">
            {props.rowDatas &&
                props.rowDatas.length > 0 &&
                props.rowDatas.slice(test.minValue, test.maxValue).map((val : any) =>(
                <li>
                    <strong>{val.title}</strong>
                    <span style={{paddingLeft:10}}>{val.content}</span>
                </li>
                ))
            }
            </ul>
        </div>
    )
}

function OneplusShopItemList ( props : any ){
    let numEachPage = 3
    let [test, setTest] = useState({
        minValue:0,
        maxValue:3
    });
    const  HandleChange  =  (data : any) =>  {

        setTest({
          minValue: (data - 1) * numEachPage,
          maxValue: data *numEachPage
        });
    };
    return(
        <div>
            <div className="shop_title" >
                <img className="" style={{width:40, height:21}} src={ require("../assets/img/oneplus.png") }/>
                <span style={{paddingLeft:5}}>전 상품 무료배송!</span>
                <Pagination
                        simple={true}
                        defaultCurrent={1}
                        defaultPageSize={numEachPage}
                        onChange={HandleChange}
                        total={props.rowDatas.length} //total number of card data available
                    />
            </div>
            <div className="oneplusitemlist">
                <div>
                    {props.rowDatas &&
                        props.rowDatas.length > 0 &&
                        props.rowDatas.slice(test.minValue, test.maxValue).map((val : any) =>(
                        <div style={{ display: 'inline-block' }}>  
                            <div className="oneplus_item">    
                                <Image  className="imge_Item"  src={ require(`../assets/img/${val.img}.jpg`)  } style={{ paddingRight:10, width: 85, height: 60 ,float:"left"}} />
                                <img className="ico_one_plus"  src={ require("../assets/img/oneplus_1.png") }/>
                                <img className="ico_plus_logo"  src={ require("../assets/img/plus_logo.png") } style={{width: 15, height: 15}} />
                                <img className="one_plus_thumnail" style={{marginRight:10,width:60, height:60}} src={ require(`../assets/img/${val.thumimg}.jpg`)  }/>
                            </div>
                            <div className="oneplus_item_title" style={{fontSize:12}}>
                                <span>{val.content}</span>
                            </div>
                            <div className="oneplus_item_price">
                                <span style={{color:"red" , paddingRight:3,fontSize:12}}>{val.discount}</span>
                                <strong style={{fontSize:12}}>{val.price}</strong>
                            </div>
                            
                       </div>
                    ))
                }
                </div>
            </div>
        </div>
    )
}
function ShoplistComponent( props : any ){

        return(
            <div>
                <ShopListHeaderComponent selectedItem={ props.rowDatas} />
                <ShopListBodyComponent   selectedItem={ props.rowDatas } />
            </div>
        )        
}
function ShopListHeaderComponent(  props : any ){
    let numEachPage = 3
    let [test, setTest] = useState({
        minValue:0,
        maxValue:3
    });
    const  HandleChange  =  (data : any) =>  {

        setTest({
          minValue: (data - 1) * numEachPage,
          maxValue: data *numEachPage
        });
    };

   return (
      <div >
{/*          
         <span style={{float:"right"}}>
         <Pagination
                defaultCurrent={1}
                defaultPageSize={numEachPage}
                onChange={HandleChange}
                total={props.selectedItem.length} //total number of card data available
            />
        </span> */}
      </div>
   );
}

function ShopListBodyComponent(  props : any ){

    let numEachPage = 3
    let [test, setTest] = useState({
        minValue:0,
        maxValue:3
    });
    let [current , setCurrent] = useState(1)


    const  HandleChange  =  (data : any) =>  {

        setTest({
          minValue: (data - 1) * numEachPage,
          maxValue: data *numEachPage
        });
        setCurrent(data)
    };

    console.log(props,"body")
    return (
        <div>
            <div className='shopItemList'>
                {props.selectedItem &&
                    props.selectedItem.length > 0 &&
                    props.selectedItem.slice(test.minValue, test.maxValue).map( ( val1 :any , idx2 : any ) =>(
                    (
                    <div> 
                        <span style={{float:"left" , paddingLeft:5, fontSize:12}}><strong>{val1.company}</strong></span>       
                        <div style={{ display: 'inline-block' }}>          
                            {val1.products.map( (val2 :any , idx2 : any  ) =>(
                                 <div style={{ display: 'inline-block' }}>      
                                     <Image title={val2.title} className="imgeItem"  src={ require(`../assets/img/${val2.img}.jpg`)  } style={{  paddingLeft:5, width: 107, height: 146 ,float:"left"}} />
                                      <strong className="title" style={{fontSize:12}}>{val2.title}</strong>
                                     <span className="title" style={{fontSize:12}}>{val2.content}</span>
                                </div>
                            ))
                        }
                        </div>
                    </div>
                    )   
                ))}
                <div style={{display:"flex",justifyContent:"center", paddingTop:20 }}>
                    <Pagination
                        simple={true}
                        defaultCurrent={current}
                        defaultPageSize={numEachPage}
                        onChange={HandleChange}
                        total={props.selectedItem.length} //total number of card data available
                    />
                </div>
            </div>
        </div>
    )

}




export default PortalLayout;    