export const projects = [
  {
    title: 'Learned Index Structures (Database Systems)',
    period: 'September 2024 - December 2024',
    bullets: [
      "Reimplemented learned index data structures over ~5M records, building and benchmarking B-Trees, linear models, recursive hybrids, neural models, and spline-based indexes.",
      "Designed a benchmarking framework to evaluate lookup latency and memory overhead across data distributions, identifying regimes where learned indexes outperform traditional B-Trees.",
      "Optimized query paths and model inference to achieve measurable latency and space efficiency tradeoffs in read-heavy workloads."
    ],
    links: {
      code: 'https://github.com/hparasa/caseForLearnedIndex',
      demo: null,
    },
    tags: [' Python', 'NumPy', 'Database Internals', 'Systems Benchmarking'],
  },
  {
    title: 'LLM Ensemble for Neologism Sentiment (ML Systems)',
    period: 'September 2024 - December 2024',
    bullets: [
      "Built a production-style model evaluation and ensembling pipeline, fine-tuning GPT-2, RoBERTa, BERTweet, and DistilBERT using LoRA / AdaLoRA for robustness to evolving language.",
      "Implemented a modular offline evaluation harness to compare models, aggregate predictions, and measure accuracy across datasets, achieving 91.2% overall accuracy.",
      "Engineered reusable training and inference workflows, emphasizing repeatability, scalability, and model comparison rather than single-model optimization."
    ],
    links: {
      code: 'https://github.com/hparasa/llm-ensemble-for-neologism',
      demo: 'https://huggingface.co/Himaparasa/bertweet-sentiment-model',
    },
    tags: ['PyTorch', 'Hugging Face Transformers', 'LoRA/AdaLoRA', 'Python', 'NumPy'],
  },
  {
    title: 'Scalable Distributed File System',
    period: 'January 2025 - March 2025',
    bullets: [
      "Designed and implemented a distributed file system supporting concurrent clients, using gRPC with bidirectional streaming for efficient data transfer.",
	    "Implemented token-based access control and enforced sequential consistency guarantees across replicas.",
	    "Achieved 99.99% availability with sub-10ms read/write latency through replication, fault handling, and efficient request routing across multiple servers."
    ],
    links: {
      code: 'https://github.com/hparasa/'
    },
    tags: ['Python/C++', 'gRPC', 'Distributed Systems', 'Consistency Models'],
  },
];


