import React from 'react';
import PropTypes from 'prop-types';

// style
import * as S from './style';

const SeriesHeader = ({ name }) => (
  <header>
    <S.SeriesLabel> 시리즈 </S.SeriesLabel>
    <S.SeriesHeading>
      {' '}
      {name}
      {' '}
    </S.SeriesHeading>
  </header>
);

SeriesHeader.propTypes = {
  name: PropTypes.string.isRequired
};

export default SeriesHeader;
