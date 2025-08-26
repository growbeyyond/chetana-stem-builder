import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Users, GraduationCap, Award, Target } from "lucide-react";
import heroImage from "@/assets/hero-stem-lab.jpg";
import SEO from "@/components/SEO";
import StructuredData from "@/components/StructuredData";

const Index = () => {
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
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold text-primary-foreground leading-tight">
                  Math & Physics <br />
                  <span className="text-primary-light">by Robotics</span>
                </h1>
                <p className="text-xl text-primary-foreground/90 leading-relaxed">
                  Making learning fun, practical, and future-ready for students grades 3-10
                </p>
              </div>
              
              <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-6 border border-primary-foreground/20">
                <p className="text-primary-foreground/95 font-medium">
                  "Science and Mathematics should never feel abstract. Every concept can come alive 
                  through hands-on robotics and real-world applications."
                </p>
                <p className="text-primary-foreground/80 text-sm mt-2">— S. Prathyusha, Founder</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" variant="secondary" asChild>
                  <Link to="/programs" aria-label="Explore our STEM programs">
                    Explore Programs <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10" asChild>
                  <Link to="/contact" aria-label="Enroll in our programs">Enroll Now</Link>
                </Button>
              </div>
            </div>

            <div className="relative">
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
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-background" aria-labelledby="mission-heading">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 id="mission-heading" className="text-3xl lg:text-4xl font-bold text-foreground">Our Mission</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              To revolutionize STEM education by teaching Math and Physics through hands-on robotics, 
              making abstract concepts tangible and fostering a love for learning that lasts a lifetime. 
              We're building India's next generation of innovators and problem-solvers.
            </p>
          </div>
        </div>
      </section>

      {/* Key Offerings */}
      <section className="py-16 bg-gradient-card" aria-labelledby="offerings-heading">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 id="offerings-heading" className="text-3xl lg:text-4xl font-bold text-foreground mb-4">What We Offer</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive STEM education programs designed to make learning engaging and practical
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {keyOfferings.map((offering, index) => (
              <Card key={index} className="group hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="mx-auto w-16 h-16 bg-accent rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {offering.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{offering.title}</h3>
                  <p className="text-muted-foreground">{offering.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary" aria-labelledby="stats-heading">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="stats-heading" className="sr-only">Our Impact Statistics</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="space-y-2">
                <div className="text-3xl lg:text-4xl font-bold text-primary-foreground">
                  {stat.number}
                </div>
                <div className="text-primary-foreground/80 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-background" aria-labelledby="cta-heading">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 id="cta-heading" className="text-3xl lg:text-4xl font-bold text-foreground">
              Ready to Transform Learning?
            </h2>
            <p className="text-lg text-muted-foreground">
              Join thousands of students who are already experiencing the magic of learning 
              Math and Physics through robotics
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/contact" aria-label="Get started with our programs today">
                  Get Started Today <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/about" aria-label="Learn about our story and mission">Learn Our Story</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default Index;
