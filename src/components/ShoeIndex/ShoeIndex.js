import React from 'react';
import styled from 'styled-components/macro';

import { WEIGHTS } from '../../constants';

import Breadcrumbs from '../Breadcrumbs';
import Select from '../Select';
import Spacer from '../Spacer';
import ShoeSidebar from '../ShoeSidebar';
import ShoeGrid from '../ShoeGrid';

const ShoeIndex = ({ sortId, setSortId }) => {
  return (
    <Wrapper>
      <LeftColumn>
        <Breadcrumbs>
          <Breadcrumbs.Crumb href="/">Home</Breadcrumbs.Crumb>
          <Breadcrumbs.Crumb href="/sale">Sale</Breadcrumbs.Crumb>
          <Breadcrumbs.Crumb href="/sale/shoes">
            Shoes
          </Breadcrumbs.Crumb>
        </Breadcrumbs>
        <Spacer size={42} />
        <ShoeSidebar />
      </LeftColumn>
      <MainColumn>
        <Header>
          <Title>Running</Title>
          <Select
            label="Sort"
            value={sortId}
            onChange={(ev) => setSortId(ev.target.value)}
            >
            <option value="newest">Newest Releases</option>
            <option value="price">Price</option>
          </Select>
        </Header>
        <Spacer size={34} />
        <ContentWrapper>
          <ShoeGrid />
        </ContentWrapper>
      </MainColumn>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  border: 1px solid black;
`;

const LeftColumn = styled.div``;

const MainColumn = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: column;
  width: 100%;
  position: relative;
  overflow: auto;
`;

const ContentWrapper = styled.div`
  position: absolute;
  border: 1px solid black;
`;
const Header = styled.header`
  display: flex;
  width: 100%;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: ${WEIGHTS.medium};
`;

export default ShoeIndex;
