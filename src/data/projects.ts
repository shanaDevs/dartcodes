import { services } from "./services";

const projectAssets = {
  salonManagement1: {
    image: "/images/projects/salon/admin_dashboard.png",
    cardImage: "/images/projects/salon/salon_management1.png",
    galleryImage: "/images/projects/salon/empmployee_management1.png",
    cashier_dashboard: "/images/projects/salon/cashierdashboard.png",
    cashier_invoice: "/images/projects/salon/cashier_invoice.png",
    // payroll: "/images/projects/salon/admin_payroll_new.png",
    payroll: "/images/projects/salon/payroll2.png",
    employee_jobCards: "/images/projects/salon/employee_jobcards_new.png",
    employee_performace: "/images/projects/salon/employee_performance_new.png",
    casier_cashDrawer: "/images/projects/salon/Cashier_cashDrower.png",
    employee_dashboard: "/images/projects/salon/em_dash.png"
  },
  corporate_ecosystem: {
    image: "/images/projects/corporate_ecosystem/corporate_ecosystem.png",
    cardImage: "/images/projects/corporate_ecosystem/corporate_ecosystem.png",
    galleryImage: "/images/projects/corporate_ecosystem/corporate_ecosystem.png",
    admin_dashboard: "/images/projects/corporate_ecosystem/admin_dashboard.jpg",
    business_registration: "/images/projects/corporate_ecosystem/business_registration_new.png",
    tax_registration: "/images/projects/corporate_ecosystem/tax_registration.png",
    tax_return: "/images/projects/corporate_ecosystem/tax_return.jpg",
    tax_customer_dashboard: "/images/projects/corporate_ecosystem/darkmode_taxCustomer.png",
    tax_customer_return: "/images/projects/corporate_ecosystem/tax_customer_return.jpg",
    tax_customer_registration: "/images/projects/corporate_ecosystem/tax_customer_registration.jpg",
    business_regi1: "/images/projects/corporate_ecosystem/business_registration1.png",
    business_regi2: "/images/projects/corporate_ecosystem/business_registration2.png",
    business_regi3: "/images/projects/corporate_ecosystem/business_registration3.png",
    business_regi4: "/images/projects/corporate_ecosystem/business_registration4.png",
    br_review_admin: "/images/projects/corporate_ecosystem/br_review_admin.png",
    admin_dashboard_light: "/images/projects/corporate_ecosystem/admin_dashboard_light.png",
    admin_dashboard_dark: "/images/projects/corporate_ecosystem/admin_dashboard_dark.png",
    document1: "/images/projects/corporate_ecosystem/document1.png",
    document2: "/images/projects/corporate_ecosystem/document2.png",
    after_services: "/images/projects/corporate_ecosystem/after_services.png",
    after_services_admin: "/images/projects/corporate_ecosystem/after_services_admin.png",
    br_customer_dash: "/images/projects/corporate_ecosystem/br_customer_dash.png",
    br_customer_dash2: "/images/projects/corporate_ecosystem/br_customer_dash2.png",
  },
  tax_registration: {
    image: "/images/projects/tax_management/tax_management.png",
    cardImage: "/images/projects/tax_management/tax_management.png",
    galleryImage: "/images/projects/tax_management/tax_management.png",
    tax_registration1: "/images/projects/tax_management/tax_registration1.png",
    tax_registration2: "/images/projects/tax_management/tax_registration2.png",
    tax_registration_admin1: "/images/projects/tax_management/tax_registration_admin1.png",
    tax_registration_admin2: "/images/projects/tax_management/tax_registration_admin2.png",
    tax_registration_admin3: "/images/projects/tax_management/tax_registration_admin03.png",
    tax_registration5: "/images/projects/tax_management/tax_registration5.png",
    coporate1: "/images/projects/tax_management/coporate1.png",
    coporate2: "/images/projects/tax_management/coporate2.png",
    coporate3: "/images/projects/tax_management/coporate3.png",
    partnership1: "/images/projects/tax_management/partnership1.png",
    partnership2: "/images/projects/tax_management/partnership2.png",
    partnership3: "/images/projects/tax_management/partnership3.png",
  },

  wettapharma: {
    image: "/images/projects/wettapharma/wettapharma.jpg",
    cardImage: "/images/projects/wettapharma/wettapharma.png",
    galleryImage: "/images/projects/wettapharma/wettapharma.png",
    admin_dashboard: "/images/projects/wettapharma/wettapharma_admin_dash.png",
    admin_order: "/images/projects/wettapharma/wettapharma_order.png",
    admin_payment: "/images/projects/wettapharma/wettapharma_payments.png",
    doctor_side: "/images/projects/wettapharma/doctor_side1.jpg",
    credit_management1: "/images/projects/wettapharma/credit_management1.png",
    credit_management2: "/images/projects/wettapharma/credit_management2.png",
    cash_on_delivary_mobile: "/images/projects/wettapharma/cash_on_delivary_mobile.png",
    cash_on_delivary1: "/images/projects/wettapharma/cash_on_delivary1.png",
    cash_on_delivary2: "/images/projects/wettapharma/cash_on_delivery2.png",
    credit_ordering1: "/images/projects/wettapharma/Credit1.png",
    credit_ordering2: "/images/projects/wettapharma/Credit3.png",
    credit_ordering_mobile: "/images/projects/wettapharma/credit_ordering_mobile.png",
  },
  mn_homes: {
    image: "/images/projects/MN_Homes/mn_group.jpg",
    cardImage: "/images/projects/MN_Homes/mn_group.jpg",
    galleryImage: "/images/projects/MN_Homes/mn_group.jpg",
    workflow_dashboard: "/images/projects/MN_Homes/Screenshot 2026-04-30 160550.png",
    mn_group_project_registry: "/images/projects/MN_Homes/Screenshot 2026-04-30 162947.png",
    project_dark1: "/images/projects/MN_Homes/project_dark1.png",
    project_dark2: "/images/projects/MN_Homes/project_dark2.png",
    project_dark3: "/images/projects/MN_Homes/project_dark3.png",
    projects1: "/images/projects/MN_Homes/projetcs1.png",
    projects2: "/images/projects/MN_Homes/projetcs2.png",
    projects3: "/images/projects/MN_Homes/projetcs3.png",
    workflow: "/images/projects/MN_Homes/work_flow1.png",
    workflow_dark: "/images/projects/MN_Homes/work_flow_dark.png",
    petty_cash: "/images/projects/MN_Homes/petty_cash.png",
    boq_light: "/images/projects/MN_Homes/boq1.png",
    boq_dark: "/images/projects/MN_Homes/boq_dark1.png",
    mn_homes_dark: "/images/projects/MN_Homes/Material Items_dark.png",
    mn_homes_light: "/images/projects/MN_Homes/Material Items_light.png"
  },
  payroll_management: {
    image: "/images/projects/MN_payroll_management/payroll_management.png",
    galleryImage: "/images/projects/MN_payroll_management/payroll_management.png",
    cardImage: "/images/projects/MN_payroll_management/payroll_management.png",
    employee_registration_dark: "/images/projects/MN_payroll_management/employee_registration_dark.png",
    paysheet1: "/images/projects/MN_payroll_management/paysheet1.png",
    paysheet2: "/images/projects/MN_payroll_management/paysheet2.png",
    leave1: "/images/projects/MN_payroll_management/leaves01.png",
    leave2: "/images/projects/MN_payroll_management/leaves02.png",
  },
  customer_relationship_management: {
    image: "/images/projects/MN_CRM/crm.png",
    galleryImage: "/images/projects/MN_CRM/crm.png",
    cardImage: "/images/projects/MN_CRM/crm.png",
    dashboard1: "/images/projects/MN_CRM/dashboard1.png",
    dashboard2: "/images/projects/MN_CRM/dashboard2.png",
    dashboard3: "/images/projects/MN_CRM/dashboard3.png",
    dashboard4: "/images/projects/MN_CRM/dashboard4.png",
    task_management1: "/images/projects/MN_CRM/task_management1.png",
    task_management2: "/images/projects/MN_CRM/task_management2.png",
    leads_management1: "/images/projects/MN_CRM/CRM1.png",
    leads_management2: "/images/projects/MN_CRM/CRM2.png",
    leads_management3: "/images/projects/MN_CRM/CRM03.jpeg",
    leads_management4: "/images/projects/MN_CRM/CRM4.png",
    services_management1: "/images/projects/MN_CRM/service_management1.png",
    services_management2: "/images/projects/MN_CRM/service_management2.png",
  },
  OxygenPOS: {
    image: "/images/projects/OxygenPOS/OxygenPOS.png",
    galleryImage: "/images/projects/OxygenPOS/OxygenPOS.png",
    cardImage: "/images/projects/OxygenPOS/OxygenPOS.png",
    Oxygen_dash1: "/images/projects/OxygenPOS/oxygenDash1.png",
    Oxygen_dash2: "/images/projects/OxygenPOS/oxygenDash2.png",
    Oxygen_dash3: "/images/projects/OxygenPOS/oxygenDash3.png",
    Customers1: "/images/projects/OxygenPOS/customer1.png",
    Customers2: "/images/projects/OxygenPOS/customer2.png",
    Customers3: "/images/projects/OxygenPOS/customer3.png",
    return_management1: "/images/projects/OxygenPOS/return_bottles.png",
    task_mangement1: "/images/projects/OxygenPOS/TaskManagement1.png",
    task_mangement2: "/images/projects/OxygenPOS/TaskManagement2.png",
    task_mangement3: "/images/projects/OxygenPOS/TaskManagement3.png",
    bottle_management1: "/images/projects/OxygenPOS/bottle1.png",
    bottle_management2: "/images/projects/OxygenPOS/bottle2.png",
    bottle_management3: "/images/projects/OxygenPOS/bottle3.png",
    quick_sale: "/images/projects/OxygenPOS/quick_sale.png",
  },
  primus_distributor: {
    image: "/images/projects/primus_distributor/primus_distributor.png",
    galleryImage: "/images/projects/primus_distributor/primus_distributor.png",
    cardImage: "/images/projects/primus_distributor/primus_distributor.png",
    primus_distributor_dash1: "/images/projects/primus_distributor/primus_distributor_dash1.png",
    primus_distributor_dash2: "/images/projects/primus_distributor/primus_distributor_dash2.png",
    POS_Interface1: "/images/projects/primus_distributor/POS_Interface1.png",
    POS_Interface2: "/images/projects/primus_distributor/POS_Interface2.png",
    GRN1: "/images/projects/primus_distributor/GRN1.png",
    GRN2: "/images/projects/primus_distributor/GRN2.png",
    GRN3: "/images/projects/primus_distributor/GRN3.png",
    GRN4: "/images/projects/primus_distributor/GRN4.png",
    product1: "/images/projects/primus_distributor/product1.png",
    product2: "/images/projects/primus_distributor/product2.png",
    product3: "/images/projects/primus_distributor/product3.png",
    inventory: "/images/projects/primus_distributor/inventory.png",
    finance1: "/images/projects/primus_distributor/finance1.png",
    finance2: "/images/projects/primus_distributor/finance2.png",
    expenses: "/images/projects/primus_distributor/expenses.png",
  },

  fireink: {
    image: "/images/projects/fireink/fireInk.png",
    galleryImage: "/images/projects/fireink/fireInk.png",
    cardImage: "/images/projects/fireink/fireInk.png",
    home1: "/images/projects/fireink/home1.png",
    home2: "/images/projects/fireink/home2.png",
    home3: "/images/projects/fireink/home3.png",
    home4: "/images/projects/fireink/home4.png",
    services1: "/images/projects/fireink/services1.png",
    services2: "/images/projects/fireink/services2.png",
    work1: "/images/projects/fireink/our_work1.png",
    work2: "/images/projects/fireink/our_work2.png",
  }



} as const;

type ProjectSection = {
  feature: string;
  description: string;
  /** Single screenshot. Used when `images` is omitted or has only one URL. */
  image?: string;
  /** Multiple screenshots for this feature; shown in a carousel when more than one. */
  images?: readonly string[];
  fit?: "cover" | "contain";
};

type Project = {
  id: string;
  title: string;
  category: string;
  image: string;
  cardImage?: string;
  galleryImage?: string;
  description: string;
  tags: readonly string[];
  link: string;
  longDescription?: string;
  challenge?: string;
  solution?: string;
  sections: ProjectSection[];
};

export const projects: Project[] = [
  {
    id: "central-salon",
    title: "Salon Management System",
    category: "Business Management",
    image: projectAssets.salonManagement1.image,
    cardImage: projectAssets.salonManagement1.cardImage,
    galleryImage: projectAssets.salonManagement1.galleryImage,
    description: "A professional Salon Management System designed to streamline appointment scheduling, service tracking, and staff management with a real-time administrative dashboard.",
    tags: ["Next.js", "Node.js", "MySQL", "Tailwind CSS", "Shadcn/UI"],
    link: "https://example.com",
    sections: [
      {
        feature: "Admin Dashboard",
        description:
          `
This UI features a sleek, high-contrast layout that pairs a dark sidebar with a clean, airy workspace. It uses a soft-UI aesthetic with rounded corners, subtle shadows, and vibrant purple and orange gradients to draw attention to key data.
- KPI Cards
- Data Visualization
- Navigation & UX
- Visual Hierarchy`,
        image: projectAssets.salonManagement1.image,
      },
      {
        feature: "Employee Management",
        description:
          `
A clean, high-functioning employee management interface that balances visual clarity with data density. The layout uses a soft-shadow floating effect for KPI cards and a spacious, high-contrast table for structured employee data, making complex information easy to scan and act upon.
- Summary KPI Cards
-  Structured Data Table
- Functional UI Elements
- Search & Filter Integration`,
        image: projectAssets.salonManagement1.galleryImage,
        fit: "contain",
      },
      {
        feature: "Payroll",
        description:
          `
    A clean salary calculation interface for admins to calculate employee salaries based on commission or daily rate. It brings together employee details, attendance, advances, loans, EPF contributions, commissions, and earnings—all in one organized view for accurate payroll processing.
- Commission Mode & Daily Rate Options
- Employee Selection & Date Range
- Auto Advance Deduction
-  Employee Basic Details & Attendance Summary
- Advance & Loan Summary
- Earning Summary` ,
        image: projectAssets.salonManagement1.payroll,
        fit: "contain",
      },
      {
        feature: "Cashier Dashboard",
        description:
          `
        A data-driven cashier dashboard designed for real-time financial oversight and performance tracking. The layout uses a sophisticated card-based hierarchy with interactive charts, giving salon managers instant visibility into revenue, staff performance, and operational trends without digging through multiple screens.
- Data-Driven Visual Hierarchy
- Comprehensive Revenue Insights
- Performance Analytics
- Operational Trend Tracking `,

        image: projectAssets.salonManagement1.cashier_dashboard,
      },
      {
        feature: "Cashier Cash Drawer",
        description:
          `
          A structured cash reconciliation interface designed for accurate end-of-day drawer closure. The layout uses a well-organized modal grid system that separates bank summaries from cash counter inputs, preventing information overload while ensuring every note and transaction is accounted for before closing.
- Structured Modal Layout
- Automated Reconciliation Logic
- Physical Cash Denomination Counter
- Real-time Discrepancy Tracking`,

        image: projectAssets.salonManagement1.casier_cashDrawer,
      },
      {
        feature: "Invoice Management",
        description:
          `
          A fast and simple billing screen for cashiers. It uses a split-screen design with services on one side and the bill summary on the other. Cashiers can find items, add them to the bill, and complete payments—all without leaving the page.
- Easy Split-Screen Layout
- Quick Service Search & Filters (Mens, Kids, Ladies)
- Custom Price & Staff Assignment
- Flexible Payments (Cash, Card) with Discounts & Notes`,

        image: projectAssets.salonManagement1.cashier_invoice,
      },
      {
        feature: "Employee Dashboard",
        description:
          `
          A clean, personal dashboard for employees to track their own performance and earnings. It uses a simple card layout with a purple theme, showing daily totals, monthly income, and recent work history—all in one place.
- Simple Personal Dashboard
- Daily & Monthly Earnings Summary
- Easy Earnings Trend Chart
- Today's Service List with Status
          `,

        image: projectAssets.salonManagement1.employee_dashboard,
        fit: "contain",
      },
      {
        feature: "Employee Job Cards",
        description:
          `
          A simple card layout that shows each service job assigned to an employee. It helps workers quickly see what's pending, what's completed, and all the important details—without opening multiple screens.
- Clean & Repeatable Card Design
- Color-Coded Status (Pending / Completed)
- Key Job Details (Invoice ID, Service, Price, Payment Type)
- View Details Button & Page Navigation
          `,

        image: projectAssets.salonManagement1.employee_jobCards,
        //  fit: "contain",
      },
      {
        feature: "Employee Performance",
        description:
          `
          A clean analytics dashboard that helps employees see how well they're performing. It uses simple charts like donuts and bars to show earnings, top services, and how they compare with teammates—all in one place.
- Simple Charts (Bar, Line, Donut)
- Easy Date Filters (Daily, Weekly, Monthly, Yearly)
- Booking vs. Walk-In Breakdown
- Top Services & Team Comparison 
          `,
        image: projectAssets.salonManagement1.employee_performace,
        // fit: "contain",
      },


    ] satisfies ProjectSection[],
  },
  {
    id: "corporate-ecosystem",
    title: "Corporate Ecosystem",
    category: "Enterprise Solutions",
    image: projectAssets.corporate_ecosystem.image,
    cardImage: projectAssets.corporate_ecosystem.cardImage,
    galleryImage: projectAssets.corporate_ecosystem.galleryImage,
    description: "This platform facilitates business registration, allows requesting tax numbers, and provides access to tax details. It makes the registration process more efficient and transparent, while centralizing tax related information for easy access.",
    tags: ["Next.js", "Node.js", "MySQL", "Tailwind CSS"],
    link: "https://example.com",
    sections: [
      {
        feature: "Business Registration Flow",
        description:
          `
         The business registration interface provides a structured, step-by-step process designed to allow customers to register a new company in minutes. The system uses a clear progress tracker to guide users through six distinct stages: Name Search, Personal Info, Company Info, Documents, Review, and Submission.

- Real-time Company Name Validation
- Comprehensive Company Structuring
- Automated Fee Calculation
- Structured Personal Data Collection
- Digital Document Management
- Application Tracking & Confirmation
          `,
        images: [
          projectAssets.corporate_ecosystem.business_regi1,
          projectAssets.corporate_ecosystem.business_regi2,
          projectAssets.corporate_ecosystem.business_regi3,
          projectAssets.corporate_ecosystem.business_regi4,
        ],
        fit: "contain",
      },
      {
        feature: "Integrated Billing & Quotation System",
        description:
          `
       
          The system provides professional, automated financial documents to customers during the registration workflow. These documents ensure transparency by clearly outlining service packages, company structures, and payment balances.

- Automated Quotation Generation
- Service Package Breakdown
- Company Structure Summary
- Comprehensive Customer & Company Profiles
- Real-time Payment Tracking
- Dynamic Balance Calculation
          `,
        images: [
          projectAssets.corporate_ecosystem.document1,
          projectAssets.corporate_ecosystem.document2,
        ],
        fit: "contain",
      },

      {
        feature: "Admin Dashboard Overview",
        description:
          `
          The Admin Dashboard provides a centralized command center for administrators to monitor the health and activity of the registration platform. It features real-time analytics and high-level summaries of financial, user, and application metrics to facilitate informed decision-making.

- Financial & User Summaries
- Revenue Analytics
- Live Application Status Tracking
- Real-time Activity Feed
- Comprehensive Management Sidebar
- Flexible Timeframe Filtering
          `,
        images: [
          projectAssets.corporate_ecosystem.admin_dashboard_light,
          projectAssets.corporate_ecosystem.admin_dashboard_dark,
        ],
        fit: "contain",
      },
      {
        feature: "Admin Business Registration",
        description:
          `
          A clean, simple table layout that helps admins manage all business registration requests. It shows status, payment info, and application type for each submission—making it easy to track progress from start to finish.
- Clean & Easy-to-Read Table
- Color-Coded Status Badges
- Search & Filter Options
- Action Button to Review Each Request
          `,

        image: projectAssets.corporate_ecosystem.business_registration,
      },

      {
        feature: "Admin Business Registration Review Panel",
        description:
          `
         The Admin panel provides a centralized interface for super administrators to verify, manage, and approve company registration applications. It offers a comprehensive view of all data submitted by the customer, ensuring that every detail is audited before final approval.

- Application Lifecycle Management
- Centralized Company Information
- Document Verification Workflow
- Direct Customer Communication
- Member & Role Auditing
- Administrative Document Handling
          `,
        images: [
          projectAssets.corporate_ecosystem.br_review_admin,
        ],
        fit: "contain",
      },
      {
        feature: "Post-Registration Service Management",
        description: `
The platform offers a comprehensive suite of corporate secretarial services that allow companies to manage their legal structure and compliance after initial registration. This module enables seamless communication between the business and the registry for critical organizational changes.

- Diverse Corporate Service Suite
- Intuitive Service Request Interface
- Role-Based Data Entry
- Administrative Service Hub
- Real-time Request Tracking
- Company-Specific Request Queues
Detailed Request Auditing
        
        `,
        images: [
          projectAssets.corporate_ecosystem.after_services,
          projectAssets.corporate_ecosystem.after_services_admin,

        ],
        fit: "contain",
      },

      {
        feature: "Customer Dashboard Overview",
        description: `
        
The customer dashboard serves as a central hub for business owners to manage their corporate profile and track ongoing registration applications. It provides real-time financial summaries and visual progress tracking to ensure the user is always informed of their next steps.

- Real-time Financial Summaries
- Visual Application Progress Tracker
- Total Portfolio Management
- Recent Activity Log
- Quick Action Shortcuts
- Integrated Service Navigation
        `,
        images: [
          projectAssets.corporate_ecosystem.br_customer_dash,
          projectAssets.corporate_ecosystem.br_customer_dash2,
        ],
        fit: "contain",
      }


    ] satisfies ProjectSection[],
  },
  {
    id: "tax-management",
    title: "Tax Management System",
    category: "Enterprise Solutions",
    image: projectAssets.tax_registration.image,
    cardImage: projectAssets.tax_registration.cardImage,
    galleryImage: projectAssets.tax_registration.galleryImage,
    description: "This platform facilitates business registration, allows requesting tax numbers, and provides access to tax details. It makes the registration process more efficient and transparent, while centralizing tax related information for easy access.",
    tags: ["Next.js", "Node.js", "MySQL", "Tailwind CSS"],
    link: "https://example.com",
    sections: [
      {
        feature: "Individual Tax Registration (Customer Side)",
        description:
          `
This module provides a comprehensive digital onboarding process for individuals to register for tax purposes. It features a structured, multi-step data entry system designed to collect all necessary legal, residential, and professional information required for the issuance of a Taxpayer Identification Number (TIN).

- Comprehensive Data Collection
- Secure Document Upload Portal
- Real-time Progress & Status Monitoring
- Direct Administrative Integration
          `,

        images: [
          projectAssets.tax_registration.tax_registration1,
          projectAssets.tax_registration.tax_registration2,
          projectAssets.tax_registration.tax_registration5,
        ],
        fit: "contain",
      },

      {
        feature: "Corporate Tax Registration (Customer Side)",
        description:
          `
This module allows business entities to initiate and manage their tax registration process through a dedicated digital portal. It provides a guided workflow for selecting tax types, uploading legal documents, and tracking the status of their Taxpayer Identification Number (TIN) issuance.

- Guided Document Upload Workflow
- Required Documents
- Optional Documents
- Real-time Registration Tracking
- Digital Document Vault
- Centralized Tax Dashboard
          `,

        images: [
          projectAssets.tax_registration.coporate1,
          projectAssets.tax_registration.coporate2,
          projectAssets.tax_registration.coporate3,
        ],
        fit: "contain",
      },


      {
        feature: "Partnership Tax Registration (Customer Side)",
        description:
          `
This module facilitates the tax registration process for business partnerships and joint ventures. It provides a structured digital workflow for uploading foundational business documents and tracking the official issuance of the partnership's Taxpayer Identification Number (TIN).

- Partnership Document Upload Interface
- Dynamic File Management
- Expandable Document List
- Real-time Registration Identity Tracking
- Audit-Ready Personal Records
- Historical Document Vault
          `,

        images: [
          projectAssets.tax_registration.partnership1,
          projectAssets.tax_registration.partnership2,
          projectAssets.tax_registration.partnership3,
        ],
        fit: "contain",
      },


      {
        feature: "Admin Tax Registration Review Panel",
        description:
          `
          This interface provides a unified command center for super administrators to verify and process tax applications for Individuals, Companies (Corporate), and Partnerships. It features a standardized workflow to audit submitted data and legal documents before officially issuing a Taxpayer Identification Number (TIN).

- Tax Type Classification
- Centralized TIN Management
- Decision Control Center
- Type-Specific Document Auditing
- Comprehensive Data Tables
- Administrative Supplemental Tools
          `,

        images:[
          projectAssets.tax_registration.tax_registration_admin1,
          projectAssets.tax_registration.tax_registration_admin2,
          projectAssets.tax_registration.tax_registration_admin3,
        ], 
        fit: "contain",
      },
      {
        feature: "Admin Tax Return",
        description:
          `
          A simple dashboard that helps admins manage all tax return submissions. It shows quick stats (Approved, Pending, Draft) at the top and a clean table below with customer details and return status—making it easy to track and process each submission.
- Quick Stats Cards (Approved, Pending, Draft)
- Customer Details at a Glance (Name, TIN, NIC, Contact)
- Pending vs. Approved Return Tracker
- Search, Filter & Action Buttons
        `,
        image: projectAssets.corporate_ecosystem.tax_return,
      },
      {
        feature: "Tax Customer Dashboard",
        description:
          `
        A simple, customer-friendly dashboard that helps users track their tax registration progress. It shows exactly which step they're on, what's paid, and what's pending—so customers always know where they stand.
- Easy Progress Tracker
- Registration Status & Payment Summary
- Quick Stats at a Glance
- Quick Action Buttons & Recent Activity Log
          `,

        image: projectAssets.corporate_ecosystem.tax_customer_dashboard,
        fit: "contain",

      },
      {
        feature: "Customer Tax Returns by Year",
        description:
          `
       A simple card layout that helps customers view their tax returns organized by year. Each card shows the assessment year, status, and deadline—making it easy to see what's done and what's still pending.
- Clean Year-by-Year Cards
- Assessment Year (2026, 2027, etc.)
- Status Badge (Pending, Accepted) & Deadline
- Click to View or Continue Filing
       `,

        image: projectAssets.corporate_ecosystem.tax_customer_return,
      },
//       {
//         feature: "Customer Tax Registration",
//         description:
//           `
//        A simple card layout that helps customers track their tax registration progress step by step. It shows exactly which stage they're on—from submission to completion—so there's no confusion about what's left to do.

// - Easy Step-by-Step Progress Tracker
// - 5 Clear Stages (Submitted → Review → Payment → TIN → Completed)
// - Completion Percentage & Status Badge
// - View All Data" Button for Full Details
//           `,

//         image: projectAssets.corporate_ecosystem.tax_customer_registration,
//       },


    ] satisfies ProjectSection[],
  },

  {
    id: "wettapharma",
    title: "Medical E-commerce",
    category: "E-commerce",
    image: projectAssets.wettapharma.image,
    cardImage: projectAssets.wettapharma.cardImage,
    galleryImage: projectAssets.wettapharma.galleryImage,
    description: "This website is a secure platform designed exclusively for doctors. After registering, doctors can log in to browse products uploaded by the administrator. They can request products directly, eliminating the need for intermediaries. Once approved by the admin, they can place orders normally. This simplifies the procurement process for doctors, making it more efficient.",
    tags: ["Next.js", "Node.js", "MySQL", "Tailwind CSS"],
    link: "https://example.com",
    sections: [
      {
        feature: "Admin Dashboard",
        description:
          `
A clean, business-focused dashboard designed for the admin to manage bulk medicine distribution. It provides a quick overview of monthly sales, active customers, orders, and order lifecycle status—all in one place for complete control and monitoring.
- Sales This Month
- Active Customers & Total Customers
- Active Orders Tracker
- Order Lifecycle Pie Chart (Pending, Processing, Shipped, Delivered)
- Monthly Revenue Analytics Chart
- Easy Sidebar Navigation (Products, Orders, Payments, Doctors, Credit History, Financial History, etc.)
          `,
        image: projectAssets.wettapharma.admin_dashboard,
      },
      {
        feature: "Admin Order Management",
        description:
          `
      A clean order management dashboard designed for the admin to track customer orders, dispatch frequency, and fulfillment rates. It provides a complete view of pending, shipped, and delivered orders—helping admins monitor order flow and revenue in real time.
- Order Velocity Chart (Dispatch Frequency)
- Active Order Status (Pending, Shipped, Delivered)
- Gross Revenue Overview
- Fulfillment Rate Tracker
- Quick Search (Order Number, Client Name, License, Phone)
- Dispatch Reporting Suite
- Multiple Analysis Types (Item-Level, Financial Ledger, Volume Summary)
- Quick Filters (This Month, Live Status, All Payments, Reset)
          `,
        image: projectAssets.wettapharma.admin_order,
      },
      {
        feature: "Admin Payment Management",
        description:
          `
         A clean financial dashboard designed for the admin to track all payment transactions. It provides a complete overview of income, settled fees, outstanding amounts, refunds, and revenue trends—making financial monitoring simple and transparent.
- Income Overview (Period-Based)
- Settled Fees & Net Payments
- Total Outstanding & Total Refunds
- Revenue Trend Chart (Last 30 Days)
- Payment Split by Method (Cash & Doctor Credit)
- Easy Navigation (View Store & Super Admin)
          `,
        image: projectAssets.wettapharma.admin_payment,
      },
      {
        feature: "Credit Management",
        description:
          `
        A clean credit tracking interface for admins to monitor doctor-wise credit usage and payment deadlines. It provides a complete overview of total credit exposure, doctors in debt, near-due accounts, and individual credit utilization—helping manage financial risk effectively.
- Financial Risk Alert (Critical Credit Status)
- Total Credit Exposure Overview
- Doctors in Debt Counter
- Near Due (7 Days) Tracker
- Search by Doctor Name or License
- Credit Utilization per Doctor (Used / Limit)
- Terms & Due Date Display
- Action Buttons (Payment History, Settle Credit, Send Reminder)
          `,
        images: [
          projectAssets.wettapharma.credit_management1,
          projectAssets.wettapharma.credit_management2,
        ]
      },


      {
        feature: "Cash on Delivery",
        description:
          `
        A clean payment selection interface for doctors to choose how to pay for their bulk medicine order. This view highlights the Cash on Delivery option, showing the customer their order details, COD savings, and final total—along with their available credit balance if they prefer credit ordering instead.
- Order Summary with Product Names & Prices
- COD Savings (10% Discount) Clearly Shown
- Subtotal, Shipping & Final Total
- Back & Secure Checkout Button
- Security Note (Encrypted Transaction & Terms Agreement)
          `,
        images: [
          projectAssets.wettapharma.cash_on_delivary1,
          projectAssets.wettapharma.cash_on_delivary2,
          projectAssets.wettapharma.cash_on_delivary_mobile
        ]
      },


      {
        feature: "Credit Ordering",
        description:
          `
      A clean payment selection interface for doctors to choose how to pay for their bulk medicine order. This view highlights the Credit Ordering option, clearly showing the customer their current credit usage, projected credit after order, remaining balance, and final total—giving full transparency before confirmation.

- Two Payment Options (Cash on Delivery / Credit Ordering)
- Customer Credit Balance Display (Used / Total Limit)
- Projected Credit After Order Calculation
- Remaining Credit Balance After Order-
- Order Summary with Product Names & Individual Prices
- Subtotal, Shipping & Final Total
- Easy Navigation Tabs (Products, Categories, Agencies, Brands, Offers, Contact)
          `,
        images: [
          projectAssets.wettapharma.credit_ordering1,
          projectAssets.wettapharma.credit_ordering2,
          projectAssets.wettapharma.credit_ordering_mobile,
        ],
        fit: "contain",
      },

      {
        feature: "Collection & Cart Overview",
        description:
          `
        A clean product browsing and shopping interface designed for doctors to discover and order pharmaceutical items. The layout combines a product listing with filter options, a mini cart summary, and detailed product information—allowing users to browse, refine, select, and review their order without leaving the page.
- Product Grid with Pricing
- Refine Filters (Classification, Discovery, Order Constraints)
- Mini Cart with Total & Note Option
- You May Also Like Suggestions
- Product Details Card (Name, Strength, Price, Supplier)
- Checkout & Continue Shopping
          `,
        image: projectAssets.wettapharma.doctor_side,
      },
    ] satisfies ProjectSection[],
  },
  {
    id: "MN_Homes",
    title: "MN Homes",
    category: "Enterprise Solutions",
    image: projectAssets.mn_homes.image,
    cardImage: projectAssets.mn_homes.cardImage,
    galleryImage: projectAssets.mn_homes.galleryImage,
    description: "This website is a secure platform designed exclusively for doctors. After registering, doctors can log in to browse products uploaded by the administrator. They can request products directly, eliminating the need for intermediaries. Once approved by the admin, they can place orders normally. This simplifies the procurement process for doctors, making it more efficient.",
    tags: ["Next.js", "Node.js", "MySQL", "Tailwind CSS"],
    link: "https://example.com",
    sections: [
      {
        feature: "Active Projects Dashboard",
        description:
          `
         A clean project tracking dashboard designed for admins to monitor active projects, task pipelines, and conversion rates. It provides a complete view of project metrics alongside BOQ creation vs. approval analytics—helping teams track progress over time.
- Total Projects Recorded
- Tasks in Pipeline
- Quick Conversion Rate
- Active on Site
- BOQ Analytics Chart (Creation vs Approval Lifecycle)
         `,
        image: projectAssets.mn_homes.workflow_dashboard,
        fit: "contain",
      },
      {
        feature: "Project Management Dashboard",
        description:
          `
A  complete construction project dashboard combining project details, task progress, and resource tracking in one view. Admins can monitor stage completion, task status, stock quantities, material requests, and timeline all from one place.
- Project Status, Timeline & Location
- Stage Completion Chart (Foundation, Excavations)
- Task Breakdown with Progress & Status (Done / Due)
- Stock Items & Material Requests (Pending / Approved)
- Statistics Chart (March vs April)
- Total Days, Days Left & Completion Percentage
- Zoom Options (Daily, Monthly, Quarterly)

         `,
        images: [
          projectAssets.mn_homes.mn_group_project_registry,
          projectAssets.mn_homes.projects1,
          projectAssets.mn_homes.projects2,
          projectAssets.mn_homes.projects3,
          projectAssets.mn_homes.project_dark1,
          projectAssets.mn_homes.project_dark2,
          projectAssets.mn_homes.project_dark3,
        ],
        fit: "contain",
      },

      {
        feature: "Work flow",
        description:
          `
         A clean workflow tracking interface for construction project stages. It separates active stages from completed stages, showing task counts, completion percentages, date ranges, and overdue status for each stage.
- Active / Other Stages
- Completed Stages Counter
- Stage Completion Percentage
- Task Count per Stage
- Stage Date Ranges
- Overdue Status with Days Overdue
- Note Field per Stage
- Actions Button
         `,
        images: [
          projectAssets.mn_homes.workflow,
          projectAssets.mn_homes.workflow_dark,
        ],
        fit: "contain",
      },


      {
        feature: "Petty Cash",
        description:
          `
      A clean petty cash tracking interface for construction projects. It shows total received, total spent, and current balance at the top, followed by two separate tables — one for petty cash requests and one for petty cash reimbursements.
      - Total Received, Total Spent & Current Balance
- Petty Cash Requests Table (Date, Request ID, Description, Status, Request Amount, Approve Amount, Remark)
- Petty Cash Reimbursements Table (Date, Request ID, Approved Amount, Expense Amount, Balance Amount, Receipts, Remark)


         `,
        image:
          projectAssets.mn_homes.petty_cash

      },

      {
        feature: "BOQ & Quotation",
        description:
          `
         A clean bill of quantities dashboard designed for construction project management. It organizes all work categories—from preliminary work to painting—in a simple table format with code, description, unit, quantity, rate, and value, making cost tracking and approval easy for admins.
        - Work Categories (Preliminary, Excavation, Concrete, Masonry, Roof, Plumbing, Electrical, Painting, etc.)
- Unit, Quantity, Rate & Value Columns
- Status Checkmarks per Category
- Action Buttons (Processing, Approve, Reject)
         `,
        images: [
          projectAssets.mn_homes.boq_dark,
          projectAssets.mn_homes.boq_light
        ],
        fit: "contain",
      },

      {
        feature: "Meterial Plan",
        description:
          `
         A clean bill of quantities dashboard designed for construction project management. It organizes all work categories—from preliminary work to painting—in a simple table format with code, description, unit, quantity, rate, and value, making cost tracking and approval easy for admins.
        - Work Categories (Preliminary, Excavation, Concrete, Masonry, Roof, Plumbing, Electrical, Painting, etc.)
- Unit, Quantity, Rate & Value Columns
- Status Checkmarks per Category
- Action Buttons (Processing, Approve, Reject)
         `,
        images: [
          projectAssets.mn_homes.mn_homes_dark,
          projectAssets.mn_homes.mn_homes_light
        ],
      },

    ] satisfies ProjectSection[],
  },
  {
    id: "payroll-management",
    title: "Payroll Management System",
    category: "Payroll Management",
    image: projectAssets.payroll_management.image,
    cardImage: projectAssets.payroll_management.cardImage,
    galleryImage: projectAssets.payroll_management.galleryImage,
    description: "This website is a secure platform designed exclusively for doctors. After registering, doctors can log in to browse products uploaded by the administrator. They can request products directly, eliminating the need for intermediaries. Once approved by the admin, they can place orders normally. This simplifies the procurement process for doctors, making it more efficient.",
    tags: ["Next.js", "Node.js", "MySQL", "Tailwind CSS"],
    link: "https://example.com",
    sections: [
      {
        feature: "Employee Registration & Management",
        description:
          `
          A clean employee registration interface for capturing complete employee profiles. It is organized in a two-column layout with fields for employee photo, EMP No, EPF No, NIC, Birthday, Display Name (required), Full Name, Contact numbers (required), Civil Status, Gender, Email, Address, and Temporary Address.
- Employee Photo Upload
- EMP No, EPF No & NIC
- Birthday & Display Name (Required)
- Full Name & Contact Numbers (Required)
- Civil Status (Married) & Gender (Male)
- Email, Address & Temporary Address
          `,
        image: projectAssets.payroll_management.employee_registration_dark,
      },
      {
        feature: "Salary Calculation & Paysheet Generation",
        description:
          `
      A complete payroll management interface that combines a high-level summary with detailed employee salary breakdowns. The top section shows key metrics like total employees, net and gross salaries, EFT, EPF (total and employee 12%), advances, welfare, OT, and late values. The lower section provides a detailed employee table showing each person's basic salary, incentives, OT hours, OT amount, gross salary, EPF, advance, late hours, rate, and per — all in one place for easy payroll processing.
     - Total Employees, Net & Gross Salaries
- Total EFT & Total EPF (Overall & Employee 12%)
- Total Advance & Total Welfare
- Total OT & Total Late (Count & Value)
- Month Filter & Process Payroll
- View Action, Download Paysheet & Export CSV Options
      `,
        images: [
          projectAssets.payroll_management.paysheet1,
          projectAssets.payroll_management.paysheet2,
        ],
      },
      {
        feature: "Leave Management",
        description:
          `
         A clean leave management interface for manually managing employee leave allocations and usage. It includes search filters by employee name and leave category, a year dropdown, and a reset button. The table shows employee name, leave category, year, total leaves, used leaves, remaining leaves, utilization percentage, and actions.
                  - Search by Employee Name & Category
- Year Filter & Reset Button
- Sortable Columns (Year, Total Leaves, Used Leaves, Remaining)
- Employee Name, Leave Category & Year
- Total Leaves, Used Leaves & Remaining
- Utilization Percentage
- Actions Button
- Add Leave Balance Button
          `,
        images: [
          projectAssets.payroll_management.leave1,
          projectAssets.payroll_management.leave2,
        ],
        fit: "contain",
      },
    ] satisfies ProjectSection[],
  },
  {
    id: "customer_relationship_management",
    title: "customer relationship management",
    category: "CRM",
    image: projectAssets.customer_relationship_management.image,
    cardImage: projectAssets.customer_relationship_management.cardImage,
    galleryImage: projectAssets.customer_relationship_management.galleryImage,
    description: "This website is a secure platform designed exclusively for doctors. After registering, doctors can log in to browse products uploaded by the administrator. They can request products directly, eliminating the need for intermediaries. Once approved by the admin, they can place orders normally. This simplifies the procurement process for doctors, making it more efficient.",
    tags: ["Next.js", "Node.js", "MySQL", "Tailwind CSS"],
    link: "https://example.com",
    sections: [
      {
        feature: "Dashboard & Lead Analytics",
        description:
          `
          The Pre-Construction dashboard provides a high-level command center for tracking project leads and operational performance. It combines real-time lead analytics with task management tools, ensuring that construction projects move seamlessly from the initial inquiry stage through to active planning.

- Real-time Lead Analytics
- Operational Performance Metrics
- Integrated Task Aging Matrix
- Centralized Lead Repository
- Automated Attention Alerts
- Top Performer Leaderboard
          `,
        images: [
          projectAssets.customer_relationship_management.dashboard1,
          projectAssets.customer_relationship_management.dashboard2,
          projectAssets.customer_relationship_management.dashboard3,
          projectAssets.customer_relationship_management.dashboard4,
        ],
        fit: "contain",

      },

      {
        feature: "Dynamic Task & Workflow Management",
        description:
          `
       The Task Management interface serves as a centralized hub for overseeing and coordinating organizational workflows. It utilizes real-time data visualization to provide managers with a clear understanding of task health, team velocity, and operational bottlenecks.

- Workflow Status Summaries
- Real-time Intelligence Feed
- Health & Efficiency Metrics
- Detailed Task Execution Cards
- Timeline & Accountability Tracking
- Comprehensive Navigation & Actions
          
          `,
        images: [
          projectAssets.customer_relationship_management.task_management1,
          projectAssets.customer_relationship_management.task_management2,
        ],
        fit: "contain",
      },

      {
        feature: "Lead Registration",
        description:
          `
         A clean lead registration interface for capturing customer identity, location, workflow routing, and service requirements. It includes fields for full name, mobile, email, street address, city, postal code, source, status, and lead setup summary with pending details.
        - Customer Identity (Full Name, Mobile, Email)
- Location (Street Address, City, Postal Code)
- Workflow Routing (Source, Status)
- Lead Setup Summary (Pending Details, Target Organizations, Active Requirements)
- Target Organization & Lead Type Dropdowns
- Service Requirements (Service, Priority)
- Add Service Button
          
          `,
        images: [
          projectAssets.customer_relationship_management.leads_management1,
          projectAssets.customer_relationship_management.leads_management2,
          projectAssets.customer_relationship_management.leads_management3,
          projectAssets.customer_relationship_management.leads_management4,
        ],
        fit: "contain",
      },
      {
        feature: "Centralized Services Management",
        description:
          `
        
The Services Management interface provides a comprehensive hub for configuring service offerings and lead classifications. It allows administrators to manage a diverse range of construction and design services while monitoring their operational status and workflow efficiency.

- Service Performance Metrics
- Operational Status Tracking
- Workflow Classification
- Detailed Service Profiles
- Comprehensive Service Catalog
- Advanced Management Controls
- Interactive Configuration

          `,

        images: [
          projectAssets.customer_relationship_management.services_management1,
          projectAssets.customer_relationship_management.services_management2,
        ],
        fit: "contain",

      },

    ] satisfies ProjectSection[],
  },
  {
    id: "OxygenPOS",
    title: "Oxygen destribution management system",
    category: "Enterprise Solutions",
    image: projectAssets.OxygenPOS.image,
    cardImage: projectAssets.OxygenPOS.cardImage,
    galleryImage: projectAssets.OxygenPOS.galleryImage,
    description: "This website is a secure platform designed exclusively for doctors. After registering, doctors can log in to browse products uploaded by the administrator. They can request products directly, eliminating the need for intermediaries. Once approved by the admin, they can place orders normally. This simplifies the procurement process for doctors, making it more efficient.",
    tags: ["Next.js", "Node.js", "MySQL", "Tailwind CSS"],
    link: "https://example.com",
    sections: [
      {
        feature: "Oxygen POS Dashboard",
        description:
          `
         The OxygenPOS dashboard serves as a centralized command center, offering a high-level overview of your entire refilling operation. It combines real-time hardware monitoring with financial and inventory tracking to ensure seamless business management.

         - Real-Time Resource Monitoring
         - Dynamic Inventory Management
         - Financial & Activity Summary
         - Operational Quick Actions
         - Comprehensive Audit Logs
          
          `,
        images: [
          projectAssets.OxygenPOS.Oxygen_dash1,
          projectAssets.OxygenPOS.Oxygen_dash2,
          projectAssets.OxygenPOS.Oxygen_dash3,
        ],
        fit: "contain",
      },
      {
        feature: "Customer Management",
        description:
          `
          This interface provides a robust system to oversee customer interactions and track the entire lifecycle of your bottle inventory. It ensures that all sales, returns, and outstanding credits are managed with precision to maintain business efficiency.

          -Customer Credit & Loyalty Tracking
- Individual Bottle Lifecycle History
- Detailed Transaction & Sales Logs
- Quick Issuing & Return Workflows
          `,
        images: [
          projectAssets.OxygenPOS.Customers1,
          projectAssets.OxygenPOS.Customers2,
          projectAssets.OxygenPOS.Customers3,
          projectAssets.OxygenPOS.return_management1,
        ],
        fit: "contain",
      },
      {
        feature: "Advanced Tank & Refill Management",
        description:
          `
          The Tank Management module provides a comprehensive technical overview of your oxygen storage and refilling operations. It ensures maximum uptime by combining real-time hardware telemetry with structured supply chain tracking.

         - Precision Tank Telemetry
         - Integrated Bottle Filling
         - Supplier Delivery Tracking
         - Automated Refill History
         - Capacity Forecasting
          `,

        images: [
          projectAssets.OxygenPOS.task_mangement1,
          projectAssets.OxygenPOS.task_mangement2,
          projectAssets.OxygenPOS.task_mangement3,
        ],
        fit: "contain",
      },

      {
        feature: "Comprehensive Bottle Management",
        description:
          `
          The Bottle Management interface provides a high-resolution view of entire cylinder inventory. It is designed to track every unit from arrival to customer delivery, ensuring no asset is lost and every refill is accounted for.

          - Real-Time Inventory Status
Inventory Categorization by Size
- Granular Asset Tracking
- Detailed Fill History Logs
- Bulk Management Tools
          `,

        images: [
          projectAssets.OxygenPOS.bottle_management1,
          projectAssets.OxygenPOS.bottle_management2,
          projectAssets.OxygenPOS.bottle_management3,
        ],
        fit: "contain",
      },

      {
        feature: "Efficient Quick Sale Interface",
        description:
          `
         The Quick Sale module is designed for rapid transaction processing, allowing them to issue oxygen bottles and manage payments through a streamlined, single-screen workflow. It ensures high operational speed by minimizing the steps required to complete a sale.

        - Fast Bottle Selection
        - Serialized Issuing
        - Flexible Payment Options
        - Integrated Customer Management
        - Live Order Summary
          `,

        image: projectAssets.OxygenPOS.quick_sale,
        fit: "contain",
      },

    ] satisfies ProjectSection[],
  },
  {
    id: "primus_distributor",
    title: "Distribution Management System",
    category: "Point of Sale System",
    image: projectAssets.primus_distributor.image,
    cardImage: projectAssets.primus_distributor.cardImage,
    galleryImage: projectAssets.primus_distributor.galleryImage,
    description: "This website is a secure platform designed exclusively for doctors. After registering, doctors can log in to browse products uploaded by the administrator. They can request products directly, eliminating the need for intermediaries. Once approved by the admin, they can place orders normally. This simplifies the procurement process for doctors, making it more efficient.",
    tags: ["Next.js", "Node.js", "MySQL", "Tailwind CSS"],
    link: "https://example.com",
    sections: [
      {
        feature: "Comprehensive Distributor Analytics Dashboard",
        description:
          `
        The Primus-Distributor dashboard provides a high-level command center for real-time business insights. It transforms complex sales data into actionable metrics, allowing distributors to monitor financial health and inventory flow across multiple locations with ease.

        - Financial Performance Summary
        - Real-time Sales Trends
        - Inventory Valuation & Alerts
        - Product Performance Intelligence
          
          `,
        images: [
          projectAssets.primus_distributor.primus_distributor_dash1,
          projectAssets.primus_distributor.primus_distributor_dash2,
        ],
        fit: "contain",
      },

      {
        feature: "Streamlined Point of Sale Interface.",
        description:
          `
        The Grocery POS sales terminal is designed for high-speed transactions and flexibility, allowing operators to manage sales and product returns within a single, unified workflow. The clean layout ensures that essential billing information and payment controls are always accessible to the user.

- Unified Sale & Return Processing
- Flexible Payment & Discounting
- Intuitive Checkout Controls
- Smart Search & Customer Linking

          `,
        images: [
          projectAssets.primus_distributor.POS_Interface1,
          projectAssets.primus_distributor.POS_Interface2,
        ],
        fit: "contain",
      },

      {
        feature: "Advanced Inventory Inwarding (GRN)",
        description:
          `
        The Goods Received Notes (GRN) module provides a systematic way to document and verify all incoming shipments from suppliers. It bridges the gap between procurement and inventory, ensuring that every item added to the stock is tracked with precise cost, batch, and expiration details.

- GRN Creation
- Comprehensive Item Tracking
- Batch & Expiry Management
- Centralized GRN Ledger
- Instant Documentation & Export

          `,
        images: [
          projectAssets.primus_distributor.GRN1,
          projectAssets.primus_distributor.GRN2,
          projectAssets.primus_distributor.GRN3,
          projectAssets.primus_distributor.GRN4,
        ],
        fit: "contain",
      },

      {
        feature: "Product Management",
        description:
          `
        The Products List interface provides a comprehensive overview of the entire product catalog, serving as the central hub for inventory control. It offers powerful sorting, filtering, and modification tools, allowing businesses to manage thousands of SKUs efficiently from a single dashboard.

       - Comprehensive Inventory Overview
       - Complete Product Lifecycle Actions
       - Integrated Barcode Generation
       - QR Code Creation for Data Sharing
       - Advanced Filtering and Search

          `,
        images: [
          projectAssets.primus_distributor.product1,
          projectAssets.primus_distributor.product2,
          projectAssets.primus_distributor.product3,
        ],
        fit: "contain",
      },

      {
        feature: "Advanced Inventory Ledger & Movement Tracking.",
        description:
          `
        The Inventory Ledger provides a comprehensive historical record of every stock movement within the system. It serves as a transparent audit trail, allowing businesses to trace exactly how and when stock levels changed due to sales, returns, or new arrivals.

- Total Transaction Summary
- Granular Movement Logs
- Precision Quantity Tracking
- Cost and Pricing Audit
- Multi-Dimensional Filtering
          `,
        image:
          projectAssets.primus_distributor.inventory
        ,
        fit: "contain",
      },

      {
        feature: "Real-time Finance Statistics",
        description:
          `
       The Finance Statistics dashboard offers a specialized view of the business's monetary health, focusing on liquidity and operational cash flow. It provides a transparent breakdown of all financial movements, allowing administrators to monitor counter-specific performance and overall profitability in real-time.

- Counter-Specific Financial Tracking
- Comprehensive Cash-in-Hand Monitoring
- Detailed Payment Summaries
- Income by Payment Method
- Integrated Transaction Ledger
- Flexible Reporting & Data Export
          `,
        images: [
          projectAssets.primus_distributor.finance1,
          projectAssets.primus_distributor.finance2
        ],
        fit: "contain",
      },

      {
        feature: "Comprehensive Expense Tracking and Management",
        description:
          `
       The Expenses interface provides a dedicated dashboard to track and manage all business-related expenditures. It offers a clear visual summary of operational costs, helping businesses maintain financial discipline by monitoring paid and pending obligations in real-time.

       - Financial Overview Summaries
       - Proactive Budget Alerts
       - Detailed Expense Records
       - Categorized Spending Analysis
       - Efficient Search and Filtering
       - Data Export and Management
          `,
        images: [
          projectAssets.primus_distributor.expenses
        ],
        fit: "contain",
      },


    ] satisfies ProjectSection[],
  },
  {
    id: "fireink",
    title: "Portfolio Website for Printing Agency",
    category: "Portfolio",
    image: projectAssets.fireink.image,
    cardImage: projectAssets.fireink.cardImage,
    galleryImage: projectAssets.fireink.galleryImage,
    description: "This website is a secure platform designed exclusively for doctors. After registering, doctors can log in to browse products uploaded by the administrator. They can request products directly, eliminating the need for intermediaries. Once approved by the admin, they can place orders normally. This simplifies the procurement process for doctors, making it more efficient.",
    tags: ["Next.js", "Node.js", "MySQL", "Tailwind CSS"],
    link: "https://example.com",
    sections: [
      {
        feature: "Home Page",
        description:
          `
        This platform serves as a comprehensive digital storefront for a premium printing and branding agency. It is designed to showcase a diverse range of services while emphasizing high-quality production and strong corporate partnerships to build client trust.
          
        - Diverse Service Portfolio
- Strategic Partner Showcase
- High-Fidelity Production Visuals
- Customer-Centric Value Proposition
- Accessible Contact Hub
          `,
        images: [
          projectAssets.fireink.home1,
          projectAssets.fireink.home2,
          projectAssets.fireink.home3,
          projectAssets.fireink.home4,
        ],
        fit: "contain",
      },
      {
        feature: "Featured Digital Experiences & Services",
        description:
          `
        The Services interface provides an expansive look at the diverse branding and production capabilities offered. By utilizing a categorized grid system, it allows potential clients to easily navigate through various physical and digital branding assets to find solutions tailored to their specific marketing needs.

- Dynamic Service Filtering
- Large-Scale Signage Solutions
- Event and Retail Branding
- Visual Project Portfolio
- Seamless Communication
          `,
        images: [
          projectAssets.fireink.services1,
          projectAssets.fireink.services2,
        ],
        fit: "contain",
      },

      {
        feature: "Showcase of Creative Excellence",
        description:
          `
        The "Our Works" interface serves as a comprehensive portfolio, meticulously curated to highlight the agency's versatility in both corporate event branding and artistic interior decor. It functions as a visual testimonial of technical precision and creative design capabilities.

       - Multi-Category Portfolio Layout
- Precision Signage Fabrication
- Mobile Advertising Solutions
- High-Volume Promotional Items
- Portable Display Systems
- Dynamic Visual Gallery
          `,
        images: [
          projectAssets.fireink.work1,
          projectAssets.fireink.work2,
        ],
        fit: "contain",
      },







    ] satisfies ProjectSection[],
  },
];

export type { Project, ProjectSection };