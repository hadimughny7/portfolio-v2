export const kitkopCaseStudy = {
  badge: 'Thesis Project • Apr 2026 – Jul 2026',
  role: 'System Analyst & Full-Stack Web Developer',
  title: 'Menu Ordering & POS Information System',
  subtitle: 'Cafe Kitkop',
  summary:
    'An end-to-end digital transformation of Cafe Kitkop’s ordering, cashier, kitchen, inventory, and reporting workflows — analyzed from on-site observation and stakeholder interviews, modeled in UML, structured into a 12-table normalized database, validated with 29 black-box test cases, and deployed to production.',
  repoUrl: 'https://github.com/hadimughny7/kitkop-web-app',
  heroImage: '/img/kitkop-1.png',
  motionVideo: '/video/kitkop-motion.mp4',
  metrics: [
    { value: '5', label: 'Business Problems Solved' },
    { value: '6', label: 'Actors & 5 Use Cases' },
    { value: '12', label: 'Normalized Tables (1NF–2NF)' },
    { value: '18', label: 'I/O Interface Specs' },
    { value: '29', label: 'Black-Box Test Cases' },
  ],
  overview: {
    methodology: 'Prototype Method (iterative refinement with owner & cashier feedback)',
    analysisTools: ['Observation & Interviews', 'As-Is / To-Be Analysis', 'UML (draw.io)', 'Figma', '1NF–2NF Normalization', 'Black-Box Testing'],
    techStack: ['React.js', 'Node.js', 'Express.js', 'MySQL', 'Socket.IO', 'Git & GitHub', 'Vercel', 'Railway'],
  },
  problemsAndSolutions: [
    {
      no: '01',
      problem: 'Customer Queues at Counter',
      asIs: 'Customers had to queue at the cashier counter to browse menus and place orders manually during peak hours.',
      toBe: 'QR Code Table Ordering allows dine-in customers to scan their table QR, browse live menu availability, and submit orders directly from their phone.',
    },
    {
      no: '02',
      problem: 'POS Not Integrated with Stock',
      asIs: 'Sales transactions at the cashier did not update raw ingredient balances, causing frequent stock discrepancies and sudden out-of-stock items.',
      toBe: 'Recipe-Based Automatic Stock Deduction links each menu item to its ingredient composition and deducts stock automatically upon order confirmation.',
    },
    {
      no: '03',
      problem: 'Manual Stock Tracking',
      asIs: 'Ingredient restocks, usage, and adjustments were recorded manually without a centralized history.',
      toBe: 'Structured Inventory & Stock Logs record every inbound, outbound, and recipe-deducted movement for complete traceability.',
    },
    {
      no: '04',
      problem: 'Manual Sales Reporting',
      asIs: 'The cashier and owner compiled daily and periodic revenue recaps manually from paper or separate spreadsheets.',
      toBe: 'Automated Transaction & Sales Reports aggregate normalized order and payment records by period with instant exportable views.',
    },
    {
      no: '05',
      problem: 'Verbal Order Handoff',
      asIs: 'Orders were relayed verbally or via paper slips between cashier and barista/kitchen, risking missed or delayed items.',
      toBe: 'Real-Time Socket.IO Order Synchronization broadcasts live order queues and status transitions across customer, cashier, and kitchen screens.',
    },
  ],
  umlDeliverables: [
    {
      title: 'Use Case Diagram & Scenarios',
      detail: 'Defined system boundaries across 6 actors and 5 core use cases, supported by structured written scenarios and role-based access permissions.',
    },
    {
      title: '5 Activity Diagrams',
      detail: 'Mapped swimlane workflows comparing actor actions and system responses across ordering, payment, order fulfillment, stock management, and reporting.',
    },
    {
      title: '5 Sequence Diagrams',
      detail: 'Modeled end-to-end message lifecycles between UI views, controllers, Socket.IO events, and database entities for every core use case.',
    },
    {
      title: 'Class Diagram',
      detail: 'Specified domain classes, attributes, methods, and multiplicities aligning application logic with the underlying relational schema.',
    },
    {
      title: 'Deployment Diagram',
      detail: 'Documented runtime cloud architecture connecting client devices, Vercel frontend hosting, and Railway Node.js/Express + Socket.IO + MySQL services.',
    },
  ],
  databaseDesign: {
    summary:
      'Unnormalized transaction, menu, and stock records were systematically normalized from Unnormalized Form (UNF) through First Normal Form (1NF) and Second Normal Form (2NF) to eliminate repeating groups and partial dependencies, resulting in 12 related MySQL tables.',
    highlights: [
      'Master tables for users/roles, tables/QR codes, categories, menu items, raw ingredients, and menu-ingredient recipes.',
      'Transactional tables separating order headers, order line items, and QRIS / cashier payment transactions.',
      'Dedicated stock logs and order status logs preserving an immutable audit trail for every inventory change and order state transition.',
    ],
    codification: {
      pattern: 'ORD-YYYYMMDD-NNNN',
      parts: [
        { code: 'ORD', meaning: 'Fixed domain prefix identifying customer order transactions' },
        { code: 'YYYYMMDD', meaning: 'Transaction date stamp enabling instant chronological lookup and daily partitioning' },
        { code: 'NNNN', meaning: '4-digit sequential counter resetting per date so every order is uniquely traceable' },
      ],
    },
  },
  interfaceAndTesting: {
    prototyping: [
      { metric: '4 Role Menus', detail: 'Role-based navigation structures tailored to specific actor permissions and operational workflows.' },
      { metric: '12 Input Designs', detail: 'Specified input wireframes & prototypes covering QR ordering, cart/checkout, menu & recipe forms, stock mutations, and payment verification.' },
      { metric: '6 Output Designs', detail: 'Specified output layouts covering digital receipts, live order status screens, stock movement logs, and sales summary reports.' },
    ],
    testing: {
      summary:
        'Planned black-box test scenarios, designed structured test cases with expected vs. actual outcomes, and executed validation across the deployed system.',
      stats: [
        { label: 'Total Test Cases', value: '29 Cases' },
        { label: 'System Modules Covered', value: '5 Modules' },
        { label: 'User Roles Verified', value: '5 Roles' },
        { label: 'Method', value: 'Black-Box Testing' },
      ],
    },
  },
}
