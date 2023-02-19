
import { useState, useEffect } from 'react';

const useNewsstandViewList = ( props: any ) => {
    // console.log('[useNewsstandViewList].props ===== ', props);

    const [ state, setState ] = useState({
        categoryBox: {
            categories: props.rowdatas,
            selectedIndex: ( props.rowdatas.length === 0 ) ? null : '0',
        },
        articleBox: {
            articles: ( props.rowdatas.length === 0 ) ? null : props.rowdatas[0].articles,
        }
    });

    const handleCategoryBoxClick = ( e: any ) => {
        let selectedIndex = e.currentTarget.dataset['idx'];

        setState({
            categoryBox: {
                categories: [],
                selectedIndex: selectedIndex,
            },
            articleBox: {
                articles: props.rowdatas[ selectedIndex ],
            }
        })

        console.log('handleCategoryBoxClick > e ===== ', e);
        // debugger
    }

    const handleDataRendered = ( e: any) => {
        if( state.categoryBox.selectedIndex === e.current.dataset['idx'] ) e.current.classList.add('on');
    }

    useEffect(() => {
        // console.log('[useNewsstandViewList] > useEffect');

        if( props.rowdatas.length !== 0 ) {
            setState({
                categoryBox: {
                    categories: props.rowdatas,
                    selectedIndex: '0',
                },
                articleBox: {
                    articles: props.rowdatas[0],
                }
            })
        }
    }, [ props.rowdatas ])

    return {
        state,
        handleCategoryBoxClick,
        handleDataRendered,
    };
}

export { useNewsstandViewList };