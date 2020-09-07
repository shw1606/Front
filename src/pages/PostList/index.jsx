import React, {Fragment} from 'react';
import PostListTabs from "components/PostList/PostListTabs";
import LikedPostList from "components/PostList/LikedPostList";
import ReadPostList from "components/PostList/ReadPostList";
import { Switch, Route, useParams } from "react-router-dom";

const PostList = () => {
  const currentUsername = "test";
  const { tab } = useParams();

  return (
    <Fragment>
      <PostListTabs type={tab} />
      <Switch>
        <Route path="/lists/liked">
          <LikedPostList username={currentUsername} />
        </Route>
        <Route path="/lists/read">
          <ReadPostList username={currentUsername} />
        </Route>
      </Switch>
    </Fragment>
  );
};

export default PostList;