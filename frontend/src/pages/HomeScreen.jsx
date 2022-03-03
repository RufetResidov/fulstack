import React from 'react'
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import ShopSection from './../components/homeComponents/ShopSection';
import ContactInfo from './../components/homeComponents/ContactInfo';
import CallToActionSection from './../components/homeComponents/CallToActionSection';
const HomeScreen = () => {
  window.scrollTo(0, 0)
  return (
    <div>
      <Header />
      <ShopSection />
      <CallToActionSection />
      <ContactInfo />
      <Footer />
    </div>
  )
}

export default HomeScreen