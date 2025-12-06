import CardNav from '../components/CardNav'
import Silk from '../components/Silk'
import HeroSection from '../components/HeroSection'
import ValueProps from '../components/ValueProps'
import Features from '../components/Features'
import Dashboard from '../components/Dashboard'
import Stats from '../components/Stats'
import Pricing from '../components/Pricing'
import Team from '../components/Team'
import CTA from '../components/CTA'
import Popup from '../components/Popup'
import ContactModal from '../components/ContactModal'
import { ContactModalProvider, useContactModal } from '../context/ContactModalContext'
import '../App.css'

const navItems = [
  {
    label: "Solutions",
    bgColor: "#10b981",
    textColor: "#fff",
    links: [
      { label: "Customer Care", href: "#features", ariaLabel: "Customer Care Solutions" },
      { label: "Sales Teams", href: "#features", ariaLabel: "Sales Team Solutions" },
      { label: "Website Chat", href: "#features", ariaLabel: "Website Chat Solutions" }
    ]
  },
  {
    label: "Product",
    bgColor: "#059669",
    textColor: "#fff",
    links: [
      { label: "Dashboard", href: "#dashboard", ariaLabel: "Dashboard Features" },
      { label: "Analytics", href: "#dashboard", ariaLabel: "Analytics" },
      { label: "Integrations", href: "#", ariaLabel: "Integrations" }
    ]
  },
  {
    label: "Company",
    bgColor: "#047857",
    textColor: "#fff",
    links: [
      { label: "About NAJOD", href: "https://www.najod.co", ariaLabel: "About NAJOD Systems" },
      { label: "Pricing", href: "#pricing", ariaLabel: "Pricing Plans" },
      { label: "Documentation", href: "/docs", ariaLabel: "Documentation" }
    ]
  }
];

const HomeContent = () => {
  const { isOpen, subject, closeModal } = useContactModal();
  
  return (
    <div className="w-full">
      <Popup />
      <ContactModal isOpen={isOpen} onClose={closeModal} subject={subject} />
      <div className="hero-wrapper">
        <Silk speed={5} scale={1} color="#d1fae5" noiseIntensity={1.5} rotation={0} />
        <div className="hero-content-wrapper">
          <CardNav
            logo="AIRIES AI"
            logoAlt="AIRIES AI Logo"
            items={navItems}
            baseColor="#fff"
            menuColor="#10b981"
            buttonBgColor="#10b981"
            buttonTextColor="#fff"
            ease="power3.out"
          />
          <HeroSection />
        </div>
      </div>
      <ValueProps />
      <Features />
      <Dashboard />
      <Stats />
      <Pricing />
      <Team />
      <CTA />
    </div>
  );
};

const Home = () => {
  return (
    <ContactModalProvider>
      <HomeContent />
    </ContactModalProvider>
  );
};

export default Home
