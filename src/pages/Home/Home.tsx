import React from 'react';
import * as Styled from './Home.styles';
export interface IHomeProps extends React.PropsWithChildren {}

const Home: React.FC<IHomeProps> = ({ children }) => {
  return <div>Home</div>;
};

export default Home;
