import React, { memo } from "react";
import { Link } from "react-router-dom";
import { BsFillHeartFill } from "react-icons/bs";

// styles
import { HomePostStyle } from "components/Home/HomePostLayout/HomePost/style";
import { PostImage } from "components/Home/HomePostLayout/HomePost/style";
import { MainInfo } from "components/Home/HomePostLayout/HomePost/style";
import { Payload } from "components/Home/HomePostLayout/HomePost/style";
import { Date } from "components/Home/HomePostLayout/HomePost/style";
import { SubInfo } from "components/Home/HomePostLayout/HomePost/style";

const HomePost = ({ data }) => {
  return (
    <>
      <HomePostStyle>
        <PostImage to={`/@${data.author}/${data.title}`}>
          <div>
            <img src={data.thumnail} />
          </div>
        </PostImage>
        <MainInfo>
          <Payload to={`/@${data.author}/${data.title}`}>
            <h4>{data.title}</h4>
            <div>
              <p>{data.content}</p>
            </div>
          </Payload>
          <Date>
            <span>게시일자</span>
            <span className="separator"></span>
            <span>조회수</span>
            <span>수정일자</span>
          </Date>
        </MainInfo>
        <SubInfo>
          <Link to={`/@${data.author}/${data.title}`}>
            <img src={data.avatar} />
            <span>
              by <b>{data.author}</b>
            </span>
          </Link>
          <div className="likes">
            <BsFillHeartFill />
            {data.heart}
          </div>
        </SubInfo>
      </HomePostStyle>
    </>
  );
};

export default memo(HomePost);
