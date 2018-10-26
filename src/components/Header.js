import React from 'react'
import styled from 'styled-components'
import Heading from './Heading'
import Subheading from './Subheading'
import { name, tagline } from '../data.json'

const Avatar = styled.img`
  border-radius: 50%;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.125);
  height: 12rem;
  width: 12rem;
`

export default () => (
  <>
    <Avatar src="https://github.com/zanedb.png" />
    <Heading children={name} />
    <Subheading>
      <span role="img" aria-label="Wave emoji">
        👋
      </span>{' '}
      Hi, I’m Zane. Nice to meet you!
    </Subheading>
    <Subheading>{tagline}</Subheading>
  </>
)
