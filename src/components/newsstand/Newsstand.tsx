import { IssueList } from './issue-list';
import { NewsstandView } from './newsstand-view';

import useNewsstand from './hooks';

import './styles.css';

function Newsstand( props: any ) {
    console.log('[Newsstand:sta]');

    let {
        state,
        handleNewsstandClick,
    } = useNewsstand( props );
    
    return (
        <div className='newsstand'>
            <div className='newsstand-header'>
                <div className='issue-area'>
                    <a className='media-link' href='#none'> XX뉴스 </a>
                    <IssueList />
                </div>
                <div className='direct-area'>
                    <a href='#none' className='link_news' style={{ color: '#3565c9', fontWeight: 'bold' }}> 뉴스홈 </a>
                    <a href='#none'> 연애 </a>
                    <a href='#none'> 스포츠 </a>
                    <a href='#none'> 경제 </a>
                </div>
            </div>
            <div className='newsstand-title'>
                <a href='#none' style={{ fontWeight: 'bold' }}> 뉴스스탠드 </a> &nbsp;
                <div className='sort-area'>
                    <a href='#none'> 구독한 언론사 </a>
                    <a href='#none' style={{ fontWeight: 'bold' }}> 전체언론사 </a>
                </div>
                <div id='newsstand_view_btns' className='set-area'>
                    <a href='#none' id='tab_newsstand_view_list' role='tab' onClick={ handleNewsstandClick }>
                        <i className='ico-list'></i>
                    </a>
                    <a href='#none' id='tab_newsstand_view_tile' role='tab' onClick={ handleNewsstandClick }>
                        <i className='ico-tile'></i>
                    </a>
                    <a href='#none' role='tab'>
                        <i className='ico-set'></i>
                    </a>
                </div>
            </div>

            <NewsstandView selectedTabId={ state.selectedTabId } categories={ state.categoryArticleList } />
        </div>
    );
}

export default Newsstand;