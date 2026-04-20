import { motion } from 'framer-motion';

const skills = [
  'Customer service',
  'Food & beverage preparation',
  'Communication',
  'Teamwork & collaboration',
  'Web Developing',
  'Organizational skills',
  'Office application skills',
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
    role: 'Pizza Chef & Order Taker (FOH)',
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
    role: 'Sales & Call Center Representative',
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
    company: 'Bluefin Cuisine D&apos;Art',
    period: 'Jun 2022 – Nov 2022',
    description:
      'Took customer orders, served food and drinks, maintained a clean dining area, and delivered friendly service during busy hours.',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

export default function PersonalWebsite() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-12">
          <a href="#" className="text-sm font-medium tracking-tight">
            Manlai Orgil
          </a>
          <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
            <a href="#about" className="transition-colors hover:text-foreground">About</a>
            <a href="#experience" className="transition-colors hover:text-foreground">Experience</a>
            <a href="#skills" className="transition-colors hover:text-foreground">Skills</a>
            <a href="#contact" className="transition-colors hover:text-foreground">Contact</a>
          </nav>
          <a 
            href="#contact" 
            className="rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition-opacity hover:opacity-80"
          >
            Get in Touch
          </a>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="min-h-screen flex items-center pt-20">
          <div className="mx-auto max-w-7xl px-6 py-24 lg:px-12">
            <div className="grid gap-16 lg:grid-cols-2 lg:items-center lg:gap-24">
              <motion.div 
                initial="hidden" 
                animate="visible" 
                variants={stagger}
                className="order-2 lg:order-1"
              >
                <motion.p 
                  variants={fadeUp} 
                  custom={0}
                  className="text-sm uppercase tracking-[0.2em] text-muted-foreground"
                >
                  Dublin, Ireland
                </motion.p>
                <motion.h1 
                  variants={fadeUp} 
                  custom={0.1}
                  className="mt-4 text-5xl font-medium leading-[1.1] tracking-tight md:text-7xl"
                >
                  Manlai Orgil
                </motion.h1>
                <motion.p 
                  variants={fadeUp} 
                  custom={0.2}
                  className="mt-2 text-2xl text-muted-foreground md:text-3xl"
                >
                  Hospitality Professional
                </motion.p>
                <motion.p 
                  variants={fadeUp} 
                  custom={0.3}
                  className="mt-8 max-w-lg text-lg leading-relaxed text-muted-foreground"
                >
                  Customer-focused professional with experience across front of house, 
                  barista work, call center support, and fast-paced kitchen environments.
                </motion.p>
                <motion.div 
                  variants={fadeUp} 
                  custom={0.4}
                  className="mt-10 flex flex-wrap gap-4"
                >
                  <a
                    href="#contact"
                    className="inline-flex items-center rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-80"
                  >
                    Contact Me
                  </a>
                  <a
                    href="#experience"
                    className="inline-flex items-center rounded-full border border-border px-6 py-3 text-sm font-medium transition-colors hover:bg-muted"
                  >
                    View Experience
                  </a>
                </motion.div>
              </motion.div>

              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                custom={0.2}
                className="order-1 lg:order-2"
              >
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-muted">
                  <img
                    src="/profile.jpeg"
                    alt="Manlai Orgil"
                    className="h-full w-full object-cover object-top"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="border-t border-border">
          <div className="mx-auto max-w-7xl px-6 py-24 lg:px-12 lg:py-32">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={stagger}
              className="grid gap-12 lg:grid-cols-12 lg:gap-16"
            >
              <motion.div variants={fadeUp} className="lg:col-span-4">
                <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">About</p>
              </motion.div>
              <motion.div variants={fadeUp} custom={0.1} className="lg:col-span-8">
                <h2 className="text-3xl font-medium leading-tight tracking-tight md:text-4xl">
                  A highly motivated and customer-focused professional with experience in hospitality, 
                  customer service, and food preparation.
                </h2>
                <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
                  {"I've worked in busy restaurants, cafés, and service roles in both Mongolia and Ireland. I take pride in learning fast, staying reliable, and delivering a strong customer experience. Currently based in Dublin and open to new opportunities."}
                </p>
                <div className="mt-12 grid gap-8 sm:grid-cols-2">
                  <div className="border-t border-border pt-6">
                    <p className="text-sm uppercase tracking-[0.15em] text-muted-foreground">Status</p>
                    <p className="mt-2 text-lg font-medium">Open to Work</p>
                  </div>
                  <div className="border-t border-border pt-6">
                    <p className="text-sm uppercase tracking-[0.15em] text-muted-foreground">Location</p>
                    <p className="mt-2 text-lg font-medium">Dublin, Ireland</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="border-t border-border bg-muted">
          <div className="mx-auto max-w-7xl px-6 py-24 lg:px-12 lg:py-32">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={stagger}
            >
              <motion.div variants={fadeUp} className="mb-16">
                <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Experience</p>
                <h2 className="mt-4 text-3xl font-medium tracking-tight md:text-4xl">Work History</h2>
              </motion.div>

              <div className="space-y-0">
                {experience.map((job, index) => (
                  <motion.div
                    key={`${job.role}-${job.company}`}
                    variants={fadeUp}
                    custom={index * 0.05}
                    className="group border-t border-border py-8 transition-colors hover:bg-background/50 lg:py-10"
                  >
                    <div className="grid gap-4 lg:grid-cols-12 lg:gap-8">
                      <div className="lg:col-span-3">
                        <p className="text-sm text-muted-foreground">{job.period}</p>
                      </div>
                      <div className="lg:col-span-9">
                        <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-3">
                          <h3 className="text-lg font-medium">{job.role}</h3>
                          <span className="text-muted-foreground">at {job.company}</span>
                        </div>
                        <p className="mt-3 max-w-2xl leading-relaxed text-muted-foreground">
                          {job.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="border-t border-border">
          <div className="mx-auto max-w-7xl px-6 py-24 lg:px-12 lg:py-32">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={stagger}
              className="grid gap-12 lg:grid-cols-12 lg:gap-16"
            >
              <motion.div variants={fadeUp} className="lg:col-span-4">
                <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Skills</p>
                <h2 className="mt-4 text-3xl font-medium tracking-tight md:text-4xl">What I Bring</h2>
              </motion.div>
              <motion.div variants={fadeUp} custom={0.1} className="lg:col-span-8">
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-border bg-background px-5 py-2.5 text-sm transition-colors hover:bg-muted"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="border-t border-border bg-foreground text-background">
          <div className="mx-auto max-w-7xl px-6 py-24 lg:px-12 lg:py-32">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={stagger}
            >
              <motion.p 
                variants={fadeUp}
                className="text-sm uppercase tracking-[0.2em] text-background/60"
              >
                Contact
              </motion.p>
              <motion.h2 
                variants={fadeUp}
                custom={0.1}
                className="mt-4 text-3xl font-medium tracking-tight md:text-5xl"
              >
                {"Let's connect"}
              </motion.h2>
              <motion.p 
                variants={fadeUp}
                custom={0.2}
                className="mt-6 max-w-xl text-lg text-background/70"
              >
                Here are the best ways to reach me and learn more about my experience.
              </motion.p>

              <motion.div 
                variants={fadeUp}
                custom={0.3}
                className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
              >
                <a
                  href="mailto:manlaiorgil@gmail.com"
                  className="group flex flex-col gap-2 rounded-xl border border-background/20 p-6 transition-colors hover:bg-background/10"
                >
                  <p className="text-sm text-background/60">Email</p>
                  <p className="font-medium">manlaiorgil@gmail.com</p>
                </a>
                <a
                  href="https://www.linkedin.com/in/manlaiorgil"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex flex-col gap-2 rounded-xl border border-background/20 p-6 transition-colors hover:bg-background/10"
                >
                  <p className="text-sm text-background/60">LinkedIn</p>
                  <p className="font-medium">linkedin.com/in/manlaiorgil</p>
                </a>
                <a
                  href="tel:0874785692"
                  className="group flex flex-col gap-2 rounded-xl border border-background/20 p-6 transition-colors hover:bg-background/10"
                >
                  <p className="text-sm text-background/60">Phone</p>
                  <p className="font-medium">087 478 5692</p>
                </a>
              </motion.div>

              <motion.div 
                variants={fadeUp}
                custom={0.4}
                className="mt-12 flex flex-wrap gap-4"
              >
                <a
                  href="https://www.instagram.com/gorehiv"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center rounded-full border border-background/20 px-5 py-2.5 text-sm font-medium transition-colors hover:bg-background/10"
                >
                  Instagram
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-8 lg:px-12">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-muted-foreground">
              2024 Manlai Orgil
            </p>
            <p className="text-sm text-muted-foreground">
              Dublin, Ireland
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
