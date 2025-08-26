import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import StructuredData from "@/components/StructuredData";
import { useInView } from "@/hooks/use-in-view";
import AnimatedCounter from "@/components/motion/AnimatedCounter";
import RobotMascot from "@/components/decor/RobotMascot";
import SectionWave from "@/components/decor/SectionWave";
import { useRef } from "react";
import { 
  Heart, 
  Lightbulb, 
  Users, 
  Trophy,
  GraduationCap,
  Target,
  Award,
  ArrowRight,
  BookOpen,
  Zap
} from "lucide-react";

const About = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef);

  const values = [
    {
      icon: <Lightbulb className="h-8 w-8 text-primary" />,
      title: "Innovation",
      description: "We believe in pushing boundaries and finding creative solutions to make learning engaging and effective."
    },
    {
      icon: <Heart className="h-8 w-8 text-primary" />,
      title: "Clarity", 
      description: "Every complex concept can be simplified and made understandable through the right approach and tools."
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Empowerment",
      description: "We empower students and teachers with skills and confidence to excel in STEM fields."
    }
  ];

  const milestones = [
    {
      year: "2019",
      title: "The Beginning",
      description: "S. Prathyusha founded Chetana STEM Labs with a vision to make Math and Physics practical and engaging"
    },
    {
      year: "2020", 
      title: "First School Partnership",
      description: "Successfully implemented our first integrated robotics program, showing 35% improvement in student engagement"
    },
    {
      year: "2021",
      title: "Teacher Training Launch",
      description: "Started comprehensive teacher training programs, certifying our first batch of 25 educators"  
    },
    {
      year: "2022",
      title: "ATL Program Expansion",
      description: "Expanded to setting up complete Atal Tinkering Labs across rural and urban schools"
    },
    {
      year: "2023",
      title: "Regional Impact",
      description: "Reached 1000+ students across Telangana, recognized by local education authorities"
    },
    {
      year: "2024",
      title: "National Recognition", 
      description: "2000+ students trained, 50+ schools partnered, establishing ourselves as leaders in robotics education"
    }
  ];

  const impactStats = [
    { number: 2000, label: "Students Transformed", icon: <GraduationCap className="h-6 w-6" /> },
    { number: 50, label: "Partner Schools", icon: <Users className="h-6 w-6" /> },
    { number: 100, label: "Teachers Trained", icon: <Award className="h-6 w-6" /> },
    { number: 15, label: "ATLs Established", icon: <Target className="h-6 w-6" /> }
  ];

  return (
    <>
      <SEO 
        title="About Us - Chetana STEM Labs | S. Prathyusha's Vision for STEM Education"
        description="Learn about S. Prathyusha's journey and vision behind Chetana STEM Labs. Discover our mission to transform STEM education through robotics for 2000+ students across India."
        keywords="S Prathyusha founder, Chetana STEM Labs story, robotics education vision, STEM transformation India, educational innovation Hyderabad"
        path="/about"
      />
      <StructuredData type="organization" />
      
      <div className="min-h-screen py-16 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 animate-pulse">
            <div className="w-32 h-32 bg-gradient-primary rounded-full"></div>
          </div>
          <div className="absolute top-1/2 right-10 animate-spin-slow">
            <Zap className="w-24 h-24 text-secondary" />
          </div>
          <div className="absolute bottom-20 left-1/3 animate-bounce">
            <BookOpen className="w-16 h-16 text-info" />
          </div>
          <div className="absolute top-1/3 right-1/3">
            <RobotMascot className="w-20 h-20 text-success animate-float" />
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <div 
            ref={headerRef}
            className={`text-center mb-16 transition-all duration-1000 ${
              headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 bg-gradient-primary bg-clip-text text-transparent">
              About Chetana STEM Labs
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Founded by S. Prathyusha to make science tangible and joyful.
            </p>
          </div>

          {/* Founder's Story */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            <div className="space-y-6">
              <div className="space-y-4">
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                  The Journey of S. Prathyusha
                </h2>
                <p className="text-lg text-primary font-medium italic animate-fade-in">
                  "Science and Mathematics should never feel abstract."
                </p>
              </div>
              
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p className="hover:text-foreground transition-colors duration-300">
                  S. Prathyusha's journey began as a passionate educator who noticed that students 
                  often struggled with Math and Physics because these subjects felt disconnected 
                  from their daily lives. Traditional teaching methods, while well-intentioned, 
                  weren't reaching students in meaningful ways.
                </p>
                
                <p className="hover:text-foreground transition-colors duration-300">
                  Armed with a background in engineering and education, Prathyusha saw an opportunity 
                  to bridge this gap through robotics. She realized that when students build robots 
                  that move, sense, and react, they naturally encounter mathematical concepts like 
                  geometry, algebra, and physics principles like motion, energy, and forces.
                </p>
                
                <p className="hover:text-foreground transition-colors duration-300">
                  In 2019, she founded Chetana STEM Labs in Hyderabad with a simple yet powerful 
                  vision: to make every Math and Physics concept tangible through hands-on robotics. 
                  What started as a small initiative has now transformed the learning experience 
                  for thousands of students across India.
                </p>
              </div>
            </div>

            <Card className="bg-gradient-card shadow-medium hover:shadow-glow transition-all duration-500 hover:scale-105">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                      <span className="text-3xl font-bold text-primary-foreground">SP</span>
                    </div>
                    <h3 className="text-xl font-bold text-foreground">S. Prathyusha</h3>
                    <p className="text-muted-foreground">Founder & Chief Education Officer</p>
                  </div>

                  <blockquote className="text-center italic text-muted-foreground hover:text-foreground transition-colors duration-300">
                    "Every time I see a student's eyes light up when their robot completes a task, 
                    I'm reminded why I started this journey. That moment of understanding, of connection 
                    between theory and practice, is what drives our mission forward."
                  </blockquote>

                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 hover:translate-x-2 transition-transform duration-300">
                      <GraduationCap className="h-5 w-5 text-primary animate-bounce" />
                      <span className="text-sm text-muted-foreground">M.Tech in Robotics & Education</span>
                    </div>
                    <div className="flex items-center space-x-3 hover:translate-x-2 transition-transform duration-300">
                      <Award className="h-5 w-5 text-primary animate-pulse" />
                      <span className="text-sm text-muted-foreground">5+ Years in STEM Education</span>
                    </div>
                    <div className="flex items-center space-x-3 hover:translate-x-2 transition-transform duration-300">
                      <Trophy className="h-5 w-5 text-primary animate-wiggle" />
                      <span className="text-sm text-muted-foreground">Regional Education Innovation Award 2023</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Values */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 bg-gradient-primary bg-clip-text text-transparent">
                Our Values
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                The principles that guide everything we do at Chetana STEM Labs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, index) => {
                const valueRef = useRef<HTMLDivElement>(null);
                const valueInView = useInView(valueRef);
                
                return (
                  <Card 
                    key={index} 
                    ref={valueRef}
                    className={`text-center shadow-soft hover:shadow-medium transition-all duration-500 hover:-translate-y-2 group ${
                      valueInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
                    style={{ transitionDelay: `${index * 200}ms` }}
                  >
                    <CardContent className="p-8 space-y-4">
                      <div className="w-16 h-16 bg-gradient-accent rounded-lg flex items-center justify-center mx-auto group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300">
                        {value.icon}
                      </div>
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                        {value.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Timeline */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 bg-gradient-primary bg-clip-text text-transparent">
                Our Journey
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Key milestones in our mission to transform STEM education
              </p>
            </div>

            <div className="space-y-8">
              {milestones.map((milestone, index) => {
                const milestoneRef = useRef<HTMLDivElement>(null);
                const milestoneInView = useInView(milestoneRef);
                
                return (
                  <div 
                    key={index} 
                    ref={milestoneRef}
                    className={`flex items-start space-x-6 transition-all duration-500 ${
                      milestoneInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                    }`}
                    style={{ transitionDelay: `${index * 200}ms` }}
                  >
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 animate-pulse">
                        <span className="text-primary-foreground font-bold">{milestone.year}</span>
                      </div>
                    </div>
                    <div className="flex-grow">
                      <Card className="shadow-soft hover:shadow-medium hover:-translate-y-1 transition-all duration-300">
                        <CardContent className="p-6">
                          <h3 className="text-xl font-bold text-foreground mb-2 hover:text-primary transition-colors duration-300">
                            {milestone.title}
                          </h3>
                          <p className="text-muted-foreground leading-relaxed">{milestone.description}</p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Impact Stats */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 bg-gradient-primary bg-clip-text text-transparent">
                Our Impact
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Numbers that reflect the change we're making in STEM education
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {impactStats.map((stat, index) => {
                const statRef = useRef<HTMLDivElement>(null);
                const statInView = useInView(statRef);
                
                return (
                  <Card 
                    key={index} 
                    ref={statRef}
                    className={`text-center shadow-soft hover:shadow-medium hover:scale-105 transition-all duration-500 ${
                      statInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
                    style={{ transitionDelay: `${index * 200}ms` }}
                  >
                    <CardContent className="p-6 space-y-4">
                      <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center mx-auto text-primary animate-bounce">
                        {stat.icon}
                      </div>
                      <div className="text-3xl font-bold text-foreground">
                        <AnimatedCounter 
                          end={stat.number} 
                          duration={2000}
                        />
                        <span>+</span>
                      </div>
                      <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center bg-gradient-primary rounded-2xl p-12 hover:scale-105 transition-transform duration-500 animate-fade-in">
            <h2 className="text-3xl font-bold text-primary-foreground mb-4">
              Join Our Mission
            </h2>
            <p className="text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Be part of the educational transformation. Whether you're a school, teacher, parent, 
              or student, there's a place for you in our journey to make STEM education engaging and accessible.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary" 
                className="hover:scale-110 transition-transform duration-300 animate-pulse-soft" 
                asChild
              >
                <Link to="/programs">
                  Explore Programs <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:scale-110 transition-all duration-300"
                asChild
              >
                <Link to="/contact">Get In Touch</Link>
              </Button>
            </div>
          </div>
        </div>
        
        <SectionWave position="bottom" className="text-accent" />
      </div>
    </>
  );
};

export default About;