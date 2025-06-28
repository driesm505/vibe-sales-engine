import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQSection() {
  const faqs = [
    {
      question: "What's your deployment pipeline architecture?",
      command: "docker build && kubectl apply",
      answer: "Full CI/CD with GitHub Actions: automated testing (Jest + Cypress), security scanning (Snyk), deployment to staging/production environments. Zero-downtime deployments with health checks and rollback capabilities. Infrastructure as Code with Terraform."
    },
    {
      question: "Which tech stack do you recommend for scalability?",
      command: "npm create next-app --typescript",
      answer: "Next.js + TypeScript + PostgreSQL + Docker for most projects. For enterprise: microservices with Node.js/Go, Redis caching, message queues (RabbitMQ), monitoring (Grafana + Prometheus). All containerized with Kubernetes orchestration."
    },
    {
      question: "How do you handle database migrations and rollbacks?",
      command: "npx drizzle-kit migrate",
      answer: "Schema versioning with Drizzle ORM, automated migration scripts, database backups before every deployment. Rollback strategies include blue-green deployments and database transaction logs. Production data is never at risk."
    },
    {
      question: "What's included in your monitoring and observability?",
      command: "kubectl logs -f deployment/app",
      answer: "Application performance monitoring (APM), error tracking (Sentry), log aggregation (ELK stack), uptime monitoring (99.9% SLA), real-time alerts via Slack/PagerDuty. Custom dashboards for business metrics."
    },
    {
      question: "How do you ensure code quality and security?",
      command: "npm run test:coverage && npm audit",
      answer: "Automated code reviews, 90%+ test coverage, dependency vulnerability scanning, SAST/DAST security testing, SOC 2 compliance. Every commit goes through linting, formatting, and security checks before merge."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-slate-900 relative overflow-hidden">
      {/* Tech Background */}
      <div className="absolute inset-0 cyber-grid opacity-20"></div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold font-poppins text-white mb-6">
            <span className="text-green-400">{'>'}</span> Technical Documentation
          </h2>
          <p className="text-xl text-gray-300">Enterprise architecture and deployment questions answered</p>
          <div className="mt-4 text-sm font-mono text-green-400">
            {'>'} man vibe-coding --help
          </div>
        </div>

        <Accordion type="single" collapsible className="space-y-6">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="border border-slate-700 rounded-xl overflow-hidden bg-slate-800/50 backdrop-blur-sm"
            >
              <AccordionTrigger className="text-left p-6 bg-slate-800/70 hover:bg-slate-700/70 transition-colors duration-200 text-lg font-semibold text-white group">
                <div className="flex flex-col items-start w-full">
                  <div className="text-white group-hover:text-green-400 transition-colors">{faq.question}</div>
                  <div className="text-xs font-mono text-green-400 mt-2">$ {faq.command}</div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="p-6 bg-white border-t border-gray-200 text-gray-600 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
