export const projects = [
  {
    id: 'nodewave',
    title: 'Project Management System',
    desc: 'A cross-department collaboration platform that automates task workflows, tracks deliverables, and gives external clients visibility into project progress while keeping sensitive internal data protected.',
    techGroups: [
      { label: 'Frontend', items: ['Next.js 16', 'React 19', 'TypeScript', 'Tailwind CSS v4', 'Radix UI', 'TanStack Query', 'Zustand'] },
      { label: 'Backend', items: ['Bun v1.4', 'Hono v4', 'Prisma ORM', 'PostgreSQL'] },
      { label: 'DevOps & Security', items: ['Railway', 'Vercel', 'GitHub Actions CI/CD', 'Biome', 'JWT', 'Secure Headers'] },
    ],
    highlights: [
      { title: '3-Dimensional Access Control', detail: 'Granular permissions combine role hierarchy (PM, internal team, and client), department scope, and task status rules.' },
      { title: 'State Machine & Blocker Resolution', detail: 'Tasks stay BLOCKED until prerequisite dependencies are completed.' },
      { title: 'Data Integrity & Concurrency', detail: 'Version locking rejects conflicting updates with HTTP 409, while permanent audit logs preserve change history.' },
      { title: 'Lightweight API Runtime', detail: 'Bun and Hono power an API designed for low overhead and minimal memory usage.' },
    ],
    link: 'https://nodewave-frontend-plum.vercel.app/login',
    linkLabel: 'Open Live Demo',
  },
  {
    id: '01.',
    title: 'Menu Ordering & POS System Based on Web Real-Time',
    desc: 'A fullstack Point of Sale and food ordering web application for cafes. Features include menu management, real-time order tracking with Socket.IO, QR code table ordering, and an admin dashboard with sales reports.',
    tech: ['React.js', 'Node.js', 'Express', 'MySQL', 'Socket.IO'],
    link: 'https://github.com/hadimughny7/kitkop-web-app',
    img: '/img/kitkop-1.png',
  },
  {
    id: '02.',
    title: 'Sweet Dessert E-Commerce',
    desc: 'A web-based food ordering application supporting online dessert ordering with integration between front-end and back-end. Developed during the LearningX Fullstack Web Development program.',
    tech: ['JavaScript', 'Bootstrap', 'Python Flask', 'MongoDB'],
    link: 'https://sweetdessert.glitch.me/',
    img: '/img/porto 7.png',
  },
  {
    id: '03.',
    title: 'Qubba Foundation Website',
    desc: "Built the Qubba Foundation and Wisata Qur'an websites using WordPress with custom CSS and JavaScript for a foundation owned by PT Syaamil Qur'an.",
    tech: ['WordPress', 'CSS', 'JavaScript'],
    link: 'https://qubbafoundation.org/',
    img: '/img/porto 11.png',
  },
]
