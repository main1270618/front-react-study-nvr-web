import { NewsstandViewTile } from './newsstand-view-tile';
import { NewsstandViewList } from './newsstand-view-list';

import type { NewsstandViewProps } from './types';

function NewsstandView( props:NewsstandViewProps ) {

    // console.log('[NewsstandView:sta]');

    /* TMP DATA */
    const newsstandViewTileListRowDatas = [
        {
            id: '0',
            nm: 'logo',
            thumb: require('../../../assets/img/newsstand_logo_052.png'),
        },
        {
            id: '1',
            nm: 'logo',
            thumb: require('../../../assets/img/newsstand_logo_052.png'),
        },
        {
            id: '2',
            nm: 'logo',
            thumb: require('../../../assets/img/newsstand_logo_052.png'),
        },
        {
            id: '3',
            nm: 'logo',
            thumb: require('../../../assets/img/newsstand_logo_052.png'),
        },
        {
            id: '4',
            nm: 'logo',
            thumb: require('../../../assets/img/newsstand_logo_052.png'),
        },
        {
            id: '5',
            nm: 'logo',
            thumb: require('../../../assets/img/newsstand_logo_052.png'),
        },
        {
            id: '6',
            nm: 'logo',
            thumb: require('../../../assets/img/newsstand_logo_052.png'),
        },
        {
            id: '7',
            nm: 'logo',
            thumb: require('../../../assets/img/newsstand_logo_052.png'),
        },
        {
            id: '8',
            nm: 'logo',
            thumb: require('../../../assets/img/newsstand_logo_052.png'),
        },
        {
            id: '9',
            nm: 'logo',
            thumb: require('../../../assets/img/newsstand_logo_052.png'),
        },
        {
            id: '10',
            nm: 'logo',
            thumb: require('../../../assets/img/newsstand_logo_052.png'),
        },
        {
            id: '11',
            nm: 'logo',
            thumb: require('../../../assets/img/newsstand_logo_052.png'),
        },
        {
            id: '12',
            nm: 'logo',
            thumb: require('../../../assets/img/newsstand_logo_052.png'),
        },
        {
            id: '13',
            nm: 'logo',
            thumb: require('../../../assets/img/newsstand_logo_052.png'),
        },
        {
            id: '14',
            nm: 'logo',
            thumb: require('../../../assets/img/newsstand_logo_052.png'),
        },
        {
            id: '15',
            nm: 'logo',
            thumb: require('../../../assets/img/newsstand_logo_052.png'),
        },
        {
            id: '16',
            nm: 'logo',
            thumb: require('../../../assets/img/newsstand_logo_052.png'),
        },
        {
            id: '17',
            nm: 'logo',
            thumb: require('../../../assets/img/newsstand_logo_052.png'),
        },
        {
            id: '18',
            nm: 'logo',
            thumb: require('../../../assets/img/newsstand_logo_052.png'),
        },
        {
            id: '19',
            nm: 'logo',
            thumb: require('../../../assets/img/newsstand_logo_052.png'),
        },
        {
            id: '20',
            nm: 'logo',
            thumb: require('../../../assets/img/newsstand_logo_052.png'),
        },
        {
            id: '21',
            nm: 'logo',
            thumb: require('../../../assets/img/newsstand_logo_052.png'),
        },
        {
            id: '22',
            nm: 'logo',
            thumb: require('../../../assets/img/newsstand_logo_052.png'),
        },
        {
            id: '23',
            nm: 'logo',
            thumb: require('../../../assets/img/newsstand_logo_052.png'),
        },
    ];

    return (
        <div id='newsstand_view_container' className='newsstand-content'>
            <NewsstandViewList rowdatas={ props.categories } />
            <NewsstandViewTile rowdatas={ newsstandViewTileListRowDatas } />
        </div>
    );
}

export default NewsstandView;