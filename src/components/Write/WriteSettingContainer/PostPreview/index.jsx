import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BsCardImage } from "react-icons/bs";

// action
import { uploadThumbnailRequest } from "store/actions/writeAction";
import { removeThumbnail } from "store/actions/writeAction";

// hooks
import { useUpload } from "hooks";

// style
import * as S from "./style";

const PostPreview = () => {
  const dispatch = useDispatch();
  const thumbnail = useSelector((store) => store.write.thumbnail);
  const [image, setImage] = useUpload();
  const [text, setText] = useState("");

  // 업로드 된 썸네일 이미지 제거
  const clickRmoveThumbnail = useCallback(() => {
    dispatch(removeThumbnail());
  }, [dispatch]);

  // textarea value 변경
  const changeText = useCallback((event) => {
    setText(event.target.value);
  }, []);

  useEffect(() => {
    if (!image) return;
    dispatch(uploadThumbnailRequest(image));
  }, [dispatch, image]);

  return (
    <>
      <S.Layout>
        <S.Title>포스트 미리보기</S.Title>
        {thumbnail && (
          <S.ReuploadButtonWrapper>
            <S.ReuploadButton onClick={setImage}>재업로드</S.ReuploadButton>
            <S.MiddleDot />
            <S.ReuploadButton onClick={clickRmoveThumbnail}>
              제거
            </S.ReuploadButton>
          </S.ReuploadButtonWrapper>
        )}
        <S.PreviewContainer>
          <S.ThumbnailWrapper>
            {thumbnail ? (
              <S.UploadedThumbnail src={thumbnail} alt="업로드한 썸네일" />
            ) : (
              <S.ThumbnailButtonWrapper>
                <BsCardImage />
                <S.ThumbnailButton onClick={setImage}>
                  썸네일 업로드
                </S.ThumbnailButton>
              </S.ThumbnailButtonWrapper>
            )}
          </S.ThumbnailWrapper>
        </S.PreviewContainer>
        <S.IntroduceContainer>
          <S.Textarea
            onChange={changeText}
            value={text}
            placeholder="당신의 포스트를 짧게 소개해보세요"
          />
          <S.TetxtLengthWrapper>{`${text.length}/150`}</S.TetxtLengthWrapper>
        </S.IntroduceContainer>
      </S.Layout>
    </>
  );
};

export default PostPreview;
