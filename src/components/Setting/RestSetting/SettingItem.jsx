import React from "react";
import * as S from "./style";
import UnderlineButton from "../../Common/UnderlineButton";

const SettingItem = ({ name, description, contents }) => {
  return (
    <S.SettingItem>
      <div className="wrapper">
        <div className="title-wrapper">
          <h3>{name}</h3>
        </div>
        <div className="block-for-mobile">
          <div className="contents">{contents}</div>
          <div className="edit-wrapper">
            <UnderlineButton>수정</UnderlineButton>
          </div>
        </div>
      </div>
      <div className="description">{description}</div>
    </S.SettingItem>
  );
};
export default SettingItem;
