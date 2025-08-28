import Link from "next/link";
import { 
  Shield, 
  Globe, 
  Clock, 
  Award, 
  ChevronRight,
  Star,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Lock,
  Zap
} from "lucide-react";

export default function Home() {
  const features = [
    {
      icon: Shield,
      title: "Comprehensive Coverage",
      description: "Protection against theft, damage, and mysterious disappearance worldwide.",
    },
    {
      icon: Globe,
      title: "Worldwide Protection",
      description: "Your watches are covered anywhere in the world, whether at home or traveling.",
    },
    {
      icon: Clock,
      title: "24/7 Claims Support",
      description: "Round-the-clock assistance when you need it most, with fast claim processing.",
    },
    {
      icon: Award,
      title: "Agreed Value Coverage",
      description: "Get the full insured value with no depreciation at the time of loss.",
    },
  ];

  const coverageTypes = [
    {
      title: "Luxury Watches",
      description: "Rolex, Patek Philippe, Audemars Piguet, and more",
      image: "🎯",
    },
    {
      title: "Vintage Collections",
      description: "Rare and collectible timepieces with historical value",
      image: "⌚",
    },
    {
      title: "Sports Watches",
      description: "Dive watches, racing chronographs, and tool watches",
      image: "🏃",
    },
    {
      title: "Smart Watches",
      description: "Apple Watch, TAG Heuer Connected, and other smart timepieces",
      image: "📱",
    },
  ];

  const testimonials = [
    {
      name: "Michael Chen",
      role: "Watch Collector",
      content: "Lume gave me peace of mind for my entire collection. The coverage is comprehensive and the service is exceptional.",
      rating: 5,
    },
    {
      name: "Sarah Williams",
      role: "Business Owner",
      content: "When my Rolex was damaged during travel, Lume handled everything perfectly. Claims process was smooth and fast.",
      rating: 5,
    },
    {
      name: "David Rodriguez",
      role: "Tech Executive",
      content: "Best watch insurance I've found. Great rates and they actually understand luxury timepieces.",
      rating: 5,
    },
  ];

  const steps = [
    {
      number: "01",
      title: "Get a Quote",
      description: "Tell us about your watches and get an instant quote online.",
    },
    {
      number: "02",
      title: "Customize Coverage",
      description: "Choose your coverage options and deductible that fits your needs.",
    },
    {
      number: "03",
      title: "Instant Protection",
      description: "Complete your purchase and get immediate coverage confirmation.",
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-50 via-white to-secondary-50 overflow-hidden">
        <div className="container relative py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium">
                <Sparkles className="h-4 w-4" />
                Premium Watch Insurance
              </div>
              <h1 className="heading-1 text-gray-900">
                Protect Your <span className="text-gradient">Timepiece</span> Collection
              </h1>
              <p className="text-xl text-gray-600">
                Comprehensive insurance coverage for luxury watches, vintage collections, 
                and modern timepieces. Get instant quotes and worldwide protection.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link href="/quote" className="btn-primary">
                  Get Instant Quote
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <Link href="/coverage" className="btn-secondary">
                  View Coverage
                  <ChevronRight className="h-5 w-5" />
                </Link>
              </div>
              <div className="flex items-center gap-6 pt-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="h-10 w-10 rounded-full bg-gray-300 border-2 border-white"
                    />
                  ))}
                </div>
                <div>
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold text-gray-900">10,000+</span> watches insured
                  </p>
                </div>
              </div>
            </div>
            <div className="relative lg:pl-12">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-secondary-400 rounded-3xl blur-3xl opacity-20"></div>
                <div className="relative bg-white rounded-3xl shadow-2xl p-8">
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {[
                      { label: "Active Policies", value: "10K+" },
                      { label: "Claims Paid", value: "$50M+" },
                      { label: "Satisfaction", value: "99%" },
                      { label: "Response Time", value: "<2hrs" },
                    ].map((stat) => (
                      <div key={stat.label} className="text-center">
                        <p className="text-2xl font-bold text-primary-600">{stat.value}</p>
                        <p className="text-sm text-gray-600">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                  <div className="border-t pt-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm text-gray-600">Trustpilot Rating</span>
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                    <div className="bg-primary-50 rounded-lg p-3">
                      <p className="text-sm text-primary-700 font-medium">
                        "Best watch insurance provider" - Forbes 2024
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="heading-2 text-gray-900 mb-4">
              Why Choose Lume Insurance?
            </h2>
            <p className="text-lg text-gray-600">
              We specialize in watch insurance, providing tailored coverage that traditional insurers can't match.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group hover:shadow-xl transition-all duration-300 rounded-2xl p-6 bg-gray-50 hover:bg-white"
              >
                <div className="mb-4 p-3 bg-primary-100 rounded-lg w-fit group-hover:bg-primary-600 transition-colors">
                  <feature.icon className="h-6 w-6 text-primary-600 group-hover:text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Types */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="heading-2 text-gray-900 mb-4">
              Coverage for Every Collection
            </h2>
            <p className="text-lg text-gray-600">
              From luxury Swiss watches to smart wearables, we've got you covered.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coverageTypes.map((type) => (
              <Link
                key={type.title}
                href={`/coverage/${type.title.toLowerCase().replace(" ", "-")}`}
                className="group relative overflow-hidden rounded-2xl bg-white border border-gray-200 hover:border-primary-300 transition-all hover:shadow-lg"
              >
                <div className="p-6">
                  <div className="text-4xl mb-4">{type.image}</div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900 group-hover:text-primary-600 transition-colors">
                    {type.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {type.description}
                  </p>
                  <div className="mt-4 flex items-center text-primary-600 text-sm font-medium">
                    Learn more
                    <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="heading-2 text-gray-900 mb-4">
              Get Covered in Minutes
            </h2>
            <p className="text-lg text-gray-600">
              Our streamlined process makes protecting your watches quick and easy.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connection line for desktop */}
            <div className="hidden md:block absolute top-16 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-primary-200 via-primary-400 to-primary-200"></div>
            
            {steps.map((step, index) => (
              <div key={step.number} className="relative">
                <div className="text-center">
                  <div className="relative inline-flex items-center justify-center w-16 h-16 mb-4">
                    <div className="absolute inset-0 bg-primary-600 rounded-full"></div>
                    <span className="relative text-white font-bold text-xl">{step.number}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/quote" className="btn-primary">
              Start Your Quote
              <Zap className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="heading-2 text-gray-900 mb-4">
              Trusted by Watch Enthusiasts
            </h2>
            <p className="text-lg text-gray-600">
              See what our customers say about their experience with Lume.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 bg-primary-100 rounded-full"></div>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-800">
        <div className="container text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="heading-2 text-white mb-4">
              Ready to Protect Your Collection?
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Get a personalized quote in under 2 minutes. No obligations, instant coverage available.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/quote" className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors inline-flex items-center justify-center gap-2">
                <Lock className="h-5 w-5" />
                Get Your Quote
              </Link>
              <Link href="/contact" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors inline-flex items-center justify-center gap-2">
                Talk to an Expert
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
            <div className="mt-8 flex items-center justify-center gap-6 text-primary-100">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5" />
                <span>No hidden fees</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5" />
                <span>Cancel anytime</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5" />
                <span>24/7 support</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}