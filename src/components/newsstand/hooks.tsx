import { portalApi } from '../../apis';

import { useState, useEffect } from 'react';

function useNewsstand( props: any ) {

    const [ state, setState ] = useState({
        categoryArticleList: [] as any,
        selectedTabId: 'tab_newsstand_view_tile',
    });

    const fetchCategoryArticleList = async() => {
        const rowdatas = await portalApi.getCategoryArticleList();

        setState({
            ...state,
            categoryArticleList: rowdatas,
        });
    };

    const handleNewsstandClick = ( e: any ) => {
        setState({
            ...state,
            selectedTabId: e.currentTarget.id,
        });
    }

    useEffect(() => {
        fetchCategoryArticleList();
    }, []);

    return { 
        state,
        handleNewsstandClick,
    };
}

export default useNewsstand;