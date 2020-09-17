import React from "react";
import { useSelector } from "react-redux";

// component
import Alert from "components/Common/Alert";

// style
import * as S from "./style";

const AlertLayout = () => {
  const alertList = useSelector((state) => state.common.alertList);

  return (
    <>
      <S.Layout>
        {alertList.length
          ? alertList.map((value) => <Alert key={value.id} data={value} />)
          : null}
      </S.Layout>
    </>
  );
};

export default AlertLayout;
