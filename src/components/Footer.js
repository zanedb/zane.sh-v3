import React from 'react'
import styled from 'styled-components'
import { theme } from '../theme'

const Wrapper = styled.div`
  margin: 2rem 0 0;
  font-size: ${theme.fontSizes.small};
`

export default () => (
  <Wrapper>
    &copy; {new Date().getFullYear()}. Made with 💖 in Sacramento, CA.
  </Wrapper>
)
