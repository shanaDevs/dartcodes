import { services } from "./services";

const projectAssets = {
  salonManagement1: {
    image: "/images/projects/salon/admin_dashboard.png",
    cardImage: "/images/projects/salon/salon_management_new.png",
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
    image: "/images/projects/corporate_ecosystem/corporate_ecosystem_new.png",
    cardImage: "/images/projects/corporate_ecosystem/corporate_ecosystem_new.png",
    galleryImage: "/images/projects/corporate_ecosystem/corporate_ecosystem_new.png",
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
    image: "/images/projects/tax_management/tax_management_new.png",
    cardImage: "/images/projects/tax_management/tax_management_new.png",
    galleryImage: "/images/projects/tax_management/tax_management_new.png",
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
    image: "/images/projects/wettapharma/wettapharma_new.png",
    cardImage: "/images/projects/wettapharma/wettapharma_new.png",
    galleryImage: "/images/projects/wettapharma/wettapharma_new.png",
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
    image: "/images/projects/MN_Homes/mn_group_new.png",
    cardImage: "/images/projects/MN_Homes/mn_group_new.png",
    galleryImage: "/images/projects/MN_Homes/mn_group_new.png",
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
    image: "/images/projects/MN_payroll_management/payroll_management_new.png",
    galleryImage: "/images/projects/MN_payroll_management/payroll_management_new.png",
    cardImage: "/images/projects/MN_payroll_management/payroll_management_new.png",
    employee_registration_dark: "/images/projects/MN_payroll_management/employee_registration_dark.png",
    paysheet1: "/images/projects/MN_payroll_management/paysheet1.png",
    paysheet2: "/images/projects/MN_payroll_management/paysheet2.png",
    leave1: "/images/projects/MN_payroll_management/leaves01.png",
    leave2: "/images/projects/MN_payroll_management/leaves02.png",
  },
  customer_relationship_management: {
    image: "/images/projects/MN_CRM/crm_new.png",
    galleryImage: "/images/projects/MN_CRM/crm_new.png",
    cardImage: "/images/projects/MN_CRM/crm_new.png",
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
    image: "/images/projects/OxygenPOS/OxygenPOS_new.png",
    galleryImage: "/images/projects/OxygenPOS/OxygenPOS_new.png",
    cardImage: "/images/projects/OxygenPOS/OxygenPOS_new.png",
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
    image: "/images/projects/primus_distributor/primus_distributor_new.png",
    galleryImage: "/images/projects/primus_distributor/primus_distributor_new.png",
    cardImage: "/images/projects/primus_distributor/primus_distributor_new.png",
    primus_distributor_dash1: "/images/projects/primus_distributor/primus_distributor_dash1.png",
    primus_distributor_dash2: "/images/projects/primus_distributor/primus_distributor_dash2.png",
    primus_distributor_dash3: "/images/projects/primus_distributor/primus_distributor_dash3.png",
    primus_distributor_dash4: "/images/projects/primus_distributor/primus_distributor_dash4.png",
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
    image: "/images/projects/fireink/fireInk_new1.png",
    galleryImage: "/images/projects/fireink/fireInk_new1.png",
    cardImage: "/images/projects/fireink/fireInk_new1.png",
    home1: "/images/projects/fireink/home1.png",
    home2: "/images/projects/fireink/home2.png",
    home3: "/images/projects/fireink/home3.png",
    home4: "/images/projects/fireink/home4.png",
    services1: "/images/projects/fireink/services1.png",
    services2: "/images/projects/fireink/services2.png",
    work1: "/images/projects/fireink/our_work1.png",
    work2: "/images/projects/fireink/our_work2.png",
  },

  employee_app: {
    image: "/images/projects/employee_app/OperationManagementSystem_new.png",
    galleryImage: "/images/projects/employee_app/OperationManagementSystem_new.png",
    cardImage: "/images/projects/employee_app/OperationManagementSystem_new.png",
    dashboard1: "/images/projects/employee_app/dashboard1.jpeg",
    dashboard2: "/images/projects/employee_app/dashboard2.jpeg",
    dashboard3: "/images/projects/employee_app/dashboard3.jpeg",
    attendance: "/images/projects/employee_app/attendance.jpeg",
    daliyTask: "/images/projects/employee_app/daliyTask.jpeg",
    labor_attendance: "/images/projects/employee_app/labor_attendance.jpeg",
    subcontractors: "/images/projects/employee_app/Subcontractors.jpeg",
    perchaseRequest: "/images/projects/employee_app/purchase_request.jpeg",
  },

  expense_management: {
    image: "/images/projects/expense_management/expense_management_new.png",
    galleryImage: "/images/projects/expense_management/expense_management_new.png",
    cardImage: "/images/projects/expense_management/expense_management_new.png",
    dashboard1: "/images/projects/expense_management/dashboard1.png",
    dashboard2: "/images/projects/expense_management/dashboard2.png",
    projects1: "/images/projects/expense_management/projects1.png",
    projects2: "/images/projects/expense_management/projects2.png",
    AccountantDashboard1: "/images/projects/expense_management/AccountantDashboard1.png",
    AccountantDashboard2: "/images/projects/expense_management/AccountantDashboard2.png",
  },

  procument_management: {
    image: "/images/projects/procument_management/procument_management_new.png",
    galleryImage: "/images/projects/procument_management/procument_management_new.png",
    cardImage: "/images/projects/procument_management/procument_management_new.png",
    dashboard1: "/images/projects/procument_management/dashboard1.png",
    dashboard2: "/images/projects/procument_management/dashboard2.png",
    dashboard3: "/images/projects/procument_management/dashboard3.png",
    procument_request1: "/images/projects/procument_management/procument_request1.png",
    procument_request2: "/images/projects/procument_management/procument_request2.png",
    CreateRequest1: "/images/projects/procument_management/CreateRequest1.png",
    CreateRequest2: "/images/projects/procument_management/CreateRequest2.png",
    CreateRequest3: "/images/projects/procument_management/CreateRequest3.png",
    PurchaseOrders1: "/images/projects/procument_management/PurchaseOrders1.png",
    PurchaseOrders2: "/images/projects/procument_management/PurchaseOrders2.png",
    PurchaseOrders3: "/images/projects/procument_management/PurchaseOrders3.png",
    SiteTransactions: "/images/projects/procument_management/SiteTransactions.png",
    GoodsReceivedNotes1: "/images/projects/procument_management/GoodsReceivedNotes1.png",
    GoodsReceivedNotes2: "/images/projects/procument_management/GoodsReceivedNotes2.png",
    history1: "/images/projects/procument_management/history1.png",
    history2: "/images/projects/procument_management/history2.png",
    products: "/images/projects/procument_management/products.png",
    InventoryLedger: "/images/projects/procument_management/InventoryLedger.png",
    PurchaseOrderPreview: "/images/projects/procument_management/PurchaseOrderPreview.png",
    transactions: "/images/projects/procument_management/transactions.png",
    financeStatistics: "/images/projects/procument_management/financeStatistics.png",
    RentPool1: "/images/projects/procument_management/RentPool1.png",
    RentPool2: "/images/projects/procument_management/RentPool2.png",
    RentPool3: "/images/projects/procument_management/RentPool3.png",
    RentPool4: "/images/projects/procument_management/RentPool4.png",
    PendingStockReleases: "/images/projects/procument_management/PendingStockReleases.png",
    StockReleases: "/images/projects/procument_management/StockReleases.png",
    petty_cash1: "/images/projects/procument_management/petty_cash1.png",
    petty_cash2: "/images/projects/procument_management/petty_cash2.png",
    petty_cash3: "/images/projects/procument_management/petty_cash3.png",
  },

  distribution_management: {
    image: "/images/projects/distribution_management/distribution_management.png",
    galleryImage: "/images/projects/distribution_management/distribution_management.png",
    cardImage: "/images/projects/distribution_management/distribution_management.png",
    dashboard: "/images/projects/distribution_management/dashboard.png",
    RefRegistration1: "/images/projects/distribution_management/RefRegistration1.png",
    RefRegistration2: "/images/projects/distribution_management/RefRegistration2.png",
    SalesInvoices1: "/images/projects/distribution_management/SalesInvoices1.png",
    SalesInvoices2: "/images/projects/distribution_management/SalesInvoices2.png",
    PurchaseOrders1: "/images/projects/distribution_management/PurchaseOrders1.png",
    PurchaseOrders2: "/images/projects/distribution_management/PurchaseOrders2.png",
    PurchaseOrders3: "/images/projects/distribution_management/PurchaseOrders3.png",
    refAppHome1: "/images/projects/distribution_management/refAppHome1.jpeg",
    refAppCustomer1: "/images/projects/distribution_management/refAppCustomer1.jpeg",
    refOrder1: "/images/projects/distribution_management/refOrder1.jpeg",
    refOrder2: "/images/projects/distribution_management/refOrder2.jpeg",
  },

  garage_management: {
    image: "/images/projects/garage_management/garage_management.png",
    galleryImage: "/images/projects/garage_management/garage_management.png",
    cardImage: "/images/projects/garage_management/garage_management.png",
    dashboard1: "/images/projects/garage_management/dashboard1.png",
    dashboard2: "/images/projects/garage_management/dashboard2.png",
    dashboard3: "/images/projects/garage_management/dashboard3.png",
    jobs1: "/images/projects/garage_management/jobs1.png",
    jobs2: "/images/projects/garage_management/jobs2.png",
    jobs3: "/images/projects/garage_management/jobs3.png",
    customer_payment1: "/images/projects/garage_management/customer_payment1.png",
    customer_payment2: "/images/projects/garage_management/customer_payment2.png",
    goods_received1: "/images/projects/garage_management/goods_received1.png",
    goods_received2: "/images/projects/garage_management/goods_received2.png",
    goods_received3: "/images/projects/garage_management/goods_received3.png",
    retail_invoices1: "/images/projects/garage_management/retail_invoices01.png",
    retail_invoices2: "/images/projects/garage_management/retail_invoices02.png",
    retail_invoices3: "/images/projects/garage_management/retail_invoices03.png",
    retail_invoices4: "/images/projects/garage_management/retail_invoices04.png",
    final_invoices1: "/images/projects/garage_management/final_invoices1.png",
    final_invoices2: "/images/projects/garage_management/final_invoices2.png",
    petty_cash1: "/images/projects/garage_management/petty_cash1.png",
    petty_cash2: "/images/projects/garage_management/petty_cash2.png",
    petty_cash3: "/images/projects/garage_management/petty_cash3.png",
    sales_analysis_daly1: "/images/projects/garage_management/sales_analysis_daily1.png",
    sales_analysis_daly2: "/images/projects/garage_management/sales_analysis_daily2.png",
    sales_analysis_daly3: "/images/projects/garage_management/sales_analysis_daily3.png",
    sales_analysis_monthly1: "/images/projects/garage_management/sales_analysis_monthly1.png",
    sales_analysis_monthly2: "/images/projects/garage_management/sales_analysis_monthly2.png",
    stock1: "/images/projects/garage_management/stock1.png",
    stock2: "/images/projects/garage_management/stock2.png",
    stock3: "/images/projects/garage_management/stock3.png",
    collection_summary: "/images/projects/garage_management/collection_summary.png",
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
    description: "Our Corporate Ecosystem manages the complete business journey — from registration and admin review to integrated billing, quotations, and post-registration service management. With dedicated dashboards for both admin and customers, it creates a seamless, transparent digital environment where businesses can register, operate, and grow efficiently.",
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
    description: "Our Tax Management System simplifies tax filing for individuals, corporations, and partnerships. Customers can register and file returns through their own dashboard, while admins review registrations, manage tax returns, and track submissions by year — all in one organized platform.",
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

        images: [
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
    title: "Workflow Management System",
    category: "Enterprise Solutions",
    image: projectAssets.mn_homes.image,
    cardImage: projectAssets.mn_homes.cardImage,
    galleryImage: projectAssets.mn_homes.galleryImage,
    description: "This application operates on a custom-built Workflow Management System that keeps every project on track. From active project dashboards and task progress tracking to petty cash, BOQ, quotations, and material planning, everything is managed in one place. This system helps us deliver work on time, reduce delays, and maintain full transparency across all stages of construction.",
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
A clean construction project dashboard combining project overview, stage completion, task breakdown, quantities, resources, cash requests, and timeline. It helps admins track project progress, stock items, material requests, and stage-wise task status all in one place.
- Stage Completion Chart (Foundation, Excavations, etc.)
- Task Breakdown (Overdue vs Planned)
-  Petty Cash, Stock Items & Estimated Quantity
- Balance & Used Quantity with Percentage
- Extra Material Requests (Pending / Approved)
- Project Duration (Total Days, Days Left, Complete Percentage)
         `,
        images: [
          projectAssets.mn_homes.mn_group_project_registry,
          projectAssets.mn_homes.projects1,
          projectAssets.mn_homes.projects2,
          projectAssets.mn_homes.project_dark1,
          projectAssets.mn_homes.project_dark2,
        ],
        fit: "contain",
      },


      {
        feature: "Stage & Task Progress",
        description:
          `
A clean task tracking interface showing stage-wise progress with individual task percentages, status labels, and duration days. It includes a timeline zoom option, progress summary stats, and a calendar view for date tracking.
- Stage Progress Summary
- Total Tasks, Done & Due Counters
- Stage-wise Task List (Foundation, Excavations, etc.)
- Individual Task Progress Percentages
- Task Duration in Days
- Calendar View with Dates


         `,
        images: [
          projectAssets.mn_homes.projects3,
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
    description: "Our Payroll Management System simplifies employee administration by handling everything from registration and salary calculations to paysheet generation and leave management. It ensures accurate, timely payments and transparent record-keeping for our entire construction team.",
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
    title: "Customer relationship management",
    category: "CRM",
    image: projectAssets.customer_relationship_management.image,
    cardImage: projectAssets.customer_relationship_management.cardImage,
    galleryImage: projectAssets.customer_relationship_management.galleryImage,
    description: "Our CRM system helps us manage every customer interaction smoothly — from lead registration and service management to dynamic task tracking and workflow handling. With real-time lead analytics and a centralized dashboard, we respond faster, stay organized, and keep every client experience seamless from start to finish.",
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
    title: "Oxygen distribution management system",
    category: "Enterprise Solutions",
    image: projectAssets.OxygenPOS.image,
    cardImage: projectAssets.OxygenPOS.cardImage,
    galleryImage: projectAssets.OxygenPOS.galleryImage,
    description: "Our Oxygen Distribution Management System streamlines the entire gas delivery process — from customer management and quick sale interfaces to advanced tank, refill, and bottle management. The POS dashboard gives us real-time control over inventory, customer records, and daily sales, ensuring safe, efficient, and hassle-free oxygen distribution.",
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
    title: "Point of Sale System",
    category: "POS System",
    image: projectAssets.primus_distributor.image,
    cardImage: projectAssets.primus_distributor.cardImage,
    galleryImage: projectAssets.primus_distributor.galleryImage,
    description: "Our Point of Sale System gives you full control over your retail operations — from a powerful distributor analytics dashboard and streamlined POS interface to advanced inventory management with GRN, product tracking, and real-time movement updates. It also tracks financial statistics and expenses in real time, helping you run your business smarter and more profitably.",
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
          projectAssets.primus_distributor.primus_distributor_dash3,
          projectAssets.primus_distributor.primus_distributor_dash4,
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
    description: "Our Printing Agency Portfolio Website showcases creative excellence through a clean home page and featured digital experiences. It highlights the best of our printing and design work, helping potential clients see what we can do — quickly, clearly, and impressively.",
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

  {
    id: "employee_app",
    title: "Operation Management System",
    category: "Enterprise Solutions",
    image: projectAssets.employee_app.image,
    cardImage: projectAssets.employee_app.cardImage,
    galleryImage: projectAssets.employee_app.galleryImage,
    description: "Our Operation Management System keeps daily site activities organized — from attendance tracking and labor management to daily task updates and subcontractor coordination. With a clear dashboard overview and purchase request handling, it ensures every operational detail on the ground is monitored and managed efficiently.",
    tags: ["Next.js", "Node.js", "MySQL", "Tailwind CSS"],
    link: "https://example.com",
    sections: [
      {
        feature: "Dashboard & Attendance Overview",
        description:
          `
        This is an employee self-service attendance dashboard for daily work tracking. It allows clock in/out, viewing pending requests, and checking weekly attendance scores. Leave balances, attendance trends, and upcoming actions (e.g., missing check-out) are shown.Recent request histories with approval statuses are also displayed at a glance.

- Dashboard Summary
- Attendance Actions
- Attendance Trends
- Request Status Mix
- Employee Snapshot
- Upcoming Actions & Recent Requests
          `,
        images: [
          projectAssets.employee_app.dashboard1,
          projectAssets.employee_app.dashboard2,
          projectAssets.employee_app.dashboard3,
        ],
        fit: "contain",
      },

      {
        feature: "Attendance",
        description:
          `
        This is a Manual Attendance & Request Management interface. Unlike a simple punch clock, this screen allows employees to submit, track, and correct their attendance records. It provides a searchable, filterable history log (table or calendar view) where users can monitor the approval status of their clock-ins and clock-outs.

        - Manual Attendance Submission
- Advanced Request Search & Filtering
- Flexible Data Visualization
- Detailed Request History Table
          `,
        images: [
          projectAssets.employee_app.attendance,
        ],
        fit: "contain",
      },

      {
        feature: "Daily Site Task Update",
        description:
          `
        This is a Daily Site Task Update interface designed for construction or project field teams. Instead of tracking attendance or office requests, this screen helps users monitor and report progress on active site stages (e.g., Preliminary Work). It shows how many tasks are tracked, how many stages are active, and allows workers to update task quantities, record material usage, and automatically update completion progress.
- Site & Project Header
- Summary Metrics (Top Cards)
- Stage & Task Selection
- Task Breakdown per Stage
- Progress Update Mechanism
          `,
        images: [
          projectAssets.employee_app.daliyTask,
        ],
        fit: "contain",
      },

      {
        feature: "Labor & Site Attendance Management",
        description:
          `
        This is a Labor & Site Attendance Management interface for field supervisors or site managers. Instead of tracking employee self-attendance (like earlier dashboards), this screen helps managers track daily labor availability, mark check-in/out, monitor overtime, and view advance payment history for workers across different sites.
- Labor Attendance Dashboard
- Site Attendance Table
- Advance Payment History
          `,
        images: [
          projectAssets.employee_app.labor_attendance,
        ],
        fit: "contain",
      },

      {
        feature: "Subcontractors",
        description:
          `
        This is a Subcontractor Management interface for site managers or project coordinators. Instead of tracking individual laborers or employee attendance, this screen helps managers view available subcontractors, assign them to sites, track advance payments, and monitor assignment history — all in one place.
-  Available Pool (Subcontractor Directory)
- Assigned To My Sites
- Advance Payments (Subcontractor)
- Assignment History

          `,
        images: [
          projectAssets.employee_app.subcontractors,
        ],
        fit: "contain",
      },
      {
        feature: "Purchase Request",
        description:
          `
        This is a Purchase Request interface for site managers or project staff. Instead of tracking attendance or subcontractors, this screen allows users to create and submit purchase requests for materials or services needed at a specific site. It includes delivery details, item selection, priority settings, and a history log of recent requests with their approval statuses.

        - Delivery Details Section
        - Items Needed Section
        - Submit Action
        - Recent Requests History
          `,
        images: [
          projectAssets.employee_app.perchaseRequest,
        ],
        fit: "contain",
      }





    ] satisfies ProjectSection[],
  },

  {
    id: "expense_management",
    title: "Financial Management System",
    category: "Enterprise Solutions",
    image: projectAssets.expense_management.image,
    cardImage: projectAssets.expense_management.cardImage,
    galleryImage: projectAssets.expense_management.galleryImage,
    description: "Our Financial Management System keeps every project cost under control — from an admin dashboard and project-wise expense tracking to a dedicated accountant dashboard. It gives you a clear view of where money is going, helps prevent budget overruns, and makes financial oversight simple and transparent.",
    tags: ["Next.js", "Node.js", "MySQL", "Tailwind CSS"],
    link: "https://example.com",
    sections: [
      {
        feature: "Admin Dashboard",
        description:
          `
  A real-time expense tracking and approval dashboard for project spending. It provides key metrics on total expenditure, pending liability, urgent requests, and request volume — alongside spending trends, expense lifecycle status, top projects by spending, and priority breakdown.
  - Total Expenditure
  - Pending Liability
  - Urgent Requests Count
  - Total Volume
  - Spending Trends Chart
  - Top Projects by Spending

          `,
        images: [
          projectAssets.expense_management.dashboard1,
          projectAssets.expense_management.dashboard2,
        ],
        fit: "contain",
      },

      {
        feature: "Projects Management",
        description:
          `
 A clean project tracking interface for managing and monitoring all active construction projects. It includes a searchable project table with key details like location, type, status, managed by, timeline, and progress. The detailed view shows project information, overall progress, timeline, and site location for each selected project.
- Search by Project Name
- Project Table (Project, Location, Type, Status, Managed By, Timeline, Progress, Action)
- Progress Percentage per Project
- Timeline (Start Date & End Date)
- Site Location
-Overall Progress Percentage

          `,
        images: [
          projectAssets.expense_management.projects1,
          projectAssets.expense_management.projects2,
        ],
        fit: "contain",
      },


      {
        feature: "Expenses",
        description:
          `
A clean expense review and approval interface for construction projects. It displays total expenses, filtered results, and offers quick status filters (All, Pending, Approved, Paid, Completed, Rejected). Each request shows project details, line items with quantities and prices, approval totals, and rejected counts.

- Total Expenses Overview
- Status Filters
- Itemized Description
- Approved Total & Rejected Count
- Filter Options, Save & Cancel Buttons
- Declined Items Indicator

          `,
        images: [
          projectAssets.expense_management.projects1,
          projectAssets.expense_management.projects2,
        ],
        fit: "contain",
      },

      {
        feature: "Accountant Dashboard",
        description:
          `
A financial dashboard for monitoring cash flow, payment status, and expense distribution across all projects. It includes advanced filters for project, status, priority, date range, supervisor, and administrator — along with key metrics and spending trends.

- Advanced Filters
- Total Expenditure
- Pending Liability
- Urgent Requests (High Priority Items)
- Total Volume (Expense Requests Processed)
- Spending Trends Chart with 30 Days View

          `,
        images: [
          projectAssets.expense_management.AccountantDashboard1,
          projectAssets.expense_management.AccountantDashboard2,
        ],
        fit: "contain",
      },


    ] satisfies ProjectSection[],
  },

  {
    id: "procument_management",
    title: "Procument Management System",
    category: "Enterprise Solutions",
    image: projectAssets.procument_management.image,
    cardImage: projectAssets.procument_management.cardImage,
    galleryImage: projectAssets.procument_management.galleryImage,
    description: "Our Procurement Management System handles the entire purchasing lifecycle — from procurement requests and purchase orders to goods received notes and site transactions. It also tracks inventory ledgers, product history, sales, finance statistics, and even rent pools. With a central dashboard overview, you get complete visibility into every order, stock movement, and cost from start to finish.",
    tags: ["Next.js", "Node.js", "MySQL", "Tailwind CSS"],
    link: "https://example.com",
    sections: [
      {
        feature: "Dashboard Overview",
        description:
          `
        A real-time business insights dashboard showing key financial metrics including total revenue, transactions, average, profit, stock value, net income, total cost, profit margin, and inventory count. It also includes purchase request alerts, unfulfilled site tracking, sales trends, latest invoices, top and lowest selling products, payment status, and accounts receivable.

        - Total Revenue, Transactions, Average
        - Purchase Request Due Alerts
- Sales Trend Chart (Revenue & Profit Analysis)
- Top Selling Products (Product, Quantity, Revenue)
- Lowest Selling Products (Product, Quantity, Revenue)
- Payment Status Breakdown (Paid vs Pending)
- Accounts Receivable 


          `,
        images: [
          projectAssets.procument_management.dashboard1,
          projectAssets.procument_management.dashboard2,
          projectAssets.procument_management.dashboard3,
        ],
        fit: "contain",
      },

      {
        feature: "Pending Stock Releases",
        description:
          `
  A clean interface for managing draft invoices that are awaiting storekeeper physical handover.
- Search Functionality
- Pending Invoices Table
- Progress Tracking
- Refresh Button
- Release Items Button

          `,
        images: [
          projectAssets.procument_management.PendingStockReleases,
        ],
        fit: "contain",
      },

      {
        feature: "Petty Cash Management",
        description:
          `
 This is a Petty Cash Management interface for administrators. Instead of tracking attendance or subcontractors, this screen allows users to submit, track, and reimburse small expense requests. It includes a request form, a list of existing requests with statuses, and a separate reimbursement summary section.
      - Petty Cash Request List (Records Tab)
      -  Reimbursements Tab
      -  New Petty Cash Request Form

          `,
        images: [
          projectAssets.procument_management.petty_cash1,
          projectAssets.procument_management.petty_cash2,
          projectAssets.procument_management.petty_cash3,
        ],
        fit: "contain",
      },


      {
        feature: "Stock Releases",
        description:
          `
  A clean interface for viewing all invoices with storekeeper releases, grouped by invoice.

- Search Functionality
- Grouped Invoice View
- Invoice & PR Reference
- Site Location
- Progress Percentage
- Quantity Tracking
- Release Count
- View Invoice Action

          `,
        images: [
          projectAssets.procument_management.StockReleases,
        ],
        fit: "contain",
      },

      {
        feature: "Procurement Requests",
        description:
          `
   A clean purchase request management interface for submitting requests and merging them into supplier PO drafts. It includes a sortable requests list with status filters, company filters, and search by PR number. The detailed view shows request summary, itemized product list with stock availability, and options to create a purchase order.

        - Requests List 
- Status & Company Filters
- Request Details View (Company, Site, Requested By, Created Date)
- Items Table
- Status Badge (APPROVED)
- Action Options (Quotation, Release from Stock)
- Create Purchase Order Button


          `,
        images: [
          projectAssets.procument_management.procument_request1,
          projectAssets.procument_management.procument_request2,
        ],
        fit: "contain",
      },

      {
        feature: "Create Purchase Requests",
        description:
          `
   A clean interface for submitting new purchase requests. It allows users to add main items, consumable items, or rent items from product lists, then fill in submission details like company, site name, material plan ID, stage ID, stage item ID, and stage name before submitting.

- Add Main Item, Add Consumable & Add Rent Item Options
- Product Selection from Predefined Lists
- Submission Details (Company, Site ID, Site Name, Material Plan ID, Stage ID, Stage Item ID, Stage Name)
- Optional Fields for Flexibility
- Example Placeholders (e.g., North Site, Foundation)
- Notes Section with Additional Product List


          `,
        images: [
          projectAssets.procument_management.CreateRequest1,
          projectAssets.procument_management.CreateRequest2,
          projectAssets.procument_management.CreateRequest3,
        ],
        fit: "contain",
      },

      {
        feature: "Purchase Orders",
        description:
          `
   A clean purchase order management interface for viewing, searching, and creating POs. It includes a sortable PO list with supplier, site, date, status, and actions. The create PO form allows users to select company and supplier, add yard or direct order items, set delivery date, add notes, and provide a shipping address.

- Search by PO Number, Supplier or Notes
- PO Table (PO Number, Supplier, Site, PO Date, Expected Delivery, Status, Created By, Actions)
- Create Purchase Order Form



          `,
        images: [
          projectAssets.procument_management.PurchaseOrders1,
          projectAssets.procument_management.PurchaseOrders2,
          projectAssets.procument_management.PurchaseOrders3,
        ],
        fit: "contain",
      },

      {
        feature: "Purchase Order Preview",
        description:
          `
   A clean PO preview interface for reviewing and downloading purchase orders as PDF. It includes paper size selection, company details, supplier information, shipping address, PO number, date, expected delivery, status, product table with quantities, and total quantity summary.

- Paper Size Selection (A4 Default)
- Company Details (Name, Address, Phone, Email)
- Supplier Information (Name, Phone)
- Shipping Address (Ship To)
- PO Number, Date, Expected Delivery & Status (DRAFT)
- Product List Table (Product Name, Quantity)
- Total Quantity Summary
- Download Purchase Order PDF Option

          `,
        images: [
          projectAssets.procument_management.PurchaseOrderPreview
        ],
        fit: "contain",
      },

      {
        feature: "Site Transactions",
        description:
          `
   A unified view of purchase requests, purchase orders, GRNs, invoices, and stock-issue activity per site. It includes filters for site, company, supplier, and date range — with a product rollup table showing requested, ordered, received, released, invoiced, and returned quantities. Summary cards display total POs, PRs, GRN invoiced value, and sales invoiced value, followed by a detailed transaction list.
- Filters (Site, Company, Supplier, Date Range)
- Product Rollup Table (Product Name, Req, Ord, Recv, Rel, Inv, Ret)
- Summary Cards (Total Purchase Orders, Purchase Requests, GRN Invoiced, Invoiced Sales)
- Transactions List (PR #, Site, Company, Status)
- Status Badge (Approved)

          `,
        images: [
          projectAssets.procument_management.SiteTransactions,
        ],
        fit: "contain",
      },


      {
        feature: "Goods Received Notes",
        description:
          `
   A clean GRN management interface for tracking all incoming goods and shipments. It includes a searchable GRN list with supplier, invoice number, total quantity, total amount, site, company, status, and date. The detailed view shows GRN summary, total units received, total value, unit cost, selling price, MRP, location, and action buttons for editing, approving, or rejecting.
- Search GRNs & Filter by Supplier, Branch, Site
- GRN Table 
- Pagination (Previous, Next)
- GRN Details View (GRN Number, Supplier, Received By, Created At)
- Total Units Received, Total Value, Unit Cost, Selling Price, MRP
- Location (Main Warehouse)
- Action Buttons (Edit, Approve, Reject)


          `,
        images: [
          projectAssets.procument_management.GoodsReceivedNotes1,
          projectAssets.procument_management.GoodsReceivedNotes2,
        ],
        fit: "contain",
      },

      {
        feature: "Sales History",
        description:
          `
   A clean sales tracking interface for viewing and analyzing all sales transactions. It includes key metrics like total sales, total revenue, gross profit, margin, and average sale per transaction. The sales trend chart shows revenue and profit over time, while the payment status distribution displays paid vs pending percentages. A filterable and searchable sales records table provides detailed transaction information.
 - Total Sales Count & Total Revenue
- Gross Profit & Profit Margin
- Average Sale Per Transaction
- Sales Trend Chart (Last 7 Days)
- Payment Status Distribution (Paid vs Pending Pie Chart)
- Search & Filter Options (Status, Limit, Date Range)
- Sales Records Table

          `,
        images: [
          projectAssets.procument_management.GoodsReceivedNotes1,
          projectAssets.procument_management.GoodsReceivedNotes2,
        ],
        fit: "contain",
      },


      {
        feature: "Products",
        description:
          `
   A clean product inventory management interface for viewing and managing all products. It includes key metrics like total products, total stock, low stock items, and expiring soon. The product list is searchable by name, code, brand, or category — with columns for barcode, name, brand, category, cost price, stock, status, and actions.

- Total Products, Total Stock, Low Stock Items & Expiring Soon Counts
- Search by Name, Code, Brand or Category
- Product List Table (Bar Code, Name, Brand, Category, Cost Price, Stock, Status, Actions)
- Status Badge (Normal)
- Action Buttons (Edit, Delete, Add)

          `,
        images: [
          projectAssets.procument_management.products,
        ],
        fit: "contain",
      },


      {
        feature: "Inventory Ledger",
        description:
          `
  A clean inventory tracking interface for monitoring all stock movements and transactions. It includes key metrics like total transactions, net stock change, stock in transactions, and stock out transactions. The transaction list is searchable by product name, code, batch, or location — with columns for product, reference type, batch number, quantity, cost price, selling price, MRP, and transaction type.

- Total Transactions, Net Stock Change, Stock In & Stock Out Counts
- Search by Product Name, Code, Batch or Location
- Transaction List Table (Product, Reference Type, Batch Number, Quantity, Unit Cost, Selling Price, MRP, Transaction Type)
- Transaction Type Badges (Stock In, Stock Out)
- Reference Types (Site Return, Stock Issue, Hold)

          `,
        images: [
          projectAssets.procument_management.InventoryLedger,
        ],
        fit: "contain",
      },

      {
        feature: "Transactions",
        description:
          `
  A clean payment transaction management interface for viewing all payment records. It includes key metrics like total transactions, total amount, sales payments, and inventory payments. Tabs allow switching between all transactions, sales payments, inventory payments, and POS statistics. A searchable transaction table shows date, type, method, reference, amount, and notes.

- Total Transactions Count
- Total Amount, Sales Payments & Inventory Payments
- Tab Views (All Transactions, Sales Payments, Inventory Payments, POS Statistics)
- Search Payments
- Transaction Table (Date, Type, Method, Reference, Amount, Note)
- Transaction Types (Sale, Payment)
- Payment Methods (MIXED, CASH)
          `,
        images: [
          projectAssets.procument_management.transactions,
        ],
        fit: "contain",
      },


      {
        feature: "Finance Statistics",
        description:
          `
  A clean financial overview dashboard focused on a specific counter. It includes time period filters (Today, Weekly, Monthly), key metrics like total income, total expenses, net balance, and cash in hand. A payment summary shows opening balance, income, expenses, and refunds. Recent transactions table displays records, reference, date, type, description, amount, and method.

- Time Period Filters (Today, Weekly, Monthly)
- Total Income, Total Expenses & Net Balance
- Cash In Hand
- Payment Summary (Opening Balance, Income, Expenses, Refunds)
- Recent Transactions Table (Records, Reference, Date, Type, Description, Amount, Method)
- Action Options (Export Excel, Cash In/Out, Refresh)

          `,
        images: [
          projectAssets.procument_management.financeStatistics,
        ],
        fit: "contain",
      },

      {
        feature: "Rent Pool",
        description:
          `
  A centralized equipment tracking interface for monitoring construction equipment inventory and active site allocations. It includes four main tabs: Available, Allocated, History, and Sites.

- Tabs (Available, Allocated, History, Sites)
- Available Rent Items Table (Product, Product Code, Daily Price, Total Available Quantity, Update Action)
- Search Equipment & Export Options (PDF, Excel)
- Active Site Allocations Table (Alloc. ID, Site, Product, Quantity, Allocated Date, Days, Return Action)
- History Section with Filters (Site, Product, Time Period)
- Systemized Report (Status, Product, Site, Quantity, Price/Day, Days, Total Cost)
- Construction Sites List (Site Name, ID, Address, View Details Button)

          `,
        images: [
          projectAssets.procument_management.RentPool1,
          projectAssets.procument_management.RentPool2,
          projectAssets.procument_management.RentPool3,
          projectAssets.procument_management.RentPool4,
        ],
        fit: "contain",
      },

    ] satisfies ProjectSection[],
  },

  {
    id: "distribution_management",
    title: "Distribution Management System",
    category: "POS System",
    image: projectAssets.distribution_management.image,
    cardImage: projectAssets.distribution_management.cardImage,
    galleryImage: projectAssets.distribution_management.galleryImage,
    description: "Our Distribution Management System simplifies the entire distribution process — from ref registration and purchase orders to sales invoices. The overview dashboard gives you a real-time snapshot of all transactions, helping you track sales, manage orders, and keep your distribution network running smoothly.",
    tags: ["Next.js", "Node.js", "MySQL", "Tailwind CSS"],
    link: "https://example.com",
    sections: [

      {
        feature: "Overview Dashboard",
        description:
          `
A clean admin dashboard showing key business metrics and pending actions. It includes revenue analytics with total revenue, pending invoices, active servers, and total clients. The sidebar provides navigation for distribution, user management, product catalog, and inventory. A pending actions section lists alerts like server payment due, new client registration, server down alert, and invoice overdue.
- Total Revenue, Pending Invoices, Active Servers & Total Clients
- Revenue Analytics Chart (Monthly Server & Invoice Revenue)
- View Report Button
- Sidebar Navigation (Distribution, Routes, Sales Invoices, User Management, Product Catalog, Inventory)
- Pending Actions List (Server Payment Due, New Client Registration, Server Down Alert, Invoice Overdue)

          `,
        images: [
          projectAssets.distribution_management.dashboard,
        ],
        fit: "contain",
      },

      {
        feature: "Ref Registration",
        description:
          `
A clean referral contact management interface for registering and managing referral contacts. It includes a simple form with required name field and optional mobile, email, address, and notes. The referral list shows total refs count, searchable table with name, mobile, email, address, and actions, plus an add new ref button.
- Total Refs Count
- Add New Ref Form
- Search by Name, Mobile or Email
- Refs Table

          `,
        images: [
          projectAssets.distribution_management.RefRegistration1,
          projectAssets.distribution_management.RefRegistration2,
        ],
        fit: "contain",
      },

      {
        feature: "Sales Invoices",
        description:
          `
A clean sales invoice management interface for tracking client payments and creating new invoices. The invoice list includes total count and payment breakdown by Cash, Bank, and Cheque — with a searchable table showing date, invoice number, client, hub, payment method, and status. The new invoice form allows users to select provisioning hub, client, and referral agent before proceeding.

- Total Invoice Count & Payment Breakdown
- Search by Invoice, Client or Hub
- Invoice Table
- New Sales Invoice Form

          `,
        images: [
          projectAssets.distribution_management.SalesInvoices1,
          projectAssets.distribution_management.SalesInvoices2,
        ],
        fit: "contain",
      },

      {
        feature: "Sales Invoices",
        description:
          `
A clean sales invoice management interface for tracking client payments and creating new invoices. The invoice list includes total count and payment breakdown by Cash, Bank, and Cheque — with a searchable table showing date, invoice number, client, hub, payment method, and status. The new invoice form allows users to select provisioning hub, client, and referral agent before proceeding.

- Invoice Overview 
- Search & Filter
- Invoice Table
- New Invoice Creation
- Provisioning Hub
- Referral Agent
- Form Actions

          `,
        images: [
          projectAssets.distribution_management.SalesInvoices1,
          projectAssets.distribution_management.SalesInvoices2,
        ],
        fit: "contain",
      },

      {
        feature: "Purchase Orders",
        description:
          `
A complete purchase order management system for tracking and creating supplier orders.

- PO Overview 
- Purchase Orders Table
- Order Statuses
- Create Purchase Order Form
- Warehouse Selection
- Supplier Selection
- Order Date
- Form Actions
          `,
        images: [
          projectAssets.distribution_management.PurchaseOrders1,
          projectAssets.distribution_management.PurchaseOrders2,
          projectAssets.distribution_management.PurchaseOrders3,
        ],
        fit: "contain",
      },

      {
        feature: "Ref Application Home",
        description:
          `
This is a Sales Workspace Dashboard for a salesperson. Instead of tracking attendance or site tasks, this screen provides a financial and customer overview at a glance. It shows order volume, total sales, settled amounts, collection rate, outstanding balance, top/bottom customers, and dues — all with zero-state placeholders when no data exists yet.
-  Key Metrics Cards
- Customer Search & Listing
- Recent Orders
- Bottom Navigation Bar

          `,
        images: [
          projectAssets.distribution_management.refAppHome1,
        ],
        fit: "contain",
      },

      {
        feature: "Ref Application Customer",
        description:
          `
This is a sales customers interface for a salesperson. It displays customer directory,search functionality,linked customers,top spending customers,and purchase leaders.On the second screen,it shows a detailed order history for a specific customer (samadi),including order date, total amount, items, and unit pricing.

- All Customers browse
- Search customers
- Top spend customer highlight
- Purchase leaders ranking
- Order history view per customer
- Order total amount
          `,
        images: [
          projectAssets.distribution_management.refAppCustomer1,
        ],
        fit: "contain",
      },

      {
        feature: "Ref Application Order",
        description:
          `
Order finalization and invoicing interface for a salesperson, covering payment selection, order submission, outstanding balances, order timeline, and finalized invoice with billing, products, and settlement status.
- Payment method selection
- Submit order for approval
- Cart total display
- Outstanding balance view
- Orders timeline (with status and amount)
- Sales invoice generation
- Itemized product details
- Grand total
-Account settlement status (fully settled / outstanding)

          `,
        images: [
          projectAssets.distribution_management.refOrder1,
          projectAssets.distribution_management.refOrder2,
        ],
        fit: "contain",
      },

    ] satisfies ProjectSection[],
  },

  {
    id: "garage_management",
    title: "Service Management System",
    category: "Enterprise Solutions",
    image: projectAssets.garage_management.image,
    cardImage: projectAssets.garage_management.cardImage,
    galleryImage: projectAssets.garage_management.galleryImage,
    description: "Our Service Management System streamlines every workshop operation — from job management and customer payments to stock control, goods received notes, and invoicing for retail and final jobs. It also manages petty cash, collection summaries, and daily, monthly, and profit analysis, providing a complete overview of business performance and financial operations.", 
    tags: ["Next.js", "Node.js", "MySQL", "Tailwind CSS"],
    link: "https://example.com",
    sections: [

      {
        feature: "Overview Dashboard",
        description:
          `
Vehicle management dashboard showing key business metrics, outstanding balances, quick actions, revenue breakdown by method, job status overview, low stock alerts, and a revenue trend chart.

- Total revenue, expenses, and profits
- Outstanding distribution (job & retail)
- Quick actions (New Job Card, Add Customer, Customer Payment)
- Revenue breakdown by method (Cash, Online)
- Jobs status overview
- Low stock alerts
- Revenue trend chart (with date range filter)

Customer outstanding table
          `,
        images: [
          projectAssets.garage_management.dashboard1,
          projectAssets.garage_management.dashboard2,
          projectAssets.garage_management.dashboard3,
        ],
        fit: "contain",
      },

      {
        feature: "Job management",
        description:
          `
Job management interface for a garage, displaying job cards (active/completed), job details (customer, complaint, priority), vehicle info, assigned mechanics, services, spare parts, outsourced services, advance payments, and finalize & invoice option.
- Job cards list with customer, complaint, priority, and date
- Vehicle details (registration, customer ID)
- Assigned employee / mechanic
- Estimated total due
- Finalize & invoice



          `,
        images: [
          projectAssets.garage_management.jobs1,
          projectAssets.garage_management.jobs2,
          projectAssets.garage_management.jobs3,
        ],
        fit: "contain",
      },


      {
        feature: "Customer Payments",
        description:
          `
Customer payments management interface that lists all payment transactions with filters, showing payment details like date, customer, vehicle, type (advance/retail/final), amount, method, and reference number.
- Payment search and filtering (date range, invoice type)
- Quick date filters (Today, 3 Days, 7 Days, 30 Days)
- Payment list with date, payment number, invoice/job number
- Customer and vehicle number
- Payment type (Advance, Retail, Final)
- Amount and payment method (Cash, Bank Transfer)
- Cheque/reference number



          `,
        images: [
          projectAssets.garage_management.customer_payment1,
          projectAssets.garage_management.customer_payment2,
        ],
        fit: "contain",
      },

      {
        feature: "stock management",
        description:
          `
This is a stock management interface for a garage/service center. Users can view all stock items in a table, search/filter items, edit existing item details (as shown in the edit modal), view transaction history (GRN details with cost/price/quantity), and add new items.
- View stock items with part number, category, description, and total stock amount
- Search and filter stocks
- Edit stock item details (part no, category, description, unit type, min stock level)
- View GRN (Goods Received Note) history with cost, selling price, quantity, supplier, and location
- Add new stock items
- Dark/light theme toggle



          `,
        images: [
          projectAssets.garage_management.stock1,
          projectAssets.garage_management.stock2,
          projectAssets.garage_management.stock3,
        ],
        fit: "contain",
      },

      {
        feature: "Goods Received Notes",
        description:
          `
This is a Goods Received Notes (GRN) management interface for tracking supplier deliveries, stock intake, and payment statuses. Users can create new GRNs, view all GRN records with filtering, and see detailed GRN information including line items and payment history.
- Create GRN (invoice, supplier, date, total, payment method, line items)
- View GRN table (number, date, supplier, total, paid, status)
- Search and filter GRNs
- View GRN details 
- Manage supplier payments



          `,
        images: [
          projectAssets.garage_management.goods_received1,
          projectAssets.garage_management.goods_received2,
          projectAssets.garage_management.goods_received3,
        ],
        fit: "contain",
      },


      {
        feature: "Retail Invoices",
        description:
          `
This is a retail invoice management interface for creating and tracking customer sales. Users can create new invoices, add items to cart, manage customer details, process payments, and view all invoice history with status tracking.
- Create new retail invoice
- View all invoices table
- Search & filter invoices by customer or status
- View invoice details
- Edit quantities on existing invoices

          `,
        images: [
          projectAssets.garage_management.retail_invoices1,
          projectAssets.garage_management.retail_invoices2,
          projectAssets.garage_management.retail_invoices3,
          projectAssets.garage_management.retail_invoices4,
        ],
        fit: "contain",
      },

      {
        feature: "Final Invoices",
        description:
          `
This is a final invoice management interface for service/job-based billing (including labour charges). Users can track invoices linked to vehicles and job numbers, view payment statuses, and manage outstanding balances.
- View final invoices table
- Search & filter invoices by invoice number or date range
- View invoice details
- Add payment to partially paid invoices
- View/download invoices

          `,
        images: [
          projectAssets.garage_management.final_invoices1,
          projectAssets.garage_management.final_invoices2,
        ],
        fit: "contain",
      },

      {
        feature: "Petty Cash Management",
        description:
          `
This is a petty cash management interface for tracking small deposits and expenses. Users can view summary totals, record deposits/expenses, and monitor closing balance.
- View summary (total deposits, total expenses, closing balance)
- Add deposit or expense with narration
- View transaction table (reference no, type, amount, narration)
- Filter by date range
- Export to PDF

          `,
        images: [
          projectAssets.garage_management.petty_cash1,
          projectAssets.garage_management.petty_cash2,
          projectAssets.garage_management.petty_cash3,
        ],
        fit: "contain",
      },

      {
        feature: "Collection Summary",
        description:
          `
This is a collection summary dashboard for tracking payment receipts across cash, cheque, card, and bank transfer methods.
- Cash control summary (Cash BF, collections, grand total)
- Filter by date range
- Payment collections table (payment no, date, invoice/job no, customer, payment method amounts)
- Export to PDF

          `,
        images: [
          projectAssets.garage_management.collection_summary
        ],
        fit: "contain",
      },

      {
        feature: "Daily & Profit Analysis",
        description:
          `
This is a sales and profit analysis dashboard for tracking revenue, costs, and net profit over time. Users can view daily/monthly breakdowns with visual charts and data tables.
- View total revenue, total cost, and net profit summary
- Daily/Monthly breakdown toggle
- Quick date presets (Today, 3/7/30 Days)
- Line chart showing revenue, cost, and profit trends
- Data table with daily revenue, cost, and profit figures
- Export to PDF


          `,
        images: [
          projectAssets.garage_management.sales_analysis_daly1,
          projectAssets.garage_management.sales_analysis_daly2,
          projectAssets.garage_management.sales_analysis_daly3
        ],
        fit: "contain",
      },

      {
        feature: "Monthly Profit Analysis",
        description:
          `
This is a monthly profit analysis view showing revenue, cost, and profit trends across months of a selected year.
- Select year with reset option
- Line chart comparing revenue, cost, and profit by month
- Negative profit visualization

          `,
        images: [
          projectAssets.garage_management.sales_analysis_monthly1,
          projectAssets.garage_management.sales_analysis_monthly2,
        ],
        fit: "contain",
      },

    ] satisfies ProjectSection[],
  },
];

export type { Project, ProjectSection };