import React from 'react'
import styled from 'styled-components'
import Subheading from './Subheading'
import { theme } from '../theme'
import { name, tagline } from '../data.json'

const Avatar = styled.img`
  border-radius: 50%;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.125);
  height: 12rem;
  width: 12rem;
`
const Name = styled.h1`
  font-size: ${theme.fontSizes.big};
  font-weight: 700;
  margin: 1rem 0 0;

  ${theme.mediaQueries.sm} {
    font-size: ${theme.fontSizes.mediumBig};
  }
`

export default () => (
  <>
    <Avatar src="https://github.com/zanedb.png" />
    <Name children={name} />
    <Subheading>
      <span role="img" aria-label="Wave emoji">
        👋
      </span>{' '}
      Hi, I’m Zane. Nice to meet you!
    </Subheading>
    <Subheading>{tagline}</Subheading>
  </>
)
