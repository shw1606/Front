import React, { useState } from 'react';
import Modal from "components/Modal";
import Login from "components/Login";
import * as S from "./style";

const LoginButton = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const openModal = () => {
    setModalVisible(true);
  };
  const closeModal = () => {
    setModalVisible(false);
  };
  return (
    <>
      <S.LoginBtn onClick={openModal}> 로그인 </S.LoginBtn>
      {
                modalVisible && (
                <Modal
                  visible={modalVisible}
                  onClose={closeModal}
                >
                  <Login />
                </Modal>
                )
}
    </>
  );
};

export default LoginButton;
