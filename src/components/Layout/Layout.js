import React from 'react';

import Auxilari from '../../hoc/Auxilari';
import classes from './Layout.css';

const layout = ( props ) => (
    <Auxilari>
        <div>Toolbar, SideDrawer, Backdrop</div>
        <main className="Content">
            {props.children}
        </main>
    </Auxilari>
);

export default layout;