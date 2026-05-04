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
    leads_management1: "/images/projects/MN_CRM/CRM1.png",
    leads_management2: "/images/projects/MN_CRM/CRM2.png",
    leads_management3: "/images/projects/MN_CRM/CRM03.jpeg",
    leads_management4: "/images/projects/MN_CRM/CRM4.png",
  },
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
        feature: "Admin Dashboard",
        description:
          `
          A clean, professional dashboard for administrators to monitor key business metrics at a glance. It uses a simple stats row and sidebar layout, making it easy to track revenue, registrations, and recent system activity all in one place.
- Clean Stats Cards
- Revenue & Customer Summary
- Registration Status Tracker
- Recent Activity Log (Logins, Updates, etc.)
          `,
        image: projectAssets.corporate_ecosystem.admin_dashboard,
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
        feature: "Admin Tax Registration",
        description:
          `
           A clean, well-organized table that helps admins manage all tax registration requests. It shows customer details, tax type, TIN number, and status at a glance—making it easy to track who's registered and who's still pending.
- Clean Table Layout with Icons
- Customer & Tax Type Overview
- Color-Coded Status (Completed, Pending, etc.)
- Smart Search (Name, Email, NIC, TIN) & Filters
          `,

        image: projectAssets.corporate_ecosystem.tax_registration,
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
      {
        feature: "Customer Tax Registration",
        description:
          `
       A simple card layout that helps customers track their tax registration progress step by step. It shows exactly which stage they're on—from submission to completion—so there's no confusion about what's left to do.

- Easy Step-by-Step Progress Tracker
- 5 Clear Stages (Submitted → Review → Payment → TIN → Completed)
- Completion Percentage & Status Badge
- View All Data" Button for Full Details
          `,

        image: projectAssets.corporate_ecosystem.tax_customer_registration,
      },
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
        feature: "Leave Management",
        description:
          "",
        image: projectAssets.customer_relationship_management.leads_management4,
      },
      {
        feature: "Offline Sync Controls",
        description:
          "Smart sync tools prioritize critical travel data and synchronize seamlessly when connectivity returns.",
        image: "/images/services/devops.png",
      },
    ] satisfies ProjectSection[],
  },
];

export type { Project, ProjectSection };