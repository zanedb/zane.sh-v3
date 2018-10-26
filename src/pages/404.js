import React from 'react'
import Layout from '../components/Layout'
import Heading from '../components/Heading'
import Subheading from '../components/Subheading'
import { Underlined } from '../components/Link'

export default () => (
  <Layout>
    <Heading>404—Page Not Found</Heading>
    <Subheading>
      Sorry, that page isn’t here. <Underlined href="/">Go Home</Underlined>
    </Subheading>
  </Layout>
)
