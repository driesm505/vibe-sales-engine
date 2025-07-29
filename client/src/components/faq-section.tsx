import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useLanguage } from "@/lib/i18n";

export default function FAQSection() {
  const { t } = useLanguage();
  
  const faqs = [
    {
      question: t.faq.questions.deployment.question,
      command: "docker build && kubectl apply",
      answer: t.faq.questions.deployment.answer
    },
    {
      question: t.faq.questions.techStack.question,
      command: "npm create next-app --typescript",
      answer: t.faq.questions.techStack.answer
    },
    {
      question: t.faq.questions.database.question,
      command: "npx drizzle-kit migrate",
      answer: t.faq.questions.database.answer
    },
    {
      question: t.faq.questions.monitoring.question,
      command: "kubectl logs -f deployment/app",
      answer: t.faq.questions.monitoring.answer
    },
    {
      question: t.faq.questions.quality.question,
      command: "npm run test:coverage && npm audit",
      answer: t.faq.questions.quality.answer
    }
  ];

  return (
    <section id="faq" className="py-20 bg-slate-900 relative overflow-hidden">
      {/* Tech Background */}
      <div className="absolute inset-0 cyber-grid opacity-20"></div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold font-poppins text-white mb-6">
            <span className="text-green-400">{'>'}</span> {t.faq.title}
          </h2>
          <p className="text-xl text-gray-300">{t.faq.subtitle}</p>
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
              <AccordionContent className="p-6 bg-slate-900/70 border-t border-slate-600 text-gray-300 leading-relaxed">
                <div className="bg-black/50 rounded-lg p-4 border border-slate-600">
                  <div className="text-xs text-green-400 mb-2 font-mono">{'>'} output:</div>
                  <div className="text-sm font-mono text-gray-300">{faq.answer}</div>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
