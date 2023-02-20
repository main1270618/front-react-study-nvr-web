import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

import '../../assets/css/main.css';

function Layout() {
    // console.log('[PortalLayout:sta]');
    return (
        <div className='wrap'>
            <div className='inner'>
                <Header />
                <Outlet />
                <Footer />
            </div>
        </div>
    );
}

export default Layout;