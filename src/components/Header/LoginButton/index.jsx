import React, {useState} from 'react';
import {LoginBtn} from "./style";
import Modal from "components/Modal";
import Login from "components/Login";

const LoginButton = () => {
    const [modalVisible, setModalVisible] = useState(false)
    const openModal = () => {
        setModalVisible(true)
    };
    const closeModal = () => {
        setModalVisible(false)
    };
    return (
        <>
            <LoginBtn onClick={openModal}> 로그인 </LoginBtn>
            {
                modalVisible &&
                <Modal visible={modalVisible}
                       onClose={closeModal}>
                    <Login/>
                </Modal>
            }
        </>
    );
};

export default LoginButton;