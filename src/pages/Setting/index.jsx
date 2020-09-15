import React from "react";
import * as S from "./style";
import MainSetting from "../../components/Setting/MainSetting";
import RestSetting from "../../components/Setting/RestSetting";

const Setting = () => {
  return (
    <S.SettingMain>
      <MainSetting />
      <RestSetting />
    </S.SettingMain>
  );
};

export default Setting;
