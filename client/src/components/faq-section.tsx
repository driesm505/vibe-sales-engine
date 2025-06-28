import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQSection() {
  const faqs = [
    {
      question: "How long does it take to develop a web application?",
      answer: "It depends on the complexity and scope of your project. For MVP development, we typically deliver within 7 days. Full web applications can take 2-4 weeks depending on features. We'll provide a detailed timeline during our initial consultation based on your specific requirements."
    },
    {
      question: "What is your pricing structure?",
      answer: "We offer transparent project-based pricing: Landing pages start at €1,500, Web development from €2,500, MVP development from €5,000, and technical consulting at €150/hour. All prices include modern design, mobile optimization, and deployment. No hidden fees."
    },
    {
      question: "Do you provide maintenance and support?",
      answer: "Yes! We provide 30 days of free support after launch for bug fixes and minor adjustments. We also offer ongoing maintenance packages starting at €300/month for regular updates, security patches, and feature enhancements to keep your application running smoothly."
    },
    {
      question: "How do you ensure quality with AI-powered development?",
      answer: "We use AI to accelerate development, not replace good practices. Every project follows code reviews, testing protocols, and security audits. Our experienced developers oversee all AI-generated code to ensure it meets production standards and follows industry best practices."
    },
    {
      question: "Can you work with existing designs or do you create new ones?",
      answer: "Both! We can implement your existing Figma designs, Sketch files, or mockups into working applications. We also provide complete design and development services if you need everything created from scratch. Either way, we ensure pixel-perfect implementation."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold font-poppins text-rich-black mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">Get answers to common questions about our development process</p>
        </div>

        <Accordion type="single" collapsible className="space-y-6">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="border border-gray-200 rounded-xl overflow-hidden"
            >
              <AccordionTrigger className="text-left p-6 bg-subtle-grey hover:bg-gray-100 transition-colors duration-200 text-lg font-semibold">
                {faq.question}
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
