import React from "react";

// style
import * as S from "./style";

// icons
import {
  LeftIcons,
  MiddleLeftIcons,
  MiddleRightIcons,
  RightIcons,
} from "./iconData";

const ToolBar = ({ onclick }) => {
  return (
    <>
      <S.Layout>
        {LeftIcons.map((value) => {
          const { mode, icon } = value;
          return (
            <S.Button key={mode} onClick={() => onclick(mode)}>
              {new icon()}
            </S.Button>
          );
        })}
        <S.Divider></S.Divider>
        {MiddleLeftIcons.map((value) => {
          const { mode, icon } = value;
          return (
            <S.Button key={mode} onClick={() => onclick(mode)}>
              {new icon()}
            </S.Button>
          );
        })}
        <S.Divider></S.Divider>
        {MiddleRightIcons.map((value) => {
          const { mode, icon } = value;
          return (
            <S.Button key={mode} onClick={() => onclick(mode)}>
              {new icon()}
            </S.Button>
          );
        })}
        <S.Divider></S.Divider>
        {RightIcons.map((value) => {
          const { mode, icon } = value;
          return (
            <S.Button key={mode} onClick={() => onclick(mode)}>
              {new icon()}
            </S.Button>
          );
        })}
      </S.Layout>
    </>
  );
};

export default ToolBar;
