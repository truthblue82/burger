import React from 'react';

import Auxilari from '../../hoc/Auxilari';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';

const layout = ( props ) => (
    <Auxilari>
        <Toolbar />
        <main className="Content">
            {props.children}
        </main>
    </Auxilari>
);

export default layout;