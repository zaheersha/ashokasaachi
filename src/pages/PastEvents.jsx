import { useState } from "react";
import PageHeader from "../components/PageHeader";
import SectionHeader from "../components/SectionHeader";
import { Eye, X } from "lucide-react";
import WhatsappFloat from "../components/WhatsappFloat";

/* ================= HERO IMAGE ================= */
const heroImage =
  "https://static.vecteezy.com/system/resources/thumbnails/019/627/760/small_2x/red-maroon-laurel-golden-stage-night-wreath-steps-royal-awards-graphics-background-lines-sparkle-elegant-shine-modern-template-luxury-premium-corporate-abstract-design-template-banner-certificate-photo.jpg";

/* ================= 2025 IMAGES ================= */
import eve2025_1 from "../assets/events/eves/2025.png";
import eve2025_2 from "../assets/events/eves/2025 (2).png";
import eve2025_3 from "../assets/events/eves/2025 (3).png";
import eve2025_4 from "../assets/events/eves/2025 (4).png";
import eve2025_5 from "../assets/events/eves/2025 (5).png";
import eve2025_6 from "../assets/events/eves/2025 (6).png";

/* ================= 2024 IMAGES ================= */
import eve2024_1 from "../assets/events/eves/2024.png";
import eve2024_2 from "../assets/events/eves/2024 (1).png";
import eve2024_3 from "../assets/events/eves/2024 (2).png";
import eve2024_4 from "../assets/events/eves/2024 (3).png";
import eve2024_5 from "../assets/events/eves/2024 (4).png";
import eve2024_6 from "../assets/events/eves/2024 (5).png";
import eve2024_7 from "../assets/events/eves/2024 (6).png";
import eve2024_8 from "../assets/events/eves/2024 (7).png";
import eve2024_9 from "../assets/events/eves/2024 (8).png";
import eve2024_10 from "../assets/events/eves/2024 (9).png";

function PastEvents() {
  /* ================= IMAGE ARRAYS ================= */
  const images2025 = [
    eve2025_1,
    eve2025_2,
    eve2025_3,
    eve2025_4,
    eve2025_5,
    eve2025_6,
  ];

  const images2024 = [
    eve2024_1,
    eve2024_2,
    eve2024_3,
    eve2024_4,
    eve2024_5,
    eve2024_6,
    eve2024_7,
    eve2024_8,
    eve2024_9,
    eve2024_10,
  ];

  /* ================= POPUP STATE ================= */
  const [previewImage, setPreviewImage] = useState(null);

  return (

    
    <div className="bg-mist">
      <>
  <WhatsappFloat />
</>

      <PageHeader
        title="Events Journey and Achievements"
        subtitle="Explore past events and milestones showcasing impactful initiatives."
        image={heroImage}
      />

      {/* ================= IMAGE ALBUM ONLY ================= */}
   {/* ================= IMAGE ALBUM ONLY ================= */}
<section className="bg-white/70">
  <div className="mx-auto max-w-6xl px-6 py-16">
    
    <SectionHeader
      title="Past Events Highlights"
      subtitle="Celebrating inspiring moments, leaders, and milestones from previous SAACHI editions."
      align="left"
    />

    {/* ================= 2025 ================= */}
    <div className="mb-8">
      <p className="text-xs uppercase tracking-[0.3em] text-copper/70">
        SAACHI Journey
      </p>

      <h3 className="mt-2 text-3xl font-semibold text-ink">
        Year <span className="text-pink-500">2025</span>
      </h3>

      <div className="mt-3 h-[2px] w-16 bg-copper/40 rounded-full"></div>
    </div>

    {/* 2025 IMAGES */}
    <div className="flex gap-6 overflow-x-auto pb-2 md:grid md:grid-cols-3 md:overflow-visible">
      {images2025.map((img, index) => (
        <div
          key={index}
          className="
            group relative
            h-[300px] w-[260px] min-w-[260px]
            rounded-3xl overflow-hidden
            shadow-soft
            transition-all duration-500
            hover:-translate-y-2
            hover:shadow-2xl hover:shadow-copper/20
            md:h-[360px] md:w-full md:min-w-0
          "
        >
          <img
            src={img}
            alt="SAACHI Event"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          />

          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent opacity-0 transition duration-500 group-hover:opacity-100"></div>

          {/* Eye Icon */}
          <button
            onClick={() => setPreviewImage(img)}
            className="absolute right-3 top-3 rounded-full bg-black/40 p-2 text-white backdrop-blur-md transition-all duration-300 group-hover:bg-copper hover:scale-110"
          >
            <Eye size={18} />
          </button>
        </div>
      ))}
    </div>

    {/* ================= 2024 ================= */}
    <div className="mt-14 mb-8">
      <p className="text-xs uppercase tracking-[0.3em] text-copper/70">
        SAACHI Journey
      </p>

      <h3 className="mt-2 text-3xl font-semibold text-ink">
        Year <span className="text-pink-500">2024</span>
      </h3>

      <div className="mt-3 h-[2px] w-16 rounded-full bg-copper/40"></div>
    </div>

    {/* 2024 IMAGES */}
    <div className="flex gap-6 overflow-x-auto pb-2 md:grid md:grid-cols-3 md:overflow-visible">
      {images2024.map((img, index) => (
        <div
          key={index}
          className="
            group relative
            h-[300px] w-[260px] min-w-[260px]
            rounded-3xl overflow-hidden
            shadow-soft
            transition-all duration-500
            hover:-translate-y-2
            hover:shadow-2xl hover:shadow-copper/20
            md:h-[360px] md:w-full md:min-w-0
          "
        >
          <img
            src={img}
            alt="SAACHI Event"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          />

          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent opacity-0 transition duration-500 group-hover:opacity-100"></div>

          {/* Eye Icon */}
          <button
            onClick={() => setPreviewImage(img)}
            className="absolute right-3 top-3 rounded-full bg-black/40 p-2 text-white backdrop-blur-md transition-all duration-300 group-hover:bg-copper hover:scale-110"
          >
            <Eye size={18} />
          </button>
        </div>
      ))}
    </div>
  </div>

  {/* ================= IMAGE POPUP ================= */}
  {previewImage && (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4">
      <div className="relative max-w-5xl w-full">
        <button
          onClick={() => setPreviewImage(null)}
          className="absolute right-3 top-3 z-50 rounded-full bg-white p-2 shadow-lg hover:scale-110"
        >
          <X size={18} />
        </button>

        <img
          src={previewImage}
          alt="Preview"
          className="w-full max-h-[85vh] object-contain rounded-3xl"
        />
      </div>
    </div>
  )}
</section>

    </div>
  );
}

export default PastEvents;
