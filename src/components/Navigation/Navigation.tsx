import React from 'react';
import * as Styled from './Navigation.styles';
import { Link } from 'react-router-dom';
export interface INavigationProps extends React.PropsWithChildren {}

const Navigation: React.FC<INavigationProps> = ({ children }) => {
  return (
    <Styled.Wrapper>
      <Link to="/">Home</Link>
      <Link to="/1">Page 1</Link>
      <Link to="/2">Page 2</Link>
      <Link to="/3">Page 3</Link>
    </Styled.Wrapper>
  );
};

export default Navigation;
