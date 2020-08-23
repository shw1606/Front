import styled from "styled-components";

export const FallBackItemWrapper = styled.div`
  overflow: hidden;
  width: 100%;
  border-radius: 4px;
  background: white;
  margin-bottom: 3rem;
  border-bottom: 1px solid #e9ecef;
`;

export const ImageWrapper = styled.div`
  display: block;
  position: relative;
  width: 100%;
  padding-top: 52.1921%;
`;

export const Image = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #f2f2f2;
  display: block;
  object-fit: cover;
`;

export const Title = styled.div`
  width: 80%;
  height: 20px;
  margin: 1rem 0;
  background: #f2f2f2;
  border-radius: 4px;
`;

export const Content = styled.div`
  width: 100%;
  height: 40px;
  background: #f2f2f2;
  border-radius: 4px;
`;

export const SubInfo = styled.div`
  display: flex;
  width: 100%;
  height: 24px;
  margin: 2rem 0 3rem 0;
`;

export const Date = styled.div`
  width: 150px;
  margin-right: 1rem;
  background: #f2f2f2;
  border-radius: 4px;
`;

export const Like = styled.div`
  width: 80px;
  background: #f2f2f2;
  border-radius: 4px;
`;
