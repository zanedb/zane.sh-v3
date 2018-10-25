import React from 'react'
import styled from 'styled-components'
import { Underlined } from './Link'
import { theme } from '../theme'

const ColumnHeading = styled.h4`
  font-size: ${theme.fontSizes.mediumBig};
  font-weight: 700;
  margin: 2rem 0 1rem;
`
const List = styled.ul`
  list-style-type: '- ';
  font-size: ${theme.fontSizes.small};
`
const Item = styled.li`
  margin: 0 0 0.6rem;
`

export default () => (
  <>
    <ColumnHeading>My Work</ColumnHeading>
    <List>
      <Item>
        This past year, I helped organize the Midwest’s largest high school
        hackathon,{' '}
        <Underlined href="https://hackchicago.io">Hack&nbsp;Chicago</Underlined>
        .
      </Item>
      <Item>
        I built{' '}
        <Underlined href="https://shop.hackclub.com">Hack Club Shop</Underlined>
        , with{' '}
        <Underlined href="https://merelinguist.me/">@merelinguist</Underlined>{' '}
        and <Underlined href="https://lachlanjc.me">@lachlanjc</Underlined>.
      </Item>
      <Item>
        I’m currently helping organize{' '}
        <Underlined href="https://hackpenn.com">
          Hack&nbsp;Pennsylvania
        </Underlined>{' '}
        &{' '}
        <Underlined href="https://www.sfchronicle.com/bayarea/article/Hack-the-Fog-makes-history-as-San-12729895.php">
          Hack&nbsp;the&nbsp;Fog
        </Underlined>
        .
      </Item>
    </List>
  </>
)
