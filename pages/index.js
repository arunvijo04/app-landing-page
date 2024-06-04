// pages/index.js
import Header from '../components/Header';
import Hero from '../components/Hero';
import FeaturesSection from '../components/FeaturesSection';
import TestimonialSection from '../components/TestimonialSection';
import ContactSection from '../components/ContactSection';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
import Pricing from '../components/Pricing'; // Import the Pricing component

export default function Home() {
  const heroData = {
    headline: "Welcome to Our App",
    subheadline: "Discover the best features of our app",
    ctaButtons: [
      { text: "Get Started", link: "/get-started" },
      { text: "Learn More", link: "/learn-more" }
    ],
    image: "/app-screenshot.png" // Path to your image
  };

  const faqData = [
    { question: "Question 1", answer: "Answer 1" },
    { question: "Question 2", answer: "Answer 2" },
    // Add more FAQ data as needed
  ];

  const pricingData = [ // Define pricing data
    { plan: "Basic", price: "$9.99", features: ["Feature 1", "Feature 2"] },
    { plan: "Pro", price: "$19.99", features: ["Feature 1", "Feature 2", "Feature 3"] },
    // Add more pricing plans as needed
  ];

  return (
    <div>
      <Header />
      <Hero data={heroData} />
      <FeaturesSection />
      <Pricing data={pricingData} /> {/* Pass pricingData to Pricing component */}
      <TestimonialSection />
      <FAQ data={faqData} />
      <ContactSection />
      <Footer />
    </div>
  );
}
