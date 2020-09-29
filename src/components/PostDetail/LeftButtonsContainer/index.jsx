import React, { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BsFillHeartFill as Heart } from "react-icons/bs";

// style

// components
import Modal from "components/Common/Modal";
import Login from "components/Login";

// action
import { LIKE_POST_REQUEST } from "store/actions/postDetailAction";
import { UNLIKE_POST_REQUEST } from "store/actions/postDetailAction";
import SocialContainer from "./SocialContainer";
import * as S from "./style";

const LeftButtonsContainer = () => {
  const dispatch = useDispatch();
  const postInfo = useSelector((state) => state.postDetailReducer.postInfo);
  const leftContainerRef = useRef();

  const [modalVisible, setModalVisible] = useState(false);
  const user = null;
  const liked = false;

  // 좋아요 버튼 클릭
  const clickHeart = useCallback(() => {
    if (user) {
      if (liked) {
        dispatch({
          type: UNLIKE_POST_REQUEST,
          data: {
            userId: 1,
          },
        });
      } else {
        dispatch({
          type: LIKE_POST_REQUEST,
          data: {
            userId: 1,
          },
        });
      }
    } else {
      setModalVisible(true);
    }
  }, [dispatch, liked]);

  // modal이 닫혔을 때
  const closeModal = () => {
    setModalVisible(false);
  };

  // 특정 스크롤 시점에서 fixed로 고정
  useEffect(() => {
    function scrollLeftConainer() {
      if (window.pageYOffset >= 300) {
        leftContainerRef.current.classList.add("fixed");
      } else {
        leftContainerRef.current.classList.remove("fixed");
      }
    }
    window.addEventListener("scroll", scrollLeftConainer);
    return () => {
      window.removeEventListener("scroll", scrollLeftConainer);
    };
  }, []);

  return (
    <>
      <S.ContainerWrapper>
        <S.Container ref={leftContainerRef}>
          <S.ButtonWrapper onClick={clickHeart} active={liked}>
            <Heart />
          </S.ButtonWrapper>
          <div className="likes">{postInfo && postInfo.heart}</div>
          <SocialContainer />
        </S.Container>
      </S.ContainerWrapper>
      {modalVisible && (
        <Modal visible={modalVisible} onClose={closeModal}>
          <Login />
        </Modal>
      )}
    </>
  );
};

export default LeftButtonsContainer;
