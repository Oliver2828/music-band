import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Hero from './components/Hero'
import Music from './components/Music'
import Video from './components/Video'
import UpcomingsShows from './components/UpcomingsShows'
import ContactMe from './components/ContactMe'
import NavBar from './components/NavBar'
import Footer from './components/Footer'


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Hero />
   <Music />
   <Video/>
   <UpcomingsShows/>
   <Bio/>
   <ContactMe/>
   <NavBar/>
   <Footer/>
  </StrictMode>,
)
