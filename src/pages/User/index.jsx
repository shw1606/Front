import React from 'react';
import * as S from './style';
import UserProfile from "components/User/UserProfile";
import { Switch, Route, useParams } from "react-router-dom";

import UserTabs from "components/User/UserTabs";
import UserSeries from "../../components/User/UserSeries";
import UserAbout from "../../components/User/UserAbout";
import UserPostList from "../../components/User/UserPostList";

const User = () => {
  const { username, tab } = useParams();

  return (
    <S.UserContainer>
      <UserProfile username={username}/>
      <UserTabs type={tab} username={username} />
      <Switch>
        <Route exact path={`/profile/@${username}`}>
          <UserPostList username={username}/>
        </Route>
        <Route path={`/profile/@${username}/series`}>
          <UserSeries username={username}/>
        </Route>
        <Route path={`/profile/@${username}/about`} component={UserAbout}>
          <UserAbout username={username}/>
        </Route>
      </Switch>
    </S.UserContainer>

  );
};

export default User;