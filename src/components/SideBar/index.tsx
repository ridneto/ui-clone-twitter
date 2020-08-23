import React from 'react';
import StickyBox from 'react-sticky-box';

import {
  Container,
  SearchWrapper,
  SearchInput,
  SearchIcon,
  Body,
} from './styles';
import List from '../List';

import FollowSuggestions from '../FollowSuggestions';
import News from '../News';

const SideBar: React.FC = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Buscar no Twitter" />
        <SearchIcon />
      </SearchWrapper>
      <StickyBox>
        <Body>
          <List
            title="Talvez você curta"
            elements={[
              <FollowSuggestions name="Teste 01" nickname="@test01" />,
              <FollowSuggestions name="Teste 02" nickname="@test02" />,
              <FollowSuggestions name="Teste 03" nickname="@test03" />,
            ]}
          />

          <List
            title="O que está acontecendo"
            elements={[<News />, <News />, <News />, <News />]}
          />
          <List
            title="O que está acontecendo"
            elements={[<News />, <News />, <News />, <News />]}
          />
          <List
            title="O que está acontecendo"
            elements={[<News />, <News />, <News />, <News />]}
          />
          <List
            title="O que está acontecendo"
            elements={[<News />, <News />, <News />, <News />]}
          />
        </Body>
      </StickyBox>
    </Container>
  );
};

export default SideBar;
