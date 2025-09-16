import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  Play,
  Heart,
  Building2,
  Users,
  Lightbulb,
  Shield,
  Target,
  Zap,
  CheckCircle,
  Mail,
  Phone,
  MapPin,
  Instagram,
  Facebook,
  Linkedin,
  Youtube,
  Send,
  Award,
  Star,
  Crown,
} from "lucide-react";
import { ScrollReveal } from "./components/ScrollReveal";
import { Counter } from "./components/Counter";
import logo from "./images/event_logo.png";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We will get back to you soon.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Header */}
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-700 ${
          scrolled
            ? "bg-white/98 backdrop-blur-xl shadow-2xl border-b border-emerald-100"
            : "bg-white/95 backdrop-blur-sm shadow-lg border-b border-emerald-50"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center group">
              {/* <Crown className="w-8 h-8 text-emerald-600 mr-3 group-hover:rotate-12 transition-transform duration-500" /> */}
              {/* <div className="text-2xl font-bold text-emerald-900 tracking-tight">
                Moments
                <span className="block text-sm font-normal text-emerald-600 -mt-1">
                  Event & Entertainment
                </span>
              </div> */}
              <img
                src={logo}
                alt=""
                style={{ height: "65px", width: "150px" }}
              />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-12">
              {[
                { name: "Home", id: "home" },
                { name: "Services", id: "services" },
                { name: "Core Values", id: "values" },
                { name: "Numbers", id: "numbers" },
                { name: "Contact", id: "contact" },
              ].map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.id)}
                  className="relative text-emerald-700 hover:text-emerald-900 transition-all duration-500 font-medium text-lg group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-600 transition-all duration-500 group-hover:w-full"></span>
                </button>
              ))}
            </nav>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-emerald-700 hover:text-emerald-900 transition-colors duration-300"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-500 ${
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          } overflow-hidden bg-white/98 backdrop-blur-xl border-t border-emerald-100`}
        >
          <div className="px-4 py-6 space-y-4">
            {[
              { name: "Home", id: "home" },
              { name: "Services", id: "services" },
              { name: "Core Values", id: "values" },
              { name: "Numbers", id: "numbers" },
              { name: "Contact", id: "contact" },
            ].map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left px-4 py-3 text-emerald-700 hover:text-emerald-900 hover:bg-emerald-50 rounded-xl font-medium text-lg transition-all duration-300"
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/1616113/pexels-photo-1616113.jpeg?auto=compress&cs=tinysrgb&w=1920')",
          }}
        >
          <div className="absolute inset-0 bg-emerald-900/70"></div>
        </div>

        <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-4 sm:px-6">
          <ScrollReveal>
            <div className="mb-8">
              <Award className="w-16 h-16 mx-auto mb-6 text-white animate-pulse" />
              <h1 className="text-4xl sm:text-5xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 leading-tight tracking-tight">
                We Create
                <span className="block text-emerald-100 font-light italic mt-2">
                  Unforgettable Moments
                </span>
              </h1>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <p className="text-lg sm:text-xl md:text-2xl mb-8 sm:mb-12 font-light text-emerald-50 max-w-3xl mx-auto leading-relaxed px-4">
              Premium event planning and entertainment services since 2008
            </p>
          </ScrollReveal>

          <ScrollReveal delay={600}>
            <button
              onClick={() => scrollToSection("services")}
              className="group bg-emerald-600 hover:bg-emerald-700 text-white px-8 sm:px-12 py-4 sm:py-6 rounded-full text-lg sm:text-xl font-semibold hover:scale-105 transform transition-all duration-500 shadow-2xl hover:shadow-emerald-600/50 border border-emerald-500 hover:border-emerald-400"
            >
              Explore Services
              <Play
                className="inline-block ml-3 group-hover:translate-x-2 transition-transform duration-300"
                size={24}
              />
            </button>
          </ScrollReveal>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 bg-emerald-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-20">
              <Star className="w-12 h-12 mx-auto mb-6 text-emerald-600" />
              <h2 className="text-5xl md:text-6xl font-bold text-emerald-900 mb-6 tracking-tight">
                Our <span className="font-light italic">Services</span>
              </h2>
              <p className="text-2xl text-emerald-700 max-w-3xl mx-auto font-light leading-relaxed">
                We specialize in creating extraordinary experiences that leave
                lasting impressions
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                icon: Heart,
                title: "Premium Weddings",
                description:
                  "We are well recognized premium wedding planning company with high experience, constant flow & zeal of great work. We cater to all the requirements & give them unforgettable memories of lifetime.",
                delay: 0,
              },
              {
                icon: Building2,
                title: "Corporate Events",
                description:
                  "Moments serve as a catalyst for the tremendous growth & development of the industry by organizing corporate events and conferences. We handle every single detail from planning to production with ease.",
                delay: 200,
              },
              {
                icon: Users,
                title: "Exhibitions",
                description:
                  "We look at everything from conception to the final show wrap-up with a sharp eye for every detail. Our expos are designed to achieve excellence and are stalwarts in exhibition industry.",
                delay: 400,
              },
            ].map((service, index) => (
              <ScrollReveal key={index} delay={service.delay}>
                <div className="group bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-4 border border-slate-100 hover:border-slate-200 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-emerald-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-emerald-600 rounded-2xl mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                      <service.icon className="text-white" size={36} />
                    </div>
                    <h3 className="text-3xl font-bold text-emerald-900 mb-6 tracking-tight">
                      {service.title}
                    </h3>
                    <p className="text-emerald-700 mb-8 leading-relaxed text-lg font-light">
                      {service.description}
                    </p>
                    <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-full hover:shadow-xl transform hover:scale-105 transition-all duration-500 font-semibold">
                      Read More
                    </button>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-32 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <Crown className="w-16 h-16 mx-auto mb-8 text-emerald-600" />
            <h2 className="text-5xl md:text-6xl font-bold text-emerald-900 mb-12 tracking-tight leading-tight">
              Hello – We are{" "}
              <span className="font-light italic block mt-4 text-emerald-700">
                Moments Event & Entertainment
              </span>
            </h2>
            <p className="text-2xl text-emerald-700 leading-relaxed font-light">
              Moments Event and Entertainment is an event management company
              established in 2008 and specializes in Wedding Planning, Theme
              Decoration, Corporate Events, Exhibitions, Entertainment Events,
              Celebrity and Artist Management, Builders Site Launching, and
              Religious Functions.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Core Values Section */}
      <section id="values" className="py-32 bg-emerald-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-20">
              <Zap className="w-12 h-12 mx-auto mb-6 text-emerald-600" />
              <h2 className="text-5xl md:text-6xl font-bold text-emerald-900 mb-6 tracking-tight">
                Our <span className="font-light italic">Core Values</span>
              </h2>
              <p className="text-2xl text-emerald-700 font-light">
                The principles that guide everything we do
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: "GRATITUDE",
                description:
                  "Build Strong Relationships. We as organization are very humble and always practice gratitude as it always assist in building strong relationship.",
                delay: 0,
              },
              {
                icon: Lightbulb,
                title: "FREEDOM",
                description:
                  "Freedom of thought, of action and of words. We give ample freedom to our clients and stakeholders to express their ideas and we always try and convert it to reality.",
                delay: 100,
              },
              {
                icon: Shield,
                title: "COMMITMENT",
                description:
                  "Walk the Talk. We are determined to deliver what is committed through our proactive support, relatively high productivity and an awareness of quality.",
                delay: 200,
              },
              {
                icon: Users,
                title: "SYNERGY",
                description:
                  "Combined Actions to one Goal. As a team we are in absolute sync that what is to be achieved be it event or company targets.",
                delay: 300,
              },
              {
                icon: Target,
                title: "ACCURACY",
                description:
                  "First Time Right. It's the top priority for us as we are in the business of creating moments of lifetime for our clients.",
                delay: 400,
              },
            ].map((value, index) => (
              <ScrollReveal key={index} delay={value.delay}>
                <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-2 group border border-slate-100 hover:border-slate-200 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-emerald-50 rounded-full -mr-10 -mt-10 group-hover:scale-150 transition-transform duration-700"></div>
                  <div className="relative">
                    <div className="w-16 h-16 bg-emerald-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                      <value.icon className="text-white" size={28} />
                    </div>
                    <h3 className="text-2xl font-bold text-emerald-900 mb-4 tracking-tight">
                      {value.title}
                    </h3>
                    <p className="text-emerald-700 leading-relaxed font-light">
                      {value.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Numbers Section */}
      <section
        id="numbers"
        className="py-32 bg-emerald-900 relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
              backgroundSize: "20px 20px",
            }}
          ></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <ScrollReveal>
            <div className="text-center mb-20">
              <Award className="w-12 h-12 mx-auto mb-6 text-white" />
              <h2 className="text-5xl md:text-6xl font-bold text-emerald-50 mb-6 tracking-tight">
                Our Achievements
              </h2>
              <p className="text-2xl text-emerald-200 font-light">
                Numbers that speak for our excellence
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {[
              { number: 726, label: "Social Events" },
              { number: 231, label: "Corporate Events" },
              { number: 11, label: "Exhibitions" },
              { number: 82, label: "Client Retention", suffix: "%" },
            ].map((stat, index) => (
              <ScrollReveal key={index} delay={index * 150}>
                <div className="text-center text-white group">
                  <div className="mb-4">
                    <Counter end={stat.number} suffix={stat.suffix || ""} />
                  </div>
                  <div className="text-xl md:text-2xl font-light text-emerald-200 group-hover:text-white transition-colors duration-500">
                    {stat.label}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-emerald-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-20">
              <Mail className="w-12 h-12 mx-auto mb-6 text-emerald-600" />
              <h2 className="text-5xl md:text-6xl font-bold text-emerald-900 mb-6 tracking-tight">
                Get In <span className="font-light italic">Touch</span>
              </h2>
              <p className="text-2xl text-emerald-700 font-light">
                Let's create your next unforgettable moment together
              </p>
            </div>
          </ScrollReveal>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <ScrollReveal>
              <div className="space-y-12">
                <div className="flex items-start space-x-6 group">
                  <div className="w-16 h-16 bg-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-500">
                    <MapPin className="text-white" size={28} />
                  </div>
                  <div>
                    <h3 className="font-bold text-emerald-900 mb-3 text-xl">
                      Communication Address
                    </h3>
                    <p className="text-emerald-700 text-lg font-light leading-relaxed">
                      B-912, Mondeal Square, Above Nexa Showroom, Near Crowne
                      Plaza, SG Highway, Ahmedabad.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-6 group">
                  <div className="w-16 h-16 bg-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-500">
                    <MapPin className="text-white" size={28} />
                  </div>
                  <div>
                    <h3 className="font-bold text-emerald-900 mb-3 text-xl">
                      Registered Address
                    </h3>
                    <p className="text-emerald-700 text-lg font-light leading-relaxed">
                      607, Abhijyot Square, B/h. Sarkhej - Gandhinagar Highway,
                      Divya Bhaskar Press, Makarba, Ahmedabad, Gujarat, 380051.
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-6 group">
                  <div className="w-16 h-16 bg-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-500">
                    <Mail className="text-white" size={28} />
                  </div>
                  <div>
                    <h3 className="font-bold text-emerald-900 mb-2 text-xl">
                      Email
                    </h3>
                    <a
                      href="mailto:harshkuhikar68@gmail.com"
                      className="text-emerald-700 hover:text-emerald-900 text-lg font-light transition-colors duration-300"
                    >
                      harshkuhikar68@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-6 group">
                  <div className="w-16 h-16 bg-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-500">
                    <Phone className="text-white" size={28} />
                  </div>
                  <div>
                    <h3 className="font-bold text-emerald-900 mb-2 text-xl">
                      Phone
                    </h3>
                    <div className="text-emerald-700 text-lg font-light">
                      <p>+91 96876 12444</p>
                      <p>+91 75748 11444</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Contact Form */}
            <ScrollReveal delay={200}>
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-3xl p-12 shadow-2xl border border-slate-100"
              >
                <div className="space-y-8">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-lg font-semibold text-emerald-900 mb-3"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-6 py-4 border-2 border-emerald-200 rounded-xl focus:ring-2 focus:ring-emerald-600 focus:border-transparent transition-all duration-500 text-lg font-light"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-lg font-semibold text-emerald-900 mb-3"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-6 py-4 border-2 border-emerald-200 rounded-xl focus:ring-2 focus:ring-emerald-600 focus:border-transparent transition-all duration-500 text-lg font-light"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-lg font-semibold text-emerald-900 mb-3"
                    >
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-6 py-4 border-2 border-emerald-200 rounded-xl focus:ring-2 focus:ring-emerald-600 focus:border-transparent transition-all duration-500 text-lg font-light"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-lg font-semibold text-emerald-900 mb-3"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={5}
                      required
                      className="w-full px-6 py-4 border-2 border-emerald-200 rounded-xl focus:ring-2 focus:ring-emerald-600 focus:border-transparent transition-all duration-500 text-lg font-light resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-5 rounded-xl font-semibold hover:shadow-2xl transform hover:scale-[1.02] transition-all duration-500 flex items-center justify-center space-x-3 text-lg"
                  >
                    <Send size={24} />
                    <span>Send Message</span>
                  </button>
                </div>
              </form>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-emerald-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
              backgroundSize: "20px 20px",
            }}
          ></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <div className="flex items-center justify-center mb-8">
              {/* <Crown className="w-12 h-12 text-white mr-4" />
              <div className="text-4xl font-bold text-white tracking-tight">
                Moments
                <span className="block text-lg font-light text-emerald-200 -mt-2">
                  Event & Entertainment
                </span>
              </div> */}
              <img
                src={logo}
                alt=""
                style={{ height: "100px", width: "300px" }}
              />
            </div>

            <div className="flex justify-center space-x-8 mb-12">
              {[
                { icon: Instagram, href: "#", label: "Instagram" },
                { icon: Facebook, href: "#", label: "Facebook" },
                { icon: Linkedin, href: "#", label: "LinkedIn" },
                { icon: Youtube, href: "#", label: "YouTube" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-16 h-16 bg-emerald-800 hover:bg-emerald-700 rounded-xl flex items-center justify-center hover:scale-110 transition-all duration-500 group"
                >
                  <social.icon
                    size={28}
                    className="group-hover:scale-110 transition-transform duration-300"
                  />
                </a>
              ))}
            </div>

            <p className="text-emerald-200 text-lg font-light">
              Copyright © 2022 Moments Event & Entertainment Pvt. Ltd.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
