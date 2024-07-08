import { FC, PropsWithChildren } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';

import './style.css';

interface ModalProps {
    close: () => void,
    visible: boolean,
}

const Modal: FC<PropsWithChildren<ModalProps>> = ({ children, close, visible }) => {
    return (<div id='modal' className={visible ? 'show' : 'hidden'}>
        <div className='content'>
            <header>
                <button className='close' onClick={() => close()}>
                    Close <FontAwesomeIcon icon={faCircleXmark} />
                </button>
            </header>
            {children}
        </div>
    </div>);
};

export default Modal;
