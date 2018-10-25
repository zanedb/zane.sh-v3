import React from 'react'
import styled from 'styled-components'
import Layout from '../components/Layout'
import { theme } from '../theme'
import Header from '../components/Header'
import CurrentStatus from '../components/CurrentStatus'
import Socials from '../components/Socials'
import MyWork from '../components/MyWork'
import Footer from '../components/Footer'

const Wrapper = styled.div`
  display: flex;
  flex-flow: column;
  padding: 3rem;
  color: ${theme.colors.gray[1]};
  max-width: 48rem;
  margin: auto;

  ${theme.mediaQueries.sm} {
    padding: 1.5rem;
  }
`

export default () => (
  <Layout>
    <Wrapper>
      <Header />
      <CurrentStatus />
      <Socials />
      <MyWork />
      <Footer />
    </Wrapper>
  </Layout>
)
