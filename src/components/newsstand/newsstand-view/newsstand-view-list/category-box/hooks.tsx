import { useState, useEffect } from 'react';

function useCategoryBox( props: any ) {
    const [ state, setState ] = useState({
        categories: [],
    });

    useEffect(() => {
        setState({
            categories: props.rowdatas,
        })
    }, [])

    return {
        state,
    };
}

export default useCategoryBox;