import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import moment from "moment";
import { useSelector } from "react-redux";

// component
import DeleteOkModal from "../DeleteOkModal";

// style
import * as S from "./style";

function calcTimeDiff(time) {
  const now = moment();
  const diff = (value) => now.diff(time, value);
  if (diff("years")) {
    return `${diff("years")}년 전`;
  } else if (diff("months")) {
    return `${diff("months")}달 전`;
  } else if (diff("days")) {
    return `${diff("days")}일 전`;
  } else if (diff("hours")) {
    return `${diff("hours")}시간 전`;
  } else if (diff("minutes")) {
    return `${diff("minutes")}분 전`;
  } else if (diff("seconds")) {
    return "방금 전";
  }
}

const SavePost = ({ data }) => {
  const successItemDelete = useSelector(
    (store) => store.save.successItemDelete
  );
  const clickedListId = useRef();
  const time = useMemo(() => calcTimeDiff(data.created_at), [data.created_at]);
  const [visible, setVisible] = useState(false);

  const printDelteOkModal = useCallback((id = "") => {
    setVisible((prev) => !prev);
    clickedListId.current = id;
  }, []);

  useEffect(() => {
    if (successItemDelete) setVisible(false);
  }, [successItemDelete]);

  return (
    <>
      <S.Layout>
        <S.Title>
          <a>{data.title}</a>
        </S.Title>
        <S.Payload>
          <a>{data.payload}</a>
        </S.Payload>
        <S.BottomContainer>
          <div>{time}</div>
          <S.DeleteButton onClick={() => printDelteOkModal(data.id)}>
            삭제
          </S.DeleteButton>
        </S.BottomContainer>
      </S.Layout>
      <DeleteOkModal
        visible={visible}
        onCancel={printDelteOkModal}
        id={clickedListId.current}
      />
    </>
  );
};

export default SavePost;
