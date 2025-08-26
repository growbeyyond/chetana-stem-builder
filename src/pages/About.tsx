import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import StructuredData from "@/components/StructuredData";
import { 
  Heart, 
  Lightbulb, 
  Users, 
  Trophy,
  GraduationCap,
  Target,
  Award,
  ArrowRight
} from "lucide-react";

const About = () => {
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
    { number: "2000+", label: "Students Transformed", icon: <GraduationCap className="h-6 w-6" /> },
    { number: "50+", label: "Partner Schools", icon: <Users className="h-6 w-6" /> },
    { number: "100+", label: "Teachers Trained", icon: <Award className="h-6 w-6" /> },
    { number: "15+", label: "ATLs Established", icon: <Target className="h-6 w-6" /> }
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
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            About Chetana STEM Labs
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Born from a passion to transform education, we're on a mission to make 
            Science and Mathematics feel less abstract and more accessible to every student.
          </p>
        </div>

        {/* Founder's Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                The Journey of S. Prathyusha
              </h2>
              <p className="text-lg text-primary font-medium">
                "Science and Mathematics should never feel abstract."
              </p>
            </div>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                S. Prathyusha's journey began as a passionate educator who noticed that students 
                often struggled with Math and Physics because these subjects felt disconnected 
                from their daily lives. Traditional teaching methods, while well-intentioned, 
                weren't reaching students in meaningful ways.
              </p>
              
              <p>
                Armed with a background in engineering and education, Prathyusha saw an opportunity 
                to bridge this gap through robotics. She realized that when students build robots 
                that move, sense, and react, they naturally encounter mathematical concepts like 
                geometry, algebra, and physics principles like motion, energy, and forces.
              </p>
              
              <p>
                In 2019, she founded Chetana STEM Labs in Hyderabad with a simple yet powerful 
                vision: to make every Math and Physics concept tangible through hands-on robotics. 
                What started as a small initiative has now transformed the learning experience 
                for thousands of students across India.
              </p>
            </div>
          </div>

          <Card className="bg-gradient-card shadow-medium">
            <CardContent className="p-8">
              <div className="space-y-6">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl font-bold text-primary-foreground">SP</span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground">S. Prathyusha</h3>
                  <p className="text-muted-foreground">Founder & Chief Education Officer</p>
                </div>

                <blockquote className="text-center italic text-muted-foreground">
                  "Every time I see a student's eyes light up when their robot completes a task, 
                  I'm reminded why I started this journey. That moment of understanding, of connection 
                  between theory and practice, is what drives our mission forward."
                </blockquote>

                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <GraduationCap className="h-5 w-5 text-primary" />
                    <span className="text-sm text-muted-foreground">M.Tech in Robotics & Education</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Award className="h-5 w-5 text-primary" />
                    <span className="text-sm text-muted-foreground">5+ Years in STEM Education</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Trophy className="h-5 w-5 text-primary" />
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
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Our Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do at Chetana STEM Labs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center shadow-soft hover:shadow-medium transition-all duration-300">
                <CardContent className="p-8 space-y-4">
                  <div className="w-16 h-16 bg-accent rounded-lg flex items-center justify-center mx-auto">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Our Journey</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Key milestones in our mission to transform STEM education
            </p>
          </div>

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center">
                    <span className="text-primary-foreground font-bold">{milestone.year}</span>
                  </div>
                </div>
                <div className="flex-grow">
                  <Card className="shadow-soft">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-foreground mb-2">{milestone.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{milestone.description}</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Impact Stats */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Our Impact</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Numbers that reflect the change we're making in STEM education
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {impactStats.map((stat, index) => (
              <Card key={index} className="text-center shadow-soft">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mx-auto text-primary">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-foreground">{stat.number}</div>
                  <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-gradient-primary rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-primary-foreground mb-4">
            Join Our Mission
          </h2>
          <p className="text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Be part of the educational transformation. Whether you're a school, teacher, parent, 
            or student, there's a place for you in our journey to make STEM education engaging and accessible.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/programs">
                Explore Programs <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
              asChild
            >
              <Link to="/contact">Get In Touch</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default About;