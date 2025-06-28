import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import CakeSlider from './components/CakeSlider'
import CakeGallery from './components/CakeGallery'
import HeaderBanner from './components/HeaderBanner'
import DiscountSection from './components/DiscountSection'
import HeroClipSection from './components/HeroClipSection'
import SocialMediaSection from './components/SocialMediaSection'
import FeedbackSection from './components/FeedbackSection'
import Footer from './components/Footer'
import { createBrowserRouter, RouterProvider,useNavigate } from 'react-router-dom'
import Cart from './components/Cart'


const router = createBrowserRouter([
  {
    path: "/",
    element: <div>
      <Navbar/>
<HeroClipSection/>
<HeaderBanner/>
<HeroSection/>  
<CakeSlider/>
<DiscountSection/>
<CakeGallery/>
<SocialMediaSection/>
<FeedbackSection/>
<Footer/>
      
    </div>,
  },
  {
    path: "/gallery",
    element: <div>
      <Navbar/>
      <CakeGallery/>
      <Footer/>
      </div>
  },
  {
    path: "/contact",
    element: <div>
      <Navbar/>
      <SocialMediaSection/>
      <FeedbackSection/>
      <Footer/>
      </div>
  },
  {
    path: "/home",
    element: <div>
      <Navbar/>
<HeroClipSection/>
<HeaderBanner/>
<HeroSection/>  
<CakeSlider/>
<DiscountSection/>
<CakeGallery/>
<SocialMediaSection/>
<FeedbackSection/>
<Footer/>
      </div>
  },
{
  path: "/discount",
  element: <div>
    <Navbar/>
    <DiscountSection/>
    <Footer/>
    </div>
},
{
  path: "/order",
  element: <div>
    <Navbar/>
    <Cart/>
    <Footer/>
    </div>
},

 ])


const App = () => {
  return (
    <>


    <div>
    <RouterProvider router={router} />
    </div>
{/* 
<Navbar/>
<HeroClipSection/>
<HeaderBanner/>
<HeroSection/>  
<CakeSlider/>
<DiscountSection/>
<CakeGallery/>
<SocialMediaSection/>
<FeedbackSection/>
<Footer/> */}

    </>
  )
}

export default App