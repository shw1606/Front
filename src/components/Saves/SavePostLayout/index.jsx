import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// action
import { laodSavesListReuest } from "store/actions/savesAction";

// component
import SavePost from "../SavePost";

// style
import * as S from "./style";

const SavePostLayout = () => {
  const dispatch = useDispatch();
  const saveList = useSelector((store) => store.save.saveList);

  useEffect(() => {
    dispatch(laodSavesListReuest());
  }, [dispatch]);

  return (
    <>
      <S.Layout>
        {saveList.map((value) => {
          return <SavePost key={value.id} data={value} />;
        })}
      </S.Layout>
    </>
  );
};

export default SavePostLayout;
