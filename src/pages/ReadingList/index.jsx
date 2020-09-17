import React, { Fragment } from 'react';
import ReadingListTabs from "components/ReadingList/ReadingListTabs";
import LikedReadingList from "components/ReadingList/LikedReadingList";
import ReadReadingList from "components/ReadingList/ReadReadingList";
import { Switch, Route, useParams } from "react-router-dom";

const ReadingList = () => {
  const currentUsername = "test";
  const { tab } = useParams();

  return (
    <>
      <ReadingListTabs type={tab} />
      <Switch>
        <Route path="/lists/liked">
          <LikedReadingList username={currentUsername} />
        </Route>
        <Route path="/lists/read">
          <ReadReadingList username={currentUsername} />
        </Route>
      </Switch>
    </>
  );
};

export default ReadingList;
