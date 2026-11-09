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
  github: 'https://github.com/smhbamakan/DeDT-platform',
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
  'Interoperability across blockchains',
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
    code: 'https://github.com/smhbamakan/DeDT-platform/tree/main/wp1-dao-collaboration',
    title: 'Distributed Collaboration Platform',
    short: 'A DAO-based shared workspace run by the twin teams themselves.',
    objectives: ['O1', 'O2'],
    months: [1, 7],
    problem:
      'Designing a digital twin needs experts from many domains, each covering only part of the system. They need an accessible, reliable and secure place to share data and work together.',
    solution:
      'A Decentralized Autonomous Organization (DAO) that gives twin teams a common virtual workspace, managed by the teams themselves with no central authority. Teams on different blockchains are connected through a decentralized Layer-3 bridge.',
    techniques:
      'Software engineering of the DAO platform, using DAO capabilities such as parallel intelligence, computational experiments and parallel execution.',
    tasks: [
      'T1.1 Review blockchain, NFT and DAO protocols & standards',
      'T1.2 Analyze requirements and challenges of collaborative DT development',
      'T1.3 Develop a framework for integrating Web 3 technologies into digital twins',
    ],
    deliverables: [
      { id: 'D1.1', title: 'Requirement analysis report', description: 'Key challenges and needs for a distributed collaboration platform in digital twin development.', status: 'in-progress', summary: 'Report v1.0 completed (October 2026): 6 challenges, 36 requirements, formal models and a multi-criteria choice of the interoperability mechanism. To be published after review.' },
      { id: 'D1.2', title: 'DAO platform', description: 'A Decentralized Autonomous Organization providing a virtual workspace for twin teams.', status: 'in-progress', summary: 'Prototype: members vote with earned, non-transferable reputation; decisions run through a timelock. The workspace holds projects, parallel funded tasks, computational experiments with peer endorsements, and bonded misbehaviour reports ruled by vote. A 40% voting cap limits any single member (55 tests in the WP1 module).', links: [{ label: 'Code on GitHub', url: 'https://github.com/smhbamakan/DeDT-platform/tree/main/wp1-dao-collaboration/contracts/dao' }] },
      { id: 'D1.3', title: 'Data-sharing platform', description: 'A secure, accessible platform for collaboration and information exchange.', status: 'in-progress', summary: 'Prototype of the L3 framework from the AEI 2025 paper: twin teams on different blockchains share a twin as a dynamic NFT through a decentralized validator-quorum bridge, with ordered message channels and atomic swaps (28 tests). Report v1.0 completed (October 2026) with formal safety and liveness bounds; to be published after review.', links: [{ label: 'Code on GitHub', url: 'https://github.com/smhbamakan/DeDT-platform/tree/main/wp1-dao-collaboration' }, { label: 'Paper', url: 'https://doi.org/10.1016/j.aei.2025.103616' }] },
    ],
    milestones: [
      { id: 'M1.1', title: 'Protocol and standards review completed', month: 3, status: 'reached', note: 'Review published in Advanced Engineering Informatics (2025); requirement analysis D1.1 completed' },
      { id: 'M1.2', title: 'Design of the DAO-based DT platform', month: 7, status: 'reached', note: 'DAO platform (D1.2) and cross-chain data sharing (D1.3) designed and prototyped' },
    ],
  },
  {
    n: 2,
    code: 'https://github.com/smhbamakan/DeDT-platform/tree/main/wp2-big-data-flows',
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
      { id: 'D2.1', title: 'Blockchain applicability report', description: 'How blockchain ensures data integrity and security in digital twin environments.', status: 'planned', summary: 'Technical basis available: Merkle anchoring detected 100% of 250 tampering attempts at 342 gas per reading.' },
      { id: 'D2.2', title: 'Data flow management methods', description: 'Methodologies and algorithms addressing volume, velocity and variety.', status: 'in-progress', summary: 'Prototype: edge reordering with watermarks, streaming statistics, online anomaly detection, and Merkle batches anchored on-chain in a hash chain (38 tests).', links: [{ label: 'Code on GitHub', url: 'https://github.com/smhbamakan/DeDT-platform/tree/main/wp2-big-data-flows' }] },
      { id: 'D2.3', title: 'Performance evaluation report', description: 'Performance analysis of the developed data flow management solutions.', status: 'in-progress', summary: 'First results on a simulated robot-arm twin: data reduction ×158, anomaly detection F1 0.87, at least 4× processing headroom at 48 sensors.', links: [{ label: 'Results and figures', url: 'https://github.com/smhbamakan/DeDT-platform/tree/main/wp2-big-data-flows#-results' }] },
    ],
    milestones: [
      { id: 'M2.1', title: 'Blockchain applicability & DT big data properties', month: 11 },
      { id: 'M2.2', title: 'Data flow management methods evaluated', month: 12 },
    ],
  },
  {
    n: 3,
    code: 'https://github.com/smhbamakan/DeDT-platform/tree/main/wp3-ip-nft-fundraising',
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
      { id: 'D3.1', title: 'Financial requirements report', description: 'Financial needs of twin teams in collaborative projects.', status: 'in-progress', summary: 'Report v1.0 completed (November 2026): roles and lifecycle of twin teams, cost categories per stage, review of nine funding instruments and the EU regulatory frame, ten financial requirements, and measured gas use of the WP3 contracts. To be published after review.' },
      { id: 'D3.2', title: 'NFT funding model', description: 'NFT-funding model implemented in the DT ecosystem, enabling permissionless innovation and community support.', status: 'in-progress', summary: 'Digital-Twin-Verified Financing (DTVF): the IP-NFT certifies the twin while money is released in stages against KPI milestones evidenced by the twin\'s own data, with bonded challenges, refunds, quadratic matching for open components and contribution-based income sharing. Contracts with 42 tests; simulation study. Report v1.0 completed (November 2026); to be published after review.', links: [{ label: 'Smart contracts on GitHub', url: 'https://github.com/smhbamakan/DeDT-platform/tree/main/wp3-ip-nft-fundraising' }, { label: 'Registered IP-NFT (Etherscan)', url: 'https://etherscan.io/nft/0x0bDB2c4a4ECcE150bBB930833D8ce17d22d81bab/1' }] },
      { id: 'D3.3', title: 'Pilot experiment report', description: 'Viability and effectiveness of NFT-powered funding.', status: 'in-progress', summary: 'Report v2.0 completed (November 2026): a technical pilot in which KPIs computed from WP2 twin data drove complete DTVF projects in four scenarios, all ending as predicted with funds fully settled; and an in-silico run of the pilot protocol (KPI variability over 40 twin runs; agent-based experiment with 128 simulated participants, 1,000 replications) showing that KPI evidence raises detection of false milestone claims from 0.08 to 0.94. To be published after review.', links: [{ label: 'Pilot code on GitHub', url: 'https://github.com/smhbamakan/DeDT-platform/tree/main/wp3-ip-nft-fundraising/pilot' }] },
    ],
    milestones: [
      { id: 'M3.1', title: 'Evaluation of NFT fundraising methods', month: 15 },
      { id: 'M3.2', title: 'Pilot experiment assessment', month: 19 },
    ],
  },
  {
    n: 4,
    code: 'https://github.com/smhbamakan/DeDT-platform/tree/main/wp4-trust-auditing',
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
      { id: 'D4.1', title: 'State-of-the-art review', description: 'Blockchain for trust, transparency and auditing in decentralized decision-making with digital twins.', status: 'in-progress', summary: 'Report v1.0 completed (October 2026): trust questions along the data-to-decision pipeline, review of encryption, authentication and zero-knowledge mechanisms, and six research gaps mapped to WP4. To be published after review.' },
      { id: 'D4.2', title: 'IBE evaluation report', description: 'Identity-based encryption for twin teams: confidentiality and efficiency vs. traditional methods.', status: 'in-progress', summary: 'Prototype: Boneh–Franklin IBE whose master key is shared among t-of-n key servers by distributed key generation (no central key centre), benchmarked against ECIES on secp256k1. Report v1.0 completed (October 2026); to be published after review.', links: [{ label: 'Code on GitHub', url: 'https://github.com/smhbamakan/DeDT-platform/tree/main/wp4-trust-auditing' }] },
      { id: 'D4.3', title: 'ZKP ownership verification', description: 'Research report and implementation proposal for privacy-preserving DT–NFT ownership proofs.', status: 'in-progress', summary: 'Prototype: a commitment to the birth certificate is stored on the twin NFT; the holder proves it in zero knowledge with selective disclosure, verified on-chain (≈ 135k gas, no trusted setup), and rotates it after a sale. Report v1.0 with a Groth16 extension proposal completed (October 2026); to be published after review.', links: [{ label: 'Code on GitHub', url: 'https://github.com/smhbamakan/DeDT-platform/tree/main/wp4-trust-auditing' }] },
    ],
    milestones: [
      { id: 'M4.1', title: 'State-of-the-art review on blockchain for trust', month: 20 },
      { id: 'M4.2', title: 'Data authentication protocols & IBE adoption', month: 21 },
      { id: 'M4.3', title: 'ZKPs for ownership verification', month: 24 },
    ],
  },
  {
    n: 5,
    code: 'https://github.com/smhbamakan/DeDT-platform',
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
      { id: 'D5.1', title: 'Research publications', description: '2 journal papers (JCR Q1) and 3 conference papers.', status: 'in-progress', summary: 'Published: 1 journal paper (Advanced Engineering Informatics, 2025) and 3 conference papers (IEEE BRAINS 2025; ITQM 2025 and ITQM 2026, Procedia Computer Science).', links: [{ label: 'AEI 2025', url: 'https://doi.org/10.1016/j.aei.2025.103616' }, { label: 'BRAINS 2025', url: 'https://doi.org/10.1109/BRAINS67003.2025.11302931' }, { label: 'ITQM 2025', url: 'https://doi.org/10.1016/j.procs.2025.08.120' }, { label: 'ITQM 2026', url: 'https://www.sciencedirect.com/science/article/pii/S1877050926027985' }] },
      { id: 'D5.2', title: 'Industry webinars', description: 'Online webinars for industrial partners (80–130 attendees).', status: 'planned' },
      { id: 'D5.3', title: 'Project website', description: 'This website, kept up to date throughout the project.', status: 'available' },
      { id: 'D5.4', title: 'Policy recommendations', description: 'Reports and meetings with government agencies.', status: 'in-progress', summary: 'Policy report v1.0 completed (November 2026): eight policy recommendations on verifiable data provenance, research tokens, milestone-verified public funding, matching funds for open twin components and digital identities for twin teams.' },
      { id: 'D5.5', title: 'IP protection (IP-NFT)', description: 'Technical disclosure published with a DOI as a defensive publication and registered as an IP-NFT on Ethereum, in place of a conventional patent filing.', status: 'available', summary: 'Published on Zenodo (9 November 2026) and registered as IP-NFT token #1 on Ethereum mainnet; the token records the DOI and the SHA-256 digest of the published document.', links: [{ label: 'Zenodo record', url: 'https://doi.org/10.5281/zenodo.24075040' }, { label: 'IP-NFT on Etherscan', url: 'https://etherscan.io/nft/0x0bDB2c4a4ECcE150bBB930833D8ce17d22d81bab/1' }] },
      { id: 'D5.6', title: 'Open-source software', description: 'Platform and blockchain modules released on GitHub (MIT licence).', status: 'in-progress', summary: 'Four work-package modules with automated tests, an integration demo that takes one twin through all modules with an independent audit of the evidence chain, and documentation with tutorials.', links: [{ label: 'GitHub repository', url: 'https://github.com/smhbamakan/DeDT-platform' }, { label: 'Integration demo', url: 'https://github.com/smhbamakan/DeDT-platform/tree/main/integration' }, { label: 'Documentation', url: 'https://github.com/smhbamakan/DeDT-platform/tree/main/docs' }] },
      { id: 'D5.7', title: 'Communication activities', description: 'Social media, press releases, videos and open-day talks.', status: 'in-progress', summary: 'Faculty news interview (April 2026) and the #askaneconomist video interview on the faculty social-media channels (August 2026), both explaining digital twins to a general audience.', links: [{ label: 'Faculty interview', url: 'https://www.econ.muni.cz/en/news/digital-twins-bridging-the-physical-and-digital-worlds' }, { label: 'Video on LinkedIn', url: 'https://www.linkedin.com/posts/askaneconomist-ugcPost-7494032637225869312-euBT/' }] },
    ],
    milestones: [],
  },
]

// Shown on the timeline and as a small card; no page of their own.
export const supportPackages = [
  { n: 6, title: 'Training & Transfer of Knowledge', months: [1, 24], text: 'T6.1 teaching, mentoring and collaboration · T6.2 skills development and knowledge update · T6.3 research integrity, open science and knowledge transfer.' },
  { n: 7, title: 'Project Management', months: [1, 24], text: 'Data management plan (DMP) and career development plan (CDP).' },
]

export const publications = [
  {
    title: 'Zero-Knowledge-Verified Provenance, Ownership and Access Control for Digital Twins Bound to Non-Fungible Tokens',
    authors: 'Seyed Mojtaba Hosseini Bamakan, Ahad Zareravasan',
    venue: 'Defensive publication (technical disclosure), Zenodo',
    year: '2026',
    date: 'Published 9 November 2026 · registered as IP-NFT on Ethereum mainnet (token #1)',
    type: 'Technical disclosure · IP-NFT',
    featured: true,
    doi: '10.5281/zenodo.24075040',
    url: 'https://doi.org/10.5281/zenodo.24075040',
    urlLabel: 'Read on Zenodo',
    links: [
      { label: 'IP-NFT on Etherscan', url: 'https://etherscan.io/nft/0x0bDB2c4a4ECcE150bBB930833D8ce17d22d81bab/1' },
      { label: 'Document on IPFS', url: 'https://ipfs.io/ipfs/bafybeib3y75yabu5jmt75fn2qlsd7ehyhuhlzikbr5kgczy4bfub4kcd6y' },
    ],
    code: 'https://github.com/smhbamakan/DeDT-platform/tree/main/wp3-ip-nft-fundraising',
    wps: [3, 4],
    abstract:
      'A non-fungible token stores only a commitment to the state of a digital twin. The ledger accepts a new state only when a zero-knowledge proof shows that it follows from the stored one through an authorized, physically plausible transition. The disclosure also covers holder-bound ownership proofs, federated-learning lineage committed in the same state tree, and identity-based encryption keys tied to the token and issued by threshold key servers. The document itself is registered as an IP-NFT whose on-chain record holds its DOI and SHA-256 digest.',
    keywords: ['Digital twin', 'IP-NFT', 'Zero-knowledge proof', 'Provenance', 'Federated learning', 'Identity-based encryption'],
  },
  {
    title: 'Analyzing potential collaboration methods for digital twin teams developed on heterogeneous blockchains without a central authority',
    authors: 'Saeed Banaeian Far, Seyed Mojtaba Hosseini Bamakan',
    venue: 'Advanced Engineering Informatics (Elsevier), vol. 68, 103616',
    year: '2025',
    date: 'Published online 15 July 2025',
    type: 'Review article',
    featured: true,
    doi: '10.1016/j.aei.2025.103616',
    url: 'https://www.sciencedirect.com/science/article/pii/S1474034625005099',
    code: 'https://github.com/smhbamakan/DeDT-platform/tree/main/wp1-dao-collaboration',
    wps: [1],
    abstract:
      'Digital twin teams increasingly build their projects on different blockchains, but sharing data between them still relies on centralized intermediaries. The study identifies the main data-transfer methods between heterogeneous blockchains (cross-chain, para-chain, side-chain and super-chain) and proposes a modular Layer-3 (L3) framework that lets twin teams collaborate without any central authority. It analyses each method inside the framework, with implementation guidelines, cryptographic security considerations and key challenges, in the setting of shared, metaverse-based virtual labs.',
    highlights: [
      { value: '62%', label: 'lower latency with L3 configurations' },
      { value: '4–6×', label: 'better transaction cost than L1-to-L1 protocols' },
      { value: '4', label: 'L3 mechanisms analysed in one generic framework' },
    ],
    keywords: ['Cross-chain', 'Interoperability', 'Layer 3', 'Metaverse', 'Scalability', 'Virtual lab'],
  },
  {
    title: 'ChainFedTwin: A Blockchain-Based Federated Learning Framework for Secure, Explainable Digital-Twin Collaboration',
    authors: 'Nasim Nezhadsistani, Kasra Sohrabati, Seyed Mojtaba Hosseini Bamakan, Burkhard Stiller',
    venue: '7th Conference on Blockchain Research & Applications for Innovative Networks and Services (BRAINS 2025), IEEE',
    year: '2025',
    type: 'Conference paper',
    doi: '10.1109/BRAINS67003.2025.11302931',
    url: 'https://ieeexplore.ieee.org/document/11302931',
    urlLabel: 'Read on IEEE Xplore',
    wps: [2, 4],
    abstract:
      'ChainFedTwin is a seven-layer framework in which digital twins learn together through federated learning while a blockchain governs and audits every aggregation round. Smart contracts handle governance, cryptographic methods protect the shared updates, and an explainable-AI layer (SHAP and LIME) checks each aggregation step for bias. On the NSL-KDD dataset it outperforms the FedAvg baseline, at the cost of a moderate communication overhead for privacy and auditing.',
    highlights: [
      { value: '94.1%', label: 'test accuracy, against 91% for FedAvg' },
      { value: '47%', label: 'fewer iterations to reach 90% accuracy' },
      { value: '~15%', label: 'communication overhead for privacy and auditing' },
    ],
    keywords: ['Digital twin', 'Federated learning', 'Blockchain', 'Explainable AI', 'Privacy', 'Security'],
  },
  {
    title: 'Enhancing Cyber-Physical-Social Systems through Decentralized Governance and Blockchain-based Digital Twins',
    authors: 'Seyed Mojtaba Hosseini Bamakan, Farnaz Dehghan, Saeed Banaeian Far, Ahad Zareravasan',
    venue: 'Procedia Computer Science, vol. 266, pp. 971–978 (12th International Conference on Information Technology and Quantitative Management, ITQM 2025)',
    year: '2025',
    type: 'Conference paper',
    doi: '10.1016/j.procs.2025.08.120',
    url: 'https://www.sciencedirect.com/science/article/pii/S1877050925024317',
    wps: [1, 4],
    abstract:
      'Cyber-physical-social systems such as smart cities and industrial plants depend on digital twins, but centralized governance and opaque analytics limit their scalability and resilience. The paper proposes a governance framework that combines Decentralized Autonomous Organizations (DAOs) with blockchain-based predictive analytics, so that many stakeholders can share data and take decisions through smart contracts and community governance. Theoretical analysis and comparative evaluation show how the framework addresses security, algorithmic fairness and data integrity in CPSS governance.',
    keywords: ['Cyber-physical-social systems', 'Digital twins', 'DAOs', 'Decentralized governance', 'Blockchain'],
  },
  {
    title: 'Unleashing Cognitive AI Through Neuromorphic Computing for Human-Like Intelligence',
    authors: 'Seyed Mojtaba Hosseini Bamakan, Saeed Banaeian Far',
    venue: 'Procedia Computer Science, vol. 287, pp. 1183–1190 (13th International Conference on Information Technology and Quantitative Management, ITQM 2026)',
    year: '2026',
    type: 'Conference paper',
    url: 'https://www.sciencedirect.com/science/article/pii/S1877050926027985',
    wps: [],
    abstract:
      'Conventional deep learning is reaching limits in energy use, latency and privacy, especially for AI that runs on devices at the edge. The paper argues for cognitive AI built on neuromorphic computing: spiking neural networks on hardware that merges memory and computation, able to learn online and adapt without large training datasets. Drawing on recent progress in memristive synapses and photonic interconnects, it outlines the device, synaptic and interconnect options for continual learning and proposes benchmarks for energy, latency and privacy. On-device learning of this kind is relevant to digital twins that must adapt at the edge.',
    keywords: ['Cognitive AI', 'Neuromorphic computing', 'Spiking neural networks', 'On-device learning', 'Edge AI'],
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
    name: 'Dr. Ahad Zareravasan',
    role: 'Supervisor',
    affiliation: 'Department of Business Management, Masaryk University',
    interests: ['Business Analytics', 'Big Data', 'Blockchain', 'Information Systems'],
    links: [],
  },
]

// Open-source modules in github.com/smhbamakan/DeDT-platform (shown in the "Source code" section).
// status: 'planned' | 'in-progress' | 'available'
export const codeModules = [
  { wp: 3, folder: 'wp3-ip-nft-fundraising', title: 'IP-NFTs & fundraising', tech: 'Solidity · Hardhat', status: 'available', text: 'IP-NFT registry with birth certificate and provenance trail, NFT-backed crowdfunding and IP share tokens.' },
  { wp: 1, folder: 'wp1-dao-collaboration', title: 'DAO workspace + L3 collaboration', tech: 'Solidity · Hardhat · Python', status: 'available', text: 'A DAO for twin teams (reputation voting, timelock, parallel tasks, experiments, reports) and the AEI 2025 cross-chain framework (validator-quorum gateway, shared dNFTs, HTLC swaps).' },
  { wp: 2, folder: 'wp2-big-data-flows', title: 'Big data flows', tech: 'Python · Solidity', status: 'available', text: 'Twin sensor-stream simulation, edge processing with anomaly detection, and Merkle batches anchored on-chain for tamper-evident data flows.' },
  { wp: 4, folder: 'wp4-trust-auditing', title: 'Trust & auditing', tech: 'Python · Solidity', status: 'available', text: 'Identity-based encryption with distributed key servers, self-judging data authentication with aggregated BLS signatures, and zero-knowledge proofs linking a twin NFT to its birth certificate, all verified on the EVM.' },
]

// Communication, outreach and knowledge transfer (WP5 · D5.7 and WP6 · T6.3).
export const outreach = [
  {
    title: 'Digital twins explained in #askaneconomist',
    type: 'Video interview',
    channel: 'Faculty of Economics and Administration, MUNI · LinkedIn and Instagram',
    date: 'August 2026',
    text: 'A short video interview in the faculty series #askaneconomist on how digital twins work, how they differ from traditional simulations, and why IoT, AI and cloud computing are speeding up their adoption. Organisations can use them to detect problems earlier, plan maintenance, reduce downtime and test decisions before applying them in the real world.',
    tags: ['D5.7', 'T6.3'],
    links: [{ label: 'Watch on LinkedIn', url: 'https://www.linkedin.com/posts/askaneconomist-ugcPost-7494032637225869312-euBT/' }],
  },
  {
    title: 'Digital Twins: Bridging the Physical and Digital Worlds',
    type: 'Interview article',
    channel: 'ECON MUNI news',
    date: '17 April 2026',
    text: 'An interview for the faculty website on digital twins as virtual models kept in sync with real systems through live sensor data. It covers the main obstacles (data management, protection of intellectual property, cost and coordination between stakeholders), how Web3 tools such as blockchain, decentralized storage, IP-NFTs and DAOs can address them, and the most promising application areas: smart manufacturing, healthcare, smart cities, energy and logistics.',
    tags: ['D5.7', 'T6.3'],
    links: [{ label: 'Read the interview', url: 'https://www.econ.muni.cz/en/news/digital-twins-bridging-the-physical-and-digital-worlds' }],
  },
  {
    title: 'A Decentralized and Trustworthy Digital Twin Platform Powered by Blockchain and Web3',
    type: 'Seminar talk',
    channel: 'Department of Business Management, ECON MUNI',
    date: '23 April 2025',
    text: 'An internal seminar presenting the conceptual foundations, research objectives and technical roadmap of the project to colleagues and researchers of the department. It ended with an open Q&A in which participants gave feedback and raised questions on the scalability of blockchain-based digital twins.',
    tags: ['D5.7', 'T6.3'],
    links: [],
  },
]
