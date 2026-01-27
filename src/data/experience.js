export const experience = [
  {
    title: "Solutions Architect Intern",
    company: "Amazon Web Services, AWS - Seattle, WA",
    period: "May, 2025 - August, 2025",
    bullets: [
      "Architected a context-aware GenAI chatbot platform on AWS serving 5+ domain surfaces, extending an existing Amazon Q–based system with pre-conversation context injection to enable domain-aware responses without modifying user-visible prompts.",
	    "Engineered a backend metadata pipeline that injects page-level context prior to conversation initialization, seeding agents with hidden system instructions while preserving a natural conversational flow through coordinated frontend message suppression.",
	    "Integrated Amazon Bedrock Agents and RAG pipelines grounded in curated documentation, replacing retrieve-and-generate flows to reduce prompt complexity by ~40% and hallucinated responses by ~55–65%, improving response relevance by ~40%",
	    "Built and deployed a serverless, session-aware architecture using AWS Lambda, API Gateway, DynamoDB, and EC2, achieving sub-300 ms retrieval latency, 99.9% availability, ~30% token reduction, and persistent multi-page conversational memory supporting 100+ messages per session."
    ],
  },
  
  {
    title: "Cloud Engineer - II",
    company: "Amazon Web Services, AWS - Hyderabad, India",
    period: "June 2021 - August 2024",
    bullets: [
      "Designed and owned backend systems supporting 7 enterprise migrations and 5 large-scale traffic spikes, implementing autoscaling, redundancy, and fault isolation to reduce infrastructure costs by ~40% and improve system reliability by ~30%.",
      "Built backend automation services for security and compliance workflows, replacing manual checks with programmatic validation and remediation logic supporting $47M+ in annual revenue.",
      "Developed identity and access management pipelines across IAM, SSO, KMS, and Cognito, implementing policy enforcement, detection, and recovery workflows; cut MTTR by 50% and improved operational efficiency by 40%.",
      "Built Bottlenose Labs (6x), an internal gamified sandbox platform, designing Python backend services and APIs using CloudFromation, Cognito, IAM, SecurityHub, Lambda, EventBridge, API Gateway  to provision, validate, and decommission isolated environments; improved operational upskilling throughput by 65%",
      "Served as on-call engineer for distributed systems, debugging and resolving 1,900+ P1/P2 incidents across compute, networking, storage, and event-driven workloads; reduced response time from 24h to <1h with 100% CSAT.",
      "Authored design docs, runbooks, and postmortems that eliminated recurring failure modes and reduced inbound operational load by 70%.",
      "Mentored 20+ engineers, conducted 60+ technical interviews, and earned 15 performance awards with 3 promotions, reflecting sustained engineering ownership and impact."
    
    ],
  },
  {
    title: "Software Engineer Intern",
    company: "Amazon Web Services, AWS - Hyderabad, India",
    period: "August 2022 - October 2022",
    bullets: ["Led development of a Cognito user-pool export service, designing APIs and stateful workflows that shipped as a reusable internal platform feature and drove 25% adoption QoQ.",
    ],
  },
  {
    title: "Software Engineer Intern, ML Systems",
    company: "Tata Consultancy Services, TCS - Hyderabad, India",
    period: "June 2020 - September 2020",
    bullets: [
      "Designed and implemented a Transformer–GNN hybrid model in TensorFlow, integrating self-attention with graph convolution to improve long-range dependency modeling for scene understanding tasks.",
      "Productionized ML inference workflows, integrating model serving with Python backend APIs and frontend components to support end-to-end application functionality.",
      "Built a full-stack e-commerce application with Python backend services, REST APIs, authentication, and transactional email workflows, supporting 1K+ user sessions and 5K+ API requests/day.",
      "Developed a React-based frontend with responsive UI components and optimized state management, reducing page load time by 35% and maintaining 99.9% uptime in production deployments."
    ],
  },
];
