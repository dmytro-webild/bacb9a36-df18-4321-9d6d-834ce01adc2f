"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FeatureCardTwentyFour from '@/components/sections/feature/FeatureCardTwentyFour';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import HeroCentered from '@/components/sections/hero/HeroCentered';
import MetricCardTwo from '@/components/sections/metrics/MetricCardTwo';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import PricingCardThree from '@/components/sections/pricing/PricingCardThree';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import TestimonialAboutCard from '@/components/sections/about/TestimonialAboutCard';
import TestimonialCardSixteen from '@/components/sections/testimonial/TestimonialCardSixteen';
import { Clock, Leaf, ShieldCheck, Smile, Sparkles, Tag } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="elastic-effect"
        defaultTextAnimation="entrance-slide"
        borderRadius="rounded"
        contentWidth="mediumSmall"
        sizing="medium"
        background="circleGradient"
        cardStyle="glass-depth"
        primaryButtonStyle="shadow"
        secondaryButtonStyle="solid"
        headingFontWeight="semibold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleFullscreen
      navItems={[
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "Services",
          id: "features",
        },
        {
          name: "Pricing",
          id: "pricing",
        },
        {
          name: "Testimonials",
          id: "testimonials",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="RGV Cleaning Pros"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroCentered
      background={{
        variant: "plain",
      }}
      title="RGV Valley Cleaning Pros"
      description="Premium residential and commercial cleaning services tailored to keep your spaces pristine. Experience top-tier service in the Rio Grande Valley."
      avatars={[
        {
          src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DPAQgmF6MspxHL5NV7aO8DViKg/uploaded-1778174051176-y9hph6jw.png",
          alt: "RGV Logo",
        },
        {
          src: "http://img.b2bpic.net/free-photo/smiley-woman-with-cleaning-products_23-2148394858.jpg",
          alt: "Cleaning staff 1",
        },
        {
          src: "http://img.b2bpic.net/free-photo/cleaning-kitchen-smiling-young-housewife-holding-difinfecting-spray-hands_259150-59481.jpg",
          alt: "Cleaning staff 2",
        },
        {
          src: "http://img.b2bpic.net/free-photo/couple-embracing-while-cleaning_23-2147766999.jpg",
          alt: "Cleaning staff 3",
        },
        {
          src: "http://img.b2bpic.net/free-photo/man-gloves-closing-eyes-girlfriend_23-2147766989.jpg",
          alt: "Cleaning staff 4",
        },
      ]}
      buttons={[
        {
          text: "Get a Free Quote",
          href: "#contact",
        },
      ]}
      marqueeItems={[
        {
          type: "text-icon",
          text: "Licensed & Insured",
          icon: ShieldCheck,
        },
        {
          type: "text-icon",
          text: "Eco-Friendly Products",
          icon: Leaf,
        },
        {
          type: "text-icon",
          text: "100% Satisfaction",
          icon: Smile,
        },
        {
          type: "text-icon",
          text: "Same-Day Service",
          icon: Clock,
        },
        {
          type: "text-icon",
          text: "Competitive Rates",
          icon: Tag,
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <TestimonialAboutCard
      useInvertedBackground={false}
      tag="About Us"
      title="Excellence in Every Corner"
      description="At RGV Valley Cleaning Pros, we are dedicated to providing thorough and reliable cleaning solutions for both homes and offices."
      subdescription="With years of experience, our professional team treats your space as their own, ensuring a spotless result every time."
      icon={Sparkles}
      imageSrc="http://img.b2bpic.net/free-photo/flat-lay-composition-cleaning-products_23-2148133451.jpg"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTwentyFour
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={true}
      features={[
        {
          id: "f1",
          title: "Residential Cleaning",
          author: "Home Care",
          description: "Customized cleaning plans for houses, apartments, and condos.",
          tags: [
            "Deep Clean",
            "Recurring",
          ],
          imageSrc: "http://img.b2bpic.net/free-vector/housemaid-cleaning-service-concept_98292-2928.jpg",
        },
        {
          id: "f2",
          title: "Commercial Maintenance",
          author: "Business Care",
          description: "Professional janitorial services for offices and businesses.",
          tags: [
            "Office",
            "Retail",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/labor-day-celebration-with-portrait-laborer-work_23-2151755750.jpg",
        },
        {
          id: "f3",
          title: "Sanitization Services",
          author: "Health Focus",
          description: "High-standard sanitizing to keep your environment healthy.",
          tags: [
            "Hygiene",
            "Safe",
          ],
          imageSrc: "http://img.b2bpic.net/free-vector/home-cleaning-concept_1284-34090.jpg",
        },
      ]}
      title="Our Specialized Services"
      description="From daily home chores to commercial maintenance, we handle it all with precision."
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardThree
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      products={[
        {
          id: "p1",
          name: "Standard Home Cleaning",
          price: "From $120",
          imageSrc: "http://img.b2bpic.net/free-photo/woman-cleaning-bathtub_23-2148465059.jpg",
        },
        {
          id: "p2",
          name: "Deep House Cleaning",
          price: "From $250",
          imageSrc: "http://img.b2bpic.net/free-photo/man-doing-professional-home-cleaning-service_23-2150358973.jpg",
        },
        {
          id: "p3",
          name: "Daily Office Service",
          price: "Custom",
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-people-cleaning-building_23-2150454565.jpg",
        },
        {
          id: "p4",
          name: "Move-In / Move-Out",
          price: "From $300",
          imageSrc: "http://img.b2bpic.net/free-photo/happy-female-maid-using-duster-clean-wall-hotel-room_23-2148033331.jpg",
        },
        {
          id: "p5",
          name: "Carpet & Upholstery",
          price: "From $150",
          imageSrc: "http://img.b2bpic.net/free-photo/mid-section-unrecognizable-housekeeper-wiping-leather-sofa-with-leather-polish-spray_1098-19042.jpg",
        },
        {
          id: "p6",
          name: "Exterior Pressure Wash",
          price: "From $200",
          imageSrc: "http://img.b2bpic.net/free-photo/man-is-applying-paint-old-fence-using-airbrush-his-garden_613910-17232.jpg",
        },
      ]}
      title="Our Cleaning Packages"
      description="Detailed services for a sparkling environment."
    />
  </div>

  <div id="pricing" data-section="pricing">
      <PricingCardThree
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      plans={[
        {
          id: "plan1",
          badge: "Most Popular",
          price: "$120",
          name: "Essential Clean",
          features: [
            "Dusting",
            "Vacuuming",
            "Bathrooms",
          ],
          buttons: [
            {
              text: "Book Now",
              href: "#contact",
            },
          ],
        },
        {
          id: "plan2",
          badge: "Value",
          price: "$250",
          name: "Total Refresh",
          features: [
            "Everything Essential",
            "Kitchen Deep Clean",
            "Baseboards",
          ],
          buttons: [
            {
              text: "Book Now",
              href: "#contact",
            },
          ],
        },
        {
          id: "plan3",
          price: "$400+",
          name: "Move-In Package",
          features: [
            "Full Disinfection",
            "Inside Appliances",
            "Cabinet Detailing",
          ],
          buttons: [
            {
              text: "Get Quote",
              href: "#contact",
            },
          ],
        },
      ]}
      title="Transparent Pricing"
      description="Straightforward rates for exceptional results."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardTwo
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      metrics={[
        {
          id: "m1",
          value: "500+",
          description: "Happy Families",
        },
        {
          id: "m2",
          value: "120+",
          description: "Commercial Spaces",
        },
        {
          id: "m3",
          value: "100%",
          description: "Satisfaction Rate",
        },
      ]}
      title="Why Trust Us"
      description="Our numbers speak for the satisfaction we deliver."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardSixteen
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      testimonials={[
        {
          id: "t1",
          name: "Sarah Miller",
          role: "Homeowner",
          company: "McAllen",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-man-cleaning-his-home_23-2148112375.jpg",
        },
        {
          id: "t2",
          name: "David Ortiz",
          role: "Store Manager",
          company: "Harlingen",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/cheerful-professional-partners-posing-photo-smiling-looking-camera-african-american-successful-office-employer-caucasian-businesswoman-taking-selfie-teamwork-business-concept_74855-6842.jpg",
        },
        {
          id: "t3",
          name: "Elena Rodriguez",
          role: "Tenant",
          company: "Brownsville",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/side-view-woman-working-as-plumber_23-2150746382.jpg",
        },
        {
          id: "t4",
          name: "Michael Chen",
          role: "Business Owner",
          company: "Edinburg",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/female-colleagues-wearing-face-masks-gloves-while-greeting-office_637285-5415.jpg",
        },
        {
          id: "t5",
          name: "Jessica Lee",
          role: "Homeowner",
          company: "Weslaco",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/young-woman-her-kitchen_329181-20396.jpg",
        },
      ]}
      kpiItems={[
        {
          value: "4.9/5",
          label: "Avg Rating",
        },
        {
          value: "10+",
          label: "Years Experience",
        },
        {
          value: "95%",
          label: "Retention Rate",
        },
      ]}
      title="What Clients Say"
      description="Hear from our satisfied customers in the RGV area."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCTA
      useInvertedBackground={false}
      background={{
        variant: "plain",
      }}
      tag="Get in Touch"
      title="Ready for a Spotless Space?"
      description="Request your free cleaning quote today and let us take care of the details."
      buttons={[
        {
          text: "Contact Us",
          href: "tel:5550001234",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoEmphasis
      logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DPAQgmF6MspxHL5NV7aO8DViKg/uploaded-1778174051176-y9hph6jw.png"
      columns={[
        {
          items: [
            {
              label: "Home",
              href: "#hero",
            },
            {
              label: "About",
              href: "#about",
            },
          ],
        },
        {
          items: [
            {
              label: "Services",
              href: "#features",
            },
            {
              label: "Pricing",
              href: "#pricing",
            },
          ],
        },
        {
          items: [
            {
              label: "Contact",
              href: "#contact",
            },
            {
              label: "Privacy Policy",
              href: "#",
            },
          ],
        },
      ]}
      logoText="RGV Cleaning Pros"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
