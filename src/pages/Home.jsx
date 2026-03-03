import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import Card from "../components/Card";
import { MapPin } from "lucide-react";
import SectionHeader from "../components/SectionHeader";
import speakers from "../data/speakers";
import WhatsappFloat from "../components/WhatsappFloat";

import { Eye, X } from "lucide-react";

import SaachiLogo2 from "../assets/events/saachi png2.png";
import herosection from "../assets/events/herosection.png";
import nominate from "../assets/events/spe_awd/nominate.png";
import venue from "../assets/events/venue.jpeg";

import eve2 from "../assets/events/eves/2025 (6).png";
import eve3 from "../assets/events/eves/2025 (3).png";

import eve5 from "../assets/events/eves/2024 (7).png";
import eve6 from "../assets/events/eves/2024 (8).png";



  
function Home() {


const [displayedText, setDisplayedText] = useState("");
const [messageIndex, setMessageIndex] = useState(0);
const [charIndex, setCharIndex] = useState(0);

useEffect(() => {
  const messages = [
    "Every woman’s story is powerful...",
    "Every achievement deserves a platform...",
    "Every inspiration deserves recognition..."
  ];

  const typingTimer = setTimeout(() => {
    const currentMessage = messages[messageIndex];

    if (charIndex < currentMessage.length) {
      setDisplayedText(prev => prev + currentMessage.charAt(charIndex));
      setCharIndex(prev => prev + 1);
    } else {
      // Wait then move to next message
      setTimeout(() => {
        setDisplayedText("");
        setCharIndex(0);
        setMessageIndex(prev =>
          prev === messages.length - 1 ? 0 : prev + 1
        ); // ✅ LOOP BACK TO FIRST
      }, 1200);
    }
  }, 40);

  return () => clearTimeout(typingTimer);
}, [charIndex, messageIndex]);


  const topSpeakers = speakers.slice(0, 3);
  const [selectedImage, setSelectedImage] = useState(null);

const pastEvents = [

  {
    id: 2,
    title: "SAACHI 2025",
    year: "2025",
    date: "2025",
    location: "Kurnool",
    image: eve2,
  },
  {
    id: 3,
    title: "SAACHI 2025",
    year: "2025",
    date: "2025",
    location: "Kurnool",
    image: eve3,
  },

  {
    id: 5,
    title: "SAACHI 2024",
    year: "2024",
    date: "2024",
    location: "Kurnool",
    image: eve5,
  },
  {
    id: 6,
    title: "SAACHI 2024",
    year: "2024",
    date: "2024",
    location: "Kurnool",
    image: eve6,
  },
];

  
  // Handle hash navigation on page load and hash changes
  useEffect(() => {


    
    const handleHashNavigation = () => {
      const hash = window.location.hash;
      if (hash) {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          // Small delay to ensure DOM is ready
          setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        }
      }
    };

    // Handle initial load
    handleHashNavigation();

    // Handle hash changes
    window.addEventListener('hashchange', handleHashNavigation);
    return () => window.removeEventListener('hashchange', handleHashNavigation);
  }, []);

  return (
    <div className="bg-mist">
      {/* Hero Section */}
      <section className="relative isolate overflow-hidden bg-ink text-white">


  <img
                  src={herosection}
                  alt="herosection"
        className="absolute inset-0  h-auto w-auto  object-cover object-center"
                />

        <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/70 to-ink/30" />
        <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-24 md:flex-row md:items-center md:py-28">
          <div className="max-w-2xl animate-fade-up">
            <p className="text-xs uppercase tracking-[0.4em] text-copper/80">
              <img
                  src={SaachiLogo2}
                  alt="Saachi Logo"
                  className="h-30 w-45"
                />
            </p>
            <h1 className="mt-4 text-4xl font-semibold text-white md:text-5xl">
              Empowering <span className="text-pink-500">Woman</span> to Lead and Thrive
            </h1>
            <p className="mt-4 text-base text-mist/90 md:text-lg">
              Inspiring and supporting <span className="text-pink-500">Woman</span> acheivers across India.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/nominate" size="mm" className="text-pink hover:bg-pink-600">
            
Nominate Now
          </Button>
          
            </div>
          </div>
        </div>
      </section>

      {/* About Section - with id for hash navigation */}
    <section id="about" className="mx-auto max-w-6xl px-6 py-16 scroll-mt-24">
  <SectionHeader
    title={
      <span className="flex flex-wrap items-center gap-3">
        Welcome to
        <img
          src={SaachiLogo2}
          alt="Saachi Logo"
          className="h-15 w-auto inline-block"
        />
        <span>
          Strengthening and Celebrating{" "}
          <span className="text-pink-500">Woman’s</span> Initiative
        </span>
      </span>
    }
    subtitle="Every Woman’s Pan-India platform empowering entrepreneurs, leaders, and professionals through curated events, recognition, and awards."
    align="left"
  />

  <div className="grid gap-6 md:grid-cols-2">
    
    {/* WHO WE ARE CARD */}
    <Card className="p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-copper/10">
      <h3 className="text-xl font-semibold text-ink">Who We Are</h3>

      <p className="mt-3 text-sm leading-relaxed text-ink/70">
        SAACHI – A Miracle Called{" "}
        <span className="text-pink-500">Woman</span> is a prestigious{" "}
        <span className="text-pink-500">Woman’s</span> recognition initiative by
        Ashoka Foundation, Kurnool, honoring inspiring{" "}
        <span className="text-pink-500">Woman</span> achievers who demonstrate
        excellence, resilience, leadership, and social impact.
        <br /><br />
        Over the years, SAACHI has celebrated distinguished{" "}
        <span className="text-pink-500">Woman</span> across diverse fields,
        creating a credible platform that recognizes achievements and empowers
        future leaders. If your journey has inspired change, we invite you to
        step forward and nominate yourself for SAACHI 2026.
      </p>
    </Card>

    {/* VENUE CARD */}
   <Card className="p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-copper/10">
  <h3 className="flex items-center justify-between text-xl font-semibold text-ink">
    {/* Left side */}
    <span className="flex items-center gap-2">
      Venue
    </span>

    {/* Right side Location Link */}
    <a
      href="https://maps.app.goo.gl/uDAzo9ieeUtFLrXr8?g_st=aw"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-1 text-sm text-copper hover:underline"
    >
      <MapPin size={16} />
      Kurnool
    </a>
  </h3>

  <div className="mt-4 overflow-hidden rounded-xl">
    <a
      href="https://maps.app.goo.gl/uDAzo9ieeUtFLrXr8?g_st=aw"
      target="_blank"
      rel="noopener noreferrer"
      className="block"
    >
      <img
        src={venue}
        alt="venue"
        className="
          w-full 
          h-auto                 /* ✅ FULL IMAGE MOBILE */
          max-h-[320px]         /* desktop limit */
          object-contain        /* ✅ NO CROPPING */
          cursor-pointer 
          transition duration-500 hover:scale-105
        "
      />
    </a>
  </div>
<br />
  <p className="mt-6 text-base font-medium text-copper min-h-[24px] flex items-center gap-2">
    <span className="ml-4">•</span>
    <span>{displayedText}</span>
    <span>|</span>
  </p>
</Card>

  </div>
</section>


      {/* Vision Mission Section */}
     <section className="bg-white/80">
  <div className="mx-auto max-w-6xl px-6 py-16">
    <SectionHeader
      title="Our Vision and Mission"
      subtitle="Focused on equal opportunity, leadership growth, and lasting impact."
    />

    <div className="grid gap-6 md:grid-cols-2">

      {/* VISION CARD */}
      <Card className="p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-copper/10">
        <h3 className="text-xl font-semibold text-ink">
          <span className="text-[#1da88c]">Vision</span>
        </h3>

        <p className="mt-3 text-sm text-ink/70">
          We envision an India where{" "}
          <span className="text-pink-500">Woman</span> have equal opportunities,
          accelerated leadership growth, and the confidence to inspire the
          next generation.
        </p>
      </Card>

      {/* MISSION CARD */}
      <Card className="p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-copper/10">
        <h3 className="text-xl font-semibold text-ink">
          <span className="text-[#1da88c]">Mission</span>
        </h3>

        <p className="mt-3 text-sm text-ink/70">
          We celebrate <span className="text-pink-500">Woman's</span> achievements,
          encourage innovation, and build strong networks that uplift
          communities and industries.
        </p>
      </Card>

    </div>
  </div>
</section>


      {/* Speakers Section */}
<section id="speakers" className="mx-auto max-w-6xl px-6 py-16 scroll-mt-24">
  <SectionHeader
    title="SAACHI 2026 Presenter's"
    subtitle={
      <>
        Honouring <span className="text-pink-500">woman</span> whose journeys inspire growth, empowerment, and transformation.
{" "}
  
      </>
    }
  />

  {/* BIGGER GRID FOR 3 SPEAKERS */}
  <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
    {topSpeakers.map((speaker) => (
      <Card
        key={speaker.id}
        className="overflow-hidden group transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-copper/10"
      >
        {/* IMAGE */}
        <img
          src={speaker.image}
          alt={speaker.name}
          className="h-72 w-full object-cover transition duration-500 group-hover:scale-105"
        />

        {/* CONTENT */}
        <div className="p-5 text-center">
          <h4 className="text-xl font-semibold text-ink group-hover:text-copper transition-colors">
            {speaker.name}
          </h4>

          <p className="mt-1 text-sm text-ink/60">{speaker.role}</p>

          {/* SMALL DETAILS LINK */}
          <div className="mt-3">
            <Link
              to="/speakers"
              className="text-sm text-copper opacity-80 group-hover:opacity-100 transition"
            >
              View Details →
            </Link>
          </div>
        </div>
      </Card>
    ))}
  </div>

  <div className="mt-10 flex justify-center">
    <Button href="/speakers">View All Speakers</Button>
  </div>
</section>


      {/* Past Events Section */}
{/* Past Events Section */}
<section className="bg-white/80">
  <div className="mx-auto max-w-6xl px-6 py-16">
    <SectionHeader
      title="Archive"
      subtitle="Explore milestones and impactful initiatives from recent years."
    />

<div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
  {pastEvents.map((event) => (
    <div key={event.id} className="block group">
      <Card className="overflow-hidden transition-all hover:-translate-y-1 hover:shadow-soft">
        
        {/* IMAGE WRAPPER */}
        <div className="relative">
          <img
            src={event.image}
            alt={event.title}
            className="h-40 w-full object-cover transition duration-500 group-hover:scale-105"
          />

          {/* 👁️ EYE ICON */}
          <button
            onClick={() => setSelectedImage(event.image)}
            className="absolute right-3 top-3 rounded-full bg-black/40 p-2 text-white backdrop-blur-md transition hover:bg-black/60"
          >
            <Eye size={16} />
          </button>
        </div>

        {/* CONTENT */}
        <div className="p-4">
          <h4 className="text-base font-semibold text-ink group-hover:text-copper transition-colors">
            {event.title}
          </h4>

          <p className="mt-1 flex items-center gap-1 text-xs text-ink/50">
            <MapPin size={12} />
            {event.location}
          </p>
        </div>

      </Card>
    </div>
  ))}
</div>


    <div className="mt-10 flex justify-center">
      <Button href="/past-events" variant="outline">
        View All Events
      </Button>
    </div>
  </div>
</section>

{/* IMAGE POPUP MODAL */}
{selectedImage && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
    
    <div className="relative max-w-4xl w-full">
      
      {/* ❌ CLOSE BUTTON */}
      <button
        onClick={() => setSelectedImage(null)}
        className="absolute right-2 top-2 z-50 rounded-full bg-white p-2 text-black shadow-lg hover:scale-110 transition"
      >
        <X size={18} />
      </button>

      <img
        src={selectedImage}
        alt="Preview"
        className="w-full max-h-[80vh] object-contain rounded-xl"
      />
    </div>
  </div>
)}
<>
  <WhatsappFloat />
</>


      {/* Nominate Section */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid items-center gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
      <p className="text-xs uppercase tracking-[0.3em] text-copper/80">
        Nominate
      </p>

      <h2 className="mt-3 text-3xl font-semibold text-ink md:text-4xl">
        Know an inspiring woman leader?
      </h2>

      <p className="mt-4 text-sm text-ink/70">
        Nominate her for the SAACHI Awards and help us celebrate
        leadership, innovation, and impact across India.
      </p>

      {/* Typing Text */}
      <p className="mt-4 text-base font-medium text-copper min-h-[24px]">
        {displayedText}
        <span>|</span>
      </p>

      <div className="mt-6">
         <Button href="/nominate" size="mm" className="text-pink hover:bg-pink-600">
            
Nominate Now
          </Button>      </div>
    </div>


          <Card className="overflow-hidden">
            <img
              src={nominate}
              alt="SAACHI Award trophy"
              className="h-full w-full object-cover transition duration-500 hover:scale-105"
            />
          </Card>
        </div>
      </section>
    </div>
  );
}

export default Home;