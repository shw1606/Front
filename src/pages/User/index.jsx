import React from 'react';
import * as S from './style';
import UserProfile from "components/User/UserProfile";
import { Switch, Route, useParams } from "react-router-dom";

import UserTabs from "components/User/UserTabs";
import UserSeries from "../../components/User/UserSeries";
import UserAbout from "../../components/User/UserAbout";
import UserPostList from "../../components/User/UserPostList";

const User = () => {
  const { tab } = useParams();
  const username = "test123";

  return (
    <S.UserContainer>
      <UserProfile id="test123"/>
      <UserTabs type={tab} username={username} />
      <Switch>
        <Route path={`/profile/@${username}`} exact component={UserPostList} />
        <Route path={`/profile/@${username}/series`} component={UserSeries} />
        <Route path={`/profile/@${username}/about`} component={UserAbout} />
      </Switch>
    </S.UserContainer>

  );
};

export default User;