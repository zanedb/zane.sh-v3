import React from 'react'
import styled from 'styled-components'
import { Link } from './Link'
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
        This year, I organized{' '}
        <Link href="https://hackpenn.com">
          Pennsylvania’s largest high school hackathon
        </Link>
        , and helped bring coding to many dozens of students (92% had never been
        to a hackathon).
      </Item>
      <Item>
        I built{' '}
        <Link href="https://shop.hackclub.com">Hack&nbsp;Club&nbsp;Shop</Link>,
        with <Link href="https://merelinguist.me/">@merelinguist</Link> and{' '}
        <Link href="https://lachlanjc.me">@lachlanjc</Link>.
      </Item>
      <Item>
        In 2018, I organized the Midwest’s largest high school hackathon,{' '}
        <Link href="https://hackchicago.io">Hack&nbsp;Chicago</Link>.
      </Item>
      <Item>
        I’m currently leading a{' '}
        <Link href="https://hackclub.com">Hack&nbsp;Club</Link> at
        my high school.
      </Item>
    </List>
  </>
)
