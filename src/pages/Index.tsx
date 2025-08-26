import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ArrowRight, Users, GraduationCap, Award, Target, Bot, Cpu, Rocket, Beaker, Calculator, Ruler, Lightbulb, Quote } from "lucide-react";
import heroImage from "@/assets/hero-stem-lab.jpg";
import SEO from "@/components/SEO";
import StructuredData from "@/components/StructuredData";
import RobotMascot from "@/components/decor/RobotMascot";
import SectionWave from "@/components/decor/SectionWave";
import PatternBackground from "@/components/decor/PatternBackground";
import TiltCard from "@/components/motion/TiltCard";
import AnimatedCounter from "@/components/motion/AnimatedCounter";
import { useInView } from "@/hooks/use-in-view";
import { useState, useEffect } from "react";

const Index = () => {
  const [typingComplete, setTypingComplete] = useState(false);
  const { ref: missionRef, isInView: missionInView } = useInView({ threshold: 0.3 });
  const { ref: statsRef, isInView: statsInView } = useInView({ threshold: 0.3 });

  // Typing animation effect
  useEffect(() => {
    const timer = setTimeout(() => setTypingComplete(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const skillChips = [
    { icon: <Bot className="h-4 w-4" />, label: "Robotics", color: "bg-primary/10 text-primary" },
    { icon: <Cpu className="h-4 w-4" />, label: "Arduino", color: "bg-success/10 text-success" },
    { icon: <Rocket className="h-4 w-4" />, label: "Innovation", color: "bg-warning/10 text-warning" },
    { icon: <Beaker className="h-4 w-4" />, label: "STEM", color: "bg-info/10 text-info" }
  ];

  const gradeBands = [
    {
      grades: "3-5",
      title: "Maths by Makers",
      description: "LEDs, simple circuits, gears, and measurement through builds",
      icon: <Calculator className="h-8 w-8" />,
      color: "from-primary/20 to-primary/10"
    },
    {
      grades: "6-8", 
      title: "Code the Concepts",
      description: "Arduino basics, sensors, logic, scratch/C++ intro",
      icon: <Cpu className="h-8 w-8" />,
      color: "from-success/20 to-success/10"
    },
    {
      grades: "9-10",
      title: "Physics by Projects", 
      description: "Motion, electricity, optics through real builds",
      icon: <Lightbulb className="h-8 w-8" />,
      color: "from-warning/20 to-warning/10"
    }
  ];

  const testimonials = [
    {
      quote: "Our students finally love physics. Projects make topics click.",
      author: "Headmistress, St. Mary's School",
      role: "School Administrator"
    },
    {
      quote: "My daughter built a line-following robot in 2 days. She's obsessed!",
      author: "Parent, Grade 5 Student",
      role: "Parent"
    },
    {
      quote: "Teacher training was practical and clear — we could implement immediately.",
      author: "Science Teacher, DAV Public School",
      role: "Educator"
    }
  ];
  const keyOfferings = [
    {
      icon: <GraduationCap className="h-8 w-8 text-primary" />,
      title: "School Programs",
      description: "Integrated robotics curriculum aligned with NEP 2020 for grades 3-10"
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "After-school Labs",
      description: "Weekend projects and hands-on robotics workshops"
    },
    {
      icon: <Target className="h-8 w-8 text-primary" />,
      title: "ATL Setup",
      description: "Complete Atal Tinkering Lab setup with mentorship support"
    },
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: "Teacher Training",
      description: "Comprehensive training programs for educators (100+ trained)"
    }
  ];

  const stats = [
    { number: "2000+", label: "Students Trained" },
    { number: "50+", label: "Partner Schools" },
    { number: "100+", label: "Teachers Certified" },
    { number: "5+", label: "Years Experience" }
  ];

  return (
    <>
      <SEO 
        title="Chetana STEM Labs - Math & Physics by Robotics | Hyderabad"
        description="Transform learning with hands-on robotics! Teaching Math and Physics through robotics for students grades 3-10 in Hyderabad. NEP 2020 aligned curriculum, 2000+ students trained."
        keywords="STEM education Hyderabad, robotics learning, Math physics robotics, NEP 2020, school robotics programs, ATL setup, teacher training, S Prathyusha"
        path="/"
      />
      <StructuredData type="organization" />
      <StructuredData type="course" data={{
        name: "Math & Physics by Robotics",
        description: "Comprehensive robotics curriculum teaching Math and Physics concepts for students grades 3-10"
      }} />
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero py-20 lg:py-32">
        <PatternBackground variant="circuit" className="absolute inset-0 opacity-30">
          <div></div>
        </PatternBackground>
        
        {/* Floating gears */}
        <div className="absolute top-10 left-10 opacity-20">
          <div className="w-16 h-16 border-2 border-primary-foreground rounded-full animate-gear-rotate">
            <div className="w-full h-full border-2 border-primary-foreground rounded-full relative">
              <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-primary-foreground rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-20 right-10 opacity-20">
          <div className="w-12 h-12 border-2 border-primary-foreground rounded-full animate-gear-rotate" style={{ animationDirection: 'reverse' }}>
            <div className="w-full h-full border-2 border-primary-foreground rounded-full relative">
              <div className="absolute top-1/2 left-1/2 w-1.5 h-1.5 bg-primary-foreground rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-center space-x-4 mb-4">
                  <RobotMascot size="md" className="animate-float" />
                  <div className="flex flex-wrap gap-2">
                    {skillChips.map((chip, index) => (
                      <div 
                        key={chip.label}
                        className={`inline-flex items-center space-x-2 px-3 py-1.5 rounded-full text-sm font-medium ${chip.color} animate-bounce-gentle`}
                        style={{ animationDelay: `${index * 0.2}s` }}
                      >
                        {chip.icon}
                        <span>{chip.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <h1 className={`text-4xl lg:text-6xl font-bold text-primary-foreground leading-tight transition-all duration-700 ${
                  typingComplete ? 'animate-fade-in' : 'opacity-0 translate-y-4'
                }`}>
                  <span className="relative inline-block">
                    Maths & Physics
                  </span>
                  <br />
                  <span className="text-primary-light bg-gradient-to-r from-primary-light to-primary-foreground bg-clip-text text-transparent">
                    by Robotics
                  </span>
                </h1>
                
                <p className={`text-xl text-primary-foreground/90 leading-relaxed transition-all duration-700 delay-300 ${
                  typingComplete ? 'animate-fade-in' : 'opacity-0 translate-y-4'
                }`}>
                  Making learning interactive, practical, and future-ready for students grades 3-10
                </p>
              </div>
              
              <div className={`bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-6 border border-primary-foreground/20 transition-all duration-700 delay-500 ${
                typingComplete ? 'animate-fade-in' : 'opacity-0 translate-y-4'
              }`}>
                <p className="text-primary-foreground/95 font-medium">
                  "Science and Mathematics should never feel abstract. Every concept can come alive 
                  through hands-on robotics and real-world applications."
                </p>
                <p className="text-primary-foreground/80 text-sm mt-2">— S. Prathyusha, Founder</p>
              </div>

              <div className={`flex flex-col sm:flex-row gap-4 transition-all duration-700 delay-700 ${
                typingComplete ? 'animate-fade-in' : 'opacity-0 translate-y-4'
              }`}>
                <Button size="lg" variant="secondary" className="hover:scale-105 transition-all duration-300" asChild>
                  <Link to="/programs" aria-label="Explore our STEM programs">
                    Explore Programs <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:scale-105 transition-all duration-300" asChild>
                  <Link to="/contact" aria-label="Enroll in our programs">Enroll Now</Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="relative animate-float" style={{ animationDelay: '1s' }}>
                <img
                  src={heroImage}
                  alt="Students learning with robots at Chetana STEM Labs"
                  className="rounded-2xl shadow-large w-full h-auto"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
        <SectionWave position="bottom" />
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-background relative" aria-labelledby="mission-heading">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div ref={missionRef} className={`max-w-3xl mx-auto space-y-6 transition-all duration-700 ${
            missionInView ? 'animate-fade-in' : 'opacity-0 translate-y-8'
          }`}>
            <h2 id="mission-heading" className="text-3xl lg:text-4xl font-bold text-foreground">Our Mission</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our mission is to <span className="text-primary font-semibold">spark curiosity</span> and <span className="text-primary font-semibold">confidence</span> in every student by blending Robotics with Maths and Physics education. We make abstract concepts feel real using hands-on kits, projects, and experiments aligned to NEP 2020.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gradient-card relative" aria-labelledby="why-choose-heading">
        <PatternBackground variant="dots" className="absolute inset-0 opacity-50">
          <div></div>
        </PatternBackground>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-12">
            <h2 id="why-choose-heading" className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Why Choose Us</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience the difference with our proven approach to STEM education
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: "Hands-on Learning",
                description: "Every concept is built with a kit or project — students learn by doing.",
                icon: <Ruler className="h-8 w-8" />,
                color: "text-primary"
              },
              {
                title: "NEP 2020 Aligned", 
                description: "Curriculum designed around competency-based learning outcomes.",
                icon: <GraduationCap className="h-8 w-8" />,
                color: "text-success"
              },
              {
                title: "Safe Lab Setup",
                description: "Child-safe components, tested setups, and mentor guidance.",
                icon: <Award className="h-8 w-8" />,
                color: "text-warning"
              }
            ].map((item, index) => (
              <TiltCard key={index} className="h-full">
                <Card className="h-full hover:shadow-medium transition-all duration-300 group">
                  <CardContent className="p-8 text-center space-y-4 h-full flex flex-col">
                    <div className={`mx-auto w-16 h-16 bg-gradient-to-br from-accent to-background rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 ${item.color}`}>
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
                    <p className="text-muted-foreground flex-grow">{item.description}</p>
                  </CardContent>
                </Card>
              </TiltCard>
            ))}
          </div>
        </div>
        <SectionWave position="bottom" />
      </section>

      {/* Key Offerings */}
      <section className="py-16 bg-background relative" aria-labelledby="offerings-heading">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 id="offerings-heading" className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Key Offerings</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive STEM education programs designed to make learning engaging and practical
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {keyOfferings.map((offering, index) => (
              <TiltCard key={index} className="h-full">
                <Card className={`group h-full hover:shadow-medium transition-all duration-500 hover:-translate-y-2 animate-fade-in`} 
                      style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardContent className="p-6 text-center space-y-4 h-full flex flex-col">
                    <div className="mx-auto w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                      {offering.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">{offering.title}</h3>
                    <p className="text-muted-foreground flex-grow">{offering.description}</p>
                  </CardContent>
                </Card>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Grade Bands */}
      <section className="py-16 bg-gradient-card relative" aria-labelledby="grade-bands-heading">
        <PatternBackground variant="circuit" className="absolute inset-0 opacity-30">
          <div></div>
        </PatternBackground>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-12">
            <h2 id="grade-bands-heading" className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Interactive Grade Bands</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Age-appropriate robotics curriculum designed for every learning stage
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {gradeBands.map((band, index) => (
              <TiltCard key={index} className="h-full">
                <Card className="group h-full hover:shadow-large transition-all duration-500 hover:-translate-y-2 overflow-hidden relative">
                  <div className={`absolute inset-0 bg-gradient-to-br ${band.color} opacity-0 group-hover:opacity-100 transition-all duration-500`}></div>
                  <CardContent className="p-8 text-center space-y-6 h-full flex flex-col relative z-10">
                    <div className="space-y-2">
                      <div className="inline-flex items-center justify-center w-12 h-8 bg-primary text-primary-foreground rounded-full text-sm font-bold">
                        {band.grades}
                      </div>
                      <div className={`mx-auto w-20 h-20 bg-gradient-to-br from-accent to-background rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:animate-wiggle transition-all duration-300 text-primary`}>
                        {band.icon}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">{band.title}</h3>
                    <p className="text-muted-foreground flex-grow leading-relaxed">{band.description}</p>
                  </CardContent>
                </Card>
              </TiltCard>
            ))}
          </div>
        </div>
        <SectionWave position="bottom" />
      </section>

      {/* Impact Snapshot */}
      <section className="py-16 bg-primary relative overflow-hidden" aria-labelledby="stats-heading">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary-dark"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-12">
            <h2 id="stats-heading" className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-4">Impact Snapshot</h2>
            <p className="text-primary-foreground/80 text-lg">Transforming STEM education across India</p>
          </div>
          <div ref={statsRef} className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { end: 2000, label: "Students Trained", suffix: "+", icon: <Users className="h-6 w-6" /> },
              { end: 50, label: "Partner Schools", suffix: "+", icon: <GraduationCap className="h-6 w-6" /> },
              { end: 100, label: "Teachers Certified", suffix: "+", icon: <Award className="h-6 w-6" /> },
              { end: 5, label: "Years Experience", suffix: "+", icon: <Target className="h-6 w-6" /> }
            ].map((stat, index) => (
              <div key={index} className="space-y-3 group">
                <div className="flex items-center justify-center space-x-2 text-primary-foreground/60 group-hover:text-primary-foreground transition-colors duration-300">
                  {stat.icon}
                </div>
                <div className="text-4xl lg:text-5xl font-bold text-primary-foreground">
                  <AnimatedCounter 
                    end={stat.end} 
                    suffix={stat.suffix}
                    duration={2000}
                    delay={index * 200}
                  />
                </div>
                <div className="text-primary-foreground/80 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-background" aria-labelledby="testimonials-heading">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 id="testimonials-heading" className="text-3xl lg:text-4xl font-bold text-foreground mb-4">What People Say</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Hear from educators, parents, and students who've experienced our programs
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Carousel className="w-full">
              <CarouselContent>
                {testimonials.map((testimonial, index) => (
                  <CarouselItem key={index}>
                    <Card className="shadow-medium hover:shadow-large transition-all duration-300">
                      <CardContent className="p-8 text-center space-y-6">
                        <Quote className="h-12 w-12 text-primary mx-auto opacity-50" />
                        <blockquote className="text-xl italic text-foreground leading-relaxed">
                          "{testimonial.quote}"
                        </blockquote>
                        <div className="space-y-1">
                          <p className="font-semibold text-foreground">{testimonial.author}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-4" />
              <CarouselNext className="right-4" />
            </Carousel>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-card relative" aria-labelledby="cta-heading">
        <PatternBackground variant="dots" className="absolute inset-0 opacity-30">
          <div></div>
        </PatternBackground>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="max-w-2xl mx-auto space-y-8">
            <div className="flex items-center justify-center mb-6">
              <RobotMascot size="md" className="mr-4" />
              <h2 id="cta-heading" className="text-3xl lg:text-4xl font-bold text-foreground">
                Ready to Transform Learning?
              </h2>
            </div>
            <p className="text-lg text-muted-foreground">
              Join thousands of students who are already experiencing the magic of learning 
              Math and Physics through robotics
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="hover:scale-105 transition-all duration-300 animate-pulse-soft" asChild>
                <Link to="/contact" aria-label="Get started with our programs today">
                  Get Started Today <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="hover:scale-105 transition-all duration-300" asChild>
                <Link to="/about" aria-label="Learn about our story and mission">Learn Our Story</Link>
              </Button>
            </div>
          </div>
        </div>
        <SectionWave position="bottom" />
      </section>
    </div>
    </>
  );
};

export default Index;
