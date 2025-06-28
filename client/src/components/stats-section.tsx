import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Clock, Users, Star } from "lucide-react";

export default function StatsSection() {
  const stats = [
    {
      icon: <Users className="text-white" size={28} />,
      number: "150+",
      label: "Happy Clients",
      description: "Entrepreneurs who trusted us with their vision",
      bgColor: "bg-vibe-green"
    },
    {
      icon: <Clock className="text-white" size={28} />,
      number: "7",
      label: "Day Average",
      description: "From concept to working MVP",
      bgColor: "bg-trust-blue"
    },
    {
      icon: <TrendingUp className="text-white" size={28} />,
      number: "€2M+",
      label: "Funding Raised",
      description: "By our clients using our MVPs",
      bgColor: "bg-conversion-orange"
    },
    {
      icon: <Star className="text-white" size={28} />,
      number: "4.9/5",
      label: "Client Rating",
      description: "Average satisfaction score",
      bgColor: "bg-purple-600"
    }
  ];

  return (
    <section className="py-20 hero-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold font-poppins text-white mb-6">
            Proven Results
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Numbers that speak louder than words — see why startups choose us for their MVP development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-md border-white/20 rounded-2xl hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-8 text-center">
                <div className={`w-16 h-16 mx-auto mb-6 ${stat.bgColor} rounded-2xl flex items-center justify-center`}>
                  {stat.icon}
                </div>
                <div className="text-4xl lg:text-5xl font-bold font-poppins text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-xl font-semibold text-yellow-300 mb-2">
                  {stat.label}
                </div>
                <p className="text-blue-100 text-sm">
                  {stat.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Metrics */}
        <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
          <div className="text-white">
            <div className="text-3xl font-bold font-poppins mb-2">100%</div>
            <div className="text-blue-100">On-time Delivery</div>
          </div>
          <div className="text-white">
            <div className="text-3xl font-bold font-poppins mb-2">24h</div>
            <div className="text-blue-100">Response Time</div>
          </div>
          <div className="text-white">
            <div className="text-3xl font-bold font-poppins mb-2">30</div>
            <div className="text-blue-100">Days Free Support</div>
          </div>
        </div>
      </div>
    </section>
  );
}