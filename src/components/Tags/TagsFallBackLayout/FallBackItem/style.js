import styled from "styled-components";

export const FallbackItemWrapper = styled.div`
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  -webkit-box-pack: justify;
  justify-content: space-between;
  width: 25%;
  height: 12rem;
  padding: 1rem;
  .tag-skeleton {
    margin-bottom: 1rem;
  }
  .lines {
    margin-top: 0.125rem;
  }
  .lines .line {
    width: 100%;
    height: 1.3125rem;
    font-size: 0.875rem;
    -webkit-box-align: center;
    align-items: center;
    display: flex;
  }
  .count {
    font-size: 0.875rem;
    color: rgb(173, 181, 189);
  }
`;

export const SpanAnimation = styled.div`
  display: inline-block;
  height: 1em;
  background: rgb(241, 243, 245);
  animation: 1s ease-in-out 0s infinite normal none running;
  border-radius: 4px;
`;
