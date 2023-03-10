import React from 'react';
import * as Styled from './App.styles';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ApplicationContextProvider } from 'services/contexts/ApplicationContext';
import Navigation from 'components/Navigation';
import Home from 'pages/Home';
export interface IAppProps extends React.PropsWithChildren {}

const App: React.FC<IAppProps> = ({ children }) => {
  return (
    <Styled.Wrapper>
      <BrowserRouter>
        <ApplicationContextProvider>
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/1" element={<Home />} />
            <Route path="/2" element={<Home />} />
            <Route path="/3" element={<Home />} />
          </Routes>
        </ApplicationContextProvider>
      </BrowserRouter>
    </Styled.Wrapper>
  );
};

export default App;
