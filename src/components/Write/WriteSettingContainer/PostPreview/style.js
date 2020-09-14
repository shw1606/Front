import styled from "styled-components";

// 전체적인 레이아웃
export const Layout = styled.div`
  flex: 1 1 0%;
  min-width: 0px;
`;

// 포스트 미리보기 텍스트
export const Title = styled.h3`
  font-size: 1.3125rem;
  color: rgb(52, 58, 64);
  line-height: 1.5;
  margin-bottom: 0.5rem;
  margin-top: 0px;
`;

// 재업로드, 제거 버튼 wrapper
export const ReuploadButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 0.5rem;
`;

// 재업로드, 제거 버튼
export const ReuploadButton = styled.button`
  padding: 0px;
  text-decoration: underline;
  font-size: 1rem;
  outline: none;
  border: none;
  background: none;
  color: rgb(134, 142, 150);
  cursor: pointer;
`;

// 재업로드, 제거 버튼 사이에 있는 점
export const MiddleDot = styled.div`
  display: block;
  width: 2px;
  height: 2px;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  border-radius: 1px;
  background: rgb(134, 142, 150);
`;

// 포스트 썸네일 컨테이너
export const PreviewContainer = styled.div`
  width: 100%;
  padding-top: 51%;
  position: relative;
`;

// 이미지를 감싸는 warapper
export const ThumbnailWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0px;
  top: 0px;
  box-shadow: rgba(0, 0, 0, 0.03) 0px 0px 4px 0px;
  input {
    display: none;
  }
`;

// 프로필 이미지
export const ThumbnailButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: rgb(233, 236, 239);
  svg {
    width: 107px;
    height: 85px;
    color: gray;
  }
`;

// 썸네일 업로드 버튼
export const ThumbnailButton = styled.button`
  margin-top: 1rem;
  padding: 0.25rem 2rem;
  border-radius: 4px;
  background: white;
  box-shadow: rgba(0, 0, 0, 0.024) 0px 0px 4px;
  font-size: 1rem;
  line-height: 1.5;
  color: rgb(32, 201, 151);
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.125s ease-in 0s;
  font-weight: bold;
`;

// 업로드한 썸네일
export const UploadedThumbnail = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
`;

export const IntroduceContainer = styled.div`
  margin-top: 1.5rem;
`;

export const Textarea = styled.textarea`
  resize: none;
  width: 100%;
  border: none;
  outline: none;
  box-shadow: rgba(0, 0, 0, 0.03) 0px 0px 4px 0px;
  line-height: 1.5;
  font-size: 0.875rem;
  height: 7.375rem;
  padding: 0.75rem 1rem;
  margin-top: 0.5rem;
`;

export const TetxtLengthWrapper = styled.div`
  text-align: right;
  margin-top: 0.25rem;
  font-size: 0.75rem;
  color: rgb(134, 142, 150);
`;
