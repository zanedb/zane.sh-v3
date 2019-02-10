import React from 'react'
import styled from 'styled-components'
import { theme } from '../theme'
import Subheading from './Subheading'
import { Link } from './Link'
import { currentStatus as status } from '../data.json'

const Status = styled.div`
  margin: 1.5rem 0 0.875rem;
`
const Badge = styled.span`
  background-color: white;
  color: black;
  mix-blend-mode: screen;
  text-transform: uppercase;
  letter-spacing: 0.375em;
  font-weight: 700;
  border-radius: 4px;
  padding: 4px 2px 3px 8px;
  font-size: 1rem;
  opacity: 0.875;

  ${theme.mediaQueries.sm} {
    font-size: 0.8rem;
    letter-spacing: 0.3em;
  }
`

export default () => (
  <Status>
    <Badge children="Currently Fascinated By" />
    <Subheading>
      {status.link ? (
        <Link href={status.link} children={status.name} />
      ) : (
        status.name
      )}
    </Subheading>
  </Status>
)
