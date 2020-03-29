import React from 'react';
import classes from './Modal.css';
import Auxilari from '../../../hoc/Auxilari';
import Backdrop from '../Backdrop/Backdrop';

const modal = (props) => (
    <Auxilari>
        <Backdrop show={props.show} clicked={props.modalClosed} />
        <div className="Modal" style={{
            transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: props.show ? '1': '0'
        }}>
            {props.children}
        </div>
    </Auxilari>
);

export default modal;