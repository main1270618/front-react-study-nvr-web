import type { NewsstandViewProps, CategoryBoxProps } from './types';
import { useState, useEffect } from 'react';

function useNewsstandView( props: any ) {

    // const [ state, setState ] = useState({
    //     // categories: props.categories,
    //     categoryBox: {
    //         categories: props.rowdatas,
    //     },
    //     articleBox: {
    //         article: {},
    //     }
    // });

    // const convertRowdatasToDatas = ( rowdatas: {}[] ) => {
    //     return rowdatas.map( item => { return { ...item, selected: false }} );
    // }

    const handleCategoryBoxListItemClick = ( e: any ) => {
        console.log('handleCategoryBoxListItemClick > e ===== ', e);
        
        let els = document.querySelectorAll('#category_box_list > li');
        els.forEach( el => el.classList.remove('on') );
        
        

        let selectedRowdata = props.rowdatas[ e.currentTarget.dataset['idx']];

        // setState({
        //     ...state,
        //     articleBox: {
        //         article: selectedRowdata
        //     }
        // })

        e.currentTarget.classList.add('on');
    }

    // const init = () => {
    //     // setState( convertRowdatasToDatas( props.rowdatas ) );
    // }

    // useEffect(() => {
    //     init();  
    // }, []);

    return {
        // state,
        handleCategoryBoxListItemClick,
    };
}

export default useNewsstandView;