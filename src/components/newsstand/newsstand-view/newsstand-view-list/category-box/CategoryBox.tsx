
// import useCategoryBox from './hooks';
import { useRef, useEffect } from "react";

function CategoryBox( props: any ) {
    // console.log('[CategoryBox:sta]');
    // console.log('[CategoryBox:sta].props ===== ', props);
    // const {
    //     state
    // } = useCategoryBox( props );

    const ListItem = ( props: any ) => {
        let categoryListItem = useRef(null); 

        const randerListItem = (
            <li ref={ categoryListItem } className={ props.className }
                data-idx={ props.idx }
                onClick={ props.onClick }
            > 
                <a href='#none'> { props.nm } </a> 
            </li> 
        );

        useEffect(() => {
            props.onDataRendered( categoryListItem );
        }, [ props, props.rowdatas ]);

        return randerListItem;
    }

    return (
        <div className='category-box'>
            <ul id='category_box_list' className='category-box-list'>
                {/* { state.categories.map( ( item: any, idx: number ) => ( */}
                { props.rowdatas.map( ( item: any, idx: number ) => (
                    <ListItem 
                        className='category-box-list-item'
                        key={ idx }
                        idx={ idx }
                        { ...item } 
                        onClick={ props.onClick }
                        onDataRendered={ props.onDataRendered }
                        // className={ ( state.categoryBox.selectedCategory.id === item.id ) ? 'category-box-list-item on' : 'category-box-list-item ' }
                    /> 
                ))
                
                }
            </ul>
        </div>
    );
}

export default CategoryBox;