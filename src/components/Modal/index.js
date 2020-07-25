import React, {useEffect} from 'react'
import {ModalOverlay, ModalWrapper, ModalInner, CloseButton} from "./style";

function Modal({ onClose, visible, children}) {
    const onMaskClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose(e)
        }
    };

    const close = (e) => {
        if (onClose) {
            onClose(e)
        }
    };

    useEffect(() => {
        if (visible) document.body.style.overflow = 'hidden';
        else document.body.style.overflow = 'unset';
    }, [visible])

    return (
        <>
            <ModalOverlay visible={visible}/>
            <ModalWrapper visible={visible}
                          onClick={onMaskClick}>
                <ModalInner>
                    <CloseButton onClick={close} />
                    {children}
                </ModalInner>
            </ModalWrapper>
        </>
    )
}

export default Modal