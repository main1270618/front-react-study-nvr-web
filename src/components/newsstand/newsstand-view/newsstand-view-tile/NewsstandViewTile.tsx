function NewsstandViewTile( props: any ) {
    console.log('[NewsstandViewTile:sta]');

    const handleItemMouseEnter = ( e: any ) => {
        // console.log("NewsstandViewTile.handleItemMouseEnter.e ===== ", e);
        // debugger
        
        let thumbEle = e.currentTarget.querySelector('a.thumb');
        let popupWrapEle = e.currentTarget.querySelector('div.popup-wrap');

        ( thumbEle as HTMLElement ).style.display = 'none';
        ( popupWrapEle as HTMLElement ).style.display = 'flex';
    }

    const handleItemMouseLeave = ( e: any ) => {
        // console.log("NewsstandViewTile.handleItemMouseLeave.e ===== ", e);

        let thumbEle = e.currentTarget.querySelector('a.thumb');
        let popupWrapEle = e.currentTarget.querySelector('div.popup-wrap');

        ( thumbEle as HTMLElement ).style.display = 'flex';
        ( popupWrapEle as HTMLElement ).style.display = 'none';
    }

    const ListItem = ( props: any ) => (
        <div className='newsstand-view-tile-list-item' onMouseEnter={ props.onMouseEnter } onMouseLeave={ props.onMouseLeave }>
            <a href='#none' className='thumb'>
                <img src={ props.thumb } height="20" alt=''></img>
            </a>
            <div className='popup-wrap'>
                <a href='#none' className='popup-btn'> 구독 </a>
                <a href='#none' className='popup-btn'> 기사보기 </a>
            </div>
        </div>
    );

    return (
        <div id='newsstand_view_tile_list' className='newsstand-view-tile-list'>
            { props.rowdatas.map(( item: any ) => (
                <ListItem key={ item.id } { ...item } onMouseEnter={ handleItemMouseEnter } onMouseLeave={ handleItemMouseLeave } />
            ))}
        </div>
    );
}

export default NewsstandViewTile;