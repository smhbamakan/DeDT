// Single source of truth for all site content.
// To publish a deliverable later: set its `status` to 'available' (or 'in-progress'),
// fill `summary`, and add `links` like [{ label: 'Report (PDF)', url: 'deliverables/D1.1.pdf' }].
// Relative URLs resolve against the site root (files go in public/deliverables/).

export const meta = {
  acronym: 'DeDT',
  title: 'Blockchain-powered Digital Twins Platform',
  subtitle: 'to Foster Trust, Transparency, and Collaboration',
  tagline:
    'A decentralized platform where digital twin teams can share data, protect intellectual property, raise funds and make auditable predictions, using blockchain, NFTs and DAOs.',
  programme: 'MSCA Postdoctoral Fellowship',
  host: 'Department of Business Management, Masaryk University, Brno, Czech Republic',
  duration: 24,
  github: 'https://github.com/smhbamakan/DeDT',
  scholar: 'https://scholar.google.com/citations?user=YqXUN0AAAAAJ&hl=en&oi=ao',
}

export const funding =
  'This project is funded by the project “MSCAfellow7_MUNI” (CZ.02.01.01/00/22_010/0008854), co-funded by the European Union under the Operational Programme Johannes Amos Comenius (OP JAK).'

export const about = [
  'Digital twins are virtual replicas of physical objects, systems or processes, fed by real-time data. They are vital in manufacturing, logistics, automation and healthcare.',
  'Yet digital twin projects struggle with huge data flows, protecting commercial information, funding, and trust between the many teams involved.',
  'DeDT explores how Web 3.0 technologies (blockchain, NFTs and DAOs) can solve these problems, and builds a cooperative platform for traceable, trustworthy data sharing and prediction without relying on a central authority.',
]

export const challenges = [
  'Managing big data flows',
  'Protecting commercial information & IP',
  'Fundraising for DT projects',
  'Distributed collaboration',
  'Security & privacy',
]

export const objectives = [
  {
    id: 'O1',
    title: 'Understand the challenges',
    text: 'Identify the crucial challenges of digital twin projects and evaluate how emerging Web 3.0 technologies can resolve them.',
    wps: [1],
  },
  {
    id: 'O2',
    title: 'Decentralized collaboration',
    text: 'Develop a tamper-proof, decentralized collaboration platform for digital twin data sharing and federated learning.',
    wps: [1, 2],
  },
  {
    id: 'O3',
    title: 'IP-NFTs & fundraising',
    text: 'Design an Intellectual Property-based NFT framework (IP-NFT) for digital twin provenance and decentralized fundraising.',
    wps: [3],
  },
  {
    id: 'O4',
    title: 'Trustworthy predictions',
    text: 'Provide a blockchain-based predictive analytics platform for trust, transparency and auditability in digital twin projects.',
    wps: [4],
  },
]

export const workPackages = [
  {
    n: 1,
    title: 'Distributed Collaboration Platform',
    short: 'A DAO-based shared workspace run by the twin teams themselves.',
    objectives: ['O1', 'O2'],
    months: [1, 7],
    problem:
      'Designing a digital twin needs experts from many domains, each covering only part of the system. They need an accessible, reliable and secure place to share data and work together.',
    solution:
      'A Decentralized Autonomous Organization (DAO) that gives twin teams a common virtual workspace, managed by the teams themselves with no central authority.',
    techniques:
      'Software engineering of the DAO platform, using DAO capabilities such as parallel intelligence, computational experiments and parallel execution.',
    tasks: [
      'T1.1 Review blockchain, NFT and DAO protocols & standards',
      'T1.2 Analyze requirements and challenges of collaborative DT development',
      'T1.3 Develop a framework for integrating Web 3 technologies into digital twins',
    ],
    deliverables: [
      { id: 'D1.1', title: 'Requirement analysis report', description: 'Key challenges and needs for a distributed collaboration platform in digital twin development.', status: 'planned' },
      { id: 'D1.2', title: 'DAO platform', description: 'A Decentralized Autonomous Organization providing a virtual workspace for twin teams.', status: 'planned' },
      { id: 'D1.3', title: 'Data-sharing platform', description: 'A secure, accessible platform for collaboration and information exchange.', status: 'planned' },
    ],
    milestones: [
      { id: 'M1.1', title: 'Protocol and standards review completed', month: 3 },
      { id: 'M1.2', title: 'Design of the DAO-based DT platform', month: 7 },
    ],
  },
  {
    n: 2,
    title: 'Digital Twin Big Data Flows',
    short: 'Managing the volume, velocity and variety of sensor data, with integrity guaranteed by blockchain.',
    objectives: ['O2'],
    months: [7, 13],
    problem:
      'Digital twins receive data from thousands of distributed sensors (temperature, pressure, speed…). These flows are huge, fast and heterogeneous, and hard to aggregate and merge.',
    solution:
      'Big data analytics tools (e.g. Hadoop, MapReduce, parallel processing), combined with blockchain for integrity and edge computing for low latency.',
    techniques: 'Machine learning, artificial intelligence and statistical analysis of data flows.',
    tasks: [
      'T2.1 Investigate the characteristics of DT big data flows',
      'T2.2 Explore blockchain integration for data integrity in DT environments',
      'T2.3 Examine edge computing for low-latency service provision',
      'T2.4 Develop solutions for data flow management',
    ],
    deliverables: [
      { id: 'D2.1', title: 'Blockchain applicability report', description: 'How blockchain ensures data integrity and security in digital twin environments.', status: 'planned' },
      { id: 'D2.2', title: 'Data flow management methods', description: 'Methodologies and algorithms addressing volume, velocity and variety.', status: 'planned' },
      { id: 'D2.3', title: 'Performance evaluation report', description: 'Performance analysis of the developed data flow management solutions.', status: 'planned' },
    ],
    milestones: [
      { id: 'M2.1', title: 'Blockchain applicability & DT big data properties', month: 11 },
      { id: 'M2.2', title: 'Data flow management methods evaluated', month: 12 },
    ],
  },
  {
    n: 3,
    title: 'Fundraising for Twin Teams',
    short: 'NFTs as a new and reliable way to fund digital twin projects.',
    objectives: ['O3'],
    months: [12, 19],
    problem: 'Digital twin projects need new ways to raise funds, especially at an early stage.',
    solution:
      'Use Intellectual Property-based NFTs (IP-NFTs) to register ownership and provenance of twin outputs, and to fund projects through the community.',
    techniques: 'Financial modelling of the NFT-powered funding model, validated by pilot experiments.',
    tasks: [
      'T3.1 Investigate NFTs for project fundraising',
      'T3.2 Design a trusted DT architecture that protects confidential data and IP',
      'T3.3 Architect an NFT-powered funding model for the DT ecosystem',
      'T3.4 Run pilot experiments on NFT-funded projects',
    ],
    deliverables: [
      { id: 'D3.1', title: 'Financial requirements report', description: 'Financial needs of twin teams in collaborative projects.', status: 'planned' },
      { id: 'D3.2', title: 'NFT funding model', description: 'NFT-funding model implemented in the DT ecosystem, enabling permissionless innovation and community support.', status: 'planned' },
      { id: 'D3.3', title: 'Pilot experiment report', description: 'Viability and effectiveness of NFT-powered funding.', status: 'planned' },
    ],
    milestones: [
      { id: 'M3.1', title: 'Evaluation of NFT fundraising methods', month: 15 },
      { id: 'M3.2', title: 'Pilot experiment assessment', month: 19 },
    ],
  },
  {
    n: 4,
    title: 'Trust & Auditing in Predictive Analytics',
    short: 'Cryptography that makes predictions and ownership verifiable, without revealing secrets.',
    objectives: ['O4'],
    months: [17, 24],
    problem:
      'Decentralized decisions based on digital twin predictions need more trust, transparency and auditability.',
    solution:
      'Blockchain and cryptographic tools: identity-based encryption for twin teams, self-judgment data authentication, and zero-knowledge proofs linking a twin’s “birth certificate” to its NFT.',
    techniques:
      'Identity-based encryption, zero-knowledge proofs and secret sharing, built with Web 3 tools (Solidity, Truffle, Infura, ethers.js).',
    tasks: [
      'T4.1 Investigate identity-based encryption (IBE) for twin teams',
      'T4.2 Develop self-judgment data authentication protocols',
      'T4.3 Explore ZKPs connecting DT birth certificates and NFTs',
      'T4.4 Apply encryption & validity methods to team interconnections',
      'T4.5 Document findings, recommendations and best practices',
    ],
    deliverables: [
      { id: 'D4.1', title: 'State-of-the-art review', description: 'Blockchain for trust, transparency and auditing in decentralized decision-making with digital twins.', status: 'planned' },
      { id: 'D4.2', title: 'IBE evaluation report', description: 'Identity-based encryption for twin teams: confidentiality and efficiency vs. traditional methods.', status: 'planned' },
      { id: 'D4.3', title: 'ZKP ownership verification', description: 'Research report and implementation proposal for privacy-preserving DT–NFT ownership proofs.', status: 'planned' },
    ],
    milestones: [
      { id: 'M4.1', title: 'State-of-the-art review on blockchain for trust', month: 20 },
      { id: 'M4.2', title: 'Data authentication protocols & IBE adoption', month: 21 },
      { id: 'M4.3', title: 'ZKPs for ownership verification', month: 24 },
    ],
  },
  {
    n: 5,
    title: 'Dissemination & Communication',
    short: 'Sharing results with researchers, industry, policy makers and the public.',
    objectives: ['O1', 'O2', 'O3', 'O4'],
    months: [1, 24],
    problem: 'Results only create impact if the right audiences find, understand and use them.',
    solution:
      'A dissemination, exploitation and communication plan targeting the scientific community, industry, government agencies and the general public.',
    techniques: 'Open-access publications, open-source code on GitHub, webinars, social media, videos and open days.',
    tasks: [
      'Dissemination: publications, industry webinars, project website, policy recommendations',
      'Exploitation: patent application, open-source software',
      'Communication: social media, press releases, videos, open-day talks',
    ],
    deliverables: [
      { id: 'D5.1', title: 'Research publications', description: '2 journal papers (JCR Q1) and 3 conference papers.', status: 'in-progress' },
      { id: 'D5.2', title: 'Industry webinars', description: 'Online webinars for industrial partners (80–130 attendees).', status: 'planned' },
      { id: 'D5.3', title: 'Project website', description: 'This website, kept up to date throughout the project.', status: 'available' },
      { id: 'D5.4', title: 'Policy recommendations', description: 'Reports and meetings with government agencies.', status: 'planned' },
      { id: 'D5.5', title: 'Patent application', description: 'One patent application filed through the MU Technology Transfer Office.', status: 'planned' },
      { id: 'D5.6', title: 'Open-source software', description: 'Platform and blockchain modules released on GitHub.', status: 'planned' },
      { id: 'D5.7', title: 'Communication activities', description: 'Social media, press releases, videos and open-day talks.', status: 'in-progress' },
    ],
    milestones: [],
  },
]

// Shown on the timeline and as a small card; no page of their own.
export const supportPackages = [
  { n: 6, title: 'Training & Transfer of Knowledge', months: [1, 24], text: 'Teaching, mentoring, skills development, research integrity and open science.' },
  { n: 7, title: 'Project Management', months: [1, 24], text: 'Data management plan (DMP) and career development plan (CDP).' },
]

export const publications = [
  {
    title: 'DeDTs: A Decentralized Digital Twins Platform Based on Blockchain Technology and Web3',
    authors: 'Seyed Mojtaba Hosseini Bamakan, et al.',
    venue: 'Blockchain: Research and Applications (Elsevier)',
    year: '2026',
    type: 'Journal article',
    url: 'https://www.sciencedirect.com/science/article/pii/S2772918424000304',
    abstract:
      'Proposes a decentralized digital twin platform powered by blockchain and Web3, addressing data integrity, IP protection, decentralized fundraising via IP-NFTs, and trustworthy collaborative analytics.',
  },
]

export const team = [
  {
    name: 'Dr. Seyed Mojtaba Hosseini Bamakan',
    role: 'MSCA Postdoctoral Fellow · Principal Investigator',
    affiliation: 'Department of Business Management, Masaryk University',
    interests: ['Blockchain', 'Digital Twins', 'NFTs & DAOs', 'Data Science', 'Federated Learning'],
    links: [
      { label: 'Google Scholar', url: 'https://scholar.google.com/citations?user=YqXUN0AAAAAJ&hl=en&oi=ao' },
      { label: 'GitHub', url: 'https://github.com/smhbamakan' },
    ],
  },
  {
    name: 'Prof. Ahad Zareravasan',
    role: 'Supervisor',
    affiliation: 'Department of Business Management, Masaryk University',
    interests: ['Business Analytics', 'Big Data', 'Blockchain', 'Information Systems'],
    links: [],
  },
]
