import { Outlet } from 'react-router-dom';

import '../assets/css/main.css';


function PortalLayout () {
    return (
        <div className='wrap'>
            <div className='inner'>
                <header>
                    <div id='search'>
                        <div style={{paddingRight: '25px'}}>
                            <img src={ require('../assets/img/logo.png') } style={{width: '222px', height: '52px'}} />
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <input id='search_input'/>
                            <button id='search_btn' className=''></button>
                        </div>
                    </div>
                    <div id='gnb'>
                        <ul id='nav-list'>
                            <li style={{ color: "#19ce60" }}>
                                <a href='#'>메일</a>
                            </li>
                            <li style={{ color: "#19ce60" }}>
                                <a href='#'>카페</a>
                            </li>
                            <li style={{ color: "#19ce60" }}>
                                <a href='#'>블로그</a>
                            </li>
                            <li style={{ color: "#19ce60" }}>
                                <a href='#'>지식iN</a>
                            </li>
                            <li style={{ color: "#19ce60" }}>
                                <a href='#'>쇼핑</a>
                            </li>
                            <li style={{ color: "#19ce60" }}>
                                <a href='#'>쇼핑</a>
                            </li>
                            <li style={{ color: "#19ce60" }}>
                                <a href='#'>쇼핑LIVE</a>
                            </li>
                            <li style={{ color: "#19ce60" }}>
                                <a href='#'>Pay</a>
                            </li>
                            <li style={{ color: "#19ce60" }}>
                                <a href='#'>TV</a>
                            </li>
                            <li style={{ color: "#000000" }}>
                                <a href='#'>사전</a>
                            </li>
                            <li style={{ color: "#000000" }}>
                                <a href='#'>뉴스</a>
                            </li>
                            <li style={{ color: "#000000" }}>
                                <a href='#'>증권</a>
                            </li>
                            <li style={{ color: "#000000" }}>
                                <a href='#'>부동산</a>
                            </li>
                            <li style={{ color: "#000000" }}>
                                <a href='#'>지도</a>
                            </li>
                            <li style={{ color: "#000000" }}>
                                <a href='#'>VIBE</a>
                            </li>
                            <li style={{ color: "#000000" }}>
                                <a href='#'>도서</a>
                            </li>
                            <li style={{ color: "#000000" }}>
                                <a href='#'>웹툰</a>
                            </li>
                        </ul>
                        <a id='more_btn' href='#'>더보기</a>
                    </div>  
                </header>
                <main>
                    {/* <Outlet/> */}
                </main>
                <footer>
                    
                </footer>
            </div>
        </div>
    );
}

export default PortalLayout;    