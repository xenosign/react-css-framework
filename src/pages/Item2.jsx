import React from 'react';
import Header from './Header';
import Album from './Album';
import Footer from './Footer';
import styled from '@emotion/styled/types/base';

const MyPage = styled.div`
  background-color: orange;
  width: 100%;
  height: 50vh;
  overflow-y: auto;
`;

export default function Item2() {
  return (
    <MyPage>
      <Header />
      <Album />
      <Footer />
    </MyPage>
  );
}
