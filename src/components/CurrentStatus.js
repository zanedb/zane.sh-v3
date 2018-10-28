import React from 'react'
import styled from 'styled-components'
import { theme } from '../theme'
import Subheading from './Subheading'
import { Underlined } from './Link'
import { currentStatus } from '../data.json'

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
  padding: 2px 6px;
  font-size: 1rem;
  opacity: 0.875;

  ${theme.mediaQueries.sm} {
    font-size: 0.8rem;
    letter-spacing: 0.3em;
  }
`

export default () => {
  // link to content if URL exists
  const status = currentStatus.split(',')
  return (
    <Status>
      <Badge children="Currently Fascinated By" />
      <Subheading>
        {status[1] ? (
          <Underlined href={status[1]}>{status[0]}</Underlined>
        ) : (
          status[0]
        )}
      </Subheading>
    </Status>
  )
}
