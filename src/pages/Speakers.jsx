import React, { useState } from 'react'
import { Linkedin, Award, Briefcase, MapPin } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import speakers from '../data/speakers'
import WhatsappFloat from "../components/WhatsappFloat";

const heroImage =
  'https://as1.ftcdn.net/v2/jpg/07/33/50/26/1000_F_733502690_GYuQrHyM4W7xxhRW0UPGrySJxJoRnNz4.jpg'

function SectionDivider({ title, subtitle }) {
  return (
    <div className="text-center">
      <span className="inline-block rounded-full bg-copper/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-copper">
     </span>
      <h2 className="mx-auto mt-6 max-w-2xl text-3xl font-bold text-ink md:text-4xl lg:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mx-auto mt-4 max-w-2xl text-lg text-ink/60 md:text-xl">
          {subtitle}
        </p>
      )} 
      <div className="mt-8 flex justify-center">
        <div className="h-1 w-20 rounded-full bg-copper/40" />
      </div>
    </div>
  )
}

function TopSpeakerCard({ speaker }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <>
    <div className="absolute inset-0 h-full w-full rounded-3xl bg-white p-8 
[transform:rotateY(180deg)] 
[backface-visibility:hidden] 
overflow-y-auto overscroll-contain 
[&::-webkit-scrollbar]:hidden 
[scrollbar-width:none] 
[-ms-overflow-style:none]">

  <div className="flex flex-col min-h-full gap-6">

    <div>
      <h3 className="text-2xl font-bold text-ink">{speaker.name}</h3>
      <p className="text-copper font-semibold mt-1">{speaker.role}</p>
    </div>

    <div>
      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-copper/80">
        Signature Focus
      </span>
      <p className="mt-3 text-sm italic text-ink/80 leading-relaxed bg-copper/5 p-4 rounded-2xl">
        "{speaker.message}"
      </p>
    </div>

    <div>
      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-copper/80">
        About
      </span>
      <p className="mt-2 text-sm text-ink/70 leading-relaxed">
        {speaker.bio}
      </p>
    </div>

    {speaker.achievements?.length > 0 && (
      <div>
        <span className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-copper/80 mb-3">
          <Award size={14} />
          Key Achievements
        </span>
        <ul className="space-y-2">
          {speaker.achievements.slice(0, 3).map((achievement, index) => (
            <li key={index} className="flex items-start gap-3 text-sm text-ink/70">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-copper flex-shrink-0" />
              <span>{achievement}</span>
            </li>
          ))}
        </ul>
      </div>
    )}

  </div>
</div>

      {/* =========================================
          DESKTOP VIEW (Hover Slide) - Visible >= lg
         ========================================= */}
      <article className="hidden lg:block group relative h-[500px] w-full overflow-hidden rounded-3xl bg-white shadow-xl transition-all duration-500 hover:w-[220%] hover:shadow-2xl lg:w-full lg:hover:w-[200%] z-10 hover:z-20">
        <div className="relative flex h-full w-full">
          {/* Image section - always visible, shrinks on hover */}
          <div className="relative h-full w-full transition-all duration-500 group-hover:w-2/5">
            <img
              src={speaker.image}
              alt={speaker.name}
              className="h-full w-full object-cover"
              loading="lazy"
            />
            
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/40 to-transparent" />
            
            {/* LinkedIn button */}
            {speaker.linkedin && (
              <a
                href={speaker.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute right-4 top-4 z-30 flex h-10 w-10 items-center justify-center rounded-full bg-white/95 text-copper shadow-lg backdrop-blur-sm transition-all hover:bg-copper hover:text-white hover:scale-110"
                aria-label={`${speaker.name}'s LinkedIn profile`}
              >
                <Linkedin size={18} />
              </a>
            )}
            
            {/* Basic info overlay on image */}
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
             
              <h3 className="mt-3 text-2xl font-bold">{speaker.name}</h3>
              <p className="mt-1 text-sm text-white/90">{speaker.role}</p>
              {speaker.org && (
                <p className="flex items-center gap-1.5 text-xs text-white/80 mt-1.5">
                  <Briefcase size={12} />
                  {speaker.org}
                </p>
              )}
<br />
              {/* Know More Button with Link */}
{speaker.website && (
  <a
    href={speaker.website}
    target="_blank"
    rel="noopener noreferrer"
    onClick={(e) => e.stopPropagation()}   // ✅ prevents card flip
    className="inline-block rounded-full bg-copper/90 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] backdrop-blur-sm hover:bg-copper transition"
  >
    Know More
  </a>
)}

            </div>
          </div>

          {/* Details section - slides in on hover */}
          <div className="absolute right-0 h-full w-0 bg-gradient-to-br from-white to-mist/50 p-0 opacity-0 transition-all duration-500 group-hover:relative group-hover:w-3/5 group-hover:p-8 group-hover:opacity-100">
            <div className="flex h-full flex-col justify-between">
              {/* Top section - Name and title */}
              <div>
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-ink">{speaker.name}</h3>
                  <p className="text-copper font-semibold mt-1">{speaker.role}</p>
                  {speaker.org && (
                    <p className="text-sm text-ink/60 mt-0.5">{speaker.org}</p>
                  )}
                </div>
                
                {/* Signature focus - compact */}
                <div className="mb-6">
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-copper/80">
                    Signature Focus
                  </span>
                  <p className="mt-2 text-sm italic text-ink/80 leading-relaxed bg-copper/5 p-4 rounded-2xl line-clamp-3">
                    "{speaker.message}"
                  </p>
                </div>

                {/* Bio - condensed */}
                <div className="mb-6">
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-copper/80">
                    About
                  </span>
                  <p className="mt-2 text-sm text-ink/70 leading-relaxed line-clamp-3">
                    {speaker.bio}
                  </p>
                </div>
              </div>

              {/* Bottom section - Achievements */}
              {speaker.achievements?.length > 0 && (
                <div className="mt-auto">
                  <span className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-copper/80 mb-3">
                    <Award size={14} />
                    Key Achievements
                  </span>
                  <ul className="space-y-2">
                    {speaker.achievements.slice(0, 2).map((achievement, index) => (
                      <li key={index} className="flex items-start gap-3 text-sm text-ink/70">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-copper flex-shrink-0" />
                        <span className="line-clamp-2">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </article>
    </>
  )
}

function MoreSpeakerCard({ speaker }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      {/* Image container with fixed aspect ratio */}
      <div className="relative aspect-[4/5] overflow-hidden">
        <img
          src={speaker.image}
          alt={speaker.name}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
          loading="lazy"
        />
        
        {/* Gradient overlay - appears on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        
        {/* Category badge */}
        {speaker.category && (
          <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-copper shadow-lg backdrop-blur-sm">
            {speaker.category}
          </span>
        )}
        
        {/* LinkedIn button - appears on hover */}
        {speaker.linkedin && (
          <a
            href={speaker.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/95 text-copper shadow-lg backdrop-blur-sm opacity-0 transition-all duration-300 group-hover:opacity-100 hover:bg-copper hover:text-white hover:scale-110"
            aria-label={`${speaker.name}'s LinkedIn profile`}
          >
            <Linkedin size={16} />
          </a>
        )}
        
        {/* Name overlay - appears on hover */}
        <div className="absolute bottom-0 left-0 right-0 p-5 text-white translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <h3 className="text-xl font-bold">{speaker.name}</h3>
          <p className="mt-1 text-sm text-white/90">{speaker.role}</p>
          {speaker.org && (
            <p className="flex items-center gap-1 text-xs text-white/80 mt-1">
              <Briefcase size={11} />
              {speaker.org}
            </p>
          )}
        </div>
      </div>

      {/* Content section - always visible */}
      <div className="flex flex-1 flex-col p-5 bg-white">
        <h3 className="text-lg font-bold text-ink group-hover:text-copper transition-colors">
          {speaker.name}
        </h3>
        
        <p className="mt-1 text-sm font-medium text-ink/70">
          {speaker.role}
        </p>
        
        {speaker.org && (
          <p className="mt-1 flex items-center gap-1 text-xs text-ink/50">
            <Briefcase size={12} />
            {speaker.org}
          </p>
        )}
        
        {/* Quote - subtle styling */}
        <div className="mt-4 pt-3 border-t border-stone/20">
          <p className="text-xs italic text-ink/60 line-clamp-2">
            "{speaker.message}"
          </p>
        </div>
      </div>
    </article>
  )
}

function SimpleCard({ speaker }) {
  return (
    <div className="w-[260px] rounded-2xl bg-white shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      
      {/* IMAGE */}
      <div className="overflow-hidden rounded-t-2xl">
        <img
          src={speaker.image}
          alt={speaker.name}
          className="h-72 w-full object-cover"
        />
      </div>

      {/* CONTENT */}
      <div className="p-4 text-center">
        <h3 className="text-base font-semibold text-ink">
          {speaker.name}
        </h3>

        <p className="mt-1 text-sm text-ink/60">
          {speaker.role}
        </p>

        {speaker.org && (
          <p className="mt-1 text-xs text-ink/50">
            {speaker.org}
          </p>
        )}
      </div>
    </div>
  );
}


function Speakers() {

  const topSpeakers = speakers.slice(0, 3)
 // 🔥 FILTER DATA FROM speakers.js
  const presenters2025 = speakers.filter(
    (s) => s.year === 2025 && s.type === "presenter"
  );

  const presenters2024 = speakers.filter(
    (s) => s.year === 2024 && s.type === "presenter"
  );

  const awardees2025 = speakers.filter(
    (s) => s.year === 2025 && s.type === "awardee"
  );

  const awardees2024 = speakers.filter(
    (s) => s.year === 2024 && s.type === "awardee"
  );
  return (
    <div className="min-h-screen bg-gradient-to-b from-mist to-white">
<PageHeader
  title={
    <>
      Today's Inspiring{" "}
      <span className="text-pink-500">Woman</span> Leaders
    </>
  }
  subtitle="Meet the trailblazing woman making a difference and inspiring others across industries and communities."
  image={heroImage}
/>


{/* Top Speakers Section - with expand effect */}
      <section className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-copper/5 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-copper/5 blur-3xl" />
        </div>

        <SectionDivider
title={
  <>
    <span className="text-pink-500">Woman's</span> Who Lead & Inspire
  </>
}
          subtitle="These extraordinary leaders are reshaping industries and inspiring the next generation."
        />

        {/* Container Layout:
            - Mobile: flex-col (Stack)
            - Desktop: flex-row (Horizontal) 
        */}
        <div className="mt-16 flex flex-col gap-8 items-center lg:flex-row lg:items-stretch lg:justify-center">
          {topSpeakers.map((speaker) => (
            <TopSpeakerCard key={speaker.id} speaker={speaker} />
          ))}
        </div>
      </section>

      {/* More Speakers Section - clean grid design */}

      {/* ================= YEAR WISE PRESENTERS & AWARDEES ================= */}
<section className="relative bg-white py-24">
  <div className="absolute inset-0 bg-gradient-to-b from-copper/5 via-transparent to-transparent pointer-events-none" />

  <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    {/* 🔥 2025 PRESENTERS */} 
    <SectionDivider
      title={
        <>
          <span className="text-pink-500">2025</span> Presenters
        </>
      }
      subtitle="Inspiring voices leading SAACHI 2025."
    />

    <div className="mt-12 flex flex-wrap justify-center gap-8">
      {presenters2025.map((speaker) => (
        <SimpleCard key={speaker.id} speaker={speaker} />
      ))}
    </div>

<br />
    {/* 🔥 2025 AWARDEES */}
    <SectionDivider
      title={
        <>
          <span className="text-pink-500">2025</span> Awardees
        </>
      }
      subtitle="Honouring outstanding achievers of SAACHI 2025."
    />

    <div className="mt-12 flex flex-wrap justify-center gap-8">
      {awardees2025.map((speaker) => (
        <SimpleCard key={speaker.id} speaker={speaker} />
      ))}
    </div>

<br />
    {/* 🔥 2024 PRESENTERS */}
    <SectionDivider
      title={
        <>
          <span className="text-pink-500">2024</span> Presenters
        </>
      }
      subtitle="Celebrating inspiring presenters of SAACHI 2024."
    />

    <div className="mt-12 flex flex-wrap justify-center gap-8">
      {presenters2024.map((speaker) => (
        <SimpleCard key={speaker.id} speaker={speaker} />
      ))}
    </div>
<br />
<>
  <WhatsappFloat />
</>
    {/* 🔥 2024 AWARDEES */}
    <SectionDivider
      title={
        <>
          <span className="text-pink-500">2024</span> Awardees
        </>
      }
      subtitle="Recognizing remarkable achievers honoured in 2024."
    />

    <div className="mt-12 flex flex-wrap justify-center gap-8">
      {awardees2024.map((speaker) => (
        <SimpleCard key={speaker.id} speaker={speaker} />
      ))}
    </div>

  </div>
</section>


    </div>
  )
}

export default Speakers
