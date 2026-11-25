export const projects = [
  {
    id: 'nodewave',
    title: 'Project Management System',
    desc: 'A cross-department collaboration platform analyzed and built to automate task workflows, enforce dependency rules, and give external clients controlled visibility into project progress while protecting sensitive internal data.',
    techGroups: [
      { label: 'Frontend', items: ['Next.js 16', 'React 19', 'TypeScript', 'Tailwind CSS v4', 'Radix UI', 'TanStack Query', 'Zustand'] },
      { label: 'Backend', items: ['Bun v1.4', 'Hono v4', 'Prisma ORM', 'PostgreSQL'] },
      { label: 'DevOps & Security', items: ['Railway', 'Vercel', 'GitHub Actions CI/CD', 'Biome', 'JWT', 'Secure Headers'] },
    ],
    highlights: [
      { title: '3-Dimensional Role Access', detail: 'Role-based access design combining actor hierarchy (PM, internal team, client), department scope, and task status rules.' },
      { title: 'Workflow State & Blockers', detail: 'Process rules keep tasks BLOCKED until all prerequisite dependencies are verified and completed.' },
      { title: 'Data Integrity & Audit Logs', detail: 'Version locking rejects conflicting updates with HTTP 409, while permanent audit logs preserve full traceability.' },
      { title: 'Lightweight API Architecture', detail: 'Bun and Hono power a modular REST backend engineered for low latency and minimal memory overhead.' },
    ],
    link: 'https://nodewave-frontend-plum.vercel.app/login',
    linkLabel: 'Open Live Demo',
  },
  {
    id: '01.',
    title: 'Menu Ordering & POS System',
    desc: 'End-to-end thesis project for Cafe Kitkop addressing 5 operational problems through QR table ordering, QRIS payment, recipe-based stock deduction, and real-time order updates.',
    techGroups: [
      { label: 'Analysis', items: ['As-Is/To-Be', 'UML Diagrams', 'Prototype Method', '1NF–2NF Schema', 'Black-Box Testing'] },
      { label: 'Tech Stack', items: ['React.js', 'Node.js', 'Express.js', 'MySQL', 'Socket.IO', 'Vercel', 'Railway'] },
    ],
    highlights: [
      { title: 'As-Is/To-Be & UML Modeling', detail: 'Analyzed 5 cafe problems across 6 actors; produced use case, 5 activity, 5 sequence, class, and deployment diagrams.' },
      { title: '12-Table Normalized Schema', detail: 'Normalized data (1NF–2NF) with stock/order logs and ORD-YYYYMMDD-NNNN codification for transaction traceability.' },
      { title: 'Prototype & 29 Test Cases', detail: 'Specified 4 role menus and 18 I/O interfaces; validated with 29 black-box test cases across 5 modules and 5 roles.' },
      { title: 'Real-Time POS & Auto Stock', detail: 'Built QR table ordering, QRIS payment, recipe-based stock deduction, and live Socket.IO order tracking.' },
    ],
    link: '/projects/kitkop',
    linkLabel: 'View Detail',
  },
  {
    id: '02.',
    title: 'Sweet Dessert Food Ordering System',
    desc: 'A web-based food ordering application developed during Kampus Merdeka Certified Independent Study (MSIB Batch 7) at LearningX — covering interface design, REST API development with Python, product and order data modeling in MongoDB, and deployment.',
    tech: ['Python', 'Flask', 'REST API', 'MongoDB', 'JavaScript', 'Bootstrap'],
    link: 'https://sweetdessert.glitch.me/',
    img: '/img/porto 7.png',
  },
  {
    id: '03.',
    title: "Qubba Foundation & Wisata Qur'an",
    desc: "Developed the Qubba Foundation and Wisata Qur'an websites for a PT Syaamil Qur'an foundation, translating organizational requirements into tailored, responsive layouts with custom CSS and JavaScript.",
    tech: ['WordPress', 'Custom CSS', 'JavaScript'],
    link: 'https://qubbafoundation.org/',
    img: '/img/porto 11.png',
  },
]
