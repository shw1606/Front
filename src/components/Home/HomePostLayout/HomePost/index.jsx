import React, { memo } from "react";
import { Link } from "react-router-dom";
import { BsFillHeartFill } from "react-icons/bs";

// styles
import { HomePostStyle } from "components/Home/HomePostLayout/HomePost/style";
import { PostImage } from "components/Home/HomePostLayout/HomePost/style";
import { PostDescription } from "components/Home/HomePostLayout/HomePost/style";
import { PostSubInfo } from "components/Home/HomePostLayout/HomePost/style";

const HomePost = ({ data }) => {
  return (
    <>
      <HomePostStyle>
        <PostImage to="/">
          <div>
            <img src={data.thumnail} />
          </div>
        </PostImage>
        <PostDescription>
          <Link to="/">
            <h4>{data.title}</h4>
            <div>
              <p>{data.content}</p>
            </div>
          </Link>
          <div>
            <span>게시일자</span>
            <span className="separator"></span>
            <span>조회수</span>
            <span>수정일자</span>
          </div>
        </PostDescription>
        <PostSubInfo>
          <Link to="/">
            <img src={data.avatar} />
            <span>
              by <b>{data.author}</b>
            </span>
          </Link>
          <div className="likes">
            <BsFillHeartFill />
            {data.heart}
          </div>
        </PostSubInfo>
      </HomePostStyle>
    </>
  );
};

export default memo(HomePost);
