import Hero from '@/components/Hero';
import Testimonials from '@/components/Testimonials';
import Pricing from '@/components/Pricing/Pricing';
import FAQ from '@/components/FAQ';
import Logos from '@/components/Logos';
import Benefits from '@/components/Benefits/Benefits';
import Container from '@/components/Container';
import Section from '@/components/Section';
import Stats from '@/components/Stats';
import CTA from '@/components/CTA';
import WhyChooseUs from '@/components/WhyChooseUs';
import FeaturedProducts from '@/components/FeaturedProducts';
import AboutUs from '@/components/AboutUs';
import BecomeDistributor from '@/components/BecomeDistributor';
import StatsSection from '@/components/StatsSection';
import ContactSection from '@/components/ContactSection';

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      {/* <Logos /> */}
      <Container>
        <WhyChooseUs />
        <FeaturedProducts />

        <AboutUs />

        <BecomeDistributor />
        <Testimonials />

        <StatsSection />

        <ContactSection />

        {/* <Benefits />

        <Section
          id='pricing'
          title='Pricing'
          description='Simple, transparent pricing. No surprises.'
        >
          <Pricing />
        </Section>

        <Section
          id='testimonials'
          title='What Our Clients Say'
          description='Hear from those who have partnered with us.'
        ></Section>

        <FAQ />

        <Stats />

        <CTA /> */}
      </Container>
    </>
  );
};

export default HomePage;
