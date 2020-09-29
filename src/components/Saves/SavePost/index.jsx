import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import moment from "moment";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

// component
import DeleteOkModal from "../DeleteOkModal";

// style
import * as S from "./style";

function removeZero(value) {
  return parseInt(value.replace(/^0/, ""), 10);
}

function calcTimeDiff(time) {
  // 년, 월, 일, 시분초 분할
  const [year, month, day, hms] = time
    .split(" ")
    .map((value, index) => (index !== 3 ? removeZero(value) : value));
  // 시분초를 시, 분, 초로 분할
  const [hour, min, sec] = hms.split(":").map((value) => removeZero(value));
  const now = moment();
  const calcTime = moment([year, month - 1, day, hour, min, sec]);
  const diff = (value) => now.diff(calcTime, value);

  if (diff("years") > 0) return `${diff("years")}년 전`;
  if (diff("months") > 0) return `${diff("months")}달 전`;
  if (diff("weeks") > 0) return `${diff("weeks")}주 전`;
  if (diff("days") > 0) return `${diff("days")}일 전`;
  if (diff("hours") > 0) return `${diff("hours")}시간 전`;
  if (diff("minutes") > 0) return `${diff("minutes")}분 전`;
  return "방금 전";
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
          <S.SLink to={`/write?id=${1111}`}>{data.title}</S.SLink>
        </S.Title>
        <S.Payload>
          <S.SLink to={`/write?id=${1111}`}>{data.payload}</S.SLink>
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

SavePost.defaultProps = {
  data: {},
};

SavePost.propTypes = {
  data: PropTypes.objectOf(
    PropTypes.oneOfType(PropTypes.number, PropTypes.string)
  ),
};

export default SavePost;
