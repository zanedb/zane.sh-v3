import React from 'react'
import Layout from '../components/Layout'
import Header from '../components/Header'
import CurrentStatus from '../components/CurrentStatus'
import Socials from '../components/Socials'
import MyWork from '../components/MyWork'
import Footer from '../components/Footer'

export default () => (
  <Layout>
    <Header />
    <CurrentStatus />
    <Socials />
    <MyWork />
    <Footer />
  </Layout>
)
