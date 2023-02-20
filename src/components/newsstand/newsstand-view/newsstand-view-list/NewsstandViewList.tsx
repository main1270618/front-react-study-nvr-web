import { CategoryBox } from './category-box';
import { ArticleBox } from './article-box';

import { useNewsstandViewList } from './hooks';

function NewsstandViewList( props: any ) {
    /* TMP DATA */
    console.log('[NewsstandViewList:sta]');
    const {
        state,
        handleCategoryBoxClick,
        handleDataRendered,
    } = useNewsstandViewList( props );

    return (
        <div id='newsstand_view_pick_list' className='newsstand-view-pick-list'>
            <CategoryBox 
                // rowdatas={ state.categoryBox.categories }
                rowdatas={ props.rowdatas }
                onClick={ handleCategoryBoxClick }
                onDataRendered={ handleDataRendered }
            />
            { state.categoryBox.selectedIndex && <ArticleBox 
                rowdatas={ props.rowdatas[ Number( state.categoryBox.selectedIndex ) ].articles }
            />}
        </div>
    );
}

export default NewsstandViewList;