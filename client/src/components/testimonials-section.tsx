import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      title: "Founder of TechStart",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
      rating: 5,
      quote: "Vibe Coding transformed our idea into a successful MVP. Their expertise and dedication were invaluable to our launch. We went from concept to customers in just 8 days!"
    },
    {
      name: "Michael Chen", 
      title: "Product Manager at InnovateCo",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
      rating: 5,
      quote: "Working with Vibe Coding was a game-changer for our business. They delivered a high-quality product on time and within budget. The AI-powered development process was impressive."
    },
    {
      name: "Emma Rodriguez",
      title: "CEO of GrowthLabs", 
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b5e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
      rating: 5,
      quote: "The Vibe Coding team provided excellent technical guidance that helped us make informed decisions about our tech stack. Their founder-first approach really shows."
    }
  ];

  const trustBadges = ["STARTUP", "TECH", "SCALE", "GROWTH"];

  return (
    <section id="testimonials" className="py-20 gradient-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold font-poppins text-rich-black mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600">Success stories from entrepreneurs who trusted us with their vision</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white rounded-2xl shadow-xl">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <img 
                    src={testimonial.image} 
                    alt={`${testimonial.name} - ${testimonial.title}`}
                    className="w-16 h-16 rounded-full object-cover mr-4" 
                  />
                  <div>
                    <h4 className="font-bold text-lg">{testimonial.name}</h4>
                    <p className="text-gray-600">{testimonial.title}</p>
                  </div>
                </div>
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="fill-current" size={16} />
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-8">Trusted by 100+ startups and entrepreneurs</p>
          <div className="flex justify-center items-center gap-8 opacity-60">
            {trustBadges.map((badge, index) => (
              <div key={index} className="w-24 h-12 bg-gray-200 rounded-lg flex items-center justify-center">
                <span className="font-bold text-gray-500">{badge}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
