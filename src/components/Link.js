import styled from 'styled-components'
import { theme } from '../theme'

export const Link = styled.a`
  color: ${theme.colors.gray[1]};
  font-weight: 700;
  &:visited {
    color: inherit;
  }
`
export const Underlined = styled(Link)`
  text-decoration: underline;
  text-underline-position: under;
  -webkit-text-underline-position: under;
  text-decoration-style: wavy;
  -webkit-text-decoration-style: wavy;
  text-decoration-skip: none;
  -webkit-text-decoration-skip: none;
`
