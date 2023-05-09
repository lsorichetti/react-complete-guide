import ReactDOM from 'react-dom';
import { Fragment } from 'react';

import styles from './Modal.module.css';

const Backdrop = props =>{
    return <div className={styles.backdrop} onClick={props.onClose}></div>
}

const ModalOverlay = props => {
    return (
        <div className={styles.modal}>
            <div className={styles.content}>{props.children}</div>
        </div>
    )
}

const Modal = props =>{

    return (
        <Fragment>
            {ReactDOM.createPortal(<Backdrop onClose={props.onClose}></Backdrop>, document.getElementById('backgrop-root'))}
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, document.getElementById('overlay-root'))}
        </Fragment>
        
    )
}

export default Modal;