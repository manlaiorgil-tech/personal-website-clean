import { motion } from 'framer-motion';

const skills = [
  'Customer service',
  'Food & beverage preparation',
  'Communication',
  'Teamwork & collaboration',
  'Time management',
  'Organizational skills',
  'Office application skills',
  'Front of house service',
];

const experience = [
  {
    role: 'Front of House',
    company: 'On a Roll Catering',
    period: 'Jul 2025 – Present',
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
    company: 'Bluefin Cuisine D’Art',
    period: 'Jun 2022 – Nov 2022',
    description:
      'Took customer orders, served food and drinks, maintained a clean dining area, and delivered friendly service during busy hours.',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay, ease: 'easeOut' },
  }),
};

export default function PersonalWebsite() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Personal Website</p>
            <h1 className="text-xl font-semibold">Manlai Orgil</h1>
          </div>
          <nav className="hidden gap-6 text-sm text-slate-300 md:flex">
            <a href="#about" className="transition hover:text-white">About</a>
            <a href="#experience" className="transition hover:text-white">Experience</a>
            <a href="#skills" className="transition hover:text-white">Skills</a>
            <a href="#contact" className="transition hover:text-white">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-2 md:items-center">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={0.05}>
            <p className="mb-4 inline-block rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-1 text-sm text-emerald-300">
              Based in Dublin • Open to opportunities
            </p>
            <h2 className="text-4xl font-bold leading-tight md:text-6xl">
              Hi, I’m <span className="text-emerald-400">Manlai Orgil</span>.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
              I’m a customer-focused hospitality professional based in Dublin, with experience across front of house,
              barista work, call center support, and fast-paced kitchen environments.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-white/20 px-5 py-3 font-medium text-white transition hover:bg-white/5"
              >
                Instagram
              </a>
              <a
                href="#contact"
                className="rounded-2xl bg-emerald-400 px-5 py-3 font-medium text-slate-950 transition hover:scale-[1.02]"
              >
                Contact Me
              </a>
              <a
                href="#experience"
                className="rounded-2xl border border-white/15 px-5 py-3 font-medium text-white transition hover:bg-white/5"
              >
                View Experience
              </a>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={0.15}
            className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-glow"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                ['Current Role', 'Front of House'],
                ['Main Goal', 'Career Growth'],
                ['Based In', 'Dublin, Ireland'],
                ['Focus', 'Hospitality & Service'],
              ].map(([label, value]) => (
                <div key={label} className="rounded-2xl border border-white/10 bg-slate-900 p-5">
                  <p className="text-sm text-slate-400">{label}</p>
                  <p className="mt-2 text-lg font-semibold">{value}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        <section id="about" className="mx-auto max-w-6xl px-6 py-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            custom={0.05}
            className="rounded-[2rem] border border-white/10 bg-white/5 p-8 md:p-10"
          >
            <p className="text-sm uppercase tracking-[0.2em] text-emerald-300">About</p>
            <h3 className="mt-3 text-3xl font-semibold">A simple intro</h3>
            <p className="mt-6 max-w-3xl leading-8 text-slate-300">
              I’m a highly motivated and customer-focused professional with experience in hospitality, customer service,
              and food preparation. I’ve worked in busy restaurants, cafés, and service roles in both Mongolia and
              Ireland, and I take pride in learning fast, staying reliable, and delivering a strong customer experience.
            </p>
          </motion.div>
        </section>

        <section id="experience" className="mx-auto max-w-6xl px-6 py-12">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-emerald-300">Experience</p>
            <h3 className="mt-3 text-3xl font-semibold">Work history</h3>
          </div>

          <div className="mt-8 grid gap-6">
            {experience.map((job, index) => (
              <motion.div
                key={`${job.role}-${job.company}`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
                custom={index * 0.06}
                className="rounded-[2rem] border border-white/10 bg-white/5 p-6 transition hover:bg-white/[0.07]"
              >
                <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                  <div>
                    <h4 className="text-xl font-semibold">{job.role}</h4>
                    <p className="text-slate-300">{job.company}</p>
                  </div>
                  <p className="text-sm text-slate-400">{job.period}</p>
                </div>
                <p className="mt-4 max-w-3xl leading-7 text-slate-300">{job.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="skills" className="mx-auto max-w-6xl px-6 py-12">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp}>
            <p className="text-sm uppercase tracking-[0.2em] text-emerald-300">Skills</p>
            <h3 className="mt-3 text-3xl font-semibold">What I bring</h3>
            <div className="mt-8 flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </section>

        <section id="contact" className="mx-auto max-w-6xl px-6 py-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className="rounded-[2rem] border border-emerald-400/20 bg-emerald-400/10 p-8 md:p-10"
          >
            <p className="text-sm uppercase tracking-[0.2em] text-emerald-200">Contact</p>
            <h3 className="mt-3 text-3xl font-semibold text-white">Let’s connect</h3>
            <p className="mt-4 max-w-2xl leading-8 text-emerald-50/90">
              Here are the best ways to reach me and learn more about my experience.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="mailto:manlaiorgil@gmail.com"
                className="rounded-2xl bg-white px-5 py-3 font-medium text-slate-950 transition hover:scale-[1.02]"
              >
                manlaiorgil@gmail.com
              </a>
              <a
                href="https://www.linkedin.com/in/manlaiorgil"
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-white/20 px-5 py-3 font-medium text-white transition hover:bg-white/5"
              >
                LinkedIn
              </a>
              <a
                href="tel:0874785692"
                className="rounded-2xl border border-white/20 px-5 py-3 font-medium text-white transition hover:bg-white/5"
              >
                087 478 5692
              </a>
            </div>
          </motion.div>
        </section>
      </main>
    </div>
  );
}
