import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import {
  Download,
  Star,
  Mail,
  ShieldCheck,
  Sparkles,
  Heart,
  Zap,
  Quote,
  BookOpen,
  Check,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";
import { Reveal } from "@/components/Reveal";
import heroImg from "@/assets/yoni-hero-bengali.png";
import ritualImg from "@/assets/yoni-ritual.jpg";
import mantraImg from "@/assets/yoni-mantra.jpg";
import tantricArtImg from "@/assets/yoni-tantric-art.jpg";
import shabarImg from "@/assets/yoni-shabar.jpg";
import diyasImg from "@/assets/yoni-diyas.jpg";

export const Route = createFileRoute("/vashi")({
  component: LandingPage,
});

function LandingPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-hex-pattern text-foreground">
      {/* Ambient auras */}
      <div className="aura h-[420px] w-[420px] left-[-120px] top-[10%]" style={{ background: "oklch(0.45 0.22 300 / 0.55)" }} />
      <div className="aura h-[360px] w-[360px] right-[-100px] top-[45%]" style={{ background: "oklch(0.55 0.2 25 / 0.35)", animationDelay: "1.5s" }} />
      <div className="aura h-[500px] w-[500px] left-[30%] bottom-[5%]" style={{ background: "oklch(0.5 0.2 320 / 0.35)", animationDelay: "3s" }} />

      <Header />
      <main className="relative">
        <Hero />
        <DescriptionSection />
        <FeatureGallery />
        <Reveal>
          <div className="flex justify-center py-6">
            <div className="h-px w-full max-w-5xl bg-white/10" />
          </div>
        </Reveal>
        <LearnSection />
        <IncludedSection />
        <AudienceSection />
        <HighlightsSection />
        <TestimonialsSection />
        <CheckoutSection />
        <ContactSection />
      </main>
      <Footer />
      <StickyOfferBar />
    </div>
  );
}

/* ---------------- Header ---------------- */
function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/5 bg-black/60 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="grid h-9 w-9 place-items-center rounded-xl bg-[var(--gradient-purple)] shadow-[var(--shadow-glow)] flicker">
            <Sparkles className="h-5 w-5 text-white" />
          </div>
          <span className="font-display font-bold text-lg tracking-tight text-white">
            Mystic<span className="text-gold">Canvas</span>
          </span>
        </Link>
        <a
          href="https://superprofile.bio/vp/যোনি-vashikaran-vidya--বাংলা-?checkout=true"
          className="hidden rounded-full px-4 py-2 text-xs font-semibold text-white btn-glow cta-shine hover:btn-glow-hover sm:inline-flex"
        >
          এখনই পান
        </a>
      </div>
    </header>
  );
}

/* ---------------- Section wrapper ---------------- */
function SectionShell({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`relative py-10 sm:py-12 lg:py-16 ${className}`}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}

// Custom simple component that renders a section heading
function SectionHeading({
  eyebrow,
  title,
  icon,
  center,
}: {
  eyebrow?: string;
  title: string;
  icon?: string;
  center?: boolean;
}) {
  return (
    <Reveal className={`mb-8 text-center ${center ? "" : "sm:text-left"}`}>
      {eyebrow && (
        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gold">
          <Sparkles className="h-3.5 w-3.5" /> {eyebrow}
        </div>
      )}
      <h2 className={`flex items-center justify-center gap-3 text-2xl font-black text-white sm:text-3xl lg:text-4xl ${center ? "" : "sm:justify-start"}`}>
        {icon && <span className="flicker text-[color:var(--orange-glow)]">{icon}</span>}
        <span className="relative inline-block">
          <span className="text-white">{title}</span>
          <span className={`absolute -bottom-2 h-[3px] w-16 rounded-full bg-[var(--gradient-gold)] left-1/2 -translate-x-1/2 ${center ? "" : "sm:left-0 sm:translate-x-0"}`} />
        </span>
      </h2>
    </Reveal>
  );
}

/* ---------------- Hero ---------------- */
function Hero() {
  return (
    <section className="relative overflow-hidden pt-8 pb-10 sm:pt-12 sm:pb-14">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-12 lg:px-8">
        <Reveal className="text-center lg:text-left">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gold">
            <Sparkles className="h-3.5 w-3.5" /> প্রাচীন তান্ত্রিক গ্রন্থ
          </div>
          <h1 className="mb-6 font-display text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            তীব্র যোনি <span className="text-gold">বশীকরণ সাধনা</span> <span className="text-white/70">(বাংলা ই-বুক)</span>
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg lg:mx-0">
            প্রাচীন তান্ত্রিক গ্রন্থ — শতাব্দীর পর শতাব্দী ধরে গোপন রাখা বিদ্যা, এখন সহজ বাংলায়।
            মন্ত্র, যন্ত্র এবং সম্পূর্ণ সাধনা পদ্ধতি — এখনই ডাউনলোড করুন।
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:flex-wrap lg:justify-start">
            <a
              href="https://superprofile.bio/vp/যোনি-vashikaran-vidya--বাংলা-?checkout=true"
              className="group inline-flex items-center gap-2 rounded-xl px-6 py-3.5 text-sm font-bold text-white btn-glow cta-shine pulse-glow hover:btn-glow-hover"
            >
              <Download className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
              এখনই ডাউনলোড করুন — ₹২৪৯
            </a>
            <div className="flex items-center gap-2 text-xs text-white/60">
              <ShieldCheck className="h-4 w-4 text-[color:var(--accent)]" />
              নিরাপদ পেমেন্ট · তাৎক্ষণিক ডাউনলোড
            </div>
          </div>
          <div className="mt-8 flex flex-col items-center gap-4 text-xs text-white/60 sm:flex-row sm:flex-wrap sm:gap-6 lg:justify-start">
            <div className="flex items-center gap-1.5">
              <div className="flex text-[color:var(--gold)]">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-current" />
                ))}
              </div>
              <span>৪.৯ / ৫ · ২০০০+ সাধক</span>
            </div>
            <span className="flex items-center gap-1.5"><BookOpen className="h-3.5 w-3.5" /> PDF · বাংলা</span>
          </div>
        </Reveal>

        <Reveal className="group relative overflow-hidden rounded-2xl border border-white/10 shadow-[var(--shadow-card)]">
          <img
            src={heroImg}
            alt="যোনি বশীকরণ বিদ্যা — প্রাচীন তান্ত্রিক গ্রন্থ"
            width={1024}
            height={1024}
            className="h-auto w-full transition-transform duration-[1200ms] ease-out group-hover:scale-105"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full border border-[color:var(--gold)]/20 rotate-slow" />
          <div className="pointer-events-none absolute -left-16 bottom-8 h-48 w-48 rounded-full border border-[color:var(--accent)]/25 rotate-slow" style={{ animationDirection: "reverse" }} />
          <Sparkles className="pointer-events-none absolute right-8 top-16 h-5 w-5 text-[color:var(--gold)] sparkle" />
          <Sparkles className="pointer-events-none absolute left-10 top-40 h-4 w-4 text-[color:var(--accent)] sparkle" style={{ animationDelay: "1s" }} />
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- Description ---------------- */
function DescriptionSection() {
  return (
    <SectionShell id="about">
      <SectionHeading eyebrow="বিবরণ" title="এই ই-বুক সম্পর্কে" center />
      <Reveal className="mx-auto max-w-3xl text-center">
        <p className="text-base leading-relaxed text-white/80 sm:text-lg">
          প্রাচীন যোনি বশীকরণ বিদ্যা একটি দুর্লভ তান্ত্রিক গ্রন্থ যা শতাব্দীর পর শতাব্দী ধরে
          গুরু-শিষ্য পরম্পরায় অত্যন্ত গোপনে সংরক্ষিত ছিল। এই ই-বুকটি সেই সমস্ত সাধকদের জন্য যারা
          খাঁটি মনে নিজেদের ভালোবাসার মানুষকে নিজের প্রতি আকৃষ্ট করতে চান। এতে উল্লেখিত মন্ত্র,
          যন্ত্র ও প্রতিটি সাধনা পদ্ধতি সহজ এবং স্পষ্ট বাংলা ভাষায় বোঝানো হয়েছে, যাতে যে কেউ ঘরে বসেই
          সঠিক নিয়মে এর অনুশীলন করতে পারেন।
        </p>
      </Reveal>
    </SectionShell>
  );
}

/* ---------------- Feature Image Gallery ---------------- */
function FeatureGallery() {
  const items = [
    { src: ritualImg, caption: "বশীকরণ কীভাবে করবেন — সম্পূর্ণ বিধি" },
    { src: diyasImg, caption: "প্রদীপ জ্বালিয়ে করুন সাধনা" },
    { src: mantraImg, caption: "ছবি দিয়ে বশীকরণ পদ্ধতি" },
    { src: tantricArtImg, caption: "গুরু-শিষ্য পরম্পরার গোপন বিদ্যা" },
    { src: shabarImg, caption: "নাম দিয়ে বশীকরণ — শাবার মন্ত্র" },
    { src: heroImg, caption: "মোহিনী মন্ত্র সিদ্ধি" },
  ];
  return (
    <SectionShell className="bg-black/30">
      <SectionHeading eyebrow="গ্যালারি" title="সাধনার এক ঝলক" center />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((it, i) => (
          <Reveal key={i} className="group relative overflow-hidden rounded-2xl border border-white/10 shadow-[var(--shadow-card)]">
            <img
              src={it.src}
              alt={it.caption}
              loading="lazy"
              width={800}
              height={800}
              className="aspect-square w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-110"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-4 text-center">
              <p className="text-sm font-bold text-gold">{it.caption}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}

/* ---------------- Learn ---------------- */
function LearnSection() {
  return (
    <SectionShell>
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <SectionHeading eyebrow="কী কী শিখবেন" title="এই ই-বুক থেকে আপনি কী কী জানতে পারবেন?" icon="✦" />
          <BulletList
            items={[
              "বশীকরণ করার সম্পূর্ণ পদ্ধতি (ধাপে ধাপে / Step-by-Step)",
              "मंत्र जপের সঠিক নিয়ম ও বিধি-বিধান",
              "কোন বারে ও সময়ে কোন মন্ত্র জপ করতে হবে",
              "সাধনা করার শুভ তিথি ও মুহূর্ত",
              "কাঙ্ক্ষিত মানুষকে বশীভূত করার শক্তিশালী মন্ত্র",
              "ছবি দিয়ে বশীকরণ করার গোপন তান্ত্রিক প্রক্রিয়া",
            ]}
          />
        </div>
        <Reveal className="group relative overflow-hidden rounded-2xl border border-white/10 shadow-[var(--shadow-card)]">
          <img src={mantraImg} alt="Mantra" className="h-full w-full object-cover transition-transform duration-[1400ms] group-hover:scale-110" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        </Reveal>
      </div>
    </SectionShell>
  );
}

/* ---------------- Included ---------------- */
function IncludedSection() {
  const items = [
    "সম্পূর্ণ যোনি বশীকরণ বিদ্যা",
    "প্রতিটি সাধনার ধাপে ধাপে পদ্ধতি",
    "শক্তিশালী মোহিনী মন্ত্র (Step-by-Step)",
    "সিদ্ধ যন্ত্র এবং তার সঠিক প্রয়োগ",
    "ভালোবাসার মানুষকে আকর্ষণের গোপন প্রক্রিয়া",
    "সাধনার সময় কী করবেন এবং কী করবেন না",
    "গোপন তান্ত্রিক রহস্য ও সাবধানতা",
    "১০০% কার্যকরী পরীক্ষিত বিধি",
  ];
  return (
    <SectionShell className="bg-black/30">
      <SectionHeading eyebrow="ই-বুকে কী কী রয়েছে" title="এতে আপনি কী কী পাবেন?" icon="✦" center />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item, idx) => (
          <Reveal
            key={item}
            className="group rounded-2xl border border-white/10 bg-card p-5 shadow-[var(--shadow-card)] transition-all duration-500 hover:-translate-y-1 hover:border-[color:var(--gold)]/40 hover:shadow-[var(--shadow-glow-yoni)]"
            style={{ transitionDelay: `${idx * 40}ms` }}
          >
            <div className="mb-3 grid h-10 w-10 place-items-center rounded-xl bg-[var(--gradient-gold)] text-black shadow-md">
              <Check className="h-5 w-5" strokeWidth={3} />
            </div>
            <p className="text-sm font-semibold text-neutral-900">{item}</p>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}

/* ---------------- Audience ---------------- */
function AudienceSection() {
  return (
    <SectionShell>
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <Reveal className="order-2 lg:order-1 group relative overflow-hidden rounded-2xl border border-white/10 shadow-[var(--shadow-card)]">
          <img src={tantricArtImg} alt="Audience" className="h-full w-full object-cover transition-transform duration-[1400ms] group-hover:scale-110" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        </Reveal>
        <div className="order-1 lg:order-2">
          <SectionHeading eyebrow="কাদের জন্য" title="এই ই-বুকটি কাদের জন্য উপযুক্ত?" icon="♥" />
          <BulletList
            check
            items={[
              "যারা জীবনে খাঁটি ভালোবাসা পেতে চান",
              "যারা মনের মানুষকে বা জীবনসঙ্গীকে কাছে ফিরে পেতে চান",
              "স্বামী-স্ত্রীর মধ্যে প্রেম ও মধুর টান বৃদ্ধি করতে চান",
              "একতরফা প্রেমে সাফল্য অর্জন করতে চান",
              "মোহন ক্রিয়া এবং তান্ত্রিক সাধনার আগ্রহী সাধক",
              "যারা দাম্পত্য জীবনে সুখ ও শান্তি ফিরিয়ে আনতে চান",
            ]}
          />
        </div>
      </div>
    </SectionShell>
  );
}

/* ---------------- Highlights ---------------- */
function HighlightsSection() {
  const items = [
    { icon: <Download className="h-5 w-5" />, title: "তাৎক্ষণিক ডাউনলোড", desc: "পেমেন্টের সাথে সাথেই PDF ডাউনলোড লিঙ্ক" },
    { icon: <BookOpen className="h-5 w-5" />, title: "সহজ বাংলা ভাষা", desc: "সহজ, স্পষ্ট ও সাবলীল বাংলায় নির্দেশিকা" },
    { icon: <Zap className="h-5 w-5" />, title: "ধাপে ধাপে পদ্ধতি", desc: "প্রতিটি সাধনার সুস্পষ্ট ও সহজ ধাপ" },
    { icon: <ShieldCheck className="h-5 w-5" />, title: "গোপনীয় জ্ঞান", desc: "গুরু-শিষ্য পরম্পরার দুর্লভ গোপন রহস্য" },
  ];
  return (
    <SectionShell className="bg-black/30">
      <SectionHeading eyebrow="বিশেষত্ব" title="ই-বুকের বিশেষ আকর্ষণ" center />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((it, idx) => (
          <Reveal
            key={it.title}
            className="rounded-2xl border border-white/10 bg-card p-6 text-center shadow-[var(--shadow-card)] transition-all duration-500 hover:-translate-y-1 hover:border-[color:var(--accent)]/40 hover:shadow-[var(--shadow-glow-yoni)]"
            style={{ transitionDelay: `${idx * 60}ms` }}
          >
            <div className="mx-auto mb-4 grid h-12 w-12 place-items-center rounded-xl bg-purple-50 text-purple-700 border border-purple-100 shadow-sm">
              {it.icon}
            </div>
            <h3 className="mb-1 font-bold text-neutral-900">{it.title}</h3>
            <p className="text-sm text-neutral-600 font-medium">{it.desc}</p>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}

/* ---------------- Testimonials ---------------- */
function TestimonialsSection() {
  const list = [
    { name: "Rahul", text: "অসাধারণ একটি ই-বুক। সমস্ত পদ্ধতি খুব সহজ বাংলায় সুন্দরভাবে বুঝিয়ে লেখা হয়েছে। আমি নিজে নিয়ম মেনে প্রয়োগ করেছি এবং খুব ভালো ফলাফল পেয়েছি।" },
    { name: "Sourav", text: "এই বইটি পড়ে আমি সত্যিই উপকৃত হয়েছি। এতে উল্লেখিত মন্ত্র এবং যন্ত্রের বিবরণ অত্যন্ত নিখুঁত ও স্পষ্ট। অনেক ধন্যবাদ!" },
    { name: "Debasish", text: "খুবই চমৎকার ও শক্তিশালী বিদ্যা। প্রথমে একটু সংশয় ছিল, কিন্তু সঠিক নিয়মে সাধনা করার পর সম্পর্কের অমিল দূর হয়ে দারুণ পরিবর্তন এসেছে।" },
    { name: "Aniket", text: "দারুণ একটি গাইড! পুরো বিষয়টি বাংলায় নির্ভুলভাবে বোঝানো হয়েছে। আধ্যাত্মিক সাধকদের জন্য এটি সংগ্রহে রাখার মতো একটি অমূল্য গ্রন্থ।" },
  ];
  return (
    <SectionShell>
      <SectionHeading eyebrow="প্রতিক্রিয়া" title="সাধকদের বাস্তব অভিজ্ঞতা" center />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {list.map((t) => (
          <Testimonial key={t.name} {...t} />
        ))}
      </div>
    </SectionShell>
  );
}

/* ---------------- Checkout ---------------- */
function CheckoutSection() {
  return (
    <SectionShell id="checkout" className="bg-black/40">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
        <Reveal className="text-center lg:text-left">
          <SectionHeading eyebrow="তাৎক্ষণিক অ্যাক্সেস" title="এখনই ডাউনলোড করুন" icon="✦" />
          <p className="mx-auto mb-6 max-w-md text-white/75 lg:mx-0">
            একবার পেমেন্ট করলেই PDF সাথে সাথে আপনার ইমেলে পাঠানো হবে। আজই আপনার
            সাধনা শুরু করুন।
          </p>
          <ul className="mx-auto inline-block space-y-3 text-left text-sm text-white/85 lg:mx-0 lg:block">
            {["১০০% ই-বুক — তাৎক্ষণিক ডাউনলোড", "মোবাইল ও কম্পিউটার উভয়েই পড়ার উপযোগী", "লাইফটাইম অ্যাক্সেস — যেকোনো সময়, যেকোনো জায়গা থেকে"].map((x) => (
              <li key={x} className="flex items-center gap-2">
                <Check className="h-4 w-4 text-[color:var(--gold)]" strokeWidth={3} />
                {x}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal className="rounded-2xl border border-[color:var(--accent)]/30 bg-card p-6 shadow-[var(--shadow-glow-yoni)] sm:p-8">
          <div className="mb-5 flex items-center justify-between">
            <div>
              <p className="text-xs text-neutral-600 font-semibold">এককালীন মূল্য</p>
              <p className="text-3xl font-black text-gold">₹২৪৯</p>
            </div>
            <div className="rounded-full border border-[color:var(--deep-red)] bg-black/60 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-[color:var(--orange-glow)] flicker">
              Instant
            </div>
          </div>
          <p className="mb-4 text-xs text-neutral-600 font-medium">
            পেমেন্ট সফল হওয়ার সাথে সাথেই ই-বুকের লিঙ্ক আপনার ইমেলে পাঠানো হবে।
          </p>

          <div className="my-5 h-px bg-neutral-200" />
          <div className="space-y-2 text-sm">
            <div className="flex justify-between text-neutral-600"><span>সাবটোটাল</span><span className="font-semibold text-neutral-900">₹২৪৯</span></div>
            <div className="flex justify-between text-base"><span className="font-semibold text-neutral-900">মোট মূল্য</span><span className="font-black text-gold">₹২৪৯</span></div>
          </div>

          <a
            href="https://superprofile.bio/vp/যোনি-vashikaran-vidya--বাংলা-?checkout=true"
            className="group mt-5 flex w-full items-center justify-between rounded-xl px-5 py-3.5 text-sm font-bold text-white btn-glow cta-shine pulse-glow hover:btn-glow-hover"
          >
            <span>এখনই কিনুন</span>
            <Download className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
          </a>

          <div className="mt-4 flex items-center justify-center gap-2 text-[11px] text-white/50">
            <ShieldCheck className="h-3.5 w-3.5 text-[color:var(--accent)]" />
            নিরাপদ পেমেন্ট · তাৎক্ষণিক ডাউনলোড
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}

/* ---------------- Contact ---------------- */
function ContactSection() {
  return (
    <SectionShell>
      <div className="mx-auto max-w-3xl text-center">
        <SectionHeading eyebrow="যোগাযোগ" title="SoulMap Creations এর সাথে যোগাযোগ করুন" center />
        <p className="flex items-center justify-center gap-2 text-sm text-white/70">
          <Mail className="h-4 w-4 text-[color:var(--accent)]" />
          dh.soulmap@gmail.com
        </p>
        <div className="mt-10 text-left text-xs leading-relaxed text-white/50">
          <h4 className="mb-2 font-semibold text-white/70">সতর্কবার্তা ও ঘোষণা (Disclaimer)</h4>
          <p>
            এই ই-বুকে দেওয়া সমস্ত তথ্য, মন্ত্র ও পদ্ধতি শুধুমাত্র শিক্ষামূলক এবং আধ্যাত্মিক
            জ্ঞানের উদ্দেশ্যে প্রস্তুত করা হয়েছে। কোনো ধরনের নীতিবহির্ভূত, অসাধু বা ক্ষতিকর কাজে
            ব্যবহারের জন্য প্রকাশক দায়বদ্ধ থাকবে না। অনুগ্রহ করে সম্পূর্ণ নিষ্ঠা ও ইতিবাচক
            মনোভাব নিয়ে সাধনা করুন।
          </p>
        </div>
      </div>
    </SectionShell>
  );
}

/* ---------------- Building blocks ---------------- */
function BulletList({ items, check }: { items: string[]; check?: boolean }) {
  return (
    <ul className="space-y-2.5">
      {items.map((item, idx) => (
        <li
          key={item}
          className="fade-up flex items-start gap-3 text-[15px] text-white/85 transition-transform hover:translate-x-1"
          style={{ animationDelay: `${idx * 70}ms` }}
        >
          <span
            className={`mt-1 grid h-4 w-4 shrink-0 place-items-center rounded-full text-[10px] shadow-md ${
              check ? "bg-[var(--gradient-gold)] text-black" : "bg-[var(--gradient-purple)] text-white"
            }`}
          >
            {check ? "✓" : "✦"}
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function Testimonial({ name, text }: { name: string; text: string }) {
  return (
    <div className="group relative rounded-2xl border border-white/10 bg-card p-5 shadow-[var(--shadow-card)] transition-all duration-500 hover:-translate-y-1 hover:border-[color:var(--accent)]/40 hover:shadow-[var(--shadow-glow-yoni)]">
      <div className="mb-2 flex items-center justify-between">
        <div className="flex text-[color:var(--gold)]">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-current transition-transform group-hover:scale-110" style={{ transitionDelay: `${i * 40}ms` }} />
          ))}
        </div>
        <Quote className="h-5 w-5 text-[color:var(--accent)] transition-transform group-hover:rotate-12" />
      </div>
      <p className="mb-3 text-sm leading-relaxed text-neutral-800">{text}</p>
      <div className="flex items-center gap-2">
        <div className="grid h-7 w-7 place-items-center rounded-full bg-[var(--gradient-purple)] text-xs font-bold text-white">
          {name[0]}
        </div>
        <span className="text-sm font-semibold text-neutral-900">{name}</span>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/60 pt-8 pb-32">
      <div className="mx-auto max-w-6xl px-4 text-center text-xs text-white/50 sm:px-6 lg:px-8">
        <p className="flex items-center justify-center gap-1.5">
          <Heart className="h-3.5 w-3.5 text-[color:var(--accent)]" />
          © {new Date().getFullYear()} SoulMap Creations · সর্বস্বত্ব সংরক্ষিত
        </p>
      </div>
    </footer>
  );
}

/* ---------------- STICKY OFFER BAR ---------------- */
function StickyOfferBar() {
  const [time, setTime] = useState({ h: 9, m: 50, s: 12 });
  useEffect(() => {
    const t = setInterval(() => {
      setTime((v) => {
        let { h, m, s } = v;
        s--; if (s < 0) { s = 59; m--; }
        if (m < 0) { m = 59; h--; }
        if (h < 0) return { h: 0, m: 0, s: 0 };
        return { h, m, s };
      });
    }, 1000);
    return () => clearInterval(t);
  }, []);
  const pad = (n: number) => String(n).padStart(2, "0");
  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ delay: 1 }}
      className="fixed bottom-4 left-4 right-4 z-40 mx-auto max-w-3xl rounded-2xl p-3 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-lg border border-white/10 bg-black/80 backdrop-blur-md"
      style={{ boxShadow: "var(--shadow-glow-yoni)" }}
    >
      <div className="flex items-center gap-3 flex-row">
        <div className="flex items-center gap-2">
          {[time.h, time.m, time.s].map((n, i) => (
            <div key={i} className="text-center">
              <div className="rounded-lg px-2 py-1 font-mono font-bold text-white text-sm min-w-[36px] bg-[var(--gradient-purple)]">
                {pad(n)}
              </div>
              <span className="text-[9px] uppercase tracking-wider text-white/50">
                {["ঘণ্টা", "মিনিট", "সেকেন্ড"][i]}
              </span>
            </div>
          ))}
        </div>
        <div className="text-left">
          <p className="text-[10px] font-semibold uppercase tracking-wider text-[color:var(--gold)]">
            অফার শীঘ্রই শেষ হচ্ছে
          </p>
          <p className="text-sm font-bold text-white">
            <span className="line-through opacity-50 text-xs text-white/60">₹৯৯৯</span>{" "}
            <span className="text-gold font-extrabold">₹২৪৯</span>
          </p>
        </div>
      </div>
      <a
        href="https://superprofile.bio/vp/যোনি-vashikaran-vidya--বাংলা-?checkout=true"
        className="inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-xs sm:text-sm font-bold text-white btn-glow cta-shine hover:btn-glow-hover shrink-0 w-full sm:w-auto text-center"
      >
        এখনই ডাউনলোড করুন <ArrowRight className="h-4 w-4" />
      </a>
    </motion.div>
  );
}
