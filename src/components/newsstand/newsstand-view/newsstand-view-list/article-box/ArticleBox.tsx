const ArticleBox = ( props: any ) => {
    // console.log('[CategoryBox:sta]');
    // console.log('[CategoryBox:sta].props ===== ', props);
    return (
        <div className='article-box'>
            <div className='media-box'>
                <a className='media-link' href='#none'> 
                    <img height='20px' src={ require('../../../../../assets/img/news_logo_001.png') } alt='' />
                </a>
                <span className='time'> 2023.01.29. 05:52 편집 </span>
                <a className='close-btn' href='#none' style={{ display: 'none' }}> </a>
                <a className='plus-btn' href='#none'> 구독하기 </a>
            </div>
            <div className='news-box'>
                <div className='main-news'>
                    <a href='#none'>
                        <img src={ require('../../../../../assets/img/233953_001.png') } alt=''/>
                    </a>
                    <a className='title' href='#none'>
                        { props.rowdatas !== null && props.rowdatas[0].title }
                    </a>
                </div>
                <div className='sub-news'>
                    <ul className='list-news'>
                        { props.rowdatas && props.rowdatas.map( ( item: any, idx: number ) => (
                                ( idx === 0 ) ? '' :  
                                <li key={ idx } className='news-item'>
                                    <a href='#none'> { item.title } </a>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>  
        </div>
    );
}

export default ArticleBox;