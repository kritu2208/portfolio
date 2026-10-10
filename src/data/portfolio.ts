/**
 * Central portfolio data — generated from Kritu Rajput's verified resume and career records.
 * Incorporates:
 * - Education: B.Tech CSBS (87%) at RGPV Bhopal
 * - Experiences:
 *   1. Creative Head (Part-time) at Medmark Digital Marketing (Healthcare & Clinics)
 *   2. AI Automation Intern (Full-time) at Maalibu Private Limited
 *   3. Backend Intern (Smart Meter Data Processing) at VRG Private Limited
 *   4. Data Analyst Intern at Elevate Labs (E-Commerce datasets)
 *   5. AI Intern at Suvidha Foundation (Infinite LLM Memory)
 * - Certifications with direct verification links:
 *   1. Google Advanced Data Analytics (Coursera share link)
 *   2. Oracle Agentic AI Associate (Oracle CertView share link)
 *   3. CS50 Python (HarvardX certificate PDF link)
 *   4. McKinsey Forward Program 2026
 * - Achievements:
 *   1. ICPC Regionalist 2025 (Rank 445)
 *   2. Open Source Contributor — GirlScript Summer of Code (GSSoC) 2025
 *   3. Hackloop Hackathon 2025 (Top 10)
 *   4. 300+ LeetCode problems solved
 */

export type Palette = { from: string; via: string; to: string; accent: string };

export const profile = {
  fullName: 'Kritu Rajput',
  displayName: 'Kritu Rajput',
  firstName: 'KRITU',
  seriesTag: 'THE SERIES',
  /** Fictional studio card shown at the very start of the opening sequence. */
  originalLabel: 'A KRITU ORIGINAL',
  role: 'Data Analyst & AI Automation Specialist',
  tagline: ['Data Analyst', 'SQL & Python', 'Power BI & Tableau', 'Decision Intelligence', 'AI Workflows'],
  intro:
    'Graduate with a B.Tech in Computer Science and Business Systems, combining analytical thinking with hands-on engineering. Strong in SQL, Python, Power BI, Tableau and Excel, with experience in data cleaning, EDA, KPI tracking and statistical anomaly detection. I take a business question from raw data to a clear answer: checking data quality, building the pipelines and APIs behind it, automating repetitive work with AI workflows, and explaining the why behind a metric to non-technical teams.',
  location: 'Bhopal, Madhya Pradesh',
  phone: '+91 8120150686',
  email: 'kritu22raj@gmail.com',
  links: {
    linkedin: 'https://linkedin.com/in/kritu-rajput-884558299/',
    github: 'https://github.com/kritu2208',
  },
  resumePdf: '/assets/KrituRajput_data_analyst.pdf',
  portrait: {
    src: '/assets/portrait-720.webp',
    srcSet: '/assets/portrait-420.webp 420w, /assets/portrait-720.webp 720w, /assets/portrait-1100.webp 1100w',
    avatar: '/assets/avatar-square.webp',
    alt: 'Portrait of Kritu Rajput — Data Analyst',
  },
  interests: [
    'Data Analysis & EDA',
    'Statistical Anomaly Detection',
    'Power BI & Tableau Dashboards',
    'SQL & Relational Pipelines',
    'AI Automation Workflows (n8n)',
    'Infinite LLM Memory Research',
    'Open Source Contribution',
  ],
};

export const education = [
  {
    school: 'Rajiv Gandhi Proudyogiki Vishwavidyalaya, Bhopal',
    place: 'Bhopal, Madhya Pradesh',
    degree: 'B.Tech — Computer Science and Business Systems',
    period: 'June 2026',
    score: '87%',
  },
];

export const experience = [
  {
    company: 'Medmark Digital Marketing',
    role: 'Creative Head (Part-time)',
    place: 'Hybrid / Remote',
    period: 'April 2026 – Present',
    points: [
      'Leading creative direction, pitching, and client communication specifically tailored for doctors, medical clinics, and healthcare businesses.',
      'Translating complex clinical specializations into persuasive patient-facing brand narratives, pitch decks, and digital positioning strategies.',
      'Managing client onboarding pipelines, aligning creative teams with healthcare marketing regulations, and overseeing doctor consultations.',
      'Tracking campaign engagement metrics, patient-inquiry conversion funnels, and optimizing digital ROI across healthcare practices.',
    ],
  },
  {
    company: 'Maalibu Private Limited',
    role: 'AI Automation Intern (Full-time)',
    place: 'Remote',
    period: 'May 2026 – Present',
    points: [
      'Built and tested AI workflows in n8n and Python for e-commerce and other clients: lead capture, follow-ups and order-status flows.',
      'Set up a lead flow: webhook intake, LLM (OpenAI/Gemini) intent classification, push to HubSpot or Zoho CRM with a sales alert.',
      'Worked with JSON, API authentication and Google Sheets/database integrations; tested flows across 50+ real-world scenarios and debugged failed API calls and wrong AI outputs by fixing prompts and workflow logic.',
      'Maintained workflow documentation and worked with senior automation engineers to test and deploy client-specific automations.',
    ],
  },
  {
    company: 'VRG Private Limited',
    role: 'Backend Intern (Smart Meter Data Processing & Monitoring)',
    place: 'Bhopal, Madhya Pradesh',
    period: 'Dec 2025 – Mar 2026',
    points: [
      'Developed and tested REST APIs in Python (FastAPI) on PostgreSQL/Supabase to receive meter readings and serve device and consumption data to dashboards and internal tools; tested with Postman, versioned in Git/GitHub.',
      'Validated incoming device data (readings, timestamps, device IDs, status), approx. 5,000–8,000 records daily; built checks for missing readings, duplicates, abnormal consumption and inactive meters.',
      'Tracked approx. 200–400 faulty meters per month for inspection or replacement; tuned queries with senior developers.',
      'Automated repetitive validation, cutting manual checking from approx. 2–3 hours to about 1 hour a day.',
    ],
  },
  {
    company: 'Elevate Labs',
    role: 'Data Analyst Intern',
    place: 'Remote',
    period: 'April 2025 – June 2025',
    points: [
      'Performed deep Exploratory Data Analysis (EDA) on real-world e-commerce transactional datasets to uncover sales trends, peak purchase windows, and revenue drivers.',
      'Engineered SQL CTEs and window functions to compute customer retention, churn rate, average order value (AOV), and cohort lifetime value.',
      'Identified inventory bottlenecks and delivery turnaround anomalies, presenting actionable data visualizations and executive dashboard reports.',
      'Streamlined weekly reporting pipelines by automating Excel and Google Sheets data validation scripts using Python (Pandas/NumPy).',
    ],
  },
  {
    company: 'Suvidha Foundation (Suvidha Mahila Mandal)',
    role: 'Artificial Intelligence Intern',
    place: 'Remote',
    period: 'Sept 2025 – Nov 2025',
    points: [
      'Researched and implemented Infinite LLM Memory architectures to bypass prompt token bottlenecks for long-horizon context retention.',
      'Constructed dynamic memory indexing, hierarchical retrieval, and vector memory augmentation to persist multi-session facts seamlessly.',
      'Benchmarked memory fidelity and context retrieval accuracy against standard RAG pipelines, significantly improving recall on extensive documents.',
      'Collaborated on prototype integrations, optimizing vector storage lookups and documenting algorithmic memory management workflows.',
    ],
  },
];

export type Metric = { value: string; label: string };

export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  github?: string;
  palette: Palette;
  motif: 'shield' | 'flow' | 'tenants';
};

export const projects: Project[] = [
  {
    id: 'picketiq',
    title: 'PicketIQ',
    year: '2026',
    genre: 'Decision Intelligence • E-commerce BI • Anomaly Detection',
    logline: 'Monitors 6 daily business KPIs on 451K+ records, flags statistical anomalies with rolling Z-scores, and runs 3-way SQL root-cause diagnostics.',
    stack: ['Python', 'FastAPI', 'PostgreSQL', 'Next.js', 'SQL CTEs', 'OpenAI/Gemini', 'Pytest'],
    build: [
      'Built a platform that monitors 6 daily business KPIs (orders, revenue, cancellations, delivery delay, etc.) on the Olist e-commerce dataset (451K+ records) using PostgreSQL, SQL window functions and CTEs.',
      'Flags anomalies (|Z| ≥ 3) against a 14-day rolling baseline with volatility-adjusted Z-scores, with no future-data leakage.',
      'Investigates each anomaly with three SQL diagnostics: state-wise segment breakdown, 8-week same-weekday seasonality check and 14-day trend regression.',
      'Traced the Black Friday 2017 spike (+498% orders, Z = 26.8) to São Paulo, which drove 38.4% of it.',
      'Added an LLM layer (OpenAI/Gemini) that writes the root cause and recommended action, with an audit step that checks every number it cites against database results; backed by 86 Pytest tests and a Next.js/TypeScript dashboard.',
    ],
    features: [
      'Monitors 6 daily business KPIs across 451K+ records',
      'Volatility-adjusted Z-scores (|Z| ≥ 3) with zero future-data leakage',
      '3-way SQL diagnostics: Segment breakdown, Seasonality & Trend regression',
      'Traced Black Friday 2017 spike (+498% orders) to São Paulo (38.4% contribution)',
      'Audited LLM root-cause synthesis validated directly against SQL outputs',
    ],
    metrics: [
      { value: '451K+', label: 'records analyzed' },
      { value: '6', label: 'daily business KPIs' },
      { value: '|Z| ≥ 3', label: 'anomaly threshold' },
      { value: '+498%', label: 'Black Friday spike traced' },
      { value: '86', label: 'Pytest test suite' },
    ],
    github: 'https://github.com/kritu2208',
    palette: { from: '#2a0610', via: '#7a0f24', to: '#0b0710', accent: '#ff3d5a' },
    motif: 'shield',
  },
  {
    id: 'pr-sentinel',
    title: 'PR Sentinel',
    year: '2026',
    genre: 'Autonomous AI Systems • LangGraph • LLM Ops',
    logline: 'Autonomous AI code review platform acknowledging webhooks in <50ms with a durable queue, 6-step review pipeline, and 100% diff-line validation.',
    stack: ['Python', 'FastAPI', 'LangGraph', 'Groq LLMs', 'PostgreSQL', 'SQLAlchemy', 'Docker'],
    build: [
      'Built a GitHub PR review platform with FastAPI, LangGraph and Groq LLMs; the webhook acknowledges in under 50 ms.',
      'Designed a durable job queue (PostgreSQL/SQLite, SQLAlchemy, Alembic) with worker heartbeats, stale-job reclaim and lease fencing, so reviews survive restarts and are never posted twice.',
      'Built a six-step review pipeline (context retrieval, LLM analysis, diff-line validation, root-cause investigation, verdict, posting).',
      'Checks every generated comment against real diff lines before posting and publishes one consolidated GitHub review per PR; covered by 113 automated tests.',
    ],
    features: [
      'Sub-50ms webhook intake response time',
      'Durable job queue with worker heartbeats & lease fencing',
      'Six-step AI review pipeline orchestrated with LangGraph',
      'Rigorous 100% diff-line validation before publishing comments',
      'One consolidated review verdict per GitHub pull request',
    ],
    metrics: [
      { value: '<50ms', label: 'webhook ack latency' },
      { value: '6-step', label: 'review pipeline' },
      { value: '113', label: 'automated tests' },
      { value: '1', label: 'consolidated review / PR' },
      { value: '100%', label: 'diff-line validation' },
    ],
    github: 'https://github.com/kritu2208',
    palette: { from: '#1a0d02', via: '#8a4a07', to: '#0a0806', accent: '#ffb547' },
    motif: 'flow',
  },
  {
    id: 'smart-meter-monitoring',
    title: 'Smart Meter Data Pipeline',
    year: '2025–2026',
    genre: 'IoT Data Processing • Anomaly Detection • Validation',
    logline: 'High-throughput data validation pipeline processing 5,000–8,000 daily meter records and automating faulty-meter anomaly tracking.',
    stack: ['Python', 'FastAPI', 'PostgreSQL', 'Supabase', 'Postman', 'Git/GitHub'],
    build: [
      'Developed and tested REST APIs in Python (FastAPI) on PostgreSQL/Supabase to receive meter readings and serve device and consumption data to dashboards and internal tools; tested with Postman, versioned in Git/GitHub.',
      'Validated incoming device data (readings, timestamps, device IDs, status), approx. 5,000–8,000 records daily; built checks for missing readings, duplicates, abnormal consumption and inactive meters.',
      'Tracked approx. 200–400 faulty meters per month for inspection or replacement; tuned queries with senior developers.',
      'Automated repetitive validation, cutting manual checking from approx. 2–3 hours to about 1 hour a day.',
    ],
    features: [
      'Validates 5,000–8,000 daily device records for integrity & consistency',
      'Detects missing readings, duplicates, abnormal spikes & inactive meters',
      'Monthly operational tracking of 200–400 faulty meters for replacement',
      'REST APIs serving real-time consumption data to operational dashboards',
      'Cut manual inspection overhead from 2–3 hours down to 1 hour/day',
    ],
    metrics: [
      { value: '5K–8K', label: 'records validated daily' },
      { value: '200–400', label: 'faulty meters tracked / mo' },
      { value: '2–3h → ~1h', label: 'manual time saved daily' },
      { value: '100%', label: 'automated data checks' },
    ],
    github: 'https://github.com/kritu2208',
    palette: { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' },
    motif: 'tenants',
  },
];

export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  link?: string;
};

export const achievements: Achievement[] = [
  {
    id: 'icpc-regionalist',
    title: 'ICPC Regionalist',
    org: 'ICPC (International Collegiate Programming Contest)',
    detail: 'Achieved Rank 445 in the prestigious ICPC regional contest, solving complex algorithmic challenges under strict competition constraints.',
    laurel: 'Regionalist 2025 · Rank 445',
  },
  {
    id: 'gssoc-2025',
    title: 'Open Source Contributor',
    org: 'GirlScript Summer of Code (GSSoC) 2025',
    detail: 'Active contributor in GirlScript Summer of Code 2025; contributed code, feature enhancements, and bug resolutions to production open-source repositories.',
    laurel: 'GSSoC 2025 · Contributor',
    link: 'https://gssoc.girlscript.tech/',
  },
  {
    id: 'hackloop',
    title: 'Top 10 Finish',
    org: 'Hackloop Hackathon 2025',
    detail: 'Ranked in the top 10 finalists out of hundreds of participants in an intensive engineering & problem-solving sprint.',
    laurel: 'Hackloop 2025 · Top 10',
  },
  {
    id: 'leetcode-300',
    title: '300+ Problems Solved',
    org: 'LeetCode & Competitive Coding',
    detail: 'Demonstrated continuous algorithmic mastery across Data Structures, Algorithms, SQL queries, and competitive problem solving.',
    laurel: 'Algorithmic Mastery',
    link: 'https://leetcode.com/u/kritu2208/',
  },
];

export type Certification = { issuer: string; name: string; link: string; year?: string };

export const certifications: Certification[] = [
  {
    issuer: 'Google',
    name: 'Google Advanced Data Analytics (Coursera)',
    link: 'https://coursera.org/share/4ef2c8cd4afdfe3402d82fc2db4c9aa2',
  },
  {
    issuer: 'Oracle',
    name: 'Oracle Agentic AI Associate',
    link: 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=72EC0BD9A77F3A473A14AEE65B4F49764DDDB642E1F2A470A9FF51D87EEF53F4',
  },
  {
    issuer: 'HarvardX',
    name: 'CS50 Python (HarvardX)',
    link: 'https://certificates.cs50.io/4e0e447f-ca46-48ca-8e1e-76c206400acc.pdf?size=letter',
  },
  {
    issuer: 'McKinsey',
    name: 'McKinsey Forward Program 2026',
    link: 'https://www.mckinsey.com/forward/overview',
    year: '2026',
  },
];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages-tools',
    title: 'Languages & Tools',
    subtitle: 'Core programming, query & dev tools',
    skills: [
      { name: 'Python', mono: 'Py', note: 'Core' },
      { name: 'SQL', mono: 'Sq', note: 'Primary' },
      { name: 'JavaScript', mono: 'Js' },
      { name: 'TypeScript', mono: 'Ts' },
      { name: 'Git / GitHub', mono: 'Gt' },
      { name: 'Docker', mono: 'Dk' },
      { name: 'Postman', mono: 'Pm' },
    ],
  },
  {
    id: 'libraries-databases',
    title: 'Libraries & Databases',
    subtitle: 'Data manipulation, modeling & storage',
    skills: [
      { name: 'Pandas', mono: 'Pd', note: 'EDA' },
      { name: 'NumPy', mono: 'Np' },
      { name: 'scikit-learn', mono: 'Sk', note: 'ML' },
      { name: 'PyTorch', mono: 'Pt' },
      { name: 'LangChain', mono: 'Lc', note: 'Agents' },
      { name: 'PostgreSQL', mono: 'Pg', note: 'Relational' },
      { name: 'Supabase', mono: 'Sb' },
      { name: 'React.js', mono: 'Rj' },
    ],
  },
  {
    id: 'bi-visualization',
    title: 'BI & Visualization',
    subtitle: 'Dashboard storytelling & reporting',
    skills: [
      { name: 'Power BI', mono: 'Pb', note: 'KPIs' },
      { name: 'Tableau', mono: 'Tb', note: 'Visuals' },
      { name: 'Advanced Excel', mono: 'Ex', note: 'Formulas' },
      { name: 'Google Sheets', mono: 'Gs' },
    ],
  },
  {
    id: 'data-analysis',
    title: 'Data Analysis',
    subtitle: 'Diagnostic & predictive problem solving',
    skills: [
      { name: 'EDA & Cleaning', mono: 'Ed', note: 'Raw Data' },
      { name: 'Data Validation', mono: 'Dv', note: 'Integrity' },
      { name: 'KPI Tracking', mono: 'Kp', note: 'Business' },
      { name: 'Anomaly Detection', mono: 'Ad', note: 'Z-Scores' },
      { name: 'Statistical Analysis', mono: 'St' },
    ],
  },
  {
    id: 'automation-backend',
    title: 'Automation & Backend',
    subtitle: 'API services & intelligent pipelines',
    skills: [
      { name: 'n8n', mono: 'N8', note: 'Workflows' },
      { name: 'FastAPI', mono: 'Fa', note: 'REST' },
      { name: 'REST APIs', mono: 'Ap' },
      { name: 'Zoho CRM', mono: 'Zc', note: 'Pipelines' },
      { name: 'Infinite LLM Memory', mono: 'Im', note: 'AI Research' },
    ],
  },
];

export const skillEvidence: Record<string, string[]> = {
  SQL: ['PicketIQ (451K+ records, window functions & CTEs)', 'Elevate Labs e-commerce cohort queries', 'Smart Meter validation at VRG', 'Google Advanced Data Analytics'],
  Python: ['PicketIQ anomaly engine', 'PR Sentinel AI pipeline', 'FastAPI meter service', 'CS50 Python', 'Suvidha Foundation Infinite Memory'],
  'Power BI': ['Business KPI tracking', 'Interactive executive dashboards', 'Google Advanced Analytics'],
  Tableau: ['Exploratory data visualization', 'Segment analysis & seasonality charts'],
  'Advanced Excel': ['Data validation', 'KPI summary models at Elevate Labs', 'Google Sheets automated intake at Maalibu'],
  FastAPI: ['PR Sentinel (<50ms webhook)', 'Smart meter consumption API service at VRG'],
  'REST APIs': ['Smart meter IoT endpoints', 'n8n webhook integrations', 'Postman testing'],
  n8n: ['50+ tested enterprise automation scenarios at Maalibu', 'CRM intake & sales alerting'],
  PostgreSQL: ['PicketIQ analytics warehouse', 'Smart meter database with Supabase'],
  Supabase: ['Real-time device & consumption storage at VRG'],
  Pandas: ['EDA, data cleaning and rolling baseline computation in PicketIQ and Elevate Labs'],
  NumPy: ['Volatility-adjusted Z-score statistical computations'],
  'scikit-learn': ['Anomaly detection & trend regression diagnostics'],
  PyTorch: ['Machine learning experimentation & deep modeling'],
  LangChain: ['PR Sentinel 6-step review agent pipeline with Groq & LangGraph'],
  'Git / GitHub': ['Version control & Open Source contributions in GirlScript Summer of Code 2025'],
  Docker: ['Containerization of API backends & review workers'],
  'Zoho CRM': ['Automated lead intake flows & sales alert notifications at Maalibu'],
  'Infinite LLM Memory': ['Suvidha Foundation research on long-context dynamic memory augmentation'],
  'EDA & Cleaning': ['Olist 451K+ dataset preparation & Elevate Labs e-commerce transactional data'],
  'Data Validation': ['5,000–8,000 daily smart meter records audited for duplicates and faults'],
  'KPI Tracking': ['6 daily business metrics: orders, revenue, cancellations, delivery delays'],
  'Anomaly Detection': ['Rolling 14-day baseline Z-score thresholding (|Z| ≥ 3) with zero leakage'],
  'Statistical Analysis': ['Seasonality checks, trend regressions & variance analysis'],
};

export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

const crimson: Palette = { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' };
const amber: Palette = { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' };
const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
const violet: Palette = { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };
const jade: Palette = { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' };

export const seasons: Season[] = [
  {
    number: 1,
    title: 'The Academic & Algorithmic Foundation',
    period: '2022 – 2026',
    synopsis: 'B.Tech in Computer Science and Business Systems at Rajiv Gandhi Proudyogiki Vishwavidyalaya, Bhopal — graduating with 87% percentage, competitive coding triumphs, and open source leadership.',
    episodes: [
      {
        code: 'S01 E01',
        title: 'The CSBS Core',
        description: 'B.Tech in Computer Science & Business Systems combining analytical rigor with modern software engineering, achieving an 87% academic score.',
        tags: ['RGPV Bhopal', 'CSBS', '87% Percentage'],
        runtime: 'June 2026',
        palette: violet,
      },
      {
        code: 'S01 E02',
        title: 'Competitive Rigor & ICPC',
        description: 'Solved 300+ LeetCode problems and achieved Rank 445 in ICPC 2025 regionals, sharpening algorithmic intuition.',
        tags: ['ICPC Rank 445', '300+ LeetCode', 'DSA'],
        runtime: 'Algorithmic Track',
        palette: jade,
      },
      {
        code: 'S01 E03',
        title: 'Open Source with GirlScript',
        description: 'Contributed to open source repositories during GirlScript Summer of Code (GSSoC) 2025, collaborating in developer teams across GitHub.',
        tags: ['GSSoC 2025', 'Open Source', 'Git / GitHub'],
        runtime: 'Summer 2025',
        palette: amber,
      },
      {
        code: 'S01 E04',
        title: 'Data & Statistical Foundations',
        description: 'Mastered SQL, Python, exploratory data analysis, data cleaning, and statistical methods to answer core business questions.',
        tags: ['SQL', 'Python', 'Statistics', 'EDA'],
        runtime: 'Core Foundations',
        palette: crimson,
      },
    ],
  },
  {
    number: 2,
    title: 'E-Commerce Analytics & AI Research',
    period: 'April 2025 – Nov 2025',
    synopsis: 'Real-world e-commerce dataset analysis at Elevate Labs, followed by groundbreaking research into Infinite LLM Memory at Suvidha Foundation.',
    episodes: [
      {
        code: 'S02 E01',
        title: 'E-Commerce Real-World Datasets',
        description: 'Data Analyst Intern at Elevate Labs: explored transactional datasets, customer cohorts, retention curves, and average order value drivers.',
        tags: ['Elevate Labs', 'E-Commerce', 'Customer Cohorts'],
        runtime: 'April 2025 – June 2025',
        palette: ocean,
      },
      {
        code: 'S02 E02',
        title: 'Infinite LLM Memory Architectures',
        description: 'AI Intern at Suvidha Foundation: engineered dynamic context retrieval and recurrent memory structures to surpass LLM context length boundaries.',
        tags: ['Suvidha Foundation', 'Infinite LLM Memory', 'RAG'],
        runtime: 'Sept 2025 – Nov 2025',
        palette: violet,
      },
      {
        code: 'S02 E03',
        title: 'Automated Analytics Dashboards',
        description: 'Automated reporting pipelines and inventory turnaround metrics, cutting manual spreadsheet collation for business stakeholders.',
        tags: ['Automated Reporting', 'Python', 'Excel Models'],
        runtime: 'Analytics Impact',
        palette: jade,
      },
    ],
  },
  {
    number: 3,
    title: 'Smart Meter IoT Data Engineering',
    period: 'Dec 2025 – Mar 2026',
    synopsis: 'Backend Intern at VRG Private Limited, Bhopal — handling high-volume IoT data validation and operational anomaly detection.',
    episodes: [
      {
        code: 'S03 E01',
        title: 'High-Throughput Meter Ingestion',
        description: 'Developed and tested FastAPI REST APIs on PostgreSQL/Supabase to ingest and serve meter readings to dashboards and internal tools.',
        tags: ['FastAPI', 'PostgreSQL', 'Supabase', 'Postman'],
        runtime: 'Dec 2025 – Mar 2026',
        palette: ocean,
      },
      {
        code: 'S03 E02',
        title: 'Daily Data Quality Audits',
        description: 'Validated 5,000–8,000 device readings daily, checking timestamps, duplicate entries, abnormal consumption and inactive meters.',
        tags: ['5K–8K Records/Day', 'Data Validation', 'Integrity'],
        runtime: 'Daily Operations',
        palette: amber,
      },
      {
        code: 'S03 E03',
        title: 'Anomaly Escalation & 60% Time Cut',
        description: 'Tracked 200–400 faulty meters monthly for field maintenance and automated repetitive validation, saving 1–2 hours every day.',
        tags: ['200–400 Faults/Mo', 'Automation', 'Time Saved'],
        runtime: 'Operational Impact',
        palette: jade,
      },
    ],
  },
  {
    number: 4,
    title: 'Enterprise AI Automations & Healthcare Creative',
    period: 'April 2026 – Present',
    synopsis: 'Dual high-impact roles: AI Automation Intern at Maalibu and Creative Head for doctor & clinic growth at Medmark Digital Marketing.',
    episodes: [
      {
        code: 'S04 E01',
        title: 'Creative Head for Doctors & Clinics',
        description: 'Part-time Creative Head at Medmark Digital Marketing: pitching to doctors, communicating clinical value, and managing end-to-end patient growth workflows.',
        tags: ['Medmark', 'Creative Head', 'Healthcare Pitching', 'Doctor Clients'],
        runtime: 'April 2026 – Present',
        palette: amber,
      },
      {
        code: 'S04 E02',
        title: 'Autonomous Lead Ingestion at Maalibu',
        description: 'Built webhook intake pipelines with OpenAI and Gemini intent classification to categorize leads and alert sales teams instantly.',
        tags: ['Maalibu', 'n8n', 'LLM Classification', 'Webhooks'],
        runtime: 'May 2026 – Present',
        palette: violet,
      },
      {
        code: 'S04 E03',
        title: '50+ Real-World Edge Cases & CRM Sync',
        description: 'Tested workflows across 50+ live scenarios, tuning prompt engineering and API authentication with Zoho CRM and HubSpot.',
        tags: ['50+ Scenarios', 'Zoho CRM', 'HubSpot', 'Error Recovery'],
        runtime: 'Client Deployments',
        palette: crimson,
      },
    ],
  },
  {
    number: 5,
    title: 'Decision Intelligence & Flagship Productions',
    period: '2026',
    synopsis: 'Production-grade platforms in statistical anomaly detection and autonomous agentic workflows.',
    episodes: [
      {
        code: 'S05 E01',
        title: 'PicketIQ: 451K+ Records Anomaly Engine',
        description: 'Monitored 6 daily business KPIs on the Olist e-commerce dataset using volatility-adjusted Z-scores (|Z| ≥ 3) with zero future-data leakage.',
        tags: ['PicketIQ', 'PostgreSQL', 'SQL Window Functions'],
        runtime: 'Flagship BI Platform',
        palette: crimson,
      },
      {
        code: 'S05 E02',
        title: 'São Paulo Spike Attribution (+498%)',
        description: 'Executed 3-way SQL diagnostics to isolate Black Friday 2017 spikes, pinpointing São Paulo as driving 38.4% of the surge with audited LLM summaries.',
        tags: ['Root Cause Analysis', 'Seasonality', 'Trend Regression'],
        runtime: 'SQL Diagnostics',
        palette: amber,
      },
      {
        code: 'S05 E03',
        title: 'PR Sentinel: Sub-50ms AI Code Review',
        description: 'Engineered an autonomous review pipeline with LangGraph, Groq LLMs, and 100% diff-line validation, backed by 113 automated tests.',
        tags: ['PR Sentinel', 'LangGraph', '113 Tests'],
        runtime: 'Autonomous AI Platform',
        palette: ocean,
      },
      {
        code: 'S05 E04',
        title: 'McKinsey Forward & Executive Horizon',
        description: 'Selected for McKinsey Forward Program 2026, advancing leadership, digital agility, and executive problem framing.',
        tags: ['McKinsey Forward', 'Leadership', 'Decision Intelligence'],
        runtime: '2026 Cohort',
        palette: jade,
      },
    ],
  },
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };

export const topPicks: TopPick[] = [
  { label: '#1 Core Superpower', title: 'SQL & Analytics', detail: 'CTEs, window functions, data cleaning & anomaly checks', palette: amber },
  { label: '#2 Flagship Platform', title: 'PicketIQ', detail: '451K+ records • 6 KPIs • Z-score root cause engine', palette: crimson },
  { label: '#3 High-Volume IoT', title: '5K–8K Daily Records', detail: 'Validated meter readings & tracked faults at VRG', palette: ocean },
  { label: '#4 Academic Excellence', title: '87% in B.Tech CSBS', detail: 'Rajiv Gandhi Proudyogiki Vishwavidyalaya, Bhopal', palette: jade },
  { label: '#5 Competitive Rigor', title: 'ICPC Regionalist', detail: 'Rank 445 in ICPC 2025 regionals • 300+ LeetCode', palette: crimson },
  { label: '#6 Open Source', title: 'GSSoC 2025', detail: 'GirlScript Summer of Code Open Source Contributor', palette: ocean },
  { label: '#7 Leadership', title: 'Creative Head', detail: 'Medmark Digital Marketing for Doctors & Healthcare', palette: amber },
  { label: '#8 Executive Credential', title: 'McKinsey Forward', detail: 'Selected for the prestigious McKinsey Forward 2026 Program', palette: jade },
  { label: '#9 Certified Mastery', title: 'Google Advanced Analytics', detail: 'Professional certificate in modern analytics & BI', palette: amber },
  { label: '#10 AI Research', title: 'Infinite LLM Memory', detail: 'Research and development at Suvidha Foundation', palette: violet },
];

/** Slides for the "▶ Play Intro" cinematic sequence. */
export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
  {
    kicker: 'Education',
    title: 'B.Tech · CSBS',
    lines: ['Rajiv Gandhi Proudyogiki Vishwavidyalaya, Bhopal', 'Graduation: June 2026 • 87% Percentage'],
    chips: ['CSBS', 'Data Analytics', '87%'],
  },
  {
    kicker: 'Core Superpowers',
    title: 'SQL-First Analytics & Python',
    lines: ['SQL, Python, Power BI, Tableau and Advanced Excel', 'EDA, Data Cleaning, KPI Tracking & Statistical Anomaly Detection'],
    chips: ['SQL', 'Python', 'Power BI', 'Tableau', 'Excel'],
  },
  {
    kicker: 'Experience & Leadership',
    title: 'Industry & Creative Roles',
    lines: [
      'Creative Head (Part-time) at Medmark Digital Marketing — communicating with doctors & pitching healthcare businesses',
      'AI Automation Intern at Maalibu Private Limited — n8n & Python workflows for CRM & lead intake',
      'Backend Intern at VRG — 5,000–8,000 daily smart meter records audited, 60% manual time cut',
      'Data Analyst Intern at Elevate Labs — real-world e-commerce datasets & customer cohorts',
      'AI Intern at Suvidha Foundation — Infinite LLM Memory research & architecture',
    ],
    chips: ['Medmark', 'Maalibu', 'VRG', 'Elevate Labs', 'Suvidha Foundation'],
  },
  {
    kicker: 'Flagship Projects',
    title: 'Decision Intelligence at Scale',
    lines: [
      'PicketIQ — 451K+ records, 6 daily KPIs, Z-score anomaly detection (|Z| ≥ 3), Black Friday spike attribution',
      'PR Sentinel — Autonomous AI PR review platform, <50ms webhook response, 113 automated tests',
    ],
    chips: ['PicketIQ (451K+)', 'PR Sentinel (113 Tests)'],
  },
  {
    kicker: 'Key Credentials',
    title: 'Industry Certifications',
    lines: [
      'Google Advanced Data Analytics (Coursera)',
      'Oracle Agentic AI Associate',
      'CS50 Python (HarvardX)',
      'McKinsey Forward Program 2026',
    ],
    chips: ['Google', 'Oracle', 'HarvardX', 'McKinsey Forward'],
  },
  {
    kicker: 'Honors & Problem Solving',
    title: 'Competitive & Open Source Rigor',
    lines: [
      'ICPC Regionalist 2025 (Rank 445)',
      'Open Source Contributor — GirlScript Summer of Code (GSSoC) 2025',
      'Hackloop Hackathon 2025 (Top 10 Finalist)',
      '300+ LeetCode algorithmic problems solved',
    ],
    chips: ['ICPC 445', 'GSSoC 2025', 'Hackloop Top 10', '300+ LeetCode'],
  },
];

export type ProfileId = 'kritu' | 'recruiter' | 'developer' | 'creative';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: 'kritu',
    name: 'Kritu',
    blurb: 'The complete series in chronological order',
    color: '#e5132b',
    order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'],
  },
  {
    id: 'recruiter',
    name: 'Recruiter',
    blurb: 'Resume, achievements, credentials & skills first',
    color: '#4cc9ff',
    order: ['story', 'moments', 'skills', 'originals', 'about', 'journey', 'picks'],
  },
  {
    id: 'developer',
    name: 'Tech Lead',
    blurb: 'Projects, architecture, SQL pipelines & GitHub',
    color: '#46e3a8',
    order: ['originals', 'skills', 'journey', 'moments', 'about', 'picks', 'story'],
  },
  {
    id: 'creative',
    name: 'Business Lead',
    blurb: 'Healthcare pitching, doctor communication, KPI stories & journey',
    color: '#ffb547',
    order: ['journey', 'picks', 'originals', 'moments', 'about', 'skills', 'story'],
  },
];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'The Pilot • CSBS Graduate · 87%', palette: violet },
  journey: { nav: 'Journey', card: 'My Journey', meta: `${seasons.length} Seasons • ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Episodes`, palette: amber },
  originals: { nav: 'Originals', card: 'My Projects', meta: `${projects.length} Flagship Productions`, palette: crimson },
  picks: { nav: 'Top Picks', card: 'Top Picks', meta: 'Top 10 Highlights from the Resume', palette: jade },
  skills: { nav: 'Skills', card: 'Skill Matrix', meta: `${skillCategories.length} Categories • Verified Evidence`, palette: ocean },
  moments: { nav: 'Moments', card: 'Achievements', meta: `${achievements.length} Moments • ${certifications.length} Certifications`, palette: crimson },
  story: { nav: 'Resume', card: 'The Full Story', meta: 'Resume • PDF Download & Breakdown', palette: violet },
};
