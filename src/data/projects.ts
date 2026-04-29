const projectAssets = {
  salonManagement1: {
    image: "/images/projects/salon/admin_dashboard.png",
    cardImage: "/images/projects/salon/salon_management.png",
    galleryImage: "/images/projects/salon/employee_mana.png",
    cashier_dashboard: "/images/projects/salon/cashierdashboard.png",
    cashier_invoice: "/images/projects/salon/cashier_invoice.png",
    payroll: "/images/projects/salon/admin_payroll_new.png",
    employee_jobCards: "/images/projects/salon/employee_jobcards_new.png",
    employee_performace: "/images/projects/salon/employee_performance_new.png",
    casier_cashDrawer: "/images/projects/salon/Cashier_cashDrower.png",
    employee_dashboard: "/images/projects/salon/employee_dashboard_new.png"
  },
  corporate_ecosystem: {
    image: "/images/projects/corporate_ecosystem/corporate_ecosystem.png",
    cardImage: "/images/projects/corporate_ecosystem/corporate_ecosystem.png",
    galleryImage: "/images/projects/corporate_ecosystem/corporate_ecosystem.png",
    admin_dashboard: "/images/projects/corporate_ecosystem/admin_dashboard.jpg",
    business_registration: "/images/projects/corporate_ecosystem/business_registration_new.png",
    tax_registration: "/images/projects/corporate_ecosystem/tax_registration.png",
    tax_return: "/images/projects/corporate_ecosystem/tax_return.jpg",
    tax_customer_dashboard: "/images/projects/corporate_ecosystem/tax_customer_dashboard.jpg",
    tax_customer_return: "/images/projects/corporate_ecosystem/tax_customer_return.jpg",
    tax_customer_registration: "/images/projects/corporate_ecosystem/tax_customer_registration.jpg",
  },
  ecomarket: {
    image: "/images/industries/retail.png",
    galleryImage: "/images/services/web.png",
  },
  learnloop: {
    image: "/images/industries/edtech.png",
    galleryImage: "/assets/imgs/heros/robot.png",
  },
  estateview: {
    image: "/images/industries/realestate.png",
    galleryImage: "/images/services/uiux.png",
  },
  travelmate: {
    image: "/images/industries/travel.png",
    galleryImage: "/images/services/devops.png",
  },
} as const;

type ProjectSection = {
  feature: string;
  description: string;
  image: string;
  fit?: "cover" | "contain";
};

export const projects = [
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
          `- This UI features a sleek, high-contrast layout that pairs a dark sidebar with a clean, airy workspace.
- It uses a soft-UI aesthetic with rounded corners, subtle shadows, and vibrant purple and orange gradients to draw attention to key data.
- KPI Cards: Four prominent metric cards display high-level financials (like Revenue in LKR) using bold typography and glassmorphic icons for high scannability.
- Data Visualization: A stylized bar chart tracks "Employee Salary Overview," using a consistent gradient theme to make complex data feel approachable.
- Navigation & UX: The left-hand sidebar organizes a deep module list (Payroll, Stock, Invoices) into a compact, vertical menu, while top-level tabs allow quick switching between analytics and system status.
- Visual Hierarchy: A light background for the main content keeps colorful data points as the primary focal point for users.`,
        image: projectAssets.salonManagement1.image,
      },
      {
        feature: "Employee Management",
        description:

          `- Summary KPI Cards: The top section features four distinct cards using a soft-shadow floating effect. Each card uses color-coded icons (Blue, Green, Red, and Orange) to instantly differentiate between total, active, inactive staff, and payroll totals.
- Structured Data Table: The main workspace uses a clean tabular view with plenty of white space. It organizes complex information—including employee avatars, contact details, and financial data—into a scannable, high-contrast list.
- Functional UI Elements: * A prominent "+ Add Employee" primary button in deep purple serves as a clear Call to Action (CTA).
-The search and filter bar is integrated seamlessly above the table for quick data sorting.`,
        image: projectAssets.salonManagement1.galleryImage,
      },
      {
        feature: "Payroll",
        description:
          `- Data Visualization: It includes a dedicated "Employee Salary Overview" chart area, allowing administrators to visually track salary trends and distributions at a glance rather than just reading rows of numbers.
          -Automated Salary Processing: The system allows admins to calculate gross salaries, commissions, and deductions (like EPF and advance payments) automatically for a specific period.
          -Advanced Data Filtering: Users can drill down into specific records using filters for Employee names, Date ranges, and Status, making it easy to manage large teams.
          -Comprehensive Payroll Reporting: The "Payroll Records" table provides a detailed breakdown of every financial component, and the "Export Report" feature enables the generation of formal documents for accounting purposes.`,
        image: projectAssets.salonManagement1.payroll,
        // fit: "contain",
      },
      {
        feature: "Cashier Dashboard",
        description:
          `-Data-Driven Visual Hierarchy: The dashboard uses a sophisticated card-based layout that prioritizes high-level KPIs (Total Revenue, Expenses) at the top, followed by interactive charts for deep-dive analysis, ensuring a clean and professional user experience.
          - Comprehensive Revenue Insights: Provides a real-time breakdown of daily earnings categorized by payment methods (Cash, Card, Online) and tracks total invoices at a glance.
          - Performance Analytics: Features dedicated visual sections for "Most Active Staff" and "Top Earners" using bar charts, along with a "Top Services" analysis to identify the salon's most profitable offerings.
          - Operational Trend Tracking: Includes an "Hourly Sales Trend" area chart to monitor peak business hours and a dedicated expense/advance tracker to manage daily cash flow effectively.
          `,

        image: projectAssets.salonManagement1.cashier_dashboard,
      },
      {
        feature: "Cashier Cash Drawer",
        description:
          `- Structured Modal Layout: The interface utilizes a well-organized grid system within a modal, separating complex calculations into distinct sections like Bank Summary and Cash Counter, which prevents information overload during the end-of-day reconciliation process.
        - Automated Reconciliation Logic: The system automatically calculates the "Expected Closing Balance" by factoring in opening balances, cash sales, expenses, tips, and advances, reducing the risk of human error.
        - Physical Cash Denomination Counter: Includes a dedicated "Cash Counter" feature that allows users to input specific note counts (e.g., 100s, 50s, 20s) to verify that the physical cash in hand matches the system's digital records.
        -Real-time Discrepancy Tracking: Features a dynamic "Difference" indicator that provides instant visual feedback—such as a "Cash matches expected balance" confirmation—to ensure total transparency before closing the drawer.`,

        image: projectAssets.salonManagement1.casier_cashDrawer,
      },
      {
        feature: "Invoice Management",
        description:
          `-User-Centric POS Layout: The interface features a highly efficient split-screen design, combining a visual service catalog with a real-time "Invoice Summary" sidebar, which enables cashiers to process transactions quickly without navigating away from the page.
          -Dynamic Service Selection: Includes a categorized filtering system (e.g., Mens, Kids, Ladies) and a search bar, allowing users to quickly find and add services to queue with a single click.
          -Flexible Pricing & Employee Attribution: The system allows for custom service price overrides and assigns specific employees to services, ensuring accurate commission tracking and personalized billing.
          - Comprehensive Checkout Management: Supports multi-channel payment processing (Cash, Card, etc.) with built-in functionality for applying discounts, adding notes, and viewing instant subtotal/total calculations.`,

        image: projectAssets.salonManagement1.cashier_invoice,
      },
      {
        feature: "Employee Dashboard",
        description:
          ` - Personalized Analytics Layout: The dashboard uses a clean, card-based interface with a vibrant purple theme that effectively balances personal greeting elements with high-priority performance metrics and data visualizations.
        - Individual Performance Metrics: Provides employees with a quick overview of their daily and monthly earnings, total services performed today, and any advances taken through intuitive summary cards.
        - Visual Earnings & Advances Tracking: Features a dynamic "Area Chart" that allows employees to monitor their financial trends over time, helping them visualize the relationship between their work volume and total income.
        - Real-Time Service Log: Includes a dedicated "Today's Services" sidebar that lists specific tasks (like haircuts or beard trims) with invoice numbers and status tags, providing clear visibility into their daily workload.
        `,

        image: projectAssets.salonManagement1.employee_dashboard,
        //  fit: "contain",
      },
      {
        feature: "Employee Job Cards",
        description:
          `- Grid-Based Card Architecture: The interface utilizes a clean, repeatable card component system that neatly encapsulates individual service records, making it easy for employees to scan through a high volume of tasks while maintaining visual consistency.
        - Real-Time Status Tracking: Each card clearly displays the current progress of a task with color-coded "Pending" or "Completed" status badges, ensuring employees can quickly distinguish between ongoing and finished work.
        - Comprehensive Service Summaries: Provides essential job details at a glance, including unique invoice IDs, service names, customer types, payment methods (Cash/Mixed), and the total price for each transaction.
        - Detailed Record Exploration: Features a "View Details" action on every card, allowing users to drill down into specific service data, while the integrated pagination system handles large record sets (over 200 records) efficiently.`,

        image: projectAssets.salonManagement1.employee_jobCards,
        //  fit: "contain",
      },
      {
        feature: "Employee Performance",
        description:
          `- Intuitive Analytical Dashboard: The page utilizes a sophisticated data-visualization layout with a balanced mix of donut, bar, and line charts, providing a comprehensive professional summary while maintaining a clean, modern aesthetic.
          - Multi-Dimensional Time Filtering: Users can seamlessly toggle between Daily, Weekly, Monthly, and Yearly views, allowing employees to track their growth and revenue trends across different time scales.
          - Customer Distribution Insights: Features a "Booking vs. Walk-In" donut chart that helps employees understand their client acquisition sources and optimize their availability accordingly.
          - Comparative Productivity Metrics: Includes dedicated bar charts for "Top Services" and "Top Employees," enabling individuals to identify their most popular services and see how they rank within the team's overall performance.`,
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
    description: "A professional Salon Management System designed to streamline appointment scheduling, service tracking, and staff management with a real-time administrative dashboard.",
    tags: ["Next.js", "Node.js", "MySQL", "Tailwind CSS", "Shadcn/UI"],
    link: "https://example.com",
    sections: [
      {
        feature: "Admin Dashboard",
        description:
          `- Professional Management Interface: The dashboard features a clean, corporate-style design with a vibrant "stat-card" row and high-contrast sidebar, ensuring that critical business metrics and navigation are immediately accessible to administrators.
- Centralized Operations Overview: Provides a high-level summary of total revenue, customer growth, and the volume of pending or completed business registrations at a single glance.
- Submission Workflow Tracking: Features a dedicated "Application Status" tracker and "Revenue Analytics" chart to monitor the flow of registrations from the customer to the government processing stage.
- Real-Time Activity Auditing: Includes a "Recent Activities" log that tracks user logins, tax return creations, and system updates, ensuring full transparency and accountability across the platform.`,
        image: projectAssets.corporate_ecosystem.admin_dashboard,
      },
      {
        feature: "Admin Business Registration",
        description:
          `- Clean Data-Centric Interface: The page features a well-structured tabular layout with ample white space and clear typography, ensuring that high volumes of registration data remain legible and easy for administrators to manage.
          - Multi-Stage Status Tracking: The table provides instant visibility into the registration lifecycle using color-coded badges for payment status, current processing steps, and application types (e.g., "New Company").
          - Advanced Filtering & Search: Includes global search functionality and granular filters for "Status" and "Steps," allowing admins to quickly isolate specific requests or identify bottlenecks in the registration pipeline.
          - Interactive Workflow Management: Each row acts as a gateway to deeper details, featuring an "Actions" view that enables admins to review customer submissions and progress through the government compliance process directly.`,

        image: projectAssets.corporate_ecosystem.business_registration,
      },
      {
        feature: "Admin Tax Registration",
        description:
          `- Professional Admin Interface: The interface features a highly organized, table-driven design with a clean sidebar and consistent iconography, optimized for efficient data retrieval and administrative task management.
         - Detailed Tax Identification Tracking: The system captures and displays essential registration data at a glance, including customer identity (with avatars), specific Tax Types (e.g., Individual IIT), and unique TIN numbers.
         - Lifecycle Status Management: Includes clear, color-coded status indicators (such as "COMPLETED") and registration dates, helping administrators prioritize pending requests and track historical approvals.
         - Comprehensive Search & Filter System: Equipped with an advanced search bar (supporting Name, Email, NIC, or TIN) and dropdown filters for Status and Type, ensuring fast access to specific tax records within a growing database.
          `,

        image: projectAssets.corporate_ecosystem.tax_registration,
      },
      {
        feature: "Admin Tax Return",
        description:
          `
        - Analytical Summary Dashboard: The interface features a "top-shelf" stat row that provides immediate visual context of the workload (Approved, Pending, and Draft counts), paired with a clean, structured table for efficient record navigation.
- Centralized Taxpayer Profiles: The table consolidates all critical customer identifiers in one view, including Name, TIN, NIC, and contact details, allowing administrators to verify identity without opening multiple tabs.
- Submission Workflow Visibility: By tracking the "Account Status" and providing real-time stats on pending vs. approved returns, the system helps admins prioritize urgent government submissions and manage deadlines.
- Streamlined Data Retrieval: Features a dynamic search and status filtering system that allows administrators to pinpoint specific tax returns quickly, with direct "Action" buttons for processing individual customer details.
        `,
        image: projectAssets.corporate_ecosystem.tax_return,
      },
      {
        feature: "Tax Customer Dashboard",
        description:
         `
         - Intuitive Progress-Focused Layout: The dashboard utilizes a clean, modern card-based design that prioritizes transparency, featuring a prominent visual progress tracker that allows customers to see exactly where they stand in the multi-step government registration process.
         - Real-Time Status Monitoring: Provides a high-level summary of total registrations, payment statuses, and costs, combined with a detailed "Latest Registration" card showing step-by-step progress from submission to completion.
         - Comprehensive Service Overview: Includes a "Quick Stats" section and "Registration Status Distribution" bar, giving customers a quick way to audit their documents, tax returns, and profile completion status.
         - Enhanced User Navigation: Features a "Quick Actions" panel and "Recent Activity" log, enabling users to jump directly to specific tasks or track historical updates like individual income tax milestones and assessment years.
         `,
        
        image: projectAssets.corporate_ecosystem.tax_customer_dashboard,
      },
      {
        feature: "Customer Tax Returns by Year",
        description:
       `
       - Clean Card-Based Navigation: The interface uses high-quality, illustrative cards to represent different assessment years, creating a visually distinct and tactile navigation experience that makes finding historical tax records effortless for the user.
       - Annual Return Organization: Efficiently categorizes tax returns by their specific assessment year (e.g., 2026, 2027), allowing users to maintain a clear chronological history of their individual income tax filings.
       - Instant Status Visibility: Each card features a color-coded status badge (such as "Pending" or "Accepted") and displays critical upcoming deadlines, ensuring users stay informed about their compliance status at a glance.
       - Interactive Detail Access: Provides a "Continue" action for ongoing filings and clickable cards that serve as entry points to comprehensive data, including declarations and supporting document management for each specific year.
       
       `,
       
        image: projectAssets.corporate_ecosystem.tax_customer_return,
      },
      {
        feature: "Customer Tax Registration",
        description:
       `
       - Progress-Centric Card Design: The interface uses a clean, high-contrast card that prominently features a visual linear stepper, allowing users to instantly understand their current stage in the tax registration process without reading dense text.
       - Visual Milestone Tracking: Uses a 5-step progress bar with status indicators (Submitted, Review, Payment, TIN, Completed) to provide full transparency on the registration lifecycle.
       - Real-time Status Updates: Displays a clear percentage-based completion badge and specific status labels (e.g., "Completed") so customers stay updated on their "Individual Income Tax" application progress.
       - Direct Data Accessibility: Features a prominent "View All Data" action button, giving users immediate access to in-depth records, submitted documents, and detailed registration information for their specific services.
       `,
        
        image: projectAssets.corporate_ecosystem.tax_customer_registration,
      },
    ] satisfies ProjectSection[],
  },
  {
    id: "ecomarket",
    title: "EcoMarket",
    category: "E-commerce",
    image: projectAssets.ecomarket.image,
    galleryImage: projectAssets.ecomarket.galleryImage,
    description: "Sustainable marketplace with carbon footprint tracking.",
    tags: ["Shopify", "React", "GraphQL"],
    link: "https://example.com",
    longDescription:
      "EcoMarket is a multi-vendor marketplace dedicated to sustainable products. It features a unique carbon footprint calculator that estimates the environmental impact of each purchase.",
    challenge:
      "Calculating accurate carbon footprints in real-time based on shipping distance and product materials.",
    solution:
      "We developed a custom algorithm integrated with logistics APIs to calculate emissions dynamically. The frontend is a headless Shopify setup using React and GraphQL for maximum flexibility.",
    sections: [
      {
        feature: "Vendor Control Center",
        description:
          "Marketplace admins can monitor vendor status, inventory pipelines, and fulfillment health from a consolidated command view.",
        image: projectAssets.ecomarket.image,
      },
      {
        feature: "Carbon Impact Module",
        description:
          "Each order is enriched with real-time environmental estimates, helping customers and teams make more sustainable decisions.",
        image: projectAssets.ecomarket.galleryImage,
      },
      {
        feature: "Campaign Intelligence",
        description:
          "Promotional performance and conversion behavior are captured in live dashboards for continuous campaign tuning.",
        image: "/images/services/database.png",
      },
    ] satisfies ProjectSection[],
  },
  {
    id: "learnloop",
    title: "LearnLoop",
    category: "EdTech",
    image: projectAssets.learnloop.image,
    galleryImage: projectAssets.learnloop.galleryImage,
    description: "AI-powered learning management system for universities.",
    tags: ["Python", "Django", "TensorFlow", "React"],
    link: "https://example.com",
    longDescription:
      "LearnLoop uses artificial intelligence to personalize learning paths for university students. It analyzes student performance and adapts the curriculum to their learning style.",
    challenge:
      "Creating an AI model that could accurately predict student needs without bias.",
    solution:
      "We trained a TensorFlow model on anonymized educational data and integrated it with a Django backend. The system provides real-time insights to professors and adaptive content to students.",
    sections: [
      {
        feature: "Academic Admin Hub",
        description:
          "University administrators can track enrollments, attendance signals, and curriculum readiness through one unified dashboard.",
        image: projectAssets.learnloop.image,
      },
      {
        feature: "Adaptive Learning Metrics",
        description:
          "The platform visualizes student progression patterns and recommendation quality to improve teaching outcomes semester by semester.",
        image: projectAssets.learnloop.galleryImage,
      },
      {
        feature: "Faculty Intervention Queue",
        description:
          "Instructors receive prioritized intervention alerts for at-risk learners with contextual data for quick mentoring actions.",
        image: "/images/services/mobile.png",
      },
    ] satisfies ProjectSection[],
  },
  {
    id: "estateview",
    title: "EstateView",
    category: "Real Estate",
    image: projectAssets.estateview.image,
    galleryImage: projectAssets.estateview.galleryImage,
    description: "Virtual tour platform for luxury real estate listings.",
    tags: ["Three.js", "Vue", "Firebase"],
    link: "https://example.com",
    longDescription:
      "EstateView offers immersive 3D virtual tours for high-end real estate. It allows potential buyers to walk through properties from anywhere in the world, with high-fidelity graphics.",
    challenge:
      "Rendering high-quality 3D tours in the browser without requiring heavy downloads.",
    solution:
      "We used Three.js for efficient 3D rendering and implemented aggressive asset optimization and lazy loading. Firebase handles real-time collaboration during guided tours.",
    sections: [
      {
        feature: "Portfolio Dashboard",
        description:
          "Real-estate teams can manage listings, engagement trends, and lead activity from one visual operations panel.",
        image: projectAssets.estateview.image,
      },
      {
        feature: "Tour Performance Insights",
        description:
          "Day-wise behavior charts reveal where prospects spend time inside tours, helping agents optimize storytelling paths.",
        image: projectAssets.estateview.galleryImage,
      },
      {
        feature: "Guided Session Toolkit",
        description:
          "Live co-browsing controls support guided visits, annotations, and synchronized walkthroughs for remote clients.",
        image: "/images/services/web.png",
      },
    ] satisfies ProjectSection[],
  },
  {
    id: "travelmate",
    title: "TravelMate",
    category: "Travel",
    image: projectAssets.travelmate.image,
    galleryImage: projectAssets.travelmate.galleryImage,
    description: "All-in-one travel companion app for customized itineraries.",
    tags: ["Flutter", "Dart", "Google Maps API"],
    link: "https://example.com",
    longDescription:
      "TravelMate helps travelers plan their perfect trip. It generates custom itineraries based on interests, budget, and duration, and offers offline maps and navigation.",
    challenge:
      "Providing reliable functionality in areas with poor internet connectivity.",
    solution:
      "We built the app using Flutter for cross-platform performance and implemented a robust offline-first architecture using local databases that sync when online.",
    sections: [
      {
        feature: "Trip Admin Console",
        description:
          "Operations teams can curate itineraries, destination packs, and seasonal updates through a structured content dashboard.",
        image: projectAssets.travelmate.image,
      },
      {
        feature: "Usage Intelligence",
        description:
          "The analytics layer tracks route interactions and feature adoption, enabling data-driven product improvements.",
        image: projectAssets.travelmate.galleryImage,
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