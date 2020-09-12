import React, {Fragment} from 'react';
import PostListTabs from "components/ReadingList/ReadingListTabs";
import LikedPostList from "components/ReadingList/LikedReadingList";
import ReadPostList from "components/ReadingList/ReadReadingList";
import { Switch, Route, useParams } from "react-router-dom";

const ReadingList = () => {
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

export default ReadingList;