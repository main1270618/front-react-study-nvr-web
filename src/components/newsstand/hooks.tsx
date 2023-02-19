import { portalApi } from '../../apis';

import { useState, useEffect } from 'react';

function useNewsstand( props: any ) {

    const [ state, setState ] = useState({
        categoryArticleList: [] as any,
    });

    const fetchCategoryArticleList = async() => {
        const rowdatas = await portalApi.getCategoryArticleList();

        setState({
            ...state,
            categoryArticleList: rowdatas,
        });
    };

    useEffect(() => {
        fetchCategoryArticleList();
    }, []);

    return { state };
}

export default useNewsstand;