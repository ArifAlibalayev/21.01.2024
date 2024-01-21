import React from 'react'
import Hero from '../../components/Hero'
import Clothes from '../../components/Clothes'
import AboutUs from '../../components/AboutUs'
import Leadership from '../../components/Leadership'
import WeOfferServices from '../../components/WeOfferServices'
import { Helmet } from 'react-helmet-async'

function Mainpage() {
  return (
    <>
    <Helmet>
      <title>Main Page</title>
    </Helmet>
    <Hero/>
    <Clothes/>
    <AboutUs/>
    <Leadership/>
    <WeOfferServices/>
    </>
  )
}

export default Mainpage