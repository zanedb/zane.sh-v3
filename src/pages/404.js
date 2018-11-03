import React from 'react'
import Layout from '../components/Layout'
import Heading from '../components/Heading'
import Subheading from '../components/Subheading'
import { Link } from '../components/Link'

export default () => (
  <Layout>
    <Heading>404—Page Not Found</Heading>
    <Subheading>
      Sorry, that page isn’t here. <Link href="/">Go Home</Link>
    </Subheading>
  </Layout>
)
