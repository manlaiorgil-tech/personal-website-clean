import { motion } from 'framer-motion';

const skills = [
  'Customer Service',
  'Food & Beverage',
  'Communication',
  'Teamwork',
  'Web Development',
  'Organization',
  'Office Applications',
  'DJing',
];

const experience = [
  {
    role: 'Front of House',
    company: 'On a Roll Catering',
    period: 'Jul 2025 – Mar 2026',
    description:
      'Greeting guests in busy environments, taking orders and payments through POS, handling customer inquiries, assisting with setup and restocking, and supervising new staff.',
  },
  {
    role: 'Pizza Chef & Order Taker',
    company: 'Base Wood Fired Pizza',
    period: 'Sep 2024 – Jul 2025',
    description:
      'Prepared wood-fired pizzas in a fast-paced kitchen, took in-store and phone orders, handled payments, and worked closely with kitchen and front-of-house teams.',
  },
  {
    role: 'Pizza and Burger Chef',
    company: 'Moreish Pizza',
    period: 'May 2024 – Sep 2024',
    description:
      'Prepared pizzas and burgers consistently while maintaining food quality and cleanliness standards during service.',
  },
  {
    role: 'Sales Representative',
    company: 'Smart Store',
    period: 'Aug 2023 – Apr 2024',
    description:
      'Handled customer calls, resolved issues, promoted products, and managed stock records with a strong focus on communication.',
  },
  {
    role: 'Barista',
    company: 'Tom N Toms Coffee',
    period: 'Nov 2022 – Aug 2023',
    description:
      'Prepared espresso-based drinks and teas, maintained bar cleanliness, and assisted customers in a busy café setting.',
  },
  {
    role: 'Waiter',
    company: 'Bluefin Cuisine D\'Art',
    period: 'Jun 2022 – Nov 2022',
    description:
      'Took customer orders, served food and drinks, maintained a clean dining area, and delivered friendly service during busy hours.',
  },
];

const services = [
  {
    title: 'Customer Service',
    description: 'Years of experience providing exceptional guest experiences in fast-paced hospitality environments.',
    link: '#experience',
  },
  {
    title: 'Food Preparation',
    description: 'Skilled in preparing quality food items including wood-fired pizzas, burgers, and specialty beverages.',
    link: '#experience',
  },
  {
    title: 'Team Leadership',
    description: 'Experience supervising staff, training new team members, and coordinating with diverse teams.',
    link: '#experience',
  },
  {
    title: 'Web Development',
    description: 'Building modern, responsive websites and learning new technologies in my spare time.',
    link: '#skills',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

export default function PersonalWebsite() {
  return (
    <div className="min-h-screen bg-cream text-charcoal">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-cream/90 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-12">
          <a href="#" className="text-lg font-medium tracking-tight">
            Manlai Orgil
          </a>
          <nav className="hidden items-center gap-8 text-sm text-muted md:flex">
            <a href="#about" className="transition-colors hover:text-charcoal">About</a>
            <a href="#services" className="transition-colors hover:text-charcoal">Services</a>
            <a href="#experience" className="transition-colors hover:text-charcoal">Experience</a>
            <a href="#contact" className="transition-colors hover:text-charcoal">Contact</a>
          </nav>
          <a
            href="#contact"
            className="hidden rounded-full bg-charcoal px-5 py-2.5 text-sm font-medium text-cream transition-transform hover:scale-105 md:block"
          >
            Get in Touch
          </a>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center pt-20">
          <div className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-12 lg:py-32">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
              <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={0}>
                <p className="mb-6 text-sm uppercase tracking-[0.2em] text-muted">
                  Hospitality Professional & Web Enthusiast
                </p>
                <h1 className="font-serif text-5xl leading-[1.1] tracking-tight md:text-6xl lg:text-7xl">
                  Customer-Focused Professional Based in Dublin.
                </h1>
                <p className="mt-8 max-w-lg text-lg leading-relaxed text-muted">
                  {"Let's be honest and cut through the noise — you need someone reliable who delivers exceptional service. That's what I do."}
                </p>
                <div className="mt-10 flex flex-wrap items-center gap-4">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 rounded-full bg-charcoal px-6 py-3 font-medium text-cream transition-transform hover:scale-105"
                  >
                    Hire Me
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                  <a
                    href="#experience"
                    className="inline-flex items-center gap-2 text-muted transition-colors hover:text-charcoal"
                  >
                    View Experience
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                custom={0.2}
                className="relative"
              >
                <div className="aspect-[4/5] overflow-hidden rounded-3xl bg-border">
                  <img
                    src="/profile.jpeg"
                    alt="Manlai Orgil"
                    className="h-full w-full object-cover object-top"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 rounded-2xl bg-white p-5 shadow-xl lg:-left-10">
                  <p className="text-sm text-muted">Status</p>
                  <p className="mt-1 font-serif text-xl">Open to Work</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="border-t border-border">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-12 lg:py-32">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              className="grid gap-12 lg:grid-cols-2 lg:gap-20"
            >
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-muted">About</p>
                <h2 className="mt-4 font-serif text-4xl leading-tight md:text-5xl">
                  Being reliable & customer-focused is my primary strength.
                </h2>
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-lg leading-relaxed text-muted">
                  {"I'm a highly motivated professional with experience in hospitality, customer service, and food preparation. I've worked in busy restaurants, cafés, and service roles in both Mongolia and Ireland."}
                </p>
                <p className="mt-6 text-lg leading-relaxed text-muted">
                  I take pride in learning fast, staying reliable, and delivering a strong customer experience. If you want to learn more about working with me, take a look through my experience below.
                </p>
                <a
                  href="#experience"
                  className="mt-8 inline-flex items-center gap-2 font-medium transition-colors hover:text-muted"
                >
                  Learn More
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section id="services" className="border-t border-border bg-white">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-12 lg:py-32">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeUp}
            >
              <p className="text-sm uppercase tracking-[0.2em] text-muted">What I Do</p>
              <h2 className="mt-4 font-serif text-4xl leading-tight md:text-5xl">
                My Expertise
              </h2>
            </motion.div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:mt-16">
              {services.map((service, index) => (
                <motion.a
                  key={service.title}
                  href={service.link}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={fadeUp}
                  custom={index * 0.1}
                  className="group rounded-2xl border border-border p-8 transition-all hover:border-charcoal hover:shadow-lg lg:p-10"
                >
                  <h3 className="font-serif text-2xl">{service.title}</h3>
                  <p className="mt-4 leading-relaxed text-muted">{service.description}</p>
                  <div className="mt-6 flex items-center gap-2 font-medium text-charcoal">
                    Learn More
                    <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="border-t border-border">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-12 lg:py-32">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeUp}
            >
              <p className="text-sm uppercase tracking-[0.2em] text-muted">Experience</p>
              <h2 className="mt-4 font-serif text-4xl leading-tight md:text-5xl">
                Work History
              </h2>
            </motion.div>

            <div className="mt-12 space-y-0 lg:mt-16">
              {experience.map((job, index) => (
                <motion.div
                  key={`${job.role}-${job.company}`}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={fadeUp}
                  custom={index * 0.05}
                  className="group border-b border-border py-8 lg:py-10"
                >
                  <div className="grid gap-4 lg:grid-cols-12 lg:items-start lg:gap-8">
                    <div className="lg:col-span-3">
                      <p className="text-sm text-muted">{job.period}</p>
                    </div>
                    <div className="lg:col-span-4">
                      <h3 className="font-serif text-xl">{job.role}</h3>
                      <p className="mt-1 text-muted">{job.company}</p>
                    </div>
                    <div className="lg:col-span-5">
                      <p className="leading-relaxed text-muted">{job.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="border-t border-border bg-white">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-12 lg:py-32">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              className="grid gap-12 lg:grid-cols-2 lg:gap-20"
            >
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-muted">Skills</p>
                <h2 className="mt-4 font-serif text-4xl leading-tight md:text-5xl">
                  What I Bring
                </h2>
              </div>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-border px-5 py-2.5 text-sm transition-colors hover:border-charcoal hover:bg-charcoal hover:text-cream"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="border-t border-border bg-charcoal text-cream">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-12 lg:py-32">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              className="grid gap-12 lg:grid-cols-2 lg:gap-20"
            >
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-cream/60">Contact</p>
                <h2 className="mt-4 font-serif text-4xl leading-tight md:text-5xl">
                  {"Let's Connect"}
                </h2>
                <p className="mt-6 max-w-md leading-relaxed text-cream/70">
                  Looking to hire someone reliable and customer-focused? Reach out and let&apos;s discuss how I can help.
                </p>
              </div>
              <div className="flex flex-col gap-6">
                <a
                  href="mailto:manlaiorgil@gmail.com"
                  className="group flex items-center justify-between rounded-xl border border-cream/20 p-5 transition-colors hover:border-cream/40"
                >
                  <div>
                    <p className="text-sm text-cream/60">Email</p>
                    <p className="mt-1 font-medium">manlaiorgil@gmail.com</p>
                  </div>
                  <svg className="h-5 w-5 text-cream/40 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/manlaiorgil"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between rounded-xl border border-cream/20 p-5 transition-colors hover:border-cream/40"
                >
                  <div>
                    <p className="text-sm text-cream/60">LinkedIn</p>
                    <p className="mt-1 font-medium">linkedin.com/in/manlaiorgil</p>
                  </div>
                  <svg className="h-5 w-5 text-cream/40 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <a
                  href="tel:0874785692"
                  className="group flex items-center justify-between rounded-xl border border-cream/20 p-5 transition-colors hover:border-cream/40"
                >
                  <div>
                    <p className="text-sm text-cream/60">Phone</p>
                    <p className="mt-1 font-medium">087 478 5692</p>
                  </div>
                  <svg className="h-5 w-5 text-cream/40 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/gorehiv"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between rounded-xl border border-cream/20 p-5 transition-colors hover:border-cream/40"
                >
                  <div>
                    <p className="text-sm text-cream/60">Instagram</p>
                    <p className="mt-1 font-medium">@gorehiv</p>
                  </div>
                  <svg className="h-5 w-5 text-cream/40 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-border bg-cream">
          <div className="mx-auto max-w-7xl px-6 py-8 lg:px-12">
            <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
              <p className="text-sm text-muted">
                Manlai Orgil. Dublin, Ireland.
              </p>
              <p className="text-sm text-muted">
                Available for opportunities.
              </p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
